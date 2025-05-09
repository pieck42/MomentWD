'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// 模拟票根数据类型
type TicketStub = {
  id: string;
  title: string;
  date: string;
  venue: string;
  price: string;
  imageUrl: string;
  description: string;
};

// 模拟的票根数据
const mockTicketStubs: TicketStub[] = [
  {
    id: '1',
    title: '周杰伦演唱会',
    date: '2025-05-01',
    venue: '北京国家体育场',
    price: '¥1080',
    imageUrl: '/placeholder-ticket.jpg',
    description: '周杰伦2025世界巡回演唱会',
  },
  {
    id: '2',
    title: '流浪地球3',
    date: '2025-01-22',
    venue: 'IMAX影城',
    price: '¥80',
    imageUrl: '/placeholder-ticket.jpg',
    description: '科幻大片',
  },
  {
    id: '3',
    title: '西湖荷花节',
    date: '2024-07-15',
    venue: '杭州西湖',
    price: '¥30',
    imageUrl: '/placeholder-ticket.jpg',
    description: '夏季西湖荷花盛会',
  },
];

export default function Timeline() {
  const [ticketStubs, setTicketStubs] = useState<TicketStub[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟数据加载
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      setTicketStubs(mockTicketStubs);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center min-h-[60vh]">
        <p className="text-xl text-[var(--primary)]">加载中...</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[var(--title)]">我的票根时间线</h1>
        <Link 
          href="/upload"
          className="btn-primary px-4 py-2 rounded-md"
        >
          添加票根
        </Link>
      </div>
      
      {ticketStubs.length === 0 ? (
        <div className="text-center py-16 card">
          <p className="text-xl text-[var(--primary)] mb-4">还没有收藏任何票根</p>
          <Link 
            href="/upload"
            className="btn-primary px-4 py-2 rounded-md"
          >
            上传第一张票根
          </Link>
        </div>
      ) : (
        <div className="relative border-l-2 border-[var(--border)] ml-3 pl-8 space-y-10">
          {ticketStubs.map((ticket) => (
            <div key={ticket.id} className="relative">
              {/* 时间线上的圆点 */}
              <div className="absolute w-4 h-4 bg-[var(--primary)] rounded-full -left-[38px] top-0 mt-1"></div>
              
              <div className="card overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold mb-2 text-[var(--title)]">{ticket.title}</h2>
                    <span className="bg-[var(--muted)] text-[var(--primary-dark)] text-xs font-medium px-2.5 py-0.5 rounded">
                      {ticket.price}
                    </span>
                  </div>
                  
                  <div className="text-sm mb-2">
                    <div className="flex gap-2 mb-1">
                      <span className="font-medium text-[var(--primary)]">日期:</span>
                      <span>{ticket.date}</span>
                    </div>
                    <div className="flex gap-2 mb-1">
                      <span className="font-medium text-[var(--primary)]">场馆:</span>
                      <span>{ticket.venue}</span>
                    </div>
                  </div>
                  
                  {ticket.description && (
                    <p className="mb-3">{ticket.description}</p>
                  )}
                  
                  {/* 票根占位图 */}
                  <div className="aspect-[2/1] relative rounded-lg overflow-hidden bg-[var(--muted)] flex justify-center items-center">
                    <p className="text-[var(--primary)]">票根照片</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
} 