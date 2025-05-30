import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/components/Layout/Header'
import Sidebar from '@/app/components/Layout/Sidebar'

// 模拟数据
const userData = {
  id: '101',
  nickname: '用户昵称',
  avatarUrl: '/avatar-placeholder.png',
  bio: '这是个人简介，介绍一下自己。这是个人简介，介绍一下自己。',
  followingCount: 128,
  followerCount: 256,
  isFollowing: false,
  isMyself: false
}

const userPosts = [
  {
    id: '1',
    content: '这是我发布的一条动态，测试个人主页的展示效果。',
    mediaUrls: ['/placeholder-image.jpg'],
    likeCount: 42,
    commentCount: 18,
    createdAt: '2025-05-29T10:00:00Z'
  },
  {
    id: '2',
    content: '这是我发布的另一条动态，继续测试个人主页的展示效果。',
    likeCount: 36,
    commentCount: 12,
    createdAt: '2025-05-28T10:00:00Z'
  }
]

export default function UserProfile({ params }: { params: { id: string } }) {
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
          {/* 用户信息头部 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-start">
              {/* 用户头像 */}
              <div className="h-20 w-20 rounded-full bg-gray-300 mr-6 overflow-hidden">
                {userData.avatarUrl && (
                  <Image
                    src={userData.avatarUrl}
                    alt={userData.nickname}
                    width={80}
                    height={80}
                  />
                )}
              </div>
              
              {/* 用户信息 */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">{userData.nickname}</h1>
                  {!userData.isMyself && (
                    <button className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                      userData.isFollowing 
                        ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' 
                        : 'bg-yellow-400 hover:bg-yellow-500 text-black'
                    }`}>
                      {userData.isFollowing ? '已关注' : '关注'}
                    </button>
                  )}
                </div>
                
                {/* 个人简介 */}
                <p className="text-gray-700 mt-2">{userData.bio}</p>
                
                {/* 关注数据 */}
                <div className="flex mt-4 text-sm">
                  <Link href={`/user/${userData.id}/following`} className="mr-6 hover:text-yellow-600">
                    <span className="font-medium">{userData.followingCount}</span> 关注
                  </Link>
                  <Link href={`/user/${userData.id}/followers`} className="hover:text-yellow-600">
                    <span className="font-medium">{userData.followerCount}</span> 粉丝
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* 内容分类标签 */}
          <div className="flex border-b border-gray-200 mb-4">
            <button className="px-4 py-2 border-b-2 border-black font-medium">发布的</button>
            <button className="px-4 py-2 text-gray-500">点赞的</button>
          </div>
          
          {/* 用户动态列表 */}
          <div className="space-y-6">
            {userPosts.map(post => (
              <Link href={`/post/${post.id}`} key={post.id}>
                <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors">
                  {/* 内容 */}
                  <div className="mb-3">
                    <p className="text-gray-800">{post.content}</p>
                  </div>
                  
                  {/* 图片 */}
                  {post.mediaUrls && post.mediaUrls.length > 0 && (
                    <div className="mb-3">
                      <div className="aspect-video bg-gray-200 rounded overflow-hidden">
                        <Image
                          src={post.mediaUrls[0]}
                          alt="媒体内容"
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* 互动信息 */}
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="mr-4">{formatTime(post.createdAt)}</div>
                    <div className="flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{post.likeCount}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{post.commentCount}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
        
        {/* 右侧边栏 */}
        <aside className="hidden lg:block w-72 p-4">
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
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>
                  <div className="text-sm">推荐用户3</div>
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

// 格式化时间
function formatTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffMins < 60) {
    return `${diffMins}分钟前`;
  } else if (diffHours < 24) {
    return `${diffHours}小时前`;
  } else if (diffDays < 30) {
    return `${diffDays}天前`;
  } else {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
}
