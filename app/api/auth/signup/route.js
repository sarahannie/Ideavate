import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@auth/mongodb-adapter'



export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user
        const client = await clientPromise
        const db = client.db()
        const existingUser = await db.collection('users').findOne({ email })

        if (!existingUser) {
          await db.collection('users').insertOne({
            name,
            email,
            googleId: user.id,
          })
        }
      }
      return true
    },
  },
}

const handler = NextAuth(authOptions)

export const GET = handler

export async function POST(request) {
  if (request.headers.get("x-google-signin") === "true") {
    return handler(request)
  }
  
  try {
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { message: 'Invalid JSON payload' },
        { status: 400 }
      );
    }

const { name, email, password } = body;

    const client = await clientPromise
    const db = client.db()
    console.log("Connected to database:", db.databaseName);

    const existingUser = await db.collection('users').findOne({ email })

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      )
    }
    console.log("Existing user check:", existingUser);
    const hashedPassword = await hash(password, 12)

    const result = await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
    })

    return NextResponse.json(
      { message: 'User created', userId: result.insertedId },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

