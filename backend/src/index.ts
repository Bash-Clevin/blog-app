import express, { json } from 'express';

import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from './routes/auth';
import userRoute from './routes/users';
import postRoute from './routes/posts';
import commentRoute from './routes/comments';
import env from './lib/env';
import connectDB from './lib/connectDB';

const app = express();
app.use(cors({ origin: env.client_uri, credentials: true }));
app.use(json());
app.use(cookieParser());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);

app.listen(env.port, async () => {
  await connectDB();
  console.log(`app running on port ${env.port}`);
});
