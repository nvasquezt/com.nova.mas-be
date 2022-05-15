import { Router } from 'express';
import { isAuth, hasRole} from '../../auth/auth.service'
import {
  handlerAllTrackingLogs,
  handlerOneTrackingLog,
  handlerCreateTrackLog,
  handlerUpdateTrackLog,
  handlerDeleteTrackLog,
} from './trackingLogs.controller';

const router = Router();

router.get('/',isAuth(), hasRole(['admin','user']), handlerAllTrackingLogs);
router.get('/:id',isAuth(), hasRole(['admin','user']), handlerOneTrackingLog);
router.post('/',isAuth(), hasRole(['admin','user']), handlerCreateTrackLog);
router.patch('/:id',isAuth(), hasRole(['admin','user']), handlerUpdateTrackLog);
router.delete('/:id',isAuth(), hasRole(['admin','user']), handlerDeleteTrackLog);

export default router;
