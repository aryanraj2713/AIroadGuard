import { NextFunction, Router, Request, Response } from "express";
import LoggerInstance from "../../loaders/logger";
import { accident } from "./controller";

const accidentRouter = Router();

accidentRouter.post("/add", handleAccident);

async function handleAccident(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await accident(req.body.cameraID, req.body.imageArray);
    if (result.success) {
      res
        .status(result.status)
        .json({ success: true, message: result.message });
    }
  } catch (error) {
    LoggerInstance.error(error);
    next(error);
  }
}

export default accidentRouter;
