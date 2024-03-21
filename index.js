const express=require("express")
const cors=require("cors")
const app=express()

require("./mongoosconn01")
app.use(express.json())
app.use(cors())
const studentmodel=require("./studentschema02")

app.get("/",async (req,resp)=>
{
const result=await studentmodel.find()
resp.send(result)
})
app.post("/",async(req,resp)=>{
    const data=await new studentmodel(req.body)
    const result=await data.save()
    resp.send(result)
}
)
app.put("/",async(req,resp)=>
{
  const data=await studentmodel.updateOne({rollno:req.body.rollno},{$set:req.body})
  resp.send(data)
})

app.delete("/",async (req,resp)=>
{
  const data=await studentmodel.deleteOne({rollno:req.body.rollno})
  resp.send(data)
})

app.listen(5000)
