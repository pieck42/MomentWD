'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // 这里将来会添加实际的登录/注册逻辑
      
      // 模拟延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 登录成功后跳转到首页
      router.push('/');
    } catch (error) {
      console.error(isLogin ? '登录失败:' : '注册失败:', error);
      alert(isLogin ? '登录失败，请重试' : '注册失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto p-4 max-w-md min-h-[80vh] flex flex-col justify-center">
      <div className="card p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-[var(--title)]">
          {isLogin ? '登录账号' : '创建新账号'}
        </h1>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-[var(--primary)]">
                用户名
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[var(--primary)]">
              电子邮箱
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-[var(--primary)]">
              密码
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 rounded-md ${
              loading
                ? 'bg-[var(--muted)] cursor-not-allowed'
                : 'btn-primary'
            }`}
          >
            {loading ? '处理中...' : isLogin ? '登录' : '注册'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[var(--primary)] hover:underline"
          >
            {isLogin ? '没有账号？创建新账号' : '已有账号？登录'}
          </button>
        </div>
        
        <div className="mt-4 text-center">
          <Link href="/" className="text-[var(--foreground)] opacity-60 hover:underline text-sm">
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
} 