import { Router } from 'express';
import {
  handlerAllFixMaint,
  handlerOneFixMaint,
  handlerCreateFixMaint,
  handlerUpdateFixMaint,
  handlerDeleteFixMaint,
} from './fixMaint.controller';

const router = Router();

router.get('/', handlerAllFixMaint);
router.get('/:id', handlerOneFixMaint);
router.post('/', handlerCreateFixMaint);
router.patch('/:id', handlerUpdateFixMaint);
router.delete('/:id', handlerDeleteFixMaint);

export default router;
