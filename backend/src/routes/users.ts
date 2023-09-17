import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';

const router = express.Router();

// update User
router.put('/:id', async (req: Request, res: Response) => {
  let { password } = req.body;

  if (!password) {
    return res.status(400).json({
      status: 'failed',
      message: 'Please provide a password',
    });
  }
  try {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hashSync(password, salt);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
