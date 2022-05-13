import { Request, Response } from "express";
import {
  getAllPrevMaint,
  getOnePrevMaint,
  addNewPrevMaint,
  updatePrevMaint,
  deletePrevMaint,
} from "./prevMaint.service";

  export async function handlerAllPrevMaint(req: Request, res: Response) {
    try {
      const prevMaint = await getAllPrevMaint();
      if (!prevMaint) {
        res.status(404).json({ message: 'No prevMaint found' });
      } else {
        res.status(200).json(prevMaint);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error while getting prevMaint', error });
    }
  }

  export async function handlerOnePrevMaint(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const prevMaint = await getOnePrevMaint(id);
      if (!prevMaint) {
        res.status(404).json({ message: 'No prevMaint found' });
      } else {
        res.status(200).json(prevMaint);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error while getting prevMaint', error });
    }
  }

  export async function handlerCreatePrevMaint(req: Request, res: Response) {
    const dataPrevMaint = req.body;
    try {
      const addPrevMaint = await addNewPrevMaint(dataPrevMaint);
      if (!addPrevMaint) {
        res.status(404).json({ message: 'PrevMaint was not added' });
      } else {
        res.status(200).json(addPrevMaint);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error while adding PrevMaint', error });
    }
  }

  export async function handlerUpdatePrevMaint(req: Request, res: Response) {
    const id = Number(req.params.id);
    const prevMaint = req.body;
    try {
      const patchPrevMaint = await updatePrevMaint(id, prevMaint);
      if (!patchPrevMaint) {
        res.status(404).json({ message: 'PrevMaint was not updated' });
      } else {
        res.status(200).json(patchPrevMaint);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error while updating PrevMaint', error });
    }
  }

  export async function handlerDeletePrevMaint(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const deletedPrevMaint = await deletePrevMaint(id);
      if (!deletedPrevMaint) {
        res.status(404).json({ message: 'PrevMaint was not deleted' });
      } else {
        res.status(200).json(deletedPrevMaint);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error while deleting PrevMaint', error });
    }
  }
