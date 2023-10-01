
import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
const Root_URL = 'https://api.github.com/'
const token = process.env.GITHUB_TOKEN;



const app = express()

app.use(cors())
app.use(bodyParser.json())


const ROOT_URL = "https://api.github.com";
const options = {
  headers: {
    Authorization: `token ${token}`,
  },
};

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get("/user/:user", async (req, res) => {
    const userName = req.params.user;
    const result = await fetch(`${ROOT_URL}/users/${userName}`, options).then(
      (res) => res.json()
    );
    res.json(result);
  });
  
  app.get("/repo/:user/:reponame", async (req, res) => {
    const userName = req.params.user;
    const repoName = req.params.reponame;
    const result = await fetch(
      `${ROOT_URL}/repos/${userName}/${repoName}`,
      options
    ).then((res) => res.json());
    res.json(result);
  });




