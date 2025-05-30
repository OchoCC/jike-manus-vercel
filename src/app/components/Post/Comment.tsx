import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CommentProps {
  comment: {
    id: string;
    user: {
      id: string;
      nickname: string;
      avatarUrl?: string;
    };
    content: string;
    likeCount: number;
    isLiked?: boolean;
    createdAt: string;
    replies?: {
      id: string;
      user: {
        id: string;
        nickname: string;
        avatarUrl?: string;
      };
      content: string;
      likeCount: number;
      isLiked?: boolean;
      createdAt: string;
    }[];
  }
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="mb-4">
      <div className="flex">
        {/* 用户头像 */}
        <div className="h-8 w-8 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
          {comment.user.avatarUrl ? (
            <Image
              src={comment.user.avatarUrl}
              alt={comment.user.nickname}
              width={32}
              height={32}
            />
          ) : (
            <div className="h-full w-full bg-gray-300"></div>
          )}
        </div>
        
        {/* 评论内容 */}
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-3">
            <Link href={`/user/${comment.user.id}`} className="font-medium text-sm hover:underline">
              {comment.user.nickname}
            </Link>
            <div className="mt-1 text-gray-800">{comment.content}</div>
          </div>
          
          {/* 评论操作 */}
          <div className="flex items-center mt-1 text-xs text-gray-500">
            <span>{formatTime(comment.createdAt)}</span>
            <button className="ml-4 hover:text-gray-700">回复</button>
            <button className={`ml-4 flex items-center ${comment.isLiked ? 'text-red-500' : 'hover:text-gray-700'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill={comment.isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {comment.likeCount > 0 && <span>{comment.likeCount}</span>}
            </button>
          </div>
          
          {/* 回复列表 */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-2 pl-4 border-l-2 border-gray-100">
              {comment.replies.map(reply => (
                <div key={reply.id} className="mt-2">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <Link href={`/user/${reply.user.id}`} className="font-medium text-sm hover:underline">
                      {reply.user.nickname}
                    </Link>
                    <div className="mt-1 text-gray-800">{reply.content}</div>
                  </div>
                  
                  {/* 回复操作 */}
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>{formatTime(reply.createdAt)}</span>
                    <button className="ml-4 hover:text-gray-700">回复</button>
                    <button className={`ml-4 flex items-center ${reply.isLiked ? 'text-red-500' : 'hover:text-gray-700'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill={reply.isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {reply.likeCount > 0 && <span>{reply.likeCount}</span>}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
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
