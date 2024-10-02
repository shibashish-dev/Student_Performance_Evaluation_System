import { connectToDatabase } from '@/lib/mongoose';
import Student from '@/Models/Student';
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
      const student = await Student.findOne({ email:email })
    
      if (!student) {
        return NextResponse.json({ error: "User Not Found !" });
      } 
      const passwordCompare = await bcrypt.compare(password,student.password)
      if(!passwordCompare){
        return NextResponse.json({success:false,error:"Invalid Credentials !"})
    }
      const userData = {
        student:{
            id:student.id,
            name:student.name,
            email:student.email,
            
        }
    }
      const authToken = jwt.sign(userData,process.env.JWT_SECRET, { expiresIn: '1h' })
      return NextResponse.json({ message: 'Data saved successfully' , token:authToken , role:student.role });
    } catch (error) {
      console.error('Error saving data:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  
  

  export async function GET(req) {
    try {
      const userId = await authenticate(req)
      const user = await Student.findById(userId);
      return NextResponse.json({ user })
    }catch(error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

  }