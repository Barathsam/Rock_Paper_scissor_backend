const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
let User = require('./Users');
const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/StonePaperScissor")
.then(() => console.log('Connected!'))
.catch((err)=>console.error(err));

app.post('/users', async function(req, res){
    try{
         const user = await User.create({name:req.body.name, status:req.body.status})
        console.log(req.body);
    }catch(err){
        console.error("Not Inserted",err);
    }
})

app.get('/users', async function(req, res){
    try{
        const users = await User.find({}).limit(10);
        res.json(users);
    }catch(err){
        console.error("Cant read",err);
    }
})

app.listen(3002);


