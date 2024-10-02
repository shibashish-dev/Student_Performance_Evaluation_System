import mongoose from 'mongoose';
const { Schema } = mongoose;
const studentSchema = new Schema({
  name: {type: String,required: true},
  img:{type:String},
  redgno :{type:Number,unique:true},
  branch :{type:String},
  academic :{type:String},
  semester:{type:Number},
  gender :{type:String},
  dob :{type:Date},
  email: {type: String,required: true,unique:true},
  phone: {type: Number,required: true,unique:true, maxLength: 10, minLength: 10},
  schoolMark:{type:Number},
  intermediateMark:{type:Number},
  subjects: [{
    id: { type: Schema.Types.ObjectId, ref: 'subjects' },
    name: { type: String } // Add name field to store subject name
}],
  skills :[{type:String}],
  guardianName:{type:String},
  guardianContact:{type:Number,required:true,maxLength: 10, minLength: 10},
  address:{type:String},
  performanceScore: { type: Number, default: 0 },
  password : {type:String ,required:true},
  role:{type:String,default:'student'}, 
  marks: [{
  subject: {type: Schema.Types.ObjectId, ref: 'subjects'},
  title:{type:String},
  mark: { type: Number, default: 0 },
  qas:{ type: Number, default: 0 }
}],
  
  attendance: [{ 
    sem: { type: String, required: true },
    month:{type:String,required:true},
    details:[{
    subject: { type: Schema.Types.ObjectId, ref: 'subjects', required: true },
    title:{type:String},
   presentNo : {type:Number},
   totalClass : {type:Number}
   
  }]
    }],
 
},{timestamps:true});

const student = mongoose.models.student || mongoose.model('student', studentSchema);

export default student;
