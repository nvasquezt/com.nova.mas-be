import { Request, Response } from 'express';
import getAllVehicles from './vehicles.service';

async function handlerAllVehicles(req: Request, res: Response) {
  try{
    const vehicles = await getAllVehicles();
    if (!vehicles) {
      res.status(404).json({ message: 'No vehicles found' });
    } else {
      res.status(200).json(vehicles);
    }
  } catch (error) {
    res.status(500).json	({ message: 'Error while getting vehicles' });
  }
}


export default handlerAllVehicles;
