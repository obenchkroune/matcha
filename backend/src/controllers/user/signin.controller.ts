import { RequestHandler } from 'express';
import { signinSchema } from 'src/schema/signin.schema';
import { z, ZodError } from 'zod/v4';

export const signin: RequestHandler = async (req, res) => {
  try {
    const data = await signinSchema.parseAsync(req.body);
    res.json(data);
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      res.json(z.flattenError(error));
    } else {
      res.json({
        code: 500,
        message: 'server error',
      });
    }
  }
};
