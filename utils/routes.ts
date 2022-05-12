import { Router } from 'express';
import vehicles from '../api/vehicles';


function routes(app: Router): void {
  app.use('/api/vehicles', vehicles);
}


export default routes;
