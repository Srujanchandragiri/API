
const express = require('express');
const mongoose = require('mongoose');
const BrandName =require('./model');

const app =express();

app.use(express.json())

mongoose.connect('mongodb+srv://Srujan:Srujanc12@atlascluster.gjrriix.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology:true,
    useNewUrlParser:true
    }).then(
    ()=>console.log('DB connected')
).catch(err => console.log(err))

app.post('/addbrands',async(req,res) => {
 
 const{brandname} = req.body;
    try{
        const newData = new BrandName({brandname});
        await newData.save();
        return res.send( BrandName.find())

 }
 catch(err){
    console.log(err.message);
 }
})



app.listen(4040,()=>console.log('Server running... '))
