import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
    name: {type: String, required: true,unique: true },
    subcode:{type:String,required: true,unique: true},

}, {timestamps:true});

const subjects = mongoose.models.subjects || mongoose.model('subjects', subjectSchema);

export default subjects;
