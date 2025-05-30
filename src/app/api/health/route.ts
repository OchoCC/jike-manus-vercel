import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import { User } from '@/app/models/User';

export async function GET(request: NextRequest) {
  try {
    // 连接数据库
    await dbConnect();
    
    // 检查数据库连接
    const userCount = await User.countDocuments();
    
    return NextResponse.json({
      status: 'ok',
      message: 'Service is healthy',
      database: {
        connected: true,
        userCount
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json({
      status: 'error',
      message: 'Service is experiencing issues',
      database: {
        connected: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
