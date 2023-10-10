const express = require('express')

const server = express();

server.get('./curso' , ()=> {
  console.log("Curso acessado")
})

server.listen(3001)