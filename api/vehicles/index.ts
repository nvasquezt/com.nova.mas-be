import { Router } from "express";
 import {
   handlerAllVehicles,
   handlerOneVehicle,
   handlerRegisterVehicle,
   handlerUpdateVehicle,
   handlerDeleteVehicle
  } from "./vehicles.controller";

const router = Router();


router.get("/", handlerAllVehicles);
router.get("/:id", handlerOneVehicle);
router.post("/", handlerRegisterVehicle);
router.patch("/:id", handlerUpdateVehicle);
router.delete("/:id", handlerDeleteVehicle);



export default router;
