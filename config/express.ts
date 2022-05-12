import express, { Express } from 'express';

function configExpress(app: Express) {
  app.use(express.json());
}

export default configExpress;
