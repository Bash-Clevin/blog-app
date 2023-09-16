import express, { json } from 'express';

import 'dotenv/config';
import authRoute from './routes/auth';
import env from './lib/env';
import connectDB from './lib/connectDB';

const app = express();
app.use(json());
app.use('/api/auth', authRoute);

app.listen(env.port, async () => {
  await connectDB();
  console.log(`app running on port ${env.port}`);
});
