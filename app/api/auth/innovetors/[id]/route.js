import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import clientPromise from "@/app/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET(request, { params }) {
  try {
    // Check if the user is authenticated
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const id = params.id

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()

    // Fetch the idea from the database
    const idea = await db.collection("ideas").findOne({ _id: new ObjectId(id) })

    if (!idea) {
      return NextResponse.json({ error: "Idea not found" }, { status: 404 })
    }

    return NextResponse.json(idea)
  } catch (error) {
    console.error("Failed to fetch idea:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

