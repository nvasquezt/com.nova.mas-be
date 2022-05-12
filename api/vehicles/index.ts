import { Router } from "express";
 import handlerAllVehicles from "./vehicles.controller";

const router = Router();


router.get("/", handlerAllVehicles);


export default router;
