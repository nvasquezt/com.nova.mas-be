import bcrypt from 'bcrypt';
import { UploadApiResponse } from 'cloudinary';
import { Request, Response } from 'express';
import uploadImage from '../../utils/Cloudinary';
import {
  getAllUsers,
  getOneUser,
  addNewUser,
  updateUser,
  deleteUser,
} from './users.service';

export async function handlerAllUsers(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    if (!users) {
      res.status(404).json({ message: 'No users found' });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error while getting users', error });
  }
}

export async function handlerOneUser(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const user = await getOneUser(id);
    if (!user) {
      res.status(404).json({ message: 'No user found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while getting user', error });
  }
}

export async function handlerRegisterUser(req: Request, res: Response) {
  const dataUser = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(dataUser.password, salt);
  dataUser.password = hash;
  try {
    const addUser = await addNewUser(dataUser);
    if (!addUser) {
      res.status(404).json({ message: 'User was not added' });
    } else {
      res.status(200).json(addUser);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while adding user', error });
  }
}

export async function handlerUpdateUser(req: Request, res: Response) {
  const id: string = req.params.id;
  const user = req.body;
  try {
    const patchUser = await updateUser(id, user);
    if (!patchUser) {
      res.status(404).json({ message: 'User was not updated' });
    } else {
      res.status(200).json(patchUser);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while updating user', error });
  }
}

export async function handlerDeleteUser(req: Request, res: Response) {
  const id: string = req.params.id;
  try {
    const deletedUser = await deleteUser(id);
    if (!deletedUser) {
      res.status(404).json({ message: 'User was not deleted' });
    } else {
      res.status(200).json(deletedUser);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while deleting user', error });
  }
}

export async function handlerPostImage(req: Request, res: Response) {
  const id = req.params.id;
  const { file } = req;
  try {
    if(file){
        const size = file.size / 1024 / 1024;
        if (size > 5) {
          return res.status(400).json({
            message: 'Image size should be less than 5MB'
          });
        }
      const result  = await uploadImage(file.path) as UploadApiResponse;
      const picUser = result.url;
      req.body.picProfile = picUser;
      const patchUser = await updateUser(id, req.body);
    if (!patchUser) {
      res.status(404).json({ message: 'Image User was not updated' });
    } else {
      res.status(200).json(patchUser);
    }
  }
} catch (error) {
  res.status(500).json({ message: 'Error while updating image user', error });
}
}
