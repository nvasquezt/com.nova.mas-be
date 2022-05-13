import { Router } from "express";
import {
  handlerAllTrackingLogs,
  handlerOneTrackingLog,
  handlerCreateTrackLog,
  handlerUpdateTrackLog,
  handlerDeleteTrackLog,
} from "./trackingLogs.controller";


const router = Router();

  router.get("/", handlerAllTrackingLogs);
  router.get("/:id", handlerOneTrackingLog);
  router.post("/", handlerCreateTrackLog);
  router.patch("/:id", handlerUpdateTrackLog);
  router.delete("/:id", handlerDeleteTrackLog);


export default router;
