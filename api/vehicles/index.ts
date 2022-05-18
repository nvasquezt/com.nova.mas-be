import { Router } from 'express';
import { isAuth, hasRole } from '../../auth/auth.service';
import {
  handlerAllVehicles,
  handlerOneVehicle,
  handlerRegisterVehicle,
  handlerUpdateVehicle,
  handlerDeleteVehicle,
} from './vehicles.controller';

const router = Router();

router.get('/', isAuth(), hasRole(['admin', 'user']), handlerAllVehicles);
router.get('/:id', isAuth(), hasRole(['admin', 'user']), handlerOneVehicle);
router.post('/', isAuth(), hasRole(['admin', 'user']), handlerRegisterVehicle);
router.patch(
  '/:id',
  isAuth(),
  hasRole(['admin', 'user']),
  handlerUpdateVehicle
);
router.delete(
  '/:id',
  isAuth(),
  hasRole(['admin', 'user']),
  handlerDeleteVehicle
);

export default router;
