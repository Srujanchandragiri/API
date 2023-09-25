const express = require('express');
const mongoose = require('mongoose');
const BrandName =require('./model');

const app = express();

app.use(express.json())

mongoose.connect('mongodb+srv://Srujan:Srujanc12@atlascluster.gjrriix.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(
    ()=>console.log('DB connected')
).catch(err => console.log(err))


 
app.post('/addbrands',async (req,res) =>{
    
    try{
        // const newData = new BrandName({brandname})
        // await newData.save();
        // return res.json( BrandName.find())
        console.log("response",req.body);

        return res.json("Done!");

    }
    catch(err){
        console.log(err.message);
        return res.json("Error!,Please try again");
    }
}) 

app.listen(6050,()=>console.log('Server running... '))
