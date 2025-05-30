import { NextRequest, NextResponse } from 'next/server';

// 模拟帖子列表数据
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
  },
  {
    id: '3',
    userId: '103',
    user: {
      id: '103',
      nickname: '第三个用户',
      avatarUrl: '/avatar-placeholder.png'
    },
    contentType: 'text',
    textContent: '今天天气真好，适合出去走走。分享一张今天拍的照片。',
    mediaUrls: ['/placeholder-image.jpg'],
    commentCount: 7,
    likeCount: 28,
    repostCount: 2,
    isLiked: false,
    createdAt: '2025-05-28T09:15:00Z'
  },
  {
    id: '4',
    userId: '104',
    user: {
      id: '104',
      nickname: '第四个用户',
      avatarUrl: '/avatar-placeholder.png'
    },
    contentType: 'text',
    textContent: '刚读完一本好书，强烈推荐给大家！',
    circleId: '1003',
    circleName: '读书会',
    commentCount: 15,
    likeCount: 47,
    repostCount: 6,
    isLiked: false,
    createdAt: '2025-05-27T20:45:00Z'
  }
];

export async function GET(request: NextRequest) {
  // 获取查询参数
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type') || 'recommend'; // recommend, following, hot
  const userId = searchParams.get('userId');
  const circleId = searchParams.get('circleId');
  const page = parseInt(searchParams.get('page') || '1');
  const size = parseInt(searchParams.get('size') || '20');
  
  // 根据参数筛选帖子
  let filteredPosts = [...posts];
  
  if (userId) {
    filteredPosts = filteredPosts.filter(post => post.userId === userId);
  }
  
  if (circleId) {
    filteredPosts = filteredPosts.filter(post => post.circleId === circleId);
  }
  
  // 根据类型排序
  if (type === 'hot') {
    filteredPosts.sort((a, b) => b.likeCount - a.likeCount);
  } else {
    // recommend 和 following 都按时间排序
    filteredPosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  // 分页
  const start = (page - 1) * size;
  const end = start + size;
  const paginatedPosts = filteredPosts.slice(start, end);
  
  // 构建分页信息
  const totalElements = filteredPosts.length;
  const totalPages = Math.ceil(totalElements / size);
  
  return NextResponse.json({
    code: 200,
    message: 'success',
    data: {
      content: paginatedPosts,
      pageable: {
        pageNumber: page - 1,
        pageSize: size,
        totalElements,
        totalPages
      }
    }
  });
}
