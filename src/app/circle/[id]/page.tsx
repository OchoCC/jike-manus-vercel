import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/components/Layout/Header'
import Sidebar from '@/app/components/Layout/Sidebar'
import PostCard from '@/app/components/Post/PostCard'

// 模拟数据
const circleData = {
  id: '1001',
  name: '科技圈',
  description: '这是一个关于科技话题的圈子，讨论最新科技动态、产品评测、技术分享等内容。',
  avatarUrl: '/circle-placeholder.png',
  coverUrl: '/circle-cover-placeholder.jpg',
  memberCount: 1280,
  postCount: 3456,
  isJoined: true,
  creatorId: '101',
  creatorNickname: '圈主昵称'
}

const circlePosts = [
  {
    id: '1',
    user: {
      id: '101',
      nickname: '用户昵称',
      avatarUrl: '/avatar-placeholder.png'
    },
    content: '这是圈子里的一条动态，测试圈子页面的展示效果。',
    mediaUrls: ['/placeholder-image.jpg'],
    likeCount: 42,
    commentCount: 18,
    isLiked: false,
    createdAt: '2025-05-29T10:00:00Z'
  },
  {
    id: '2',
    user: {
      id: '102',
      nickname: '另一个用户',
      avatarUrl: '/avatar-placeholder.png'
    },
    content: '这是圈子里的另一条动态，继续测试圈子页面的展示效果。',
    linkCard: {
      title: '最新科技新闻：人工智能取得重大突破',
      description: '研究人员开发出了新一代AI模型，在多项任务上超越了人类表现...',
      imageUrl: '/placeholder-image.jpg',
      url: 'https://example.com/news',
      domain: 'example.com'
    },
    likeCount: 36,
    commentCount: 12,
    isLiked: true,
    createdAt: '2025-05-28T10:00:00Z'
  }
]

const circleMembers = [
  {
    id: '101',
    nickname: '圈主昵称',
    avatarUrl: '/avatar-placeholder.png',
    isCreator: true
  },
  {
    id: '102',
    nickname: '成员1',
    avatarUrl: '/avatar-placeholder.png',
    isCreator: false
  },
  {
    id: '103',
    nickname: '成员2',
    avatarUrl: '/avatar-placeholder.png',
    isCreator: false
  },
  {
    id: '104',
    nickname: '成员3',
    avatarUrl: '/avatar-placeholder.png',
    isCreator: false
  }
]

export default function CirclePage({ params }: { params: { id: string } }) {
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
          {/* 圈子信息头部 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            {/* 圈子封面 */}
            <div className="h-40 bg-gray-200 relative">
              {circleData.coverUrl && (
                <Image
                  src={circleData.coverUrl}
                  alt={circleData.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            
            {/* 圈子信息 */}
            <div className="p-6">
              <div className="flex items-start">
                {/* 圈子头像 */}
                <div className="h-16 w-16 rounded-lg bg-gray-300 mr-4 overflow-hidden">
                  {circleData.avatarUrl && (
                    <Image
                      src={circleData.avatarUrl}
                      alt={circleData.name}
                      width={64}
                      height={64}
                    />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">{circleData.name}</h1>
                    <button className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                      circleData.isJoined 
                        ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' 
                        : 'bg-yellow-400 hover:bg-yellow-500 text-black'
                    }`}>
                      {circleData.isJoined ? '已加入' : '加入圈子'}
                    </button>
                  </div>
                  
                  {/* 圈子描述 */}
                  <p className="text-gray-700 mt-2">{circleData.description}</p>
                  
                  {/* 圈子数据 */}
                  <div className="flex mt-4 text-sm">
                    <div className="mr-6">
                      <span className="font-medium">{circleData.memberCount}</span> 成员
                    </div>
                    <div>
                      <span className="font-medium">{circleData.postCount}</span> 内容
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 内容分类标签 */}
          <div className="flex border-b border-gray-200 mb-4">
            <button className="px-4 py-2 border-b-2 border-black font-medium">热门</button>
            <button className="px-4 py-2 text-gray-500">最新</button>
          </div>
          
          {/* 圈子动态列表 */}
          <div className="space-y-6">
            {circlePosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>
        
        {/* 右侧边栏 */}
        <aside className="hidden lg:block w-72 p-4">
          {/* 圈子成员 */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <h3 className="font-medium mb-3">圈子成员</h3>
            <div className="space-y-3">
              {circleMembers.map(member => (
                <Link href={`/user/${member.id}`} key={member.id} className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                    {member.avatarUrl && (
                      <Image
                        src={member.avatarUrl}
                        alt={member.nickname}
                        width={32}
                        height={32}
                      />
                    )}
                  </div>
                  <div className="text-sm flex-1">{member.nickname}</div>
                  {member.isCreator && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded">
                      圈主
                    </span>
                  )}
                </Link>
              ))}
              
              <Link href={`/circle/${circleData.id}/members`} className="text-sm text-center block text-gray-500 hover:text-black mt-2">
                查看全部成员
              </Link>
            </div>
          </div>
          
          {/* 推荐圈子 */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium mb-3">推荐圈子</h3>
            <div className="space-y-3">
              <Link href="/circle/2" className="flex items-center">
                <div className="h-8 w-8 rounded bg-green-500 mr-2"></div>
                <div className="text-sm flex-1">读书会</div>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full">
                  加入
                </button>
              </Link>
              <Link href="/circle/3" className="flex items-center">
                <div className="h-8 w-8 rounded bg-purple-500 mr-2"></div>
                <div className="text-sm flex-1">摄影</div>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full">
                  加入
                </button>
              </Link>
              <Link href="/circle/4" className="flex items-center">
                <div className="h-8 w-8 rounded bg-blue-400 mr-2"></div>
                <div className="text-sm flex-1">旅行</div>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full">
                  加入
                </button>
              </Link>
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
