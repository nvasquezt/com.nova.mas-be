import { Router } from 'express';
import vehicles from '../api/vehicles';
import users from '../api/users';

function routes(app: Router): void {
  app.use('/api/vehicles', vehicles);
  app.use('/api/users', users);
}

export default routes;
