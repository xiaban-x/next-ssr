# Next SSR - 现代化的服务端渲染应用

基于 Next.js 15 构建的高性能服务端渲染应用，提供优秀的用户体验、SEO优化和开发体验。

## ✨ 特性

- 🚀 **高性能**: 服务端渲染 (SSR)、静态站点生成 (SSG)、增量静态再生 (ISR)
- 🔍 **SEO友好**: 完整的SEO优化，包括元标签、结构化数据、站点地图
- 🛡️ **安全可靠**: 内置安全防护，XSS防护、CSRF保护、安全头部
- 📱 **响应式设计**: 移动优先设计，适配各种设备尺寸
- ⚡ **开发体验**: TypeScript + 现代化工具链，热重载开发
- 🎨 **现代化UI**: 基于Tailwind CSS的组件化设计系统

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **UI组件**: 自定义组件库
- **代码质量**: ESLint + Prettier
- **包管理**: Bun

## 📦 项目结构

```
next-ssr/
├── app/                    # Next.js App Router
│   ├── api/               # API路由
│   ├── about/             # 关于页面
│   ├── blog/              # 博客页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # 可复用组件
│   ├── ui/               # 基础UI组件
│   └── layout/           # 布局组件
├── hooks/                # 自定义Hooks
├── lib/                  # 工具函数
├── types/                # TypeScript类型定义
├── public/               # 静态资源
└── 配置文件
```

## 🚀 快速开始

### 环境要求

- Node.js 18+ 或 Bun 1.0+
- 现代浏览器

### 安装依赖

```bash
# 使用 Bun (推荐)
bun install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发环境

```bash
# 启动开发服务器
bun dev

# 或使用 npm
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 生产构建

```bash
# 构建生产版本
bun run build

# 启动生产服务器
bun run start
```

## 📝 可用脚本

```bash
# 开发
bun dev              # 启动开发服务器

# 构建
bun run build        # 构建生产版本
bun run start        # 启动生产服务器

# 代码质量
bun run lint         # 运行ESLint检查
bun run lint:fix     # 自动修复ESLint问题
bun run type-check   # TypeScript类型检查

# 工具
bun run clean        # 清理构建文件
bun run analyze      # 分析打包大小
```

## 🎨 组件使用

### Button组件

```tsx
import { Button } from '@/components/ui/Button';

// 基础用法
<Button>点击我</Button>

// 不同变体
<Button variant="outline">轮廓按钮</Button>
<Button variant="ghost">幽灵按钮</Button>

// 不同尺寸
<Button size="sm">小按钮</Button>
<Button size="lg">大按钮</Button>

// 加载状态
<Button loading>加载中...</Button>

// 作为链接
<Button asChild>
  <Link href="/about">关于我们</Link>
</Button>
```

### Card组件

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
  </CardHeader>
  <CardContent>
    <p>卡片内容</p>
  </CardContent>
</Card>
```

## 🔧 配置说明

### Next.js配置

项目使用优化的Next.js配置，包括：

- 服务端渲染优化
- 图片优化配置
- 安全头部设置
- 重定向规则

### TypeScript配置

- 严格类型检查
- 路径映射配置
- 现代化ES特性支持

### ESLint配置

- Next.js推荐规则
- TypeScript支持
- React最佳实践
- 可访问性检查

## 📱 响应式设计

项目采用移动优先的响应式设计：

- **移动端**: < 768px
- **平板端**: 768px - 1024px  
- **桌面端**: > 1024px

## 🔍 SEO优化

- 完整的元标签管理
- Open Graph支持
- Twitter Cards支持
- 结构化数据
- 站点地图生成
- 机器人协议

## 🛡️ 安全特性

- XSS防护
- CSRF保护
- 内容安全策略
- 安全头部配置
- 输入验证
- 输出编码

## 📊 性能优化

- 服务端渲染
- 静态生成
- 图片优化
- 代码分割
- 缓存策略
- 压缩优化

## 🤝 贡献指南

我们欢迎所有形式的贡献：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- 项目主页: [https://github.com/your-username/next-ssr](https://github.com/your-username/next-ssr)
- 问题反馈: [Issues](https://github.com/your-username/next-ssr/issues)
- 讨论区: [Discussions](https://github.com/your-username/next-ssr/discussions)

## 🙏 致谢

感谢以下开源项目的支持：

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
# next-ssr
