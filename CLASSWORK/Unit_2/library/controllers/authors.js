import 'dotenv/config'
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from 'node-fetch';
import mongoose from "mongoose";
import Author from '../models/authorModel.js';

mongoose.connect(`${process.env.DATABAE_URL}`);

export default {
    getAuthors
}

async function getAuthors(req,res){
    const filter = {};
    console.log(`Get All Authors`);
    let authors = await Author.find(filter)
    console.log(JSON.stringify(authors));
    return res.json(authors);
}


// async function saveBook(req, res){
//     app.post('/books/add',async (req,res)=>{
    
//         console.log(req.body)
//         let reqName = req.body.name;
//         let reqAge = req.body.age;
//         console.log(`name = ${reqName} : ${reqAge}`)
        
//         const catObj = new Cat({ name: reqName, age: parseInt(reqAge) });
//         await catObj.save()
//         .then((cat) => {
//             res.sendStatus(200);
//             console.log(JSON.stringify(cat));
//         })
//         .catch((error) => {
//             console.log(error);
//             res.sendStatus(500);
//         });
//     });
// }
