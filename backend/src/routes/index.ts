import { Router } from 'express';
import userRoutes from './user.routes';

const apiRouter = Router();

apiRouter.use('/user', userRoutes);

export default apiRouter;
