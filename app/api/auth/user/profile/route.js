import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../[...nextauth]/route"
import clientPromise from "@/app/lib/mongodb"
import { put } from "@vercel/blob"

export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("profilePicture") 
    let profilePictureUrl = null

    if (file && file.size > 0) {
      const blob = await put(file.name, file, { access: "public" })
      profilePictureUrl = blob.url
    }

    const {
      firstName,
      lastName,
      otherName,
      dateOfBirth,
      gender,
      contact,
      maritalStatus,
      countryOfResidence,
      localGovernment,
      stateOfOrigin,
      address,
      nationality,
      nin,
      educationLevel,
      preferredLanguage,
      primaryInstitution,
      yearsOfExperience,
      portfolioWebsite,
    } = Object.fromEntries(formData)

    const client = await clientPromise
    const db = client.db()
    const usersCollection = db.collection("users")

    const updateData = {
      firstName,
      lastName,
      otherName,
      dateOfBirth,
      gender,
      contact,
      maritalStatus,
      countryOfResidence,
      localGovernment,
      stateOfOrigin,
      address,
      nationality,
      nin,
      educationLevel,
      preferredLanguage,
      primaryInstitution,
      yearsOfExperience,
      portfolioWebsite,
      updatedAt: new Date(),
    }

    if (profilePictureUrl) {
      updateData.profilePicture = profilePictureUrl
    }

    const result = await usersCollection.updateOne({ email: session.user.email }, { $set: updateData })

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "User not found or no changes made" }, { status: 404 })
    }

    return NextResponse.json(
      { message: "Profile updated successfully", profilePicture: profilePictureUrl },
      { status: 200 },
    )
  } catch (error) {
    console.error("Failed to update profile:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

