
import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Octokit } from "octokit";
const accessToken = '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';
const API_URL = 'https://api.github.com/'



const app = express()

app.use(cors())
app.use(bodyParser.json())
app.get('/', (request, res) => {
    res.json({
        message: 'Hello MEVN env!'
    })
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

app.get('/users/:user', async (request, response) =>{
const user =  request.params.user
const data = await octokit.request(`GET /users/${user}`)
response.json(data)
})


app.get('/repos/:user/:repos', async (request, response) =>{
    console.log('hello');
const user =  request.params.user
const repos =  request.params.repos
const data = await octokit.request(`GET /repos/${user}/${repos}`)
response.json(data)
})




