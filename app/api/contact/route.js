import Contact from '@/Models/Contact';
import { connectToDatabase } from '../../../lib/mongoose';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await connectToDatabase(); 
    const count = await Contact.countDocuments({});
    return NextResponse.json({message: 'Connected to the database successfully!' , count });
  } catch (error) {
    return NextResponse.json({message: 'Database connection failed.' });
  }
}

// You can add other methods (e.g., POST) here if needed
export async function POST(req) {
    try {
      await connectToDatabase();
      const data = await req.json();

    // Now you can access the data from the request body
    const { name , email , message} = data; 
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' });
      }
  
      const contact = await Contact.create({name,email, message})
      return NextResponse.json({ success:true ,  message: 'Data saved successfully!' });
    } catch (error) {
        console.error(error)
      return NextResponse.json({ success:false ,  message: 'Failed to save data.' });
    }
  }