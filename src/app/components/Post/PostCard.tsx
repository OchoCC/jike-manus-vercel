import React from 'react'
import Image from 'next/image'

interface PostCardProps {
  post: {
    id: string;
    user: {
      id: string;
      nickname: string;
      avatarUrl?: string;
    };
    content: string;
    mediaUrls?: string[];
    linkCard?: {
      title: string;
      description?: string;
      imageUrl?: string;
      url: string;
      domain: string;
    };
    likeCount: number;
    commentCount: number;
    isLiked?: boolean;
    createdAt: string;
  }
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      {/* 用户信息 */}
      <div className="flex items-center mb-3">
        <div className="h-10 w-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
          {post.user.avatarUrl ? (
            <Image
              src={post.user.avatarUrl}
              alt={post.user.nickname}
              width={40}
              height={40}
            />
          ) : (
            <div className="h-full w-full bg-gray-300"></div>
          )}
        </div>
        <div>
          <div className="font-medium">{post.user.nickname}</div>
          <div className="text-xs text-gray-500">{formatTime(post.createdAt)}</div>
        </div>
      </div>
      
      {/* 内容 */}
      <div className="mb-3">
        <p className="text-gray-800">{post.content}</p>
      </div>
      
      {/* 图片 */}
      {post.mediaUrls && post.mediaUrls.length > 0 && (
        <div className={`grid ${getGridClass(post.mediaUrls.length)} gap-2 mb-3`}>
          {post.mediaUrls.map((url, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded overflow-hidden">
              <Image
                src={url}
                alt={`图片 ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
      
      {/* 链接卡片 */}
      {post.linkCard && (
        <div className="border border-gray-200 rounded mb-3 overflow-hidden">
          {post.linkCard.imageUrl && (
            <div className="h-40 bg-gray-200 relative">
              <Image
                src={post.linkCard.imageUrl}
                alt={post.linkCard.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-3">
            <div className="font-medium mb-1">{post.linkCard.title}</div>
            {post.linkCard.description && (
              <div className="text-sm text-gray-700 mb-1 line-clamp-2">{post.linkCard.description}</div>
            )}
            <div className="text-sm text-gray-500">{post.linkCard.domain}</div>
          </div>
        </div>
      )}
      
      {/* 互动按钮 */}
      <div className="flex items-center text-gray-500">
        <button className={`flex items-center mr-6 ${post.isLiked ? 'text-red-500' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill={post.isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{post.likeCount}</span>
        </button>
        <button className="flex items-center mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>{post.commentCount}</span>
        </button>
        <button className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span>分享</span>
        </button>
      </div>
    </div>
  )
}

// 根据图片数量返回合适的网格类名
function getGridClass(count: number): string {
  switch(count) {
    case 1: return 'grid-cols-1';
    case 2: return 'grid-cols-2';
    case 3: return 'grid-cols-3';
    case 4: return 'grid-cols-2';
    default: return 'grid-cols-3';
  }
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
