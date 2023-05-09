const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  {
    id: 1,
    nome: 'João',
    sobrenome: 'Silva',
    email: 'joao@example.com',
    dataNascimento: '1990-01-01',
    matricula: '12345'
  },
  {
    id: 2,
    nome: 'Maria',
    sobrenome: 'Santos',
    email: 'maria@example.com',
    dataNascimento: '1995-02-02',
    matricula: '67890'
  }
];

// list user
app.get('/users', (req, res) => {
  res.json(users);
});

// new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
