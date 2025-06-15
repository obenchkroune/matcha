import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { sql } from './index';

const migrationsDir = path.join(__dirname, 'migrations');

export async function runMigrations() {
	try {
		const files = (await readdir(migrationsDir)).sort();

		for (const file of files) {
			const module = await import(path.join(migrationsDir, file));
			console.log(`Running migration: ${file}`);
			await module.default();
		}

		console.log('All migrations ran successfully.');
	} catch (error) {
		await sql.end();
		console.error('Failed to run migrations: ', error);
		process.exit(1);
	}
}
