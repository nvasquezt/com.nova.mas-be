import { Router } from 'express';
import { isAuth, hasRole } from '../../auth/auth.service';
import multer from 'multer';
import {
  handlerAllUsers,
  handlerOneUser,
  handlerRegisterUser,
  handlerUpdateUser,
  handlerDeleteUser,
  handlerPostImage
} from './users.controller';

const router = Router();
const upload = multer({ dest: './temp' });

router.get('/', isAuth(), hasRole(['admin', 'user']), handlerAllUsers);
router.get('/:id', isAuth(), hasRole(['admin', 'user']), handlerOneUser);
router.post('/', isAuth(), hasRole(['admin', 'user']), handlerRegisterUser);
router.patch('/:id', isAuth(), hasRole(['admin', 'user']), handlerUpdateUser);
router.patch('/uploadimage/:id', upload.single('file'), isAuth(), hasRole(['admin', 'user']), handlerPostImage);
router.delete('/:id', isAuth(), hasRole(['admin']), handlerDeleteUser);

export default router;
