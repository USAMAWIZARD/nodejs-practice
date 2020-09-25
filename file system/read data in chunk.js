fs=require("fs")
a=fs.createReadStream('./twilo.txt')
function ondata(readdata){
	console.log(readdata+"/n new line")
}
a.on("data",ondata)
