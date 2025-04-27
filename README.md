# MomentWD - 票根收藏应用

一个用于记录和收藏票根的应用。

## 部署到Vercel

### 准备工作

1. 创建Vercel账号：访问 [Vercel](https://vercel.com) 并注册或登录账号
2. 创建PostgreSQL数据库：
   - 可以使用Vercel Postgres或其他数据库服务提供商（如Supabase、Railway等）
   - 获取数据库连接字符串

3. 准备Cloudinary账号（用于图片上传）：
   - 注册 [Cloudinary](https://cloudinary.com) 账号
   - 获取API密钥和云名称

### 部署步骤

1. 将代码推送到GitHub仓库

2. 在Vercel上创建新项目：
   - 从Vercel仪表板点击"New Project"
   - 选择包含代码的GitHub仓库
   - 配置项目设置（可以保留大部分默认设置）

3. 环境变量配置：
   - 在Vercel项目设置中，添加以下环境变量：
     ```
     DATABASE_URL=你的PostgreSQL连接字符串
     NEXTAUTH_SECRET=随机生成的密钥
     NEXTAUTH_URL=你的Vercel应用URL
     NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=你的Cloudinary云名称
     CLOUDINARY_API_KEY=你的Cloudinary API密钥
     CLOUDINARY_API_SECRET=你的Cloudinary API密钥
     ```

4. 数据库初始化：
   - 在部署完成后，运行Prisma迁移脚本初始化数据库
   - 通过Vercel CLI执行：`vercel env pull && npx prisma db push`

5. 完成：部署完成后，你的应用将在Vercel分配的域名上运行（例如：yourapp.vercel.app）

### 重新部署

- 每次推送到主分支时，Vercel会自动重新部署
- 可以在Vercel仪表板手动触发重新部署
