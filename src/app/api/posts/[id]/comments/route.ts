import { NextRequest, NextResponse } from 'next/server';

// 模拟评论数据
const comments = [
  {
    id: '201',
    postId: '1',
    userId: '102',
    user: {
      id: '102',
      nickname: '评论用户1',
      avatarUrl: '/avatar-placeholder.png'
    },
    content: '这是一条评论，测试评论功能和样式。',
    likeCount: 5,
    isLiked: false,
    createdAt: '2025-05-29T11:00:00Z',
    replies: [
      {
        id: '301',
        commentId: '201',
        userId: '103',
        user: {
          id: '103',
          nickname: '回复用户1',
          avatarUrl: '/avatar-placeholder.png'
        },
        content: '这是对评论的回复，测试回复功能和样式。',
        likeCount: 2,
        isLiked: true,
        createdAt: '2025-05-29T11:30:00Z'
      }
    ]
  },
  {
    id: '202',
    postId: '1',
    userId: '104',
    user: {
      id: '104',
      nickname: '评论用户2',
      avatarUrl: '/avatar-placeholder.png'
    },
    content: '这是另一条评论，继续测试评论功能和样式。',
    likeCount: 3,
    isLiked: true,
    createdAt: '2025-05-29T12:00:00Z',
    replies: []
  },
  {
    id: '203',
    postId: '2',
    userId: '101',
    user: {
      id: '101',
      nickname: '用户昵称',
      avatarUrl: '/avatar-placeholder.png'
    },
    content: '这是对另一篇文章的评论。',
    likeCount: 1,
    isLiked: false,
    createdAt: '2025-05-29T13:00:00Z',
    replies: []
  }
];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = params.id;
  
  // 获取查询参数
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const size = parseInt(searchParams.get('size') || '20');
  
  // 筛选指定帖子的评论
  const filteredComments = comments.filter(comment => comment.postId === postId);
  
  // 分页
  const start = (page - 1) * size;
  const end = start + size;
  const paginatedComments = filteredComments.slice(start, end);
  
  // 构建分页信息
  const totalElements = filteredComments.length;
  const totalPages = Math.ceil(totalElements / size);
  
  return NextResponse.json({
    code: 200,
    message: 'success',
    data: {
      content: paginatedComments,
      pageable: {
        pageNumber: page - 1,
        pageSize: size,
        totalElements,
        totalPages
      }
    }
  });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = params.id;
  
  try {
    const body = await request.json();
    const { content } = body;
    
    if (!content || content.trim() === '') {
      return NextResponse.json(
        { message: '评论内容不能为空' },
        { status: 400 }
      );
    }
    
    // 模拟创建新评论
    const newComment = {
      id: `${Date.now()}`,
      postId,
      userId: '101', // 假设当前登录用户ID为101
      user: {
        id: '101',
        nickname: '用户昵称',
        avatarUrl: '/avatar-placeholder.png'
      },
      content,
      likeCount: 0,
      isLiked: false,
      createdAt: new Date().toISOString(),
      replies: []
    };
    
    // 在实际应用中，这里会将评论保存到数据库
    
    return NextResponse.json({
      code: 200,
      message: 'success',
      data: newComment
    });
  } catch (error) {
    return NextResponse.json(
      { message: '创建评论失败' },
      { status: 500 }
    );
  }
}
