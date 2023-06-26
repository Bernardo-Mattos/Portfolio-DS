CREATE TABLE Clientes (
  id INT PRIMARY KEY,
  nome VARCHAR(50),
  idade INT,
  endereco VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE Pedidos (
  id INT PRIMARY KEY,
  PRIMARY KEY(id),
  cliente_id INT,
  produto VARCHAR(50),
  quantidade INT,
  FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

INSERT INTO Clientes (id, nome, idade, endereco)
VALUES
  (1, 'João', 25, 'Rua A'),
  (2, 'Maria', 30, 'Rua B'),
  (3, 'Carlos', 18, 'Rua C'),
  (4, 'Ana', 22, 'Rua D'),
  (5, 'Pedro', 35, 'Rua E');

-- Inserção de dados na tabela "Pedidos"
INSERT INTO Pedidos (id, cliente_id, produto, quantidade)
VALUES
  (1, 1, 'Camiseta', 3),
  (2, 2, 'Calça', 1),
  (3, 1, 'Boné', 2),
  (4, 3, 'Chinelo', 2),
  (5, 4, 'Vestido', 1);

SELECT idade
FROM Clientes
WHERE idade > 20;


SELECT idade
FROM Clientes
WHERE idade = 15;

SELECT *
FROM Clientes
WHERE idade <> 16
ORDER BY nome;

SELECT *
FROM Clientes
ORDER BY idade DESC;