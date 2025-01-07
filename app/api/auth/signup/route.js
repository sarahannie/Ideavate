import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'

export async function GET() {
  try {
    // Await the MongoDB connection
    const client = await clientPromise;
    const db = client.db(); // Access the default database

    // Optionally, list collections to confirm the connection
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((col) => col.name);

    return NextResponse.json(
      {
        message: 'MongoDB connection successful',
        collections: collectionNames,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return NextResponse.json(
      {
        message: 'Failed to connect to MongoDB',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
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

