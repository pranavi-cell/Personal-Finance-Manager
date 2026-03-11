const express=require("express")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())

let transactions=[]

app.post("/add",(req,res)=>{

transactions.push(req.body)

res.send("Transaction added")

})

app.get("/transactions",(req,res)=>{

res.send(transactions)

})

app.listen(3000,()=>{

console.log("Server running")

})