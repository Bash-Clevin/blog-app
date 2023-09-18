import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import verifyToken from '../middleware/verifyToken';

const router = express.Router();

// update User
router.put('/:id', verifyToken, async (req: Request, res: Response) => {
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

// delete user
router.delete('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('user has been deleted');
  } catch (error) {
    res.status(500).json(error);
  }
});

// get user
router.get('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json('user not found');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
