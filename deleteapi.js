const cors=require("cors")
const express=require("express")
const app=express()
require("./mongoosconn01")
const student=require("./studentschema02")
app.use(express.json())
app.use(cors())
app.delete("/",async (req,resp)=>
{
  const data=await student.deleteOne({rollno:req.body.rollno})
  resp.send(data)
})
app.listen(4000)