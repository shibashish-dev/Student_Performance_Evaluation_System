import { connectToDatabase } from '@/lib/mongoose';
import Student from '@/Models/Student';
import Teacher from '@/Models/Teacher';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'
import { authenticate } from '../../../../middleware/auth';
export async function POST(req) {
  try {
    await connectToDatabase();

    // Parse JSON data from the request body  
    const data = await req.json();
    const { email, password, role } = data;

    let user = null;  // Generic variable to store the found user (student or teacher)

    if (role === 'student') {
      user = await Student.findOne({ email });
      if (!user) {
        return NextResponse.json({ error: "Student Not Found!" });
      }
    } else if (role === 'teacher') {
      user = await Teacher.findOne({ email });
      if (!user) {
        return NextResponse.json({ error: "Teacher Not Found!" });
      }
      // Check if the teacher is approved
      if (user.status !== 'approved') {
        return NextResponse.json({ error: "User Not Approved!" });
      }
    }

    // If we reach here, the user (either student or teacher) is found
    // Now, check the password
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return NextResponse.json({ success: false, error: "Invalid Credentials!" });
    }

    // Create the JWT payload
    const userData = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
    };

    // Generate the JWT token
    const authToken = jwt.sign(userData, process.env.JWT_SECRET);

    // Return the JWT token
    return NextResponse.json({ message: 'Login successful', token: authToken });

  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



//   export async function GET(req) {
//     try {
//       const userId = await authenticate(req)

//       const user = await Student.findById(userId);
//       return NextResponse.json({ user })
//     }catch(error) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//   }
export async function GET(req) {
  try {
    // Authenticate the user and get their ID and role
    const { userId, role } = authenticate(req);

    let user = null;

    // Check role and fetch the user accordingly
    if (role === 'student') {
      user = await Student.findById(userId);
      if (!user) {
        return NextResponse.json({ error: 'Student not found' }, { status: 404 });
      }
    } else if (role === 'teacher') {
      user = await Teacher.findById(userId);
      if (!user) {
        return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
      }
    } else {
      return NextResponse.json({ error: 'Invalid user role' }, { status: 400 });
    }

    // Return the found user data
    return NextResponse.json({ user });

  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}