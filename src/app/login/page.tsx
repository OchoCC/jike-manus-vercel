import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 顶部Logo */}
      <div className="flex justify-center pt-10 pb-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="即刻"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-2xl font-bold">即刻</span>
        </Link>
      </div>
      
      {/* 登录表单 */}
      <div className="w-full max-w-md mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-center mb-6">登录</h1>
          
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                用户名/邮箱/手机号
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="请输入用户名/邮箱/手机号"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  密码
                </label>
                <Link href="/forgot-password" className="text-sm text-yellow-600 hover:text-yellow-700">
                  忘记密码?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="请输入密码"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md"
            >
              登录
            </button>
          </form>
          
          {/* 第三方登录 */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  其他登录方式
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#07C160">
                  <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M17.281,16.844l-1.688,0.844l-1.594-2.719 c-0.625,0.094-1.312,0.156-2,0.156s-1.375-0.063-2-0.156L8.406,17.688L6.719,16.844l1.594-2.719C6.188,13.031,4.5,11.125,4.5,9 c0-4.125,3.375-7.5,7.5-7.5s7.5,3.375,7.5,7.5c0,2.125-1.688,4.031-3.813,5.125L17.281,16.844z M9.75,9c0,0.828-0.672,1.5-1.5,1.5 S6.75,9.828,6.75,9s0.672-1.5,1.5-1.5S9.75,8.172,9.75,9z M17.25,9c0,0.828-0.672,1.5-1.5,1.5S14.25,9.828,14.25,9 s0.672-1.5,1.5-1.5S17.25,8.172,17.25,9z"/>
                </svg>
              </button>
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1DA1F2">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"/>
                </svg>
              </button>
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#DD2C00">
                  <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M19.181,8.862 c-0.238,0.98-0.761,1.866-1.453,2.518c0.038,0.352,0.056,0.704,0.056,1.056c0,3.56-2.716,7.564-7.684,7.564 c-1.522,0-2.94-0.444-4.136-1.213c0.212,0.024,0.426,0.037,0.642,0.037c1.26,0,2.42-0.428,3.343-1.151 c-1.177-0.022-2.171-0.798-2.513-1.863c0.164,0.031,0.332,0.048,0.505,0.048c0.245,0,0.482-0.033,0.708-0.095 c-1.231-0.247-2.158-1.332-2.158-2.634c0-0.011,0-0.022,0-0.033c0.363,0.201,0.778,0.322,1.219,0.335 c-0.722-0.481-1.196-1.304-1.196-2.236c0-0.492,0.132-0.954,0.364-1.35c1.326,1.628,3.31,2.698,5.546,2.811 c-0.046-0.196-0.069-0.4-0.069-0.609c0-1.483,1.203-2.686,2.686-2.686c0.773,0,1.472,0.326,1.962,0.849 c0.611-0.121,1.188-0.344,1.709-0.652c-0.201,0.627-0.625,1.153-1.18,1.486c0.543-0.065,1.061-0.209,1.543-0.422 C20.163,8.007,19.7,8.476,19.181,8.862z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* 注册入口 */}
          <div className="mt-6 text-center">
            <span className="text-gray-600">还没有账号？</span>
            <Link href="/register" className="text-yellow-600 hover:text-yellow-700 ml-1">
              立即注册
            </Link>
          </div>
        </div>
      </div>
      
      {/* 底部信息 */}
      <footer className="mt-auto py-6 text-center text-sm text-gray-500">
        © 2025 即刻复刻版 - 仅供学习使用
      </footer>
    </div>
  )
}
