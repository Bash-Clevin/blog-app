import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import env from '../lib/env';

const verifyToken: RequestHandler = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json('user not authenticated');
  }
  try {
    jwt.verify(token, env.secret);
    next();
  } catch (error) {
    return res.status(403).json('invalid token');
  }
};

export default verifyToken;
