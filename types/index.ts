// 通用类型定义
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// 用户相关类型
export interface User extends BaseEntity {
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
}

// 文章相关类型
export interface Post extends BaseEntity {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  authorId: string;
  publishedAt?: Date;
  tags: string[];
  featuredImage?: string;
}

// API响应类型
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// 分页类型
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// 组件Props类型
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// SEO相关类型
export interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
} 