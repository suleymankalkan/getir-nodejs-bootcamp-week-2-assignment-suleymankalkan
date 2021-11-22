const http = require('http');
const fs = require('fs');

//Server Port
const PORT = 3000;

const handleRequest = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'}); // http header

  const url = req.url;

  switch(url) {
    case "/":
      res.end(`Hi! You are on the main page. (${url})`);
      break;
    case "/about":
      res.end(`Hi! You are on the about page. (${url})`);
      break;
    case "/contact":
      res.end(`Hi! You are on the contact page. (${url})`);
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html'}); // Change response code to 404
      res.end("Oops! The page you are looking for is not exist. 404")
  }

  
}

const server = http.createServer(handleRequest);
server.listen(PORT, () => {
  console.log('Server listening on:', PORT);
});