import mongoose, { Schema } from 'mongoose';

// 用户模型
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nickname: { type: String, required: true },
  avatarUrl: { type: String, default: '/avatar-placeholder.png' },
  bio: { type: String, default: '' },
  followingCount: { type: Number, default: 0 },
  followerCount: { type: Number, default: 0 },
  postCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// 关注关系模型
const followSchema = new Schema({
  followerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  followingId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

// 创建复合索引确保唯一关注关系
followSchema.index({ followerId: 1, followingId: 1 }, { unique: true });

// 导出模型
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Follow = mongoose.models.Follow || mongoose.model('Follow', followSchema);
