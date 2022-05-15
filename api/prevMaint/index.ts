import { Router } from 'express';
import { isAuth, hasRole } from '../../auth/auth.service';
import {
  handlerAllPrevMaint,
  handlerOnePrevMaint,
  handlerCreatePrevMaint,
  handlerUpdatePrevMaint,
  handlerDeletePrevMaint,
} from './prevMaint.controller';

const router = Router();

router.get('/', isAuth(), hasRole(['admin', 'user']), handlerAllPrevMaint);
router.get('/:id', isAuth(), hasRole(['admin', 'user']), handlerOnePrevMaint);
router.post('/', isAuth(), hasRole(['admin', 'user']), handlerCreatePrevMaint);
router.patch(
  '/:id',
  isAuth(),
  hasRole(['admin', 'user']),
  handlerUpdatePrevMaint
);
router.delete(
  '/:id',
  isAuth(),
  hasRole(['admin', 'user']),
  handlerDeletePrevMaint
);

export default router;
