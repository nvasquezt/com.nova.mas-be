import { Request, Response } from "express";
import {
  getAllFixMaint,
  getOneFixMaint,
  addNewFixMaint,
  updateFixMaint,
  deleteFixMaint,
} from "./fixMaint.service";

  export async function handlerAllFixMaint(req: Request, res: Response) {
    try {
      const fixMaint = await getAllFixMaint();
      if (!fixMaint) {
        res.status(404).json({ message: 'No fixMaint found' });
      } else {
        res.status(200).json(fixMaint);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error while getting fixMaint', error });
    }
  }

  export async function handlerOneFixMaint(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const fixMaint = await getOneFixMaint(id);
      if (!fixMaint) {
        res.status(404).json({ message: 'No fixMaint found' });
      } else {
        res.status(200).json(fixMaint);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error while getting fixMaint', error });
    }
  }

  export async function handlerCreateFixMaint(req: Request, res: Response) {
    const dataFixMaint = req.body;
    try {
      const addFixMaint = await addNewFixMaint(dataFixMaint);
      if (!addFixMaint) {
        res.status(404).json({ message: 'FixMaint was not added' });
      } else {
        res.status(200).json(addFixMaint);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error while adding FixMaint', error });
    }
  }

  export async function handlerUpdateFixMaint(req: Request, res: Response) {
    const id = Number(req.params.id);
    const fixMaint = req.body;
    try {
      const patchFixMaint = await updateFixMaint(id, fixMaint);
      if (!patchFixMaint) {
        res.status(404).json({ message: 'FixMaint was not updated' });
      } else {
        res.status(200).json(patchFixMaint);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error while updating FixMaint', error });
    }
  }

  export async function handlerDeleteFixMaint(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const deletedFixMaint = await deleteFixMaint(id);
      if (!deletedFixMaint) {
        res.status(404).json({ message: 'FixMaint was not deleted' });
      } else {
        res.status(200).json(deletedFixMaint);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error while deleting FixMaint', error });
    }
  }
