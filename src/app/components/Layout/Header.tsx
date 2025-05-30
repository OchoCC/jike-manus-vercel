import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* 左侧Logo */}
        <div className="flex items-center">
          <Link href="/">
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
          </Link>
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
          <Link href="/notifications" className="mr-4 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Link>
          <Link href="/profile" className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
            <Image
              src="/avatar-placeholder.png"
              alt="用户头像"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
