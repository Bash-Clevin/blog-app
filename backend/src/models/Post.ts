import mongoose, { Schema, Document } from 'mongoose';

export interface PostModel extends Document {
  title: string;
  desc: string;
  password: string;
  photo: string;
  username: string;
  userId: string;
  categories: Array<any>;
}

const PostSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    categories: {
      type: Array<String>,
      required: false,
    },
  },
  { timestamps: true },
);

export const Post = mongoose.model<PostModel>('Post', PostSchema);
