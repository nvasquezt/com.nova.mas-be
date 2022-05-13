import { Request, Response } from "express";
import {
  getAllTrackingLogs,
  getOneTrackingLog,
  addNewTrackingLog,
  updateTrackingLog,
  deleteTrackingLog,
} from "./trackingLogs.service";

export async function handlerAllTrackingLogs(req: Request, res: Response) {
  try {
    const trackingLogs = await getAllTrackingLogs();
    if (!trackingLogs) {
      res.status(404).json({ message: 'No trackingLogs found' });
    }
    res.status(200).json(trackingLogs);
  } catch (error) {
    res.status(500).json({ message: 'Error while getting trackingLogs', error });
  }
}

export async function handlerOneTrackingLog(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    const trackingLog = await getOneTrackingLog(id);
    if (!trackingLog) {
      res.status(404).json({ message: 'No trackingLog found' });
    } else {
      res.status(200).json(trackingLog);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while getting trackingLog', error });
  }
}

export async function handlerCreateTrackLog(req: Request, res: Response) {
  const dataTrackingLog = req.body;
  try {
    const addTrackingLog = await addNewTrackingLog(dataTrackingLog);
    if (!addTrackingLog) {
      res.status(404).json({ message: 'TrackingLog was not added' });
    } else {
      res.status(200).json(addTrackingLog);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while adding TrackingLog', error });
  }
}

export async function handlerUpdateTrackLog(req: Request, res: Response) {
  const id = Number(req.params.id);
  const trackingLog = req.body;
  try {
    const patchTrackingLog = await updateTrackingLog(id, trackingLog);
    if (!patchTrackingLog) {
      res.status(404).json({ message: 'TrackingLog was not updated' });
    } else {
      res.status(200).json(patchTrackingLog);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while updating TrackingLog', error });
  }
}

export async function handlerDeleteTrackLog(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    const deletedTrackingLog = await deleteTrackingLog(id);
    if (!deletedTrackingLog) {
      res.status(404).json({ message: 'TrackingLog was not deleted' });
    } else {
      res.status(200).json(deletedTrackingLog);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while deleting TrackingLog', error });
  }
}
