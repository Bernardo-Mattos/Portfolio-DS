CREATE TABLE racas (
  id_raca SERIAL PRIMARY KEY,
  nome_raca varchar(100),
  descricao varchar(255)
);

CREATE TABLE produtos (
  id_produto SERIAL PRIMARY KEY,
  nome_produto varchar(100),
  descricao varchar(255),
  preco decimal NOT NULL,
  quantidade integer
);

CREATE TABLE clientes (
  id_cliente SERIAL PRIMARY KEY,
  nome varchar(100),
  rg varchar(20),
  cpf varchar(20),
  endereco varchar(255),
  telefone varchar(20)
);

CREATE TABLE funcionarios (
  id_funcionario SERIAL PRIMARY KEY,
  nome varchar(100),
  rg varchar(20),
  cpf varchar(20),
  endereco varchar(255),
  telefone varchar(20),
  salario decimal NOT NULL
);

CREATE TABLE vendas (
  id_venda SERIAL PRIMARY KEY,
  id_cliente integer REFERENCES clientes(id_cliente),
  id_funcionario integer REFERENCES funcionarios(id_funcionario),
  id_produto integer REFERENCES produtos(id_produto),
  data_venda date,
  quantidade integer,
);