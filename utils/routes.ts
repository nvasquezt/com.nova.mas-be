import { Router } from 'express';
import vehicles from '../api/vehicles';
import users from '../api/users';
import trackingLogs from '../api/trackingLogs';
import specificMaint from '../api/specificMaint';
import prevMaintenances from '../api/prevMaint';

function routes(app: Router): void {
  app.use('/api/vehicles', vehicles);
  app.use('/api/users', users);
  app.use('/api/trackinglogs', trackingLogs);
  app.use('/api/specificmaint', specificMaint);
  app.use('/api/prevmaint', prevMaintenances);
}

export default routes;
