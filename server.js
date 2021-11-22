const http = require('http');
const logger = require('./logger')

// Port & Log file
const PORT = 3000;
const LOGFILE = "./sunucu.log";

const handleRequest = (req, res) => {
  const logDate = Date.now()
  const url = req.url;
  let message;
  let responseCode = 200;
  
  switch(url) {
    case "/":
      message = `Hi! You are on the main page. (${url})`;
      break;
    case "/about":
      message = `Hi! You are on the about page. (${url})`;
      break;
    case "/contact":
      message = `Hi! You are on the contact page. (${url})`;
      break;
    case "/getir":
      message = `Hi! You are on the getir page. (${url})`;
      break;
    default:
      responseCode = 404;
      message = `Oops! The page you are looking for is not exist. 404`;
  }

  res.writeHead(responseCode, {'Content-Type': 'text/html'}); // Setting the http header
  res.end(message); // Sending response
  logger(LOGFILE, req, res, logDate); // Logging the request to log file

}

const server = http.createServer(handleRequest);
server.listen(PORT, () => {
  console.log('Server listening on:', PORT);
});