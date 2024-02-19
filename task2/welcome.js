var  fs =require("fs");
var wlc =fs.readFileSync("welcome.txt")
console.log(wlc.toString());
console.log("end program");