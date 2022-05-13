import { Request, Response } from 'express';
import {
  getAllDates,
  getOneDateByVehicle,
  createDate,
  updateDate,
  deleteDate,
} from './dates.service';

export const handlerDates = async (req: Request, res: Response) => {
  try {
    const dates = await getAllDates();
    if (!dates) {
      res.status(404).json({ message: 'No dates found' });
    } else {
      res.status(200).json(dates);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while getting dates', error });
  }
};

export const handlerOneDateByVehicle = async (req: Request, res: Response) => {
  const id = Number(req.params.vehicleId);
  try {
    const date = await getOneDateByVehicle(id);
    if (!date) {
      res.status(404).json({ message: 'No date found' });
    } else {
      res.status(200).json(date);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while getting date', error });
  }
};

export const handlerCreateDate = async (req: Request, res: Response) => {
  const dataDate = req.body;
  try {
    const date = await createDate(dataDate);
    if (!date) {
      res.status(404).json({ message: 'Date was not added' });
    } else {
      res.status(200).json(date);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while adding date', error });
  }
};

export const handlerUpdateDate = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const date = req.body;
  try {
    const patchDate = await updateDate(id, date);
    if (!patchDate) {
      res.status(404).json({ message: 'Date was not updated' });
    } else {
      res.status(200).json(patchDate);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while updating date', error });
  }
};

export const handlerDeleteDate = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const deletedDate = await deleteDate(id);
    if (!deletedDate) {
      res.status(404).json({ message: 'Date was not deleted' });
    } else {
      res.status(200).json(deletedDate);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while deleting date', error });
  }
};
