'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Upload() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [ticketInfo, setTicketInfo] = useState({
    title: '',
    date: '',
    venue: '',
    price: '',
    description: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // 创建预览
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicketInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    
    try {
      // 这里将来会添加上传图片的逻辑
      // 和OCR提取信息的逻辑
      
      // 模拟上传延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 上传成功后跳转到时间线页面
      router.push('/timeline');
    } catch (error) {
      console.error('上传失败:', error);
      alert('上传失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-[var(--title)]">上传票根</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-4">
          <h2 className="text-xl font-semibold mb-4 text-[var(--title)]">上传照片</h2>
          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-[var(--muted)] file:text-[var(--primary-dark)]
                hover:file:bg-[var(--secondary)]"
            />
          </div>
          
          {preview && (
            <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
              <Image 
                src={preview} 
                alt="票根预览" 
                fill
                className="object-contain"
              />
            </div>
          )}
          
          <div className="text-sm opacity-80">
            <p>支持JPG、PNG格式的图片</p>
            <p>请确保图片清晰，以便系统能够准确提取信息</p>
          </div>
        </div>
        
        <div className="card p-4">
          <h2 className="text-xl font-semibold mb-4 text-[var(--title)]">票根信息</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                标题/名称
              </label>
              <input
                type="text"
                name="title"
                value={ticketInfo.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                日期
              </label>
              <input
                type="date"
                name="date"
                value={ticketInfo.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                场馆/地点
              </label>
              <input
                type="text"
                name="venue"
                value={ticketInfo.venue}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                价格
              </label>
              <input
                type="text"
                name="price"
                value={ticketInfo.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                描述
              </label>
              <textarea
                name="description"
                value={ticketInfo.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                rows={3}
              />
            </div>
            
            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                disabled={!file || loading}
                className={`px-4 py-2 rounded-md ${
                  !file || loading
                    ? 'bg-[var(--muted)] cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {loading ? '处理中...' : '保存票根'}
              </button>
              
              <Link href="/" className="px-4 py-2 border border-[var(--border)] rounded-md hover:bg-[var(--muted)]">
                取消
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 