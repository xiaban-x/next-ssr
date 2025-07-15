import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Next SSR</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              首页
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              关于
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              博客
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              登录
            </Button>
            <Button size="sm">注册</Button>
          </div>
        </div>
      </div>
    </header>
  );
} 