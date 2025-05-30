import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/components/Layout/Header'
import Sidebar from '@/app/components/Layout/Sidebar'
import PostCard from '@/app/components/Post/PostCard'
import Comment from '@/app/components/Post/Comment'

// 模拟数据
const postData = {
  id: '1',
  user: {
    id: '101',
    nickname: '用户昵称',
    avatarUrl: '/avatar-placeholder.png'
  },
  content: '这是一条详情页的测试动态，展示即刻的详情页样式。这是一条测试动态，展示即刻的详情页样式。',
  mediaUrls: ['/placeholder-image.jpg', '/placeholder-image.jpg'],
  likeCount: 42,
  commentCount: 18,
  isLiked: true,
  createdAt: '2025-05-29T10:00:00Z'
}

const comments = [
  {
    id: '201',
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
    user: {
      id: '104',
      nickname: '评论用户2',
      avatarUrl: '/avatar-placeholder.png'
    },
    content: '这是另一条评论，继续测试评论功能和样式。',
    likeCount: 3,
    isLiked: true,
    createdAt: '2025-05-29T12:00:00Z'
  }
]

const relatedPosts = [
  {
    id: '2',
    user: {
      id: '105',
      nickname: '相关用户1',
      avatarUrl: '/avatar-placeholder.png'
    },
    content: '这是一条相关推荐的动态。',
    likeCount: 24,
    commentCount: 8,
    createdAt: '2025-05-28T10:00:00Z'
  },
  {
    id: '3',
    user: {
      id: '106',
      nickname: '相关用户2',
      avatarUrl: '/avatar-placeholder.png'
    },
    content: '这是另一条相关推荐的动态。',
    likeCount: 36,
    commentCount: 12,
    createdAt: '2025-05-27T10:00:00Z'
  }
]

export default function PostDetail({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 顶部导航栏 */}
      <Header />

      {/* 主体内容区 */}
      <div className="flex flex-1">
        {/* 左侧边栏 */}
        <Sidebar />
        
        {/* 中间内容区 */}
        <main className="flex-1 max-w-2xl mx-auto px-4 py-6">
          {/* 动态详情 */}
          <PostCard post={postData} />
          
          {/* 评论区 */}
          <div className="mt-6">
            <h3 className="font-medium text-lg mb-4">评论 ({comments.length})</h3>
            
            {/* 评论输入框 */}
            <div className="flex mb-6">
              <div className="h-8 w-8 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                <Image
                  src="/avatar-placeholder.png"
                  alt="用户头像"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="添加评论..."
                  className="w-full py-2 px-4 bg-gray-50 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-400"
                />
                <button className="absolute right-3 top-2 text-yellow-500 font-medium">
                  发送
                </button>
              </div>
            </div>
            
            {/* 评论列表 */}
            <div>
              {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        </main>
        
        {/* 右侧边栏 */}
        <aside className="hidden lg:block w-72 p-4">
          {/* 相关推荐 */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <h3 className="font-medium mb-3">相关推荐</h3>
            <div className="space-y-4">
              {relatedPosts.map(post => (
                <div key={post.id} className="text-sm">
                  <div className="flex items-center mb-1">
                    <div className="h-5 w-5 rounded-full bg-gray-300 mr-2 overflow-hidden">
                      {post.user.avatarUrl && (
                        <Image
                          src={post.user.avatarUrl}
                          alt={post.user.nickname}
                          width={20}
                          height={20}
                        />
                      )}
                    </div>
                    <span className="font-medium">{post.user.nickname}</span>
                  </div>
                  <Link href={`/post/${post.id}`} className="hover:text-yellow-600">
                    <p className="line-clamp-2">{post.content}</p>
                  </Link>
                  <div className="text-xs text-gray-500 mt-1">
                    {post.likeCount} 赞 · {post.commentCount} 评论
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 推荐关注 */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium mb-3">推荐关注</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>
                  <div className="text-sm">推荐用户1</div>
                </div>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full">
                  关注
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>
                  <div className="text-sm">推荐用户2</div>
                </div>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full">
                  关注
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
      
      {/* 底部信息栏 */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © 2025 即刻复刻版 - 仅供学习使用
      </footer>
    </main>
  )
}
