import {Document, model, Schema} from 'mongoose';
import {User} from '../../types/index.js';

export interface UserDocument extends User, Document {
  createdAt: Date,
  updatedAt: Date,
}

const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  password: String,
}, { timestamps: true });

export const UserModel = model<UserDocument>('User', userSchema);
