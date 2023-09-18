import mongoose, { Schema, Document } from 'mongoose';

export interface CommentModel extends Document {
  comment: string;
  author: string;
  postId: string;
  userId: string;
}

const CommentSchema: Schema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Comment = mongoose.model<CommentModel>('Comment', CommentSchema);
