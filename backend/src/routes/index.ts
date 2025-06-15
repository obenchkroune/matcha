import { Router } from 'express';
import userRoutes from './auth.routes';

const apiRouter = Router();

apiRouter.use('/user', userRoutes);

export default apiRouter;
