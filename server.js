const express= require('express')
const app=express()
require("dotenv").config()
const connectDB= require('./config/db')
const path = require("path");


connectDB()

app.use(express.json({extended:true}))



if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
}

app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/guests', require('./routes/guest'))

const PORT= process.env.PORT || 5000
app.listen(PORT, () => console.log(`server started at ${PORT}`) )