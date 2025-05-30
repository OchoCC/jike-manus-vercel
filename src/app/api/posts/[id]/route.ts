import { NextRequest, NextResponse } from 'next/server';

// 模拟帖子数据
const posts = [
  {
    id: '1',
    userId: '101',
    user: {
      id: '101',
      nickname: '用户昵称',
      avatarUrl: '/avatar-placeholder.png'
    },
    contentType: 'text',
    textContent: '这是一条测试动态，展示即刻的信息流样式。这是一条测试动态，展示即刻的信息流样式。',
    mediaUrls: ['/placeholder-image.jpg', '/placeholder-image.jpg', '/placeholder-image.jpg'],
    circleId: '1001',
    circleName: '科技圈',
    tags: ['测试', '即刻'],
    commentCount: 18,
    likeCount: 42,
    repostCount: 5,
    isLiked: false,
    createdAt: '2025-05-29T10:00:00Z'
  },
  {
    id: '2',
    userId: '102',
    user: {
      id: '102',
      nickname: '另一个用户',
      avatarUrl: '/avatar-placeholder.png'
    },
    contentType: 'link',
    textContent: '分享一个有趣的发现，今天在公园看到了非常罕见的鸟类，大家有兴趣的可以去看看。',
    linkCard: {
      title: '城市公园发现罕见鸟类，专家：这可能是...',
      description: '近日，有市民在城市中心公园发现了一种罕见的鸟类，经专家鉴定，这可能是...',
      imageUrl: '/placeholder-image.jpg',
      url: 'https://example.com/news',
      domain: 'example.com'
    },
    circleId: '1002',
    circleName: '自然',
    commentCount: 24,
    likeCount: 56,
    repostCount: 8,
    isLiked: true,
    createdAt: '2025-05-28T15:30:00Z'
  }
];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = params.id;
  
  // 查找帖子
  const post = posts.find(p => p.id === postId);
  
  if (!post) {
    return NextResponse.json(
      { message: '内容不存在' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({
    code: 200,
    message: 'success',
    data: post
  });
}
