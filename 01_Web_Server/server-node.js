const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'Text/Plain');
        res.end("Hello Ice Tea");
    }else if(req.url === '/ice-tea'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'Text/Plain');
        res.end("Thanks for ordering!!, The tea was really going to be hot.");
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'Text/Plain');
        res.end("404 Not found");
    }
})

server.listen(port, hostname, () =>{
    console.log(`Server is listening at http://${hostname}:${port}`);
    
})