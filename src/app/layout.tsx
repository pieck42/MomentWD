import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "MomentWD - 票根记录工具",
  description: "记录并分享您的票根回忆",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="bg-[hsl(118,50%,90%)] dark:bg-[hsl(118,50%,10%)] shadow-sm">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-[hsl(142,76%,45%)] font-bold text-xl">MomentWD</span>
            </Link>
            <nav className="flex space-x-6">
              <Link href="/" className="text-[hsl(118,5%,15%)] dark:text-[hsl(118,5%,90%)] hover:text-[hsl(142,76%,45%)] dark:hover:text-[hsl(142,76%,45%)]">
                首页
              </Link>
              <Link href="/timeline" className="text-[hsl(118,5%,15%)] dark:text-[hsl(118,5%,90%)] hover:text-[hsl(142,76%,45%)] dark:hover:text-[hsl(142,76%,45%)]">
                时间线
              </Link>
              <Link href="/upload" className="text-[hsl(118,5%,15%)] dark:text-[hsl(118,5%,90%)] hover:text-[hsl(142,76%,45%)] dark:hover:text-[hsl(142,76%,45%)]">
                上传
              </Link>
              <Link href="/login" className="text-[hsl(118,5%,15%)] dark:text-[hsl(118,5%,90%)] hover:text-[hsl(142,76%,45%)] dark:hover:text-[hsl(142,76%,45%)]">
                登录
              </Link>
            </nav>
          </div>
        </header>
        
        {children}
        
        <footer className="bg-[hsl(118,50%,90%)] dark:bg-[hsl(118,50%,10%)] mt-auto py-4">
          <div className="container mx-auto px-4 text-center text-[hsl(118,5%,35%)]">
            <p>© {new Date().getFullYear()} MomentWD - 保存您的票根回忆</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
