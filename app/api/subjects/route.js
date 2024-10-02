import { connectToDatabase } from '@/lib/mongoose';
import Subjects from '@/Models/Subjects';
import { NextResponse } from 'next/server';
export async function POST(req) {
    try {

      await connectToDatabase();
      // Parse JSON data from the request body  
      const data = await req.json();
      const { name , subcode } = data;
      let sub = await Subjects.findOne({ name })
      if(sub){
        return NextResponse.json({ error: 'Subject already exists' }, { status: 400 });
      }
      const subject = new Subjects({ name , subcode });

      return NextResponse.json({ message: 'Subject Added successfully' , subject});
    } catch (error) {
      console.error('Error saving data:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  
  

  export async function GET(req) {
    try {
      const subjects = await Subjects.find();
      return NextResponse.json({  message: 'Data saved successfully' , subjects})
    }catch(error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

  }