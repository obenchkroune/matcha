import type { RequestHandler } from 'express';
import { signinSchema } from 'src/schema/signin.schema';
import { createUser } from 'src/services/user.service';
import { ZodError, z } from 'zod/v4';

export const signup: RequestHandler = async (req, res) => {
	try {
		const data = await signinSchema.parseAsync(req.body);
		const user = await createUser(data);
		res.json({ user });
	} catch (error: unknown) {
		res.json(
			error instanceof ZodError
				? z.flattenError(error)
				: res.json({
						code: 500,
						message: 'server error',
					}),
		);
	}
};
