import { NextRequest, NextResponse } from 'next/server';

// 模拟圈子详情数据
const circles = [
  {
    id: '1001',
    name: '科技圈',
    description: '这是一个关于科技话题的圈子，讨论最新科技动态、产品评测、技术分享等内容。',
    avatarUrl: '/circle-placeholder.png',
    coverUrl: '/circle-cover-placeholder.jpg',
    memberCount: 1280,
    postCount: 3456,
    isJoined: true,
    creatorId: '101',
    creatorNickname: '圈主昵称',
    createdAt: '2024-01-15T08:00:00Z'
  },
  {
    id: '1002',
    name: '自然',
    description: '关注自然、环保、野生动植物等话题的圈子。',
    avatarUrl: '/circle-placeholder.png',
    coverUrl: '/circle-cover-placeholder.jpg',
    memberCount: 856,
    postCount: 2134,
    isJoined: false,
    creatorId: '102',
    creatorNickname: '自然爱好者',
    createdAt: '2024-02-20T10:30:00Z'
  },
  {
    id: '1003',
    name: '读书会',
    description: '分享阅读心得，讨论好书，组织线上线下读书活动。',
    avatarUrl: '/circle-placeholder.png',
    coverUrl: '/circle-cover-placeholder.jpg',
    memberCount: 1024,
    postCount: 2789,
    isJoined: true,
    creatorId: '103',
    creatorNickname: '书虫',
    createdAt: '2024-03-05T14:15:00Z'
  }
];

// 模拟圈子成员数据
const circleMembers = {
  '1001': [
    {
      id: '101',
      nickname: '圈主昵称',
      avatarUrl: '/avatar-placeholder.png',
      isCreator: true,
      joinedAt: '2024-01-15T08:00:00Z'
    },
    {
      id: '102',
      nickname: '成员1',
      avatarUrl: '/avatar-placeholder.png',
      isCreator: false,
      joinedAt: '2024-01-16T10:30:00Z'
    },
    {
      id: '103',
      nickname: '成员2',
      avatarUrl: '/avatar-placeholder.png',
      isCreator: false,
      joinedAt: '2024-01-17T14:45:00Z'
    },
    {
      id: '104',
      nickname: '成员3',
      avatarUrl: '/avatar-placeholder.png',
      isCreator: false,
      joinedAt: '2024-01-18T09:20:00Z'
    }
  ],
  '1002': [
    {
      id: '102',
      nickname: '自然爱好者',
      avatarUrl: '/avatar-placeholder.png',
      isCreator: true,
      joinedAt: '2024-02-20T10:30:00Z'
    },
    {
      id: '105',
      nickname: '成员4',
      avatarUrl: '/avatar-placeholder.png',
      isCreator: false,
      joinedAt: '2024-02-21T11:15:00Z'
    }
  ],
  '1003': [
    {
      id: '103',
      nickname: '书虫',
      avatarUrl: '/avatar-placeholder.png',
      isCreator: true,
      joinedAt: '2024-03-05T14:15:00Z'
    },
    {
      id: '101',
      nickname: '用户昵称',
      avatarUrl: '/avatar-placeholder.png',
      isCreator: false,
      joinedAt: '2024-03-06T16:40:00Z'
    },
    {
      id: '106',
      nickname: '成员5',
      avatarUrl: '/avatar-placeholder.png',
      isCreator: false,
      joinedAt: '2024-03-07T08:50:00Z'
    }
  ]
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const circleId = params.id;
  
  // 查找圈子
  const circle = circles.find(c => c.id === circleId);
  
  if (!circle) {
    return NextResponse.json(
      { message: '圈子不存在' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({
    code: 200,
    message: 'success',
    data: circle
  });
}

// 加入或退出圈子
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const circleId = params.id;
  
  try {
    const body = await request.json();
    const { action } = body; // 'join' 或 'leave'
    
    if (!action || (action !== 'join' && action !== 'leave')) {
      return NextResponse.json(
        { message: '无效的操作' },
        { status: 400 }
      );
    }
    
    // 查找圈子
    const circle = circles.find(c => c.id === circleId);
    
    if (!circle) {
      return NextResponse.json(
        { message: '圈子不存在' },
        { status: 404 }
      );
    }
    
    // 模拟加入或退出操作
    const updatedCircle = { ...circle };
    
    if (action === 'join') {
      updatedCircle.isJoined = true;
      updatedCircle.memberCount += 1;
    } else {
      updatedCircle.isJoined = false;
      updatedCircle.memberCount -= 1;
    }
    
    return NextResponse.json({
      code: 200,
      message: 'success',
      data: updatedCircle
    });
  } catch (error) {
    return NextResponse.json(
      { message: '操作失败' },
      { status: 500 }
    );
  }
}
