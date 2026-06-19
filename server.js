const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    
    
    fs.readFile("index.html", (err,data)=>{
        res.setHeader(
            "Content-Type",
            "text/html; charset=utf-8"
        );

        res.end(data);

    });

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{

    console.log("서버 켜짐");

});