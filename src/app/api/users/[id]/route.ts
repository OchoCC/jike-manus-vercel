import { NextRequest, NextResponse } from 'next/server';

// 模拟用户数据
const users = [
  {
    id: '101',
    username: 'user1',
    nickname: '用户昵称',
    avatarUrl: '/avatar-placeholder.png',
    bio: '这是个人简介，介绍一下自己。',
    followingCount: 128,
    followerCount: 256,
    postCount: 42
  },
  {
    id: '102',
    username: 'user2',
    nickname: '另一个用户',
    avatarUrl: '/avatar-placeholder.png',
    bio: '这是另一个用户的个人简介。',
    followingCount: 56,
    followerCount: 98,
    postCount: 24
  }
];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
  
  // 查找用户
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return NextResponse.json(
      { message: '用户不存在' },
      { status: 404 }
    );
  }
  
  // 模拟是否已关注
  const isFollowing = Math.random() > 0.5;
  
  return NextResponse.json({
    code: 200,
    message: 'success',
    data: {
      ...user,
      isFollowing,
      isMyself: userId === '101' // 假设当前登录用户ID为101
    }
  });
}
