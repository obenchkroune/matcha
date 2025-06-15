import { z } from 'zod/v4';

const schema = z.object({
	BACKEND_PORT: z.string().min(1).transform(Number).refine(Number.isInteger, {
		error: 'The BACKEND_PORT should be a number',
	}),
	JWT_SECRET: z.string().min(1), // TODO: make sure the secret is strong
	POSTGRES_HOST: z.string().min(1),
	POSTGRES_PORT: z.string().min(1).transform(Number).refine(Number.isInteger, {
		error: 'The POSTGRES_PORT should be a number',
	}),
	POSTGRES_USER: z.string().min(1),
	POSTGRES_PASSWORD: z.string().min(1),
	POSTGRES_DB: z.string().min(1),
});

export default schema.parse(process.env);
