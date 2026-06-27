const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    
    if(req.url === "/"){
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

    else if(req.url === "/message"){

        if(req.method === "POST"){
            let body = "";

            req.on("data",chunk=>{
                body += chunk;
            })

            req.on("end",()=>{
                res.setHeader(
                    "Content-Type",
                    "text/plain; charset=utf-8"
                );
                res.end(`${body}라고 데이터 보내준거 받앗습니당^^`);
            });

        }

        if(req.method === "GET"){
            res.setHeader(
                "Content-Type",
                "text/plain; charset=utf-8"
            );
            res.end("겟 요청을 왜하노ㅋㅋ");    
        }
        
    }

    else if(req.url === "/time"){
        res.setHeader(
            "Content-Type",
            "text/plain; charset=utf-8"
        );
        res.end(
            new Date().toString()
        );
    }

    

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{

    console.log("서버 켜짐");

});