import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-[hsl(118,100%,95%)] via-[hsl(118,100%,95%)] dark:from-[hsl(118,50%,10%)] dark:via-[hsl(118,50%,10%)] lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            MomentWD - 票根记录工具
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold text-[hsl(142,76%,45%)]">MomentWD 票根记录</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Link
          href="/upload"
          className="group card p-5 transition-all hover:border-[hsl(118,30%,50%)] hover:bg-[hsl(118,30%,85%)] hover:dark:border-[hsl(118,30%,35%)] hover:dark:bg-[hsl(118,50%,15%)]"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-[hsl(142,76%,45%)]`}>
            上传票根{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
            上传票根照片，自动提取信息
          </p>
        </Link>

        <Link
          href="/timeline"
          className="group card p-5 transition-all hover:border-[hsl(118,30%,50%)] hover:bg-[hsl(118,30%,85%)] hover:dark:border-[hsl(118,30%,35%)] hover:dark:bg-[hsl(118,50%,15%)]"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-[hsl(142,76%,45%)]`}>
            时间线{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
            查看您收集的所有票根记录
          </p>
        </Link>

        <Link
          href="/login"
          className="group card p-5 transition-all hover:border-[hsl(118,30%,50%)] hover:bg-[hsl(118,30%,85%)] hover:dark:border-[hsl(118,30%,35%)] hover:dark:bg-[hsl(118,50%,15%)]"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-[hsl(142,76%,45%)]`}>
            登录/注册{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
            登录或注册账号以保存您的票根收藏
          </p>
        </Link>
      </div>
    </main>
  )
}
