// app/api/signup/route.js
import { connectToDatabase } from '@/lib/mongoose';
import Teacher from '@/Models/Teacher';
import bcrypt from 'bcrypt'; 
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';






const uploadDir = path.join(process.cwd(), 'public/uploads/teachers');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const  generateRandomAlphanumericCode = async (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const hashPassword = async (password) => {
    // Hashing using bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword;
  }
export async function POST(req) {
  try {

    await connectToDatabase();
    // Parse JSON data from the request body  
    const formData = await req.formData();
    const data = {};
    
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
     
    const { name, email, gender, phone, doj, branch, qualification, designation, password , img} = data;
    console.log('Raw Request Body:', name, email, gender, phone, doj, branch, qualification, designation, password ,img);

    const empcode = await generateRandomAlphanumericCode(8); // Generates an 8-character alphanumeric code
    const hashedPassword = await hashPassword(password);
    const existingTeacher = Teacher.findOne({ email })
    if(existingTeacher) {
      return NextResponse.json({ message: 'User Already Exists Please Login.' });
    } 

    // Save data to the database
    const teacher = await Teacher.create({
        name, email, gender, phone, doj, branch, qualification, designation, password:hashedPassword ,empcode,img
    })

    return NextResponse.json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
