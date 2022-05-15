import { Router } from 'express';
import { isAuth, hasRole} from '../../auth/auth.service';
import {
  handlerAllFixMaint,
  handlerOneFixMaint,
  handlerCreateFixMaint,
  handlerUpdateFixMaint,
  handlerDeleteFixMaint,
} from './fixMaint.controller';

const router = Router();

router.get('/',isAuth(), hasRole(['admin','user']), handlerAllFixMaint);
router.get('/:id',isAuth(), hasRole(['admin','user']), handlerOneFixMaint);
router.post('/',isAuth(), hasRole(['admin','user']), handlerCreateFixMaint);
router.patch('/:id',isAuth(), hasRole(['admin','user']), handlerUpdateFixMaint);
router.delete('/:id',isAuth(), hasRole(['admin','user']), handlerDeleteFixMaint);

export default router;
