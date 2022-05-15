import { Router } from 'express';
import { isAuth, hasRole } from '../../auth/auth.service';
import {
  handlerAllUsers,
  handlerOneUser,
  handlerRegisterUser,
  handlerUpdateUser,
  handlerDeleteUser,
} from './users.controller';

const router = Router();

router.get('/', isAuth(), hasRole(['admin', 'user']), handlerAllUsers);
router.get('/:id', isAuth(), hasRole(['admin', 'user']), handlerOneUser);
router.post('/', isAuth(), hasRole(['admin', 'user']), handlerRegisterUser);
router.patch('/:id', isAuth(), hasRole(['admin', 'user']), handlerUpdateUser);
router.delete('/:id', isAuth(), hasRole(['admin']), handlerDeleteUser);

export default router;
