import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username : {
        type: String,
        required : true ,
        unique : true
    },
    password : {
        type: String ,
        required : true
    },
    moviename: {
        type: String,
        required : true ,
        unique : true,
        
    },
    language : {
        type: String 
    },
    duration : {
        type : Number 
    },
    year : {
        type : Number 
    },
    genre : {
        type : String 
    },
    description : {
        type : String 
    },
    rating : {
        type : Number
    },
    vote : {
        type : String
    }
});

export default mongoose.model.Movies || mongoose.model("Movie", schema);
