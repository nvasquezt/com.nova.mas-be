import { PrismaClient } from '@prisma/client';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());


app.get('/ambulances', async (req: Request, res: Response) => {
  const ambulances = await prisma.vehicles.findMany();
  res.json(ambulances);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Healthy Ambulances System');
});

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
