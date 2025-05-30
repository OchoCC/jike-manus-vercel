// 数据库初始化脚本
import mongoose from 'mongoose';
import dbConnect from '../lib/mongodb';
import { User } from '../models/User';
import { Post } from '../models/Post';
import { Circle, CircleMember } from '../models/Circle';

// 示例用户数据
const users = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: '$2b$10$XDrGJL.H9.WOaG3BDdxV3OiVGZWsjtiLqWHTd8BqJOXqjJ7.C0Lrq', // 加密后的 'password123'
    nickname: '用户昵称',
    avatarUrl: '/avatar-placeholder.png',
    bio: '这是个人简介，介绍一下自己。',
    followingCount: 0,
    followerCount: 0,
    postCount: 0
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: '$2b$10$XDrGJL.H9.WOaG3BDdxV3OiVGZWsjtiLqWHTd8BqJOXqjJ7.C0Lrq',
    nickname: '另一个用户',
    avatarUrl: '/avatar-placeholder.png',
    bio: '这是另一个用户的个人简介。',
    followingCount: 0,
    followerCount: 0,
    postCount: 0
  },
  {
    username: 'user3',
    email: 'user3@example.com',
    password: '$2b$10$XDrGJL.H9.WOaG3BDdxV3OiVGZWsjtiLqWHTd8BqJOXqjJ7.C0Lrq',
    nickname: '第三个用户',
    avatarUrl: '/avatar-placeholder.png',
    bio: '这是第三个用户的个人简介。',
    followingCount: 0,
    followerCount: 0,
    postCount: 0
  }
];

// 初始化数据库
async function initDatabase() {
  try {
    // 连接数据库
    await dbConnect();
    console.log('Connected to MongoDB');
    
    // 清空现有数据（仅在开发环境使用）
    if (process.env.NODE_ENV === 'development') {
      await User.deleteMany({});
      await Post.deleteMany({});
      await Circle.deleteMany({});
      await CircleMember.deleteMany({});
      console.log('Cleared existing data');
    }
    
    // 创建用户
    const createdUsers = await User.insertMany(users);
    console.log(`Created ${createdUsers.length} users`);
    
    // 创建圈子
    const circles = [
      {
        name: '科技圈',
        description: '这是一个关于科技话题的圈子，讨论最新科技动态、产品评测、技术分享等内容。',
        avatarUrl: '/circle-placeholder.png',
        coverUrl: '/circle-cover-placeholder.jpg',
        creatorId: createdUsers[0]._id,
        memberCount: 1,
        postCount: 0
      },
      {
        name: '自然',
        description: '关注自然、环保、野生动植物等话题的圈子。',
        avatarUrl: '/circle-placeholder.png',
        coverUrl: '/circle-cover-placeholder.jpg',
        creatorId: createdUsers[1]._id,
        memberCount: 1,
        postCount: 0
      },
      {
        name: '读书会',
        description: '分享阅读心得，讨论好书，组织线上线下读书活动。',
        avatarUrl: '/circle-placeholder.png',
        coverUrl: '/circle-cover-placeholder.jpg',
        creatorId: createdUsers[2]._id,
        memberCount: 1,
        postCount: 0
      }
    ];
    
    const createdCircles = await Circle.insertMany(circles);
    console.log(`Created ${createdCircles.length} circles`);
    
    // 创建圈子成员关系（创建者自动成为成员）
    const circleMembers = [
      {
        circleId: createdCircles[0]._id,
        userId: createdUsers[0]._id,
        isCreator: true
      },
      {
        circleId: createdCircles[1]._id,
        userId: createdUsers[1]._id,
        isCreator: true
      },
      {
        circleId: createdCircles[2]._id,
        userId: createdUsers[2]._id,
        isCreator: true
      }
    ];
    
    await CircleMember.insertMany(circleMembers);
    console.log('Created circle member relationships');
    
    // 创建帖子
    const posts = [
      {
        userId: createdUsers[0]._id,
        contentType: 'text',
        textContent: '这是一条测试动态，展示即刻的信息流样式。这是一条测试动态，展示即刻的信息流样式。',
        mediaUrls: ['/placeholder-image.jpg', '/placeholder-image.jpg', '/placeholder-image.jpg'],
        circleId: createdCircles[0]._id,
        tags: ['测试', '即刻'],
        commentCount: 0,
        likeCount: 0,
        repostCount: 0
      },
      {
        userId: createdUsers[1]._id,
        contentType: 'link',
        textContent: '分享一个有趣的发现，今天在公园看到了非常罕见的鸟类，大家有兴趣的可以去看看。',
        linkCard: {
          title: '城市公园发现罕见鸟类，专家：这可能是...',
          description: '近日，有市民在城市中心公园发现了一种罕见的鸟类，经专家鉴定，这可能是...',
          imageUrl: '/placeholder-image.jpg',
          url: 'https://example.com/news',
          domain: 'example.com'
        },
        circleId: createdCircles[1]._id,
        commentCount: 0,
        likeCount: 0,
        repostCount: 0
      }
    ];
    
    const createdPosts = await Post.insertMany(posts);
    console.log(`Created ${createdPosts.length} posts`);
    
    // 更新圈子的帖子数量
    await Circle.updateOne(
      { _id: createdCircles[0]._id },
      { $inc: { postCount: 1 } }
    );
    
    await Circle.updateOne(
      { _id: createdCircles[1]._id },
      { $inc: { postCount: 1 } }
    );
    
    // 更新用户的帖子数量
    await User.updateOne(
      { _id: createdUsers[0]._id },
      { $inc: { postCount: 1 } }
    );
    
    await User.updateOne(
      { _id: createdUsers[1]._id },
      { $inc: { postCount: 1 } }
    );
    
    console.log('Database initialization completed successfully');
    
  } catch (error) {
    console.error('Database initialization failed:', error);
  } finally {
    // 关闭数据库连接
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// 导出初始化函数
export default initDatabase;
