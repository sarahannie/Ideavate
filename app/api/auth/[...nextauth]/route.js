import dotenv from 'dotenv';
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { compare } from "bcryptjs"
import clientPromise from "@/app/lib/mongodb"

export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required")
        }

        const client = await clientPromise
        const db = client.db()
        const user = await db.collection("users").findOne({ 
          email: credentials.email 
        })

        if (!user) {
          throw new Error("User not found")
        }

        // For Google-authenticated users who try to use credentials
        if (!user.password) {
          throw new Error("Please sign in with Google")
        }

        const isPasswordValid = await compare(
          credentials.password, 
          user.password
        )

        if (!isPasswordValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "Annie", // specify your DB name if needed
  }),
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client
      if (session.user) {
        session.user.id = token.sub || user?.id
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    error: "/auth/error",
    newUser: "/signup" // New users will be directed here on first sign in
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET ,
  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }