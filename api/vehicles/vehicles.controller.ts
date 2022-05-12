import { Request, Response } from 'express';
import {
  getAllVehicles,
  getOneVehicle,
  addNewVehicle,
  updateVehicle,
  deleteVehicle
 } from './vehicles.service';

export async function handlerAllVehicles(req: Request, res: Response) {
  try{
    const vehicles = await getAllVehicles();
    if (!vehicles) {
      res.status(404).json({ message: 'No vehicles found' });
    } else {
      res.status(200).json(vehicles);
    }
  } catch (error) {
    res.status(500).json	({ message: 'Error while getting vehicles', error });
  }
}

export async function handlerOneVehicle(req: Request, res: Response) {
  const id = Number(req.params.id);
  try{
    const vehicle = await getOneVehicle(id);
    if (!vehicle) {
      res.status(404).json({ message: 'No vehicle found' });
    } else {
      res.status(200).json(vehicle);
    }
  } catch (error) {
    res.status(500).json	({ message: 'Error while getting vehicle', error });
  }
}

export async function handlerRegisterVehicle(req: Request, res: Response) {
  try{
    const addVehicle = await addNewVehicle(req.body);
    if (!addVehicle) {
      res.status(404).json({ message: 'Vehicle was not added' });
    } else {
      res.status(200).json(addVehicle);
    }
  } catch (error) {
    res.status(500).json	({ message: 'Error while adding vehicle', error });
  }
}

export async function handlerUpdateVehicle(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const vehicle = req.body;
  try{
    const patchVehicle = await updateVehicle(id, vehicle);
    if (!patchVehicle) {
      res.status(404).json({ message: 'Vehicle was not updated' });
    }
    res.status(200).json(patchVehicle);
  } catch (error) {
    res.status(500).json	({ message: 'Error while updating vehicle', error });
  }
}

export async function handlerDeleteVehicle(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try{
    const deletedVehicle = await deleteVehicle(id);
    if (!deletedVehicle) {
      res.status(404).json({ message: 'Vehicle was not deleted' });
    }
    res.status(200).json(deletedVehicle);
  } catch (error) {
    res.status(500).json	({ message: 'Error while deleting vehicle', error });
  }
}
