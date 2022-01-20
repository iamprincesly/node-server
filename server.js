const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });

    res.end('Hello! new node server');
});

server.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
