app=require("express")
server= app()
server.listen(3000)

checkauth=(req,res,next)=>{
console.log("in the middleware")
next()
}

server.use(checkauth)

server.get('/',(req,res)=>{
res.send("asdf")
})