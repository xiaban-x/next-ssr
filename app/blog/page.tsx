import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

// 模拟博客数据
const blogPosts = [
  {
    id: '1',
    title: 'Next.js 15 新特性详解',
    excerpt: '探索Next.js 15带来的全新功能和性能改进，包括App Router的增强、服务器组件的优化等。',
    slug: 'nextjs-15-features',
    publishedAt: '2024-01-15',
    author: '张三',
    tags: ['Next.js', 'React', '性能优化'],
    readTime: '8分钟',
  },
  {
    id: '2',
    title: '服务端渲染最佳实践',
    excerpt: '深入探讨SSR的实现原理、性能优化策略以及在Next.js中的应用技巧。',
    slug: 'ssr-best-practices',
    publishedAt: '2024-01-10',
    author: '李四',
    tags: ['SSR', '性能优化', 'SEO'],
    readTime: '12分钟',
  },
  {
    id: '3',
    title: 'TypeScript在React项目中的应用',
    excerpt: '从基础到高级，全面介绍TypeScript在React项目中的最佳实践和常见模式。',
    slug: 'typescript-react-patterns',
    publishedAt: '2024-01-05',
    author: '王五',
    tags: ['TypeScript', 'React', '开发体验'],
    readTime: '15分钟',
  },
  {
    id: '4',
    title: 'Tailwind CSS设计系统构建',
    excerpt: '如何构建可扩展的设计系统，利用Tailwind CSS实现一致性和可维护性。',
    slug: 'tailwind-design-system',
    publishedAt: '2024-01-01',
    author: '赵六',
    tags: ['Tailwind CSS', '设计系统', 'UI/UX'],
    readTime: '10分钟',
  },
  {
    id: '5',
    title: '现代Web应用性能优化指南',
    excerpt: '全面的性能优化策略，从代码分割到缓存策略，提升用户体验。',
    slug: 'web-performance-optimization',
    publishedAt: '2023-12-25',
    author: '钱七',
    tags: ['性能优化', '用户体验', '最佳实践'],
    readTime: '18分钟',
  },
  {
    id: '6',
    title: 'SEO优化在Next.js中的实现',
    excerpt: '利用Next.js的内置SEO功能，构建搜索引擎友好的现代化Web应用。',
    slug: 'nextjs-seo-optimization',
    publishedAt: '2023-12-20',
    author: '孙八',
    tags: ['SEO', 'Next.js', '搜索引擎'],
    readTime: '14分钟',
  },
];

export const metadata = {
  title: '博客',
  description: '探索最新的Web开发技术、最佳实践和行业趋势',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            技术博客
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            探索最新的Web开发技术、最佳实践和行业趋势，与我们一起学习成长。
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="primary" size="sm">
              全部
            </Button>
            <Button variant="outline" size="sm">
              Next.js
            </Button>
            <Button variant="outline" size="sm">
              React
            </Button>
            <Button variant="outline" size="sm">
              TypeScript
            </Button>
            <Button variant="outline" size="sm">
              性能优化
            </Button>
            <Button variant="outline" size="sm">
              SEO
            </Button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    阅读更多
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              上一页
            </Button>
            <Button variant="primary" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <span className="px-2 text-muted-foreground">...</span>
            <Button variant="outline" size="sm">
              10
            </Button>
            <Button variant="outline" size="sm">
              下一页
            </Button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle>订阅我们的博客</CardTitle>
              <CardDescription>
                获取最新的技术文章和行业动态，第一时间了解我们的更新
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  className="flex-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>订阅</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                我们承诺不会向第三方分享您的邮箱地址
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 