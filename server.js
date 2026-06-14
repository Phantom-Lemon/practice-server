const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    
    res.setHeader(
        "Content-Type",
        "application/json; charset=utf-8"
    );

    const messagesArray = [
        {
            name : '동건',
            message : '하이'
        },
        {
            name : '예린',
            message : '안뇽'
        }
    ];

    res.end(
        JSON.stringify(messagesArray)
    );
    // const indexPath = path.join(__dirname, 'index.html');

    // fs.readFile(indexPath, (err, data) => {
    //     if(err){
    //         res.statusCode = 500;
    //         res.end('Error loading index.html');
    //     } else {
    //         res.setHeader('Content-Type', 'text/html; charset=utf-8');
            
    //         res.write(data);
            
    //         res.end();
    //     }
    // });
    

});

server.listen(3000, () => {
    console.log('3000번 포트에서 서버 대기 중입니다.');
});