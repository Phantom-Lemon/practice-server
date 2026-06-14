const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    
    res.setHeader(
        "Content-Type",
        "application/json; charset=utf-8"
    );

    const data = {
        name : '동건',
        message : '하이'
    };

    res.end(
        JSON.stringify(data)
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