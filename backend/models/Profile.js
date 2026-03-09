import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    name : {type : String, default : 'Mohamed Abubacker Siddiq H'},
    role : {type : String, default : "Full Stack Developer"},
    location :  String,
    contact : {
        email : String,
        phone : String,
    },
    socials : {
        github : String,
        linkedin : String,
        leetCode : String,
    },
    bio : String,
})

export default mongoose.model('Profile', profileSchema);