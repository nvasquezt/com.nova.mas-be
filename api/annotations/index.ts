import { Router } from 'express';
import { isAuth, hasRole} from '../../auth/auth.service'
import {
  handlerAllAnnotations,
  handlerAnnotationbyUser,
  handlerCreateAnnotation,
  handlerUpdateAnnotation,
  handlerDeleteAnnotation,
} from './annotations.controller';

export const router = Router();

router.get('/',isAuth(), hasRole(['admin','user']), handlerAllAnnotations);
router.get('/:userId',isAuth(), hasRole(['admin','user']), handlerAnnotationbyUser);
router.post('/',isAuth(), hasRole(['admin','user']), handlerCreateAnnotation);
router.patch('/:id',isAuth(), hasRole(['admin','user']), handlerUpdateAnnotation);
router.delete('/:id',isAuth(), hasRole(['admin','user']), handlerDeleteAnnotation);

export default router;
