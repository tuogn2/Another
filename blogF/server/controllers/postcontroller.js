import express from 'express'
import { postmodel } from '../models/postmodel.js';

const router = express.Router()

export const getposts = async (req,res)=>{
    try {
        const posts = await postmodel.find()
        console.log("posts")
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({error:err}); // 500 là lỗi từ server 
    } 
}

export const createpost = async(req,res)=>{
    try {
        const newPost = req.body
        const post =new postmodel(newPost);
        await post.save()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({error}); // 500 là lỗi từ server 

        
    }
}


export const updatepost= async (req,res)=>{
    try {
        const updatepost = req.body
        // posts.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        const post = await postmodel.findByIdAndUpdate(updatepost._id,{
            $set:updatepost
        },{new:true})
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({error}); // 500 là lỗi từ server 
        
    }
}

