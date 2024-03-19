const express=require("express")
const cors=require("cors")
const app=express()
 
require("./mongoosconn01")
app.use(express.json())
app.use(cors())
const studentmodel=require("./studentschema02")
app.put("/",async(req,resp)=>
{
  const data=await studentmodel.updateOne({rollno:req.body.rollno},{$set:req.body})
  resp.send(data)
})
app.listen(4000)