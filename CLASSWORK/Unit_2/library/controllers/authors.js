import 'dotenv/config'
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from 'node-fetch';
import mongoose from "mongoose";
import Author from '../models/authorModel.js';

mongoose.connect(`${process.env.DATABAE_URL}`);

export default {
    getAuthors,
    getAuthorById,
    getAuthorByName,
    saveAuthor
}

async function getAuthors(req,res){
    const filter = {};
    console.log(`Get All Authors`);
    let authors = await Author.find(filter)
    console.log(JSON.stringify(authors));
    return res.json(authors);
}

async function getAuthorById(req,res){
    console.log(`Author Id : ` + req.params.id);
    const filter = {_id: `${req.params.id}`};
    console.log(`An Authors`);
    let author = await Author.findOne(filter)
    console.log(JSON.stringify(author));
    return res.json(author);
}

async function getAuthorByName(authorName){
    console.log(`authorObj id for book = ${authorName}`)
    const filter = {"name": `${authorName}`};
    let author = await Author.findOne(filter)
    return author;
}

// save author
async function saveAuthor(authorName){
    const newAuthor = new Author({
        name: authorName
    })

    let saveResult = null;
    try{
        saveResult =  await newAuthor.save();
    }catch{
        saveResult = null;
    }
    return saveResult;
}
