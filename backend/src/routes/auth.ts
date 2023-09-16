import express, { Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import env from '../lib/env';

const router = express.Router();

// register user
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 'failed',
      message: 'Please provide email and password',
    });
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json('User not found');
    }

    const passwordMatch = await bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json('Wrong credentials');
    }

    const token = jwt.sign({ id: user._id }, env.secret, { expiresIn: '3h' });
    res.cookie('token', token).status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// logout
router.get('/logout', async (req: Request, res: Response) => {
  try {
    res
      .clearCookie('token', { sameSite: 'none', secure: true })
      .status(200)
      .json('User signed out');
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
