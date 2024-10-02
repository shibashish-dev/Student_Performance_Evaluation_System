import { NextResponse } from 'next/server';
import Subjects from '@/Models/Subjects';
export async function GET(req, { params }) {
  const { id } = params;  // extract the dynamic id from params

  try {
    const subject = await Subjects.findById(id);
    
    if (!subject) {
      return NextResponse.json({ error: 'Subject not found' }, { status: 404 });
    }
    
    return NextResponse.json(subject);
  } catch (error) {
    console.error('Error fetching subjects:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
