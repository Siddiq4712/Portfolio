import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title : {type : String, required : true, unique : true},

    // Foreign Key as Skill
    stack : [{type : mongoose.Schema.Types.ObjectId, ref : 'Skill'}],
    highlights : [String],
    githubLink : String,
    liveLink : String,
    order : {type : Number, default : 0},
})

export default mongoose.model('Project', projectSchema);