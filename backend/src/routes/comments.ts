import express, { Request, Response } from 'express';
import { Comment } from '../models/Comment';
import verifyToken from '../middleware/verifyToken';

const router = express.Router();

// create Comment
router.post('/create', verifyToken, async (req: Request, res: Response) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update Comment
router.put('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete Comment
router.delete('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json('Comment has been deleted');
  } catch (error) {
    res.status(500).json(error);
  }
});

// get post Comments
router.get('/post/:postId', async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    if (comments.length === 0) {
      return res.status(404).json('Comment not found');
    }
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
