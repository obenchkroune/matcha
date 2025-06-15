import { NextFunction, Request, Response } from 'express';

export default (err: Error, _: Request, res: Response, next: NextFunction) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      code: 401,
      message: 'Unauthorized',
    });
  } else {
    next(err);
  }
};
