# 即刻网页版复刻项目 - Vercel部署与运维指南

## 1. 部署概述

本文档提供即刻网页版复刻项目在Vercel平台上的完整部署流程、运维建议和最佳实践，确保系统高可用、高性能和易于维护。

## 2. 部署前准备

### 2.1 账号准备
- Vercel账号（建议使用团队账号以获得更多功能）
- GitHub账号（用于代码托管）
- MongoDB Atlas账号（用于云数据库）
- Cloudinary账号（可选，用于图片存储）

### 2.2 环境变量准备
确保准备以下环境变量：
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/jike_clone?retryWrites=true&w=majority
JWT_SECRET=<your_secure_random_string>
NODE_ENV=production
CLOUDINARY_CLOUD_NAME=<your_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>
```

## 3. 一键部署流程

### 3.1 GitHub仓库设置
1. 将项目代码推送到GitHub仓库
2. 确保仓库包含完整的项目代码和配置文件

### 3.2 Vercel一键部署
1. 访问 [Vercel新项目页面](https://vercel.com/new)
2. 选择"Import Git Repository"并授权GitHub访问
3. 选择即刻复刻项目仓库
4. 配置项目：
   - 框架预设：Next.js
   - 构建命令：`npm run build`
   - 输出目录：`.next`
   - 安装命令：`npm install`
5. 环境变量设置：
   - 添加前面准备的所有环境变量
   - 确保敏感信息（如JWT_SECRET）设为加密环境变量
6. 点击"Deploy"开始部署

### 3.3 自定义域名设置（可选）
1. 在Vercel项目设置中，进入"Domains"选项卡
2. 添加您的自定义域名
3. 按照Vercel提供的说明配置DNS记录
4. 等待DNS传播完成（通常需要几分钟到几小时）

### 3.4 初始化数据库
1. 确保MongoDB Atlas集群已创建
2. 在本地运行初始化脚本：
   ```bash
   NODE_ENV=development MONGODB_URI=<your_mongodb_uri> npx ts-node src/app/lib/initDatabase.ts
   ```
3. 或通过Vercel CLI部署一个临时的初始化函数

## 4. 高可用性配置

### 4.1 多区域部署
在`vercel.json`中配置多区域部署：
```json
{
  "regions": ["hkg1", "sfo1", "bru1"]
}
```

### 4.2 自动扩展
Vercel会根据流量自动扩展，无需额外配置。

### 4.3 CDN配置
在`next.config.js`中优化CDN缓存：
```javascript
module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
    minimumCacheTTL: 60,
  },
  // 其他配置...
}
```

## 5. 监控与运维

### 5.1 健康检查
- 定期访问`/api/health`端点检查系统状态
- 设置外部监控服务（如UptimeRobot）定期检查健康端点

### 5.2 性能监控
- 使用Vercel Analytics监控页面性能
- 关注Core Web Vitals指标
- 定期检查API响应时间

### 5.3 错误监控
- 集成Sentry进行错误捕获与分析
- 配置关键错误的即时通知
- 定期检查错误日志

### 5.4 数据库监控
- 使用MongoDB Atlas监控工具监控数据库性能
- 关注慢查询和连接数
- 设置适当的告警阈值

## 6. 安全最佳实践

### 6.1 定期更新依赖
```bash
npm audit
npm update
```

### 6.2 API限流
在`vercel.json`中配置API限流：
```json
{
  "functions": {
    "api/**/*.ts": {
      "maxDuration": 10
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 6.3 敏感数据保护
- 使用Vercel加密环境变量存储敏感信息
- 定期轮换JWT密钥和API密钥
- 确保不在客户端暴露敏感信息

## 7. 备份与恢复

### 7.1 数据库备份
- 配置MongoDB Atlas自动备份
- 推荐设置每日备份，保留期至少7天
- 定期测试备份恢复流程

### 7.2 代码备份
- 使用Git标签标记稳定版本
- 考虑使用GitHub Releases管理版本
- 保留部署历史记录，便于回滚

## 8. 扩展与升级

### 8.1 垂直扩展
- 根据需要升级MongoDB Atlas集群规格
- 监控资源使用情况，提前进行容量规划

### 8.2 水平扩展
- 确保应用为无状态设计，便于水平扩展
- 使用分布式缓存减少数据库负载
- 考虑使用Redis缓存热点数据

### 8.3 功能升级
- 使用Vercel预览部署测试新功能
- 实施金丝雀发布或A/B测试
- 保持向后兼容性

## 9. 故障排除

### 9.1 部署失败
- 检查构建日志
- 验证环境变量配置
- 确认依赖版本兼容性

### 9.2 运行时错误
- 检查Vercel函数日志
- 验证数据库连接状态
- 检查API响应状态

### 9.3 性能问题
- 分析慢查询
- 检查前端组件渲染性能
- 优化API响应时间

## 10. 联系与支持

如遇到无法解决的问题，请通过以下方式获取支持：
- 提交GitHub Issue
- 联系项目维护者
- 参考Vercel官方文档和支持渠道

---

通过遵循本指南，您可以轻松部署和维护即刻网页版复刻项目，确保系统高可用、高性能和安全可靠。
