import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/post.js'
import mongoose from 'mongoose';
const app = express();

import dotenv from 'dotenv'

dotenv.config()
const port = process.env.HOST || 5000;


const URI = process.env.DATABASE_URL


app.use(bodyParser.json({limit:'30mb'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

app.use('/post', posts)


app.get('/', (req, res, next) => {
    res.send("SUCCESS") 
})
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB')
        app.listen(port, () => {
            console.log(`server is running on port   ${port}`)
        })


    })
    .catch((err) => {
        console.log('err:' + err)
    })




