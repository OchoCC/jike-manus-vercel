# 即刻网页版复刻项目 - Vercel部署配置
# ...........
## 项目概述
本文件包含Vercel部署环境的配置说明和优化建议，确保即刻网页版复刻项目在Vercel平台上获得最佳性能和稳定性。

## Vercel配置文件

### vercel.json
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["hkg1"],
  "env": {
    "MONGODB_URI": "@mongodb_uri",
    "JWT_SECRET": "@jwt_secret",
    "NODE_ENV": "production"
  }
}
```

## 环境变量设置

在Vercel项目设置中，需要配置以下环境变量：

1. `MONGODB_URI`: MongoDB Atlas连接字符串
2. `JWT_SECRET`: JWT认证密钥
3. `CLOUDINARY_CLOUD_NAME`: Cloudinary云名称（用于图片存储）
4. `CLOUDINARY_API_KEY`: Cloudinary API密钥
5. `CLOUDINARY_API_SECRET`: Cloudinary API密钥

## 性能优化建议

1. **启用ISR (Incremental Static Regeneration)**
   - 对于频繁访问但不常更新的页面，使用ISR提高性能
   - 在页面组件中设置适当的revalidate时间

2. **启用Edge Functions**
   - 对于需要低延迟的API路由，使用Edge Functions
   - 在API路由文件中添加`export const config = { runtime: 'edge' }`

3. **配置CDN缓存**
   - 为静态资源设置适当的缓存策略
   - 使用Vercel的CDN全球分发网络

4. **优化图片加载**
   - 使用Next.js的Image组件进行自动优化
   - 配置适当的图片尺寸和质量

5. **数据库连接池优化**
   - 使用连接池管理MongoDB连接
   - 避免频繁创建和关闭连接

## 高可用性配置

1. **多区域部署**
   - 在vercel.json中配置多个部署区域
   - 确保用户访问最近的服务器

2. **自动扩展**
   - Vercel会根据流量自动扩展，无需额外配置

3. **健康检查**
   - 实现/api/health端点进行健康检查
   - 监控服务状态

4. **错误监控**
   - 集成Sentry或其他错误监控工具
   - 配置错误通知

## 部署流程

1. 将代码推送到GitHub仓库
2. 在Vercel中导入该仓库
3. 配置所需的环境变量
4. 触发部署
5. 验证部署是否成功
6. 配置自定义域名（可选）

## 注意事项

1. 确保MongoDB Atlas IP白名单已配置，允许Vercel服务器访问
2. 使用环境变量存储敏感信息，避免硬编码
3. 定期备份数据库
4. 监控API限流情况，避免超出免费额度
