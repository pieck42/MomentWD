# MomentWD - 票根收藏应用

一个用于记录和收藏票根的应用。

## 当前版本说明

当前版本为展示版本，暂不包含数据库功能。主要功能仅做展示用途，后续将添加完整的数据库支持。

## 部署到Vercel

### 准备工作

1. 创建Vercel账号：访问 [Vercel](https://vercel.com) 并注册或登录账号

2. 准备Cloudinary账号（用于图片上传，当前版本仅UI展示）：
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
     NEXTAUTH_SECRET=随机生成的密钥
     NEXTAUTH_URL=你的Vercel应用URL
     NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=你的Cloudinary云名称（可选，当前版本未使用）
     ```

4. 完成：部署完成后，你的应用将在Vercel分配的域名上运行（例如：yourapp.vercel.app）

### 重新部署

- 每次推送到主分支时，Vercel会自动重新部署
- 可以在Vercel仪表板手动触发重新部署

## 未来计划

1. 添加PostgreSQL数据库支持
2. 实现真实的用户认证系统
3. 添加实际的图片上传和存储功能
4. 增加OCR自动识别票根信息功能
