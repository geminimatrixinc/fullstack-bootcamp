
const http = require('http');

const hostname = '127.0.0.1';
const port = 5001;

const handleServerInstance = (request, response) => {
   console.log('request received');
   //console.log(req);
   console.log(request.url);

    debugger

    if(request.method === "GET") {
        if (request.url === "/") {

        
        }
        else if (request.url === "hello") {
            
        }
    }
    else if (request.method === "POST") {

    }
    else if (request.method === "DELETE") {

    }
    else if (request.method === "PUT") {

    }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
}

// initialize ========>
const server = http.createServer(handleServerInstance);

// start =====>>>>
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// close ====>
server.on('close', () => {
    console.log('closing ports')
})