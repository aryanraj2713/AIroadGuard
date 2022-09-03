import { NextFunction, Router, Request, Response } from "express";
import LoggerInstance from "../../loaders/logger";
import { accident } from "./controller";

const accidentRouter = Router();

accidentRouter.post("/", handleAccident);

async function handleAccident(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await accident();
  } catch (error) {
    LoggerInstance.error(error);
    next(error);
  }
}

export default accidentRouter;
