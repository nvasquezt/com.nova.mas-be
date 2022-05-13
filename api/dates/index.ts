import { Router } from 'express';
import {
  handlerDates,
  handlerOneDateByVehicle,
  handlerCreateDate,
  handlerUpdateDate,
  handlerDeleteDate,
} from './dates.controller';

const router = Router();

router.get('/', handlerDates);
router.get('/:vehicleId', handlerOneDateByVehicle);
router.post('/', handlerCreateDate);
router.patch('/:id', handlerUpdateDate);
router.delete('/:id', handlerDeleteDate);

export default router;
