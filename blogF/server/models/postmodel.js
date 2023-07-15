import mongoose from "mongoose";


const schema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
        default:"tuogn"
    },
    attachment: String,
    likeCount:{
        type:Number,
        default:0
    }

},{timestamps:true})


export const postmodel = mongoose.model('posts',schema)