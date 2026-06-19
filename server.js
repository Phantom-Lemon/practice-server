const http = require("http");

const server = http.createServer((req,res)=>{
    
    res.end("안녕하세요 서버입니다.");

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{

    console.log("서버 켜짐");

});