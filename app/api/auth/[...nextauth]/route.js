import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/app/lib/mongodb'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn({ user, account, profile }) {
      const { name, email } = user;
      const client = await clientPromise;
      const db = client.db();
    
      if (account.provider === "google") {
        const existingUser = await db.collection('users').findOne({ email });
    
        if (!existingUser) {
          // Create a new user if none exists
          await db.collection('users').insertOne({
            name,
            email,
            googleId: profile.sub,
            createdAt: new Date(),
          });
        } else if (!existingUser.googleId) {
          // If user exists but Google account is not linked, link it
          await db.collection('users').updateOne(
            { email },
            { $set: { googleId: profile.sub } }
          );
        }
      }
      
      // Always return true to allow sign-in
      return true;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  pages: {
    signIn: '/signin',
    error: '/signup',  // Redirect to the signin page for errors
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

