import app from './app';
import env from './config/env';

app.listen(env.BACKEND_PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening on port: ${env.BACKEND_PORT}`);
});
