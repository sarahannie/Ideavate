import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/route";
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db();
    const user = await db.collection('users').findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Only return non-sensitive user data
    return NextResponse.json({
      id: user._id,
      name: user.name,
      email: user.email,
      // Add any other fields you want to expose to the client
    });
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}