import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogsDB from "./data/dogs.js"
import fetch from 'node-fetch';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({
        message: 'Hello MEVN env !!'
    })
});


const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
})

app.get('/dogs',(req,res)=>{
    res.json(dogsDB.dogs);
        // dogsDB.getAll().then(dogs => {res.json(dogs)});
});

app.get('/dogs/:id',(req,res)=>{
    res.json(dogsDB.getDogById(Number(req.params.id)));
});


app.get('/node/facts',(req,res)=>{
    fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => response.json())
    .then((body) => {
        //   console.log("Node Response: " + body);
          return res.json(body);
    }); 
});


const p = new Promise(function(resolve, reject){
    setTimeout(function(){
        // resolve('Timed OUt !!');
        reject('Something went wrong');
    },2000);
    
});

console.log(p);
p.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err);
})


function asyncAdd(a, b, delay){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve(a+b);
        }, delay);
    })
}

(async function(){
    let sum = await asyncAdd(5,10,2000);
    console.log(sum);
    sum = await asyncAdd(sum, 100, 1000);
    console.log(sum);
    sum = await asyncAdd(sum, 1000, 2000);
    console.log(sum);
})();

// asyncAdd(5,10, 2000).then(function(sum){
//     console.log(sum);
//     return asyncAdd(sum, 100, 1000);
// }).then(function(sum){
//     console.log(sum);
//     return asyncAdd(sum, 1000, 2000)
// }).then((function(sum){
//     console.log(sum);
// }));

