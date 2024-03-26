require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.get('/',(req,res)=>{
    console.log("server connected");
})

app.listen(port,()=>{
    console.log(`server connected on http://localhost:${port}`);
})