import { Router } from "express";
import {
  handlerAllSpecificMaint,
  handlerOneSpecificMaint,
  handlerCreateSpecificMaint,
  handlerUpdateSpecificMaint,
  handlerDeleteSpecificMaint
} from "./specificMaint.controller";

const router = Router();

  router.get("/", handlerAllSpecificMaint);
  router.get("/:id", handlerOneSpecificMaint);
  router.post("/", handlerCreateSpecificMaint);
  router.patch("/:id", handlerUpdateSpecificMaint);
  router.delete("/:id", handlerDeleteSpecificMaint);

  export default router;
