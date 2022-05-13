import { Router } from 'express';
import {
  handlerAllPrevMaint,
  handlerOnePrevMaint,
  handlerCreatePrevMaint,
  handlerUpdatePrevMaint,
  handlerDeletePrevMaint,
} from './prevMaint.controller';

const router = Router();

router.get('/', handlerAllPrevMaint);
router.get('/:id', handlerOnePrevMaint);
router.post('/', handlerCreatePrevMaint);
router.patch('/:id', handlerUpdatePrevMaint);
router.delete('/:id', handlerDeletePrevMaint);

export default router;
