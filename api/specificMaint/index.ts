import { Router } from 'express';
import { isAuth, hasRole} from '../../auth/auth.service'
import {
  handlerAllSpecificMaint,
  handlerOneSpecificMaint,
  handlerCreateSpecificMaint,
  handlerUpdateSpecificMaint,
  handlerDeleteSpecificMaint,
} from './specificMaint.controller';

const router = Router();

router.get('/',isAuth(), hasRole(['admin','user']), handlerAllSpecificMaint);
router.get('/:id',isAuth(), hasRole(['admin','user']), handlerOneSpecificMaint);
router.post('/',isAuth(), hasRole(['admin','user']), handlerCreateSpecificMaint);
router.patch('/:id',isAuth(), hasRole(['admin','user']), handlerUpdateSpecificMaint);
router.delete('/:id',isAuth(), hasRole(['admin','user']), handlerDeleteSpecificMaint);

export default router;
