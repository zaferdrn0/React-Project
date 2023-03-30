const express = require('express')
const http  = require('http')
const app = express()
const server = http.createServer(app);

console.log("server calısıyor")
server.listen(3000, () => {
    console.log(`Server running on port 3000`);
  });