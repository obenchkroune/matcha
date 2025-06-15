import { runMigrations } from './db/migrate';

import app from './app';
import env from './config/env';

runMigrations()
	.then(() => {
		app.listen(env.BACKEND_PORT, (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(`Listening on port: ${env.BACKEND_PORT}`);
		});
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
