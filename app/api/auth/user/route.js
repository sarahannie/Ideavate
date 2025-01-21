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
      image: user.image,
      profilePicture: user.profilePicture,
      firstName: user.firstName,
      lastName: user.lastName,
      otherName: user.otherName,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      contact: user.contact,
      maritalStatus: user.maritalStatus,
      localGovernment: user.localGovernment,
      address:user.address,
      countryOfResidence: user.countryOfResidence,
      educationLevel:user.educationLevel,
      nationality:user.nationality,
      nin:user.nin,
      portfolioWebsite:user.portfolioWebsite,
      preferredLanguage:user.preferredLanguage,
      primaryInstitution:user.primaryInstitution,
      stateOfOrigin: user.stateOfOrigin,      
      yearsOfExperience: user.yearsOfExperience,
      stateOfOrigin: user.stateOfOrigin
      // Add any other fields you want to expose to the client
    });
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// import { NextResponse } from 'next/server';
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../[...nextauth]/route";
// import clientPromise from '@/app/lib/mongodb';

// export async function GET() {
//   try {
//     const session = await getServerSession(authOptions);
//     if (!session) {
//       return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
//     }

//     const client = await clientPromise;
//     const db = client.db();
//     const user = await db.collection('users').findOne({ email: session.user.email });

//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 });
//     }

//     // Convert MongoDB ObjectId to string
//     const userObject = JSON.parse(JSON.stringify(user));

//     // Remove sensitive information
//     delete userObject.password;
//     delete userObject.resetPasswordToken;
//     delete userObject.resetPasswordExpires;

//     // Return all non-sensitive user data
//     return NextResponse.json(userObject);
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }