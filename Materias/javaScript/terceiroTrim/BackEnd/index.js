const express = require('express');

const server = express();

const cursos = []
server.use(express.json());

//read
server.get('/cursos', (req, res) => {
  return res.json(cursos);
});

//read
server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;
  return res.json(cursos[index]);
});

//create
server.post('/cursos', (req , res)=>{
  const { name } = req.body
  cursos.push(name)
  return res.send(cursos)
})

server.put('/cursos/:index', (req , res)=>{
  const{ index }  = req.params
  const { name } = req.body

  cursos[index] = name;
  return res.json(cursos);
});

//delete
server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;
  // Verifique se o índice é um número válido
  if (isNaN(index) || index < 0 || index >= cursos.length) {
    return res.status(400).json({ error: 'Índice inválido' });
  }
  // Use splice para remover o elemento no índice especificado
  cursos.splice(index, 1);

  return res.json('ta deletado meu padrinho');
});

server.listen(3001);