import { Router } from 'express';
import accidentRouter from './accident/router';

export default (): Router => {
  const app = Router();
  app.use('/accident', accidentRouter);

  return app;
};