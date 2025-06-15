import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import apiRouter from './routes';
import JWTErrorMiddleware from './middlewares/jwt-error.middleware';
import JWTMiddleware from './middlewares/jwt.middleware';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(JWTMiddleware);
app.use(JWTErrorMiddleware);

app.use('/api', apiRouter);

export default app;
