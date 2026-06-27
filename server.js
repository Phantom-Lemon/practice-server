const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    
    if(req.url = "/"){
        fs.readFile("index.html", (err,data)=>{

        if(err){

            console.log(err);

            res.statusCode = 500;
            res.end("파일 없음");

            return;
        }

        res.setHeader(
            "Content-Type",
            "text/html; charset=utf-8"
        );

        res.end(data);

        });
    }

    if(req.url = "/message"){
        res.end("ㅋㅋ");
    }

    

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{

    console.log("서버 켜짐");

});