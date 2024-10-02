import { NextResponse } from 'next/server';
import Student from '@/Models/Student';
import { connectToDatabase } from '@/lib/mongoose';

export async function POST(req) {
    try {

        await connectToDatabase();
        const body = await req.json();

        const { id, phone, address, skills } = body;
        const updatedStudent = await Student.findByIdAndUpdate(id, { phone, address, skills }, { new: true } );

        if(!updatedStudent) {
            return NextResponse.json({ error: 'Student not found' }, { status: 404 });
        }
      
      return NextResponse.json({ message: 'Profile updated successfully', updatedStudent } , { status: 200 });
    } catch (error) {
      console.error('Error saving data:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }