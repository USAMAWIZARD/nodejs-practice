app=require("express")
controller = require("./controller")
server= app()
server.listen(3000)




server.get('/',home)
