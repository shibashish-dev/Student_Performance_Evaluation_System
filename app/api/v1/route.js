import Teacher from '@/Models/Teacher';
import Contact from '@/Models/Contact';
import Student from '@/Models/Student';
import Subjects from '@/Models/Subjects';
import { connectToDatabase } from '../../../lib/mongoose';
import { NextResponse } from 'next/server';

export async function GET(req){
    try {
        await connectToDatabase(); 
        const teacher = await Teacher.countDocuments({});
        const contact = await Contact.countDocuments({});
        const student = await Student.countDocuments({});
        const subject = await Subjects.countDocuments({});
        const allTeacher = await Teacher.find({})
        return NextResponse.json({ message: 'Connected to the database successfully!' , student , teacher , contact , subject , allTeacher})
      } catch (error) {
        return NextResponse.json({ message: 'Database connection failed.' });
      }
}