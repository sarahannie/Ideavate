import { hash } from "bcryptjs"
import { NextResponse } from "next/server"
import clientPromise from "@/app/lib/mongodb"

export async function POST(request) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db()

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email })

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create user
    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      emailVerified: null, // Important for NextAuth
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(
      { success: true, message: "User created successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}