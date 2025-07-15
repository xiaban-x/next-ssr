import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          现代化的
          <span className="text-primary"> 服务端渲染</span>
          应用
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          基于Next.js 15构建的高性能SSR应用，提供优秀的用户体验、SEO优化和开发体验。
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild>
            <Link href="/blog">开始探索</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">了解更多</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            为什么选择我们的SSR解决方案？
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            专为现代Web应用设计的完整解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>🚀 高性能</CardTitle>
              <CardDescription>
                服务端渲染确保首屏加载速度，提供优秀的用户体验
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 服务端预渲染</li>
                <li>• 静态生成优化</li>
                <li>• 智能缓存策略</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔍 SEO友好</CardTitle>
              <CardDescription>
                完整的SEO优化，确保搜索引擎能够正确索引您的内容
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 结构化数据</li>
                <li>• 元标签优化</li>
                <li>• 站点地图生成</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>⚡ 开发体验</CardTitle>
              <CardDescription>
                TypeScript + 现代化工具链，提供优秀的开发体验
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 类型安全</li>
                <li>• 热重载开发</li>
                <li>• 代码质量工具</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 现代化UI</CardTitle>
              <CardDescription>
                基于Tailwind CSS的响应式设计，美观且易维护
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 响应式设计</li>
                <li>• 组件化架构</li>
                <li>• 主题系统</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔒 安全可靠</CardTitle>
              <CardDescription>
                内置安全防护，保护您的应用免受常见攻击
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• XSS防护</li>
                <li>• CSRF保护</li>
                <li>• 安全头部</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📱 移动优先</CardTitle>
              <CardDescription>
                移动端优化，确保在各种设备上都有良好的体验
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 移动端适配</li>
                <li>• 触摸优化</li>
                <li>• 性能优化</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>准备开始您的项目？</CardTitle>
            <CardDescription>
              立即开始构建您的下一个SSR应用，享受现代化的开发体验
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/blog">查看示例</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">了解更多</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
