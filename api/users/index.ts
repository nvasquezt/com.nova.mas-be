import { Router } from 'express';
import {
  handlerAllUsers,
  handlerOneUser,
  handlerRegisterUser,
  handlerUpdateUser,
  handlerDeleteUser,
} from './users.controller';

const router = Router();

router.get('/', handlerAllUsers);
router.get('/:id', handlerOneUser);
router.post('/', handlerRegisterUser);
router.patch('/:id', handlerUpdateUser);
router.delete('/:id', handlerDeleteUser);

export default router;
