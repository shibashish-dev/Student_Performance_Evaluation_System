import { connectToDatabase } from '@/lib/mongoose';
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
     
       
      const { email,  password } = data;
      console.log('Raw Request Body:',email,  password );
      const teacher = await Teacher.findOne({ email:email })
    
      if (!teacher) {
        return NextResponse.json({ error: "User Not Found !" });
      }
      if (teacher.status !== 'approved') {
        return NextResponse.json({ error: "User is not active !" });
      }
      const passwordCompare = await bcrypt.compare(password,teacher.password)
      if(!passwordCompare){
        return NextResponse.json({success:false,error:"Invalid Credentials !"})
    }
      const userData = {
        teacher:{
            id:teacher.id,
            name:teacher.name,
            email:teacher.email,
            
        }
    }
      const authToken = jwt.sign(userData,process.env.JWT_SECRET, { expiresIn: '1h' })
      return NextResponse.json({ message: 'Data saved successfully' , token:authToken , role:teacher.role });
    } catch (error) {
      console.error('Error saving data:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  
  

  export async function GET(req) {
    try {
      const userId = await authenticate(req)
      const user = await Teacher.findById(userId);
      return NextResponse.json({ user })
    }catch(error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

  }