const express = require('express');
const app = express();

app.use(express.urlencoded({ extend:true}));
app.use(express.json());

const router = express.Router();

app.use('/', router.get('/', (req, res, next) =>{
    res.status(200).send("<h1>API_CHAT</h1>")
}));

app.use("/",router.get("/sobre", (req,res,next) =>{
    res.status(200).send({
        "nome":"API-CHAT",
        "versão":"0.1.0",
        "autor":"cassiano"
    })
}));

module.exports = app;