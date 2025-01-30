import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import clientPromise from "@/app/lib/mongodb";
import { put } from "@vercel/blob";


export async function POST(request) {
  try {
    // Check if the user is authenticated
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Parse the form data
    const formData = await request.formData();
    
    // Handle file upload for pitch deck
    let pitchDeckUrl = null;
    const pitchDeckFile = formData.get('pitchDeck');
    if (pitchDeckFile && pitchDeckFile.size > 0) {
      const blob = await put(pitchDeckFile.name, pitchDeckFile, { access: 'public' });
      pitchDeckUrl = blob.url;
    }

    // Prepare the data for database insertion
    const ideaData = {
      userId: session.user.id, // Assuming the session includes the user's ID
      title: formData.get('title'),
      category: formData.get('category'),
      description: formData.get('description'),
      stage: formData.get('stage'),
      fundingGoals: formData.get('fundingGoals'),
      timelineEstimate: formData.get('timelineEstimate'),
      problem: formData.get('problem'),
      monetization: formData.get('monetization'),
      potentialEarnings: formData.get('potentialEarnings'),
      competitors: formData.get('competitors'),
      marketChange: formData.get('marketChange'),
      idealCustomer: formData.get('idealCustomer'),
      pitchDeckUrl: pitchDeckUrl,
      videoPitchLink: formData.get('videoPitchLink'),
      fundingMotivation: formData.get('fundingMotivation'),
      significantAchievement: formData.get('significantAchievement'),
      fundingJustification: formData.get('fundingJustification'),
      status: "waiting",
      submittedAt: new Date(),
    };

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();

    // Insert the idea into the database
    const result = await db.collection('ideas').insertOne(ideaData);

    return NextResponse.json({ 
      message: "Idea submitted successfully", 
      ideaId: result.insertedId 
    }, { status: 201 });

  } catch (error) {
    console.error("Failed to submit idea:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
export async function GET(request) {
    try {
      // Check if the user is authenticated
      const session = await getServerSession(authOptions)
      if (!session) {
        return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
      }
  
      // Connect to MongoDB
      const client = await clientPromise
      const db = client.db()
  
      // Fetch ideas from the database
      const ideas = await db.collection("ideas").find({ userId: session.user.id }).toArray()
  
      return NextResponse.json(ideas)
    } catch (error) {
      console.error("Failed to fetch ideas:", error)
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
  }

  