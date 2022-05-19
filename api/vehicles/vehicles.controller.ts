import { UploadApiResponse } from 'cloudinary';
import { Request, Response } from 'express';
import uploadImage from '../../utils/Cloudinary';
import {
  getAllVehicles,
  getOneVehicle,
  addNewVehicle,
  updateVehicle,
  deleteVehicle,
} from './vehicles.service';

export async function handlerAllVehicles(req: Request, res: Response) {
  try {
    const vehicles = await getAllVehicles();
    if (!vehicles) {
      res.status(404).json({ message: 'No vehicles found' });
    } else {
      res.status(200).json(vehicles);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while getting vehicles', error });
  }
}

export async function handlerOneVehicle(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    const vehicle = await getOneVehicle(id);
    if (!vehicle) {
      res.status(404).json({ message: 'No vehicle found' });
    } else {
      res.status(200).json(vehicle);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while getting vehicle', error });
  }
}

export async function handlerRegisterVehicle(req: Request, res: Response) {
  const dataVehicle = req.body;
  try {
    const addVehicle = await addNewVehicle(dataVehicle);
    if (!addVehicle) {
      res.status(404).json({ message: 'Vehicle was not added' });
    } else {
      res.status(200).json(addVehicle);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while adding vehicle', error });
  }
}

export async function handlerUpdateVehicle(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const vehicle = req.body;
  try {
    const patchVehicle = await updateVehicle(id, vehicle);
    if (!patchVehicle) {
      res.status(404).json({ message: 'Vehicle was not updated' });
    } else {
      res.status(200).json(patchVehicle);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while updating vehicle', error });
  }
}

export async function handlerDeleteVehicle(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    const deletedVehicle = await deleteVehicle(id);
    if (!deletedVehicle) {
      res.status(404).json({ message: 'Vehicle was not deleted' });
    } else {
      res.status(200).json(deletedVehicle);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while deleting vehicle', error });
  }
}

export async function handlerPostImage(req: Request, res: Response) {
  const id = parseInt(req.params.id);
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
      const picVehicle = result.url;
      req.body.picVehicle = picVehicle;
      const patchVehicle = await updateVehicle(id, req.body);
    if (!patchVehicle) {
      res.status(404).json({ message: 'Image Vehicle was not updated' });
    } else {
      res.status(200).json(patchVehicle);
    }
  }
} catch (error) {
  res.status(500).json({ message: 'Error while updating image vehicle', error });
}
}
