import mongoose, { Schema } from 'mongoose';

// 帖子模型
const postSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  contentType: { type: String, enum: ['text', 'link'], default: 'text' },
  textContent: { type: String, required: true },
  mediaUrls: [{ type: String }],
  linkCard: {
    title: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    url: { type: String },
    domain: { type: String }
  },
  circleId: { type: Schema.Types.ObjectId, ref: 'Circle' },
  tags: [{ type: String }],
  commentCount: { type: Number, default: 0 },
  likeCount: { type: Number, default: 0 },
  repostCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// 评论模型
const commentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  parentId: { type: Schema.Types.ObjectId, ref: 'Comment' }, // 如果是回复其他评论
  likeCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// 点赞模型
const likeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  targetType: { type: String, enum: ['post', 'comment'], required: true },
  targetId: { type: Schema.Types.ObjectId, required: true }, // 可以是帖子ID或评论ID
  createdAt: { type: Date, default: Date.now }
});

// 创建复合索引确保用户只能点赞一次
likeSchema.index({ userId: 1, targetType: 1, targetId: 1 }, { unique: true });

// 导出模型
export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);
export const Like = mongoose.models.Like || mongoose.model('Like', likeSchema);
