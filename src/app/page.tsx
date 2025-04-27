import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-[var(--background)] via-[var(--background)] lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            <span className="text-lg font-bold text-[var(--primary)]">MomentWD</span> - 票根记录工具
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center my-12">
        <h1 className="text-4xl font-bold text-[var(--title)]">MomentWD 票根记录</h1>
        <div className="absolute -z-10 h-[180px] w-[180px] rounded-full bg-[var(--muted)] blur-3xl opacity-30"></div>
      </div>

      <div className="mb-32 grid gap-6 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Link
          href="/upload"
          className="card hover-lift group px-5 py-6 transition-all hover:shadow-lg"
        >
          <div className="absolute top-0 right-0 h-20 w-20 bg-[var(--accent)] opacity-5 rounded-bl-full"></div>
          <h2 className="mb-3 text-2xl font-semibold text-[var(--title)]">
            上传票根{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-80">
            上传票根照片，自动提取信息
          </p>
        </Link>

        <Link
          href="/timeline"
          className="card hover-lift group px-5 py-6 transition-all hover:shadow-lg"
        >
          <div className="absolute top-0 right-0 h-20 w-20 bg-[var(--primary)] opacity-5 rounded-bl-full"></div>
          <h2 className="mb-3 text-2xl font-semibold text-[var(--title)]">
            时间线{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-80">
            查看您收集的所有票根记录
          </p>
        </Link>

        <Link
          href="/login"
          className="card hover-lift group px-5 py-6 transition-all hover:shadow-lg"
        >
          <div className="absolute top-0 right-0 h-20 w-20 bg-[var(--secondary)] opacity-5 rounded-bl-full"></div>
          <h2 className="mb-3 text-2xl font-semibold text-[var(--title)]">
            登录/注册{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-80">
            登录或注册账号以保存您的票根收藏
          </p>
        </Link>
      </div>

      <footer className="w-full mt-20 text-center text-sm opacity-60">
        <p>MomentWD - 记录美好时刻的票根收藏工具</p>
      </footer>
    </main>
  )
}
