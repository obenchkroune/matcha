import { hash } from 'argon2';
import { sql } from 'src/db';
import type { signinSchema } from 'src/schema/signin.schema';
import type z from 'zod/v4';

export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	created_at: string;
};

export const getAllUsers = async () => {
	const users = await sql<[User?]>`
		SELECT name, email, created_at FROM users
	`;
	return users;
};

export const getUserByEmail = async (email: string) => {
	const [user] = await sql<[User?]>`
		SELECT * FROM users WHERE email=${email};
	`;

	return user;
};

type NewUser = z.infer<typeof signinSchema>;

export const createUser = async (user: NewUser) => {
	user.password = await hash(user.password);
	const [newUser] = await sql<[User?]>`
		INSERT INTO users ${sql(user)}
		RETURNING id, name, email, created_at;
	`;

	return newUser;
};
