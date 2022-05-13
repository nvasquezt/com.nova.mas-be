import { Request, Response } from 'express';
import {
  getAllAnnotations,
  getAnnotationByUser,
  createAnnotation,
  updateAnnotation,
  deleteAnnotation,
} from './annotations.service';

export const handlerAllAnnotations = async (req: Request, res: Response) => {
  try {
    const annotations = await getAllAnnotations();
    if (annotations) {
      res.status(200).json(annotations);
    } else {
      res.status(404).json({ message: 'No annotations found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while getting annotations', error });
  }
};

export const handlerAnnotationbyUser = async (req: Request, res: Response) => {
  try {
    const annotation = await getAnnotationByUser(req.params.userId);
    if (annotation) {
      res.status(200).json(annotation);
    } else {
      res.status(404).json({ message: 'No annotations found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error while getting annotation by user', error });
  }
};

export const handlerCreateAnnotation = async (req: Request, res: Response) => {
  const dataAnnotation = req.body;
  try {
    const annotation = await createAnnotation(dataAnnotation);
    if (annotation) {
      res.status(200).json(annotation);
    } else {
      res.status(404).json({ message: 'Annotation was not added' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while adding annotation', error });
  }
};

export const handlerUpdateAnnotation = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const annotation = req.body;
  try {
    const patchAnnotation = await updateAnnotation(id, annotation);
    if (patchAnnotation) {
      res.status(200).json(patchAnnotation);
    } else {
      res.status(404).json({ message: 'Annotation was not updated' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while updating annotation', error });
  }
};

export const handlerDeleteAnnotation = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const deletedAnnotation = await deleteAnnotation(id);
    if (deletedAnnotation) {
      res.status(200).json(deletedAnnotation);
    } else {
      res.status(404).json({ message: 'Annotation was not deleted' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while deleting annotation', error });
  }
};
