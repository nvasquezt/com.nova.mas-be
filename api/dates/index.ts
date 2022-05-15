import { Router } from 'express';
import { isAuth, hasRole } from '../../auth/auth.service';
import {
  handlerDates,
  handlerOneDateByVehicle,
  handlerCreateDate,
  handlerUpdateDate,
  handlerDeleteDate,
} from './dates.controller';

const router = Router();

router.get('/', isAuth(), hasRole(['admin', 'user']), handlerDates);
router.get(
  '/:vehicleId',
  isAuth(),
  hasRole(['admin', 'user']),
  handlerOneDateByVehicle
);
router.post('/', isAuth(), hasRole(['admin', 'user']), handlerCreateDate);
router.patch('/:id', isAuth(), hasRole(['admin', 'user']), handlerUpdateDate);
router.delete('/:id', isAuth(), hasRole(['admin', 'user']), handlerDeleteDate);

export default router;
