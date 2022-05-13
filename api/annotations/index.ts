import { Router } from 'express';
import {
  handlerAllAnnotations,
  handlerAnnotationbyUser,
  handlerCreateAnnotation,
  handlerUpdateAnnotation,
  handlerDeleteAnnotation,
} from './annotations.controller';

export const router = Router();

router.get('/', handlerAllAnnotations);
router.get('/:userId', handlerAnnotationbyUser);
router.post('/', handlerCreateAnnotation);
router.patch('/:id', handlerUpdateAnnotation);
router.delete('/:id', handlerDeleteAnnotation);

export default router;
