import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    name : {type : String, required : true, unique : true},
    category : {
        type : String,
        enum : ['Language', 'Stack', 'Tool', 'Core Cs'],
        required : true
    },
    level : {type : String, default : 'Intermediate'},
})

export default mongoose.model('Skill', skillSchema);