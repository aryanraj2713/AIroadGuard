import { NextFunction, Router, Request, Response } from "express";
import LoggerInstance from "../../loaders/logger";
import { accident, getAccident } from "./controller";

const accidentRouter = Router();

accidentRouter.post("/add", handleAccident);
accidentRouter.get("/getAccident", handleGetAccident);

async function handleAccident(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await accident(req.body.cameraID, req.body.imageB64);
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

async function handleGetAccident(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await getAccident(req.headers.cameraID);
    if (result.success) {
      res.status(result.status).json({ data: result.data, success: true });
    }
  } catch (error) {
    LoggerInstance.error(error);
    next(error);
  }
}

export default accidentRouter;
