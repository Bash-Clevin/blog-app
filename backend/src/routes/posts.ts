import express, { Request, Response } from 'express';
import { Post } from '../models/Post';
import verifyToken from '../middleware/verifyToken';

const router = express.Router();

// create post
router.post('/create', verifyToken, async (req: Request, res: Response) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update post
router.put('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete post
router.delete('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json('Post has been deleted');
  } catch (error) {
    res.status(500).json(error);
  }
});

// get posts
router.get('/', async (req: Request, res: Response) => {
  try {
    const post = await Post.find();
    if (post.length === 0) {
      return res.status(404).json('Posts not have been created');
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get user posts
router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const post = await Post.find({ userId: req.params.userId });
    if (post.length === 0) {
      return res.status(404).json('Post not found');
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// search posts
// router.get('/', async (req: Request, res: Response) => {
//   const query = req.query;
//   try {
//     const searchFilter = {
//       title: { $regex: query.search, $options: 'i' },
//     };

//     const posts = await Post.find(query.search ? searchFilter : null);
//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

export default router;
