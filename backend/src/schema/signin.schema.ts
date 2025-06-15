import z from 'zod/v4';

export const signinSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    error: 'Passwords do not match',
    path: ['password_confirmation'],
  });
