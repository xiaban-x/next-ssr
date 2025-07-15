import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, Post } from '@/types';

// 模拟数据库数据
const posts: Post[] = [
  {
    id: '1',
    title: 'Next.js 15 新特性详解',
    content: 'Next.js 15带来了许多激动人心的新特性...',
    excerpt: '探索Next.js 15带来的全新功能和性能改进，包括App Router的增强、服务器组件的优化等。',
    slug: 'nextjs-15-features',
    authorId: '1',
    publishedAt: new Date('2024-01-15'),
    tags: ['Next.js', 'React', '性能优化'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: '服务端渲染最佳实践',
    content: '服务端渲染是现代Web应用的重要组成部分...',
    excerpt: '深入探讨SSR的实现原理、性能优化策略以及在Next.js中的应用技巧。',
    slug: 'ssr-best-practices',
    authorId: '2',
    publishedAt: new Date('2024-01-10'),
    tags: ['SSR', '性能优化', 'SEO'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: '3',
    title: 'TypeScript在React项目中的应用',
    content: 'TypeScript为React项目带来了类型安全...',
    excerpt: '从基础到高级，全面介绍TypeScript在React项目中的最佳实践和常见模式。',
    slug: 'typescript-react-patterns',
    authorId: '3',
    publishedAt: new Date('2024-01-05'),
    tags: ['TypeScript', 'React', '开发体验'],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');

    let filteredPosts = [...posts];

    // 按标签过滤
    if (tag) {
      filteredPosts = filteredPosts.filter(post => 
        post.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
      );
    }

    // 按搜索关键词过滤
    if (search) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 分页
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    const response: ApiResponse<{
      posts: Post[];
      pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
      };
    }> = {
      success: true,
      data: {
        posts: paginatedPosts,
        pagination: {
          page,
          limit,
          total: filteredPosts.length,
          totalPages: Math.ceil(filteredPosts.length / limit),
        },
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ApiResponse = {
      success: false,
      error: '获取文章列表失败',
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 验证请求数据
    if (!body.title || !body.content || !body.excerpt) {
      const errorResponse: ApiResponse = {
        success: false,
        error: '缺少必要的字段',
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // 创建新文章
    const newPost: Post = {
      id: Date.now().toString(),
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      slug: body.slug || body.title.toLowerCase().replace(/\s+/g, '-'),
      authorId: body.authorId || '1',
      publishedAt: body.publishedAt ? new Date(body.publishedAt) : new Date(),
      tags: body.tags || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // 在实际应用中，这里会将数据保存到数据库
    posts.push(newPost);

    const response: ApiResponse<Post> = {
      success: true,
      data: newPost,
      message: '文章创建成功',
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    const errorResponse: ApiResponse = {
      success: false,
      error: '创建文章失败',
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
} 