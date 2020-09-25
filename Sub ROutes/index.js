app=require("express")
server= app()
server.listen(3000)
exprs=express()
import express from 'express'
custom= app.Router()

custom.get('/',(req,res)=>{
res.send("asdf")
})

server.use('/')
server.get('/',(req,res)=>{
res.send("asdf")
})