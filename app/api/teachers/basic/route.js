import Teacher from '@/Models/Teacher';
import { connectToDatabase } from '../../../lib/mongoose';
import { NextResponse } from 'next/server';

export async function GET(req){
    try {
        await connectToDatabase(); 
        const count = await Teacher.countDocuments({});
        return NextResponse.json({ message: 'Connected to the database successfully!' , count })
      } catch (error) {
        return NextResponse.json({ message: 'Database connection failed.' });
      }
}