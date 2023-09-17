import express, { json } from 'express';

import 'dotenv/config';
import authRoute from './routes/auth';
import userRoute from './routes/users';
import postRoute from './routes/posts';
import env from './lib/env';
import connectDB from './lib/connectDB';

const app = express();
app.use(json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.listen(env.port, async () => {
  await connectDB();
  console.log(`app running on port ${env.port}`);
});
