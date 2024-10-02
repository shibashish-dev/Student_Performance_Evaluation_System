import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },

    // Teacher who assigned the assignment
    teacher: {
        id: { type: Schema.Types.ObjectId, ref: 'teachers', required: true },
        name: { type: String, required: true }
    },

    // List of students assigned the assignment
    students: [{
        studentId: { type: Schema.Types.ObjectId, ref: 'student', required: true },
        name: { type: String, required: true },
        isCompleted: { type: Boolean, default: false }, 
        submissionFile: { type: String }, 
        grade: { type: Number }
    }],

    // General information
    semester: { type: Number },
    submissionDate: { type: Date, required: true }, // Final date for submission

    // File related to the assignment (e.g., assignment file, guidelines)
    assignmentFile: { type: String , required: false },

}, { timestamps: true });

// Check if the model already exists, else create it
const Assignment = mongoose.models.Assignment || mongoose.model('Assignment', assignmentSchema);

export default Assignment;