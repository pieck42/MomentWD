import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// 模拟用户数据，用于快速部署
const mockUsers = [
  {
    id: '1',
    name: '测试用户',
    email: 'test@example.com',
    password: 'password123',
    image: null
  }
];

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
          // 使用模拟数据而不是数据库
          const user = mockUsers.find(user => user.email === credentials.email);

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