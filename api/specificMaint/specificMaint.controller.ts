import { Request, Response } from 'express';
import {
  getAllSpecificMaint,
  getOneSpecificMaint,
  addNewSpecificMaint,
  updateSpecificMaint,
  deleteSpecificMaint,
} from './specificMaint.service';

export async function handlerAllSpecificMaint(req: Request, res: Response) {
  try {
    const specificMaint = await getAllSpecificMaint();
    if (!specificMaint) {
      res.status(404).json({ message: 'No specificMaint found' });
    } else {
      res.status(200).json(specificMaint);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error while getting specificMaint', error });
  }
}

export async function handlerOneSpecificMaint(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    const specificMaint = await getOneSpecificMaint(id);
    if (!specificMaint) {
      res.status(404).json({ message: 'No specificMaint found' });
    } else {
      res.status(200).json(specificMaint);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error while getting specificMaint', error });
  }
}

export async function handlerCreateSpecificMaint(req: Request, res: Response) {
  const dataSpecificMaint = req.body;
  try {
    const addSpecificMaint = await addNewSpecificMaint(dataSpecificMaint);
    if (!addSpecificMaint) {
      res.status(404).json({ message: 'SpecificMaint was not added' });
    } else {
      res.status(200).json(addSpecificMaint);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error while adding SpecificMaint', error });
  }
}

export async function handlerUpdateSpecificMaint(req: Request, res: Response) {
  const id = Number(req.params.id);
  const specificMaint = req.body;
  try {
    const patchSpecificMaint = await updateSpecificMaint(id, specificMaint);
    if (!patchSpecificMaint) {
      res.status(404).json({ message: 'SpecificMaint was not updated' });
    } else {
      res.status(200).json(patchSpecificMaint);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error while updating SpecificMaint', error });
  }
}

export async function handlerDeleteSpecificMaint(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    const deletedSpecificMaint = await deleteSpecificMaint(id);
    if (!deletedSpecificMaint) {
      res.status(404).json({ message: 'SpecificMaint was not deleted' });
    } else {
      res.status(200).json(deletedSpecificMaint);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error while deleting SpecificMaint', error });
  }
}
