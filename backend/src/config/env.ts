import { z } from 'zod/v4';

const schema = z.object({
  BACKEND_PORT: z.string().min(1),
  JWT_SECRET: z.string().min(1), // TODO: make sure the secret is strong
});

export default schema.parse(process.env);
