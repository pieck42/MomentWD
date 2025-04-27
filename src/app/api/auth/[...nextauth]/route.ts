import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

// 此处只是简单的模拟示例
// 实际项目需要加入密码哈希处理等安全措施

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "邮箱", type: "email" },
        password: { label: "密码", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // 在实际应用中，需要查询数据库并验证密码
          // 这里只是简单示例，实际应用要使用安全的密码处理方法
          
          // 示例代码，查找用户
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (user && user.password === credentials.password) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image,
            };
          }
          
          return null;
        } catch (error) {
          console.error("认证错误:", error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // @ts-expect-error - 添加ID到session.user
        session.user.id = token.id;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST }; 