import { NextRequest, NextResponse } from 'next/server';

// 模拟圈子数据
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

export async function GET(request: NextRequest) {
  // 获取查询参数
  const searchParams = request.nextUrl.searchParams;
  const keyword = searchParams.get('keyword');
  const joined = searchParams.get('joined');
  const page = parseInt(searchParams.get('page') || '1');
  const size = parseInt(searchParams.get('size') || '20');
  
  // 根据参数筛选圈子
  let filteredCircles = [...circles];
  
  if (keyword) {
    const lowerKeyword = keyword.toLowerCase();
    filteredCircles = filteredCircles.filter(circle => 
      circle.name.toLowerCase().includes(lowerKeyword) || 
      circle.description.toLowerCase().includes(lowerKeyword)
    );
  }
  
  if (joined === 'true') {
    filteredCircles = filteredCircles.filter(circle => circle.isJoined);
  } else if (joined === 'false') {
    filteredCircles = filteredCircles.filter(circle => !circle.isJoined);
  }
  
  // 按成员数量排序
  filteredCircles.sort((a, b) => b.memberCount - a.memberCount);
  
  // 分页
  const start = (page - 1) * size;
  const end = start + size;
  const paginatedCircles = filteredCircles.slice(start, end);
  
  // 构建分页信息
  const totalElements = filteredCircles.length;
  const totalPages = Math.ceil(totalElements / size);
  
  return NextResponse.json({
    code: 200,
    message: 'success',
    data: {
      content: paginatedCircles,
      pageable: {
        pageNumber: page - 1,
        pageSize: size,
        totalElements,
        totalPages
      }
    }
  });
}
