import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export const metadata = {
  title: '关于我们',
  description: '了解我们的技术栈、团队和项目愿景',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            关于 Next SSR
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            我们致力于构建高性能、可扩展的现代化Web应用，为用户提供最佳的体验。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>🎯 我们的使命</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                通过现代化的技术栈和最佳实践，帮助开发者构建高性能、可维护的Web应用。
                我们相信技术应该服务于用户，而不是相反。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🌟 我们的愿景</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                成为Web开发领域的引领者，推动技术创新，为开发者提供最优秀的工具和解决方案。
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">技术栈</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-600">⚛️</span>
                  React 19
                </CardTitle>
                <CardDescription>现代化的UI库</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 服务器组件</li>
                  <li>• 并发特性</li>
                  <li>• 自动批处理</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-green-600">▲</span>
                  Next.js 15
                </CardTitle>
                <CardDescription>全栈React框架</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• App Router</li>
                  <li>• 服务端渲染</li>
                  <li>• 静态生成</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500">📘</span>
                  TypeScript
                </CardTitle>
                <CardDescription>类型安全的JavaScript</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 类型安全</li>
                  <li>• 更好的IDE支持</li>
                  <li>• 减少运行时错误</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-cyan-500">🎨</span>
                  Tailwind CSS
                </CardTitle>
                <CardDescription>实用优先的CSS框架</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 响应式设计</li>
                  <li>• 快速开发</li>
                  <li>• 一致性设计</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-purple-500">🔧</span>
                  ESLint
                </CardTitle>
                <CardDescription>代码质量工具</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 代码规范</li>
                  <li>• 错误检测</li>
                  <li>• 最佳实践</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-pink-500">💎</span>
                  Prettier
                </CardTitle>
                <CardDescription>代码格式化工具</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 统一格式</li>
                  <li>• 自动格式化</li>
                  <li>• 团队协作</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">核心特性</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>🚀 性能优化</CardTitle>
                <CardDescription>确保应用的高性能表现</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 服务端渲染 (SSR)</li>
                  <li>• 静态站点生成 (SSG)</li>
                  <li>• 增量静态再生 (ISR)</li>
                  <li>• 图片优化</li>
                  <li>• 代码分割</li>
                  <li>• 缓存策略</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🔍 SEO优化</CardTitle>
                <CardDescription>搜索引擎优化最佳实践</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 元标签管理</li>
                  <li>• 结构化数据</li>
                  <li>• 站点地图</li>
                  <li>• 机器人协议</li>
                  <li>• Open Graph</li>
                  <li>• Twitter Cards</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🛡️ 安全防护</CardTitle>
                <CardDescription>多层安全防护机制</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• XSS防护</li>
                  <li>• CSRF保护</li>
                  <li>• 内容安全策略</li>
                  <li>• 安全头部</li>
                  <li>• 输入验证</li>
                  <li>• 输出编码</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📱 响应式设计</CardTitle>
                <CardDescription>适配各种设备尺寸</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 移动优先设计</li>
                  <li>• 断点系统</li>
                  <li>• 触摸优化</li>
                  <li>• 性能优化</li>
                  <li>• 无障碍访问</li>
                  <li>• 跨浏览器兼容</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>加入我们</CardTitle>
              <CardDescription>
                如果您对我们的项目感兴趣，欢迎联系我们或参与贡献
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                我们相信开源的力量，欢迎所有形式的贡献，包括但不限于：
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 代码贡献</li>
                <li>• 文档改进</li>
                <li>• 问题报告</li>
                <li>• 功能建议</li>
                <li>• 社区支持</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
} 