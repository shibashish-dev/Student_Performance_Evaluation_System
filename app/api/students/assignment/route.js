import { NextResponse } from 'next/server';

// /home/shibashish/Documents/spes_Next/app/api/students/assignment/route.js


// Mock data for assignments
const assignments = [
    { id: 1, title: 'Assignment 1', semester: 1 },
    { id: 2, title: 'Assignment 2', semester: 2 },
    { id: 3, title: 'Assignment 3', semester: 1 },
    { id: 4, title: 'Assignment 4', semester: 3 },
];

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const semester = parseInt(searchParams.get('semester'), 10);

    if (isNaN(semester)) {
        return NextResponse.json({ error: 'Invalid semester' }, { status: 400 });
    }

    const filteredAssignments = assignments.filter(
        (assignment) => assignment.semester === semester
    );

    return NextResponse.json(filteredAssignments);
}