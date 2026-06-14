const http = require('http');

let messages = [
    {
        name : '동건',
        text : '하이 예링'
    }
];

const server = http.createServer((req, res)=>{

    if(req.method === 'GET'){


        res.setHeader(
            "Content-Type",
            "application/JSON; charset=utf-8"
        );

        res.end(
            JSON.stringify(messages)
        );

    }

    if(req.method === 'POST'){

        let body = '';
        req.on('data', (chunck)=>{
            body += chunck;
        })
        req.on('end', ()=>{
            messages.push(JSON.parse(body));

            res.end("저장 완료");
        })
        

    }


});

server.listen(3000, ()=>{
    console.log("서버가 실행중입니다");
});