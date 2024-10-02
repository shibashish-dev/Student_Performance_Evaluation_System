import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img:{type:String},
    gender:{type:String},
    empcode:{type:String,required:true,unique:true},
    branch:{type:String},
    qualification:{type:String},
    designation:{type:String},
    doj:{type:Date},
    phone:{type:Number,unique:true,required:true, maxLength: 10, minLength: 10},
    email: {type: String,required: true, unique: true},
    password : { type:String , required:true, },
    role:{ type: String, default: 'teacher', },
    status: { type: String, default: 'pending' },
    subjects: [{
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'subjects' },
      name: { type: String } // Add name field to store subject name
  }]  
}, {timestamps:true});

const Teacher = mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema);

export default Teacher;
