import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 顶部导航栏 */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* 左侧Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="即刻"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-xl font-bold">即刻</span>
          </div>
          
          {/* 中间搜索框 */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索"
                className="w-full py-2 px-4 bg-gray-100 rounded-full focus:outline-none"
              />
              <button className="absolute right-3 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* 右侧用户区 */}
          <div className="flex items-center">
            <button className="mr-4 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-1.5 px-4 rounded-full">
              发布
            </button>
            <button className="mr-4 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
              <Image
                src="/avatar-placeholder.png"
                alt="用户头像"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </header>

      {/* 主体内容区 */}
      <div className="flex flex-1">
        {/* 左侧边栏 */}
        <aside className="hidden md:block w-60 border-r border-gray-200 p-4">
          <nav className="space-y-2">
            <Link href="/" className="flex items-center p-2 rounded-lg bg-gray-100 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              首页
            </Link>
            <Link href="/following" className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              关注
            </Link>
            <Link href="/hot" className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
              热门
            </Link>
            
            <div className="pt-4 pb-2">
              <h3 className="text-sm font-medium text-gray-500">圈子</h3>
            </div>
            
            <Link href="/circle/1" className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <div className="h-5 w-5 rounded bg-blue-500 mr-3"></div>
              科技圈
            </Link>
            <Link href="/circle/2" className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <div className="h-5 w-5 rounded bg-green-500 mr-3"></div>
              读书会
            </Link>
            <Link href="/circle/3" className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <div className="h-5 w-5 rounded bg-purple-500 mr-3"></div>
              摄影
            </Link>
            
            <div className="pt-4">
              <Link href="/notifications" className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                消息通知
              </Link>
              <Link href="/profile" className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                个人主页
              </Link>
              <Link href="/settings" className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                设置
              </Link>
            </div>
          </nav>
        </aside>
        
        {/* 中间内容区 */}
        <main className="flex-1 max-w-2xl mx-auto px-4 py-6">
          {/* 内容分类标签 */}
          <div className="flex border-b border-gray-200 mb-4">
            <button className="px-4 py-2 border-b-2 border-black font-medium">推荐</button>
            <button className="px-4 py-2 text-gray-500">关注</button>
            <button className="px-4 py-2 text-gray-500">热门</button>
          </div>
          
          {/* 内容卡片列表 */}
          <div className="space-y-6">
            {/* 内容卡片1 */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              {/* 用户信息 */}
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <div className="font-medium">用户昵称</div>
                  <div className="text-xs text-gray-500">2小时前</div>
                </div>
              </div>
              
              {/* 内容 */}
              <div className="mb-3">
                <p className="text-gray-800">这是一条测试动态，展示即刻的信息流样式。这是一条测试动态，展示即刻的信息流样式。</p>
              </div>
              
              {/* 图片 */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="aspect-square bg-gray-200 rounded"></div>
                <div className="aspect-square bg-gray-200 rounded"></div>
                <div className="aspect-square bg-gray-200 rounded"></div>
              </div>
              
              {/* 互动按钮 */}
              <div className="flex items-center text-gray-500">
                <button className="flex items-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>42</span>
                </button>
                <button className="flex items-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>18</span>
                </button>
                <button className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>分享</span>
                </button>
              </div>
            </div>
            
            {/* 内容卡片2 */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              {/* 用户信息 */}
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <div className="font-medium">另一个用户</div>
                  <div className="text-xs text-gray-500">5小时前</div>
                </div>
              </div>
              
              {/* 内容 */}
              <div className="mb-3">
                <p className="text-gray-800">分享一个有趣的发现，今天在公园看到了非常罕见的鸟类，大家有兴趣的可以去看看。</p>
              </div>
              
              {/* 链接卡片 */}
              <div className="border border-gray-200 rounded mb-3 overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-3">
                  <div className="font-medium mb-1">城市公园发现罕见鸟类，专家：这可能是...</div>
                  <div className="text-sm text-gray-500">news.example.com</div>
                </div>
              </div>
              
              {/* 互动按钮 */}
              <div className="flex items-center text-gray-500">
                <button className="flex items-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>56</span>
                </button>
                <button className="flex items-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>24</span>
                </button>
                <button className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>分享</span>
                </button>
              </div>
            </div>
            
            {/* 更多内容卡片... */}
          </div>
        </main>
        
        {/* 右侧边栏 */}
        <aside className="hidden lg:block w-72 p-4">
          {/* 热门话题 */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <h3 className="font-medium mb-3">热门话题</h3>
            <div className="space-y-2">
              <div className="text-sm hover:bg-gray-50 p-2 rounded cursor-pointer"># 今日热点新闻</div>
              <div className="text-sm hover:bg-gray-50 p-2 rounded cursor-pointer"># 最新科技动态</div>
              <div className="text-sm hover:bg-gray-50 p-2 rounded cursor-pointer"># 周末去哪玩</div>
              <div className="text-sm hover:bg-gray-50 p-2 rounded cursor-pointer"># 美食推荐</div>
              <div className="text-sm hover:bg-gray-50 p-2 rounded cursor-pointer"># 读书分享</div>
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
