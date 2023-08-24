const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const categories = require('./data/catagores.json');

app.use(cors());

app.get('/',(req,res)=>{
    res.send('dragon is running')
})

app.get('/categories',(req,res)=>{
    res.send(categories);
})

app.listen(port,()=>{
    console.log(`dragon api is running port : ${port}`)
})