import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from 'node-fetch';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const token = process.env.GITHUB_TOKEN;

// Add the line below
const ROOT_URL = 'https://api.github.com';

app.use(cors());
app.use(bodyParser.json());


const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
})

app.get('/',(req,res)=>{
    const options = {
        headers:{
            Authorization:`token ${token}`
        }
    };
    fetch(`${ROOT_URL}/users`)
        .then(res => res.json())
        .then((userData) => {
              return res.json(userData);
        });
});

app.get('/users/:id',(req,res)=>{
    const username = req.params.id;
    // console.log( "Node Response: " + username);
    const options = {
        headers:{
            Authorization:`token ${token}`
        }
    };
    fetch(`${ROOT_URL}/users/${username}`)
        .then(res => res.json())
        .then((userData) => {
            //   console.log( "Node Response: " + JSON.stringify(userData));
              return res.json(userData);
        });
});

app.get('/users/:id/repos',(req,res)=>{
    const username = req.params.id;
    // console.log( "Node Response: " + username);
    const options = {
        headers:{
            Authorization:`token ${token}`
        }
    };
    fetch(`${ROOT_URL}/users/${username}/repos`)
        .then(res => res.json())
        .then((userData) => {
              console.log( "Node Response: " + JSON.stringify(userData));
              return res.json(userData);
        });
});