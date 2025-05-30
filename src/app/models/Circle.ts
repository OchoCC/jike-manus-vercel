import mongoose, { Schema } from 'mongoose';

// 圈子模型
const circleSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  avatarUrl: { type: String, default: '/circle-placeholder.png' },
  coverUrl: { type: String, default: '/circle-cover-placeholder.jpg' },
  creatorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  memberCount: { type: Number, default: 1 }, // 默认包含创建者
  postCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// 圈子成员模型
const circleMemberSchema = new Schema({
  circleId: { type: Schema.Types.ObjectId, ref: 'Circle', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isCreator: { type: Boolean, default: false },
  joinedAt: { type: Date, default: Date.now }
});

// 创建复合索引确保用户在一个圈子中只有一条记录
circleMemberSchema.index({ circleId: 1, userId: 1 }, { unique: true });

// 导出模型
export const Circle = mongoose.models.Circle || mongoose.model('Circle', circleSchema);
export const CircleMember = mongoose.models.CircleMember || mongoose.model('CircleMember', circleMemberSchema);
