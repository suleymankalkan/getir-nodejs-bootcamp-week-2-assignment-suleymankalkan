const fs = require('fs');

const logger = async (LOGFILE, req, res, logDate) => {
  // Create Log Object
  const log = {
    date: new Date(logDate).toLocaleString("tr-TR"),
    method: req.method,
    url: req.url,
    statusCode: res.statusCode,
    statusMessage: res.statusMessage,
  }

  // Write log object to file
  fs.appendFile(LOGFILE, JSON.stringify(log)+"\r\n", function (err) {
    if (err) throw err;
    console.log('Logged!');
  });
}

module.exports = logger;