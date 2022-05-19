import { Router } from 'express';
import { isAuth, hasRole } from '../../auth/auth.service';
import multer from 'multer';
import {
  handlerAllVehicles,
  handlerOneVehicle,
  handlerRegisterVehicle,
  handlerUpdateVehicle,
  handlerDeleteVehicle,
  handlerPostImage
} from './vehicles.controller';

const router = Router();
const upload = multer({ dest: './temp' });

router.get('/', isAuth(), hasRole(['admin', 'user']), handlerAllVehicles);
router.get('/:id', isAuth(), hasRole(['admin', 'user']), handlerOneVehicle);
router.patch('/uploadimage/:id', upload.single('file'), isAuth(), hasRole(['admin', 'user']), handlerPostImage);
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
