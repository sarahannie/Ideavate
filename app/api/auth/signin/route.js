import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '@/app/lib/mongodb';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid password' },
        { status: 401 }
      );
    }

    // Create a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '10h' }
    );

    // Set the token as an HTTP-only cookie
    const response = NextResponse.json(
      { message: 'Sign in successful' },
      { status: 200 }
    );
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Sign-in error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
