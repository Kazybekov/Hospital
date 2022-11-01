import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

mongoose
.connect(
'mongodb+srv://admin:admin@cluster0.c7vejtp.mongodb.net/?retryWrites=true&w=majority'
).then(()=> console.log("DB ok")).catch((err)=> console.log("DB error",err));


const app = express();

app.use(express.json());

app.get('/',(req,res) =>{
  res.send("123 3333 qwe");
})

app.post('/login',(req,res)=>{
  console.log(req.body);

  const token = jwt.sign(
    {
      email: req.body.email,
      name: "ol ol",
    },
      'secret123',
    );

    res.json({
        success:true,
        token,
        });
})

app.listen(4444,(err) =>{
  if (err){
    return console.log(err);
}
  console.log("Server ok")
})
