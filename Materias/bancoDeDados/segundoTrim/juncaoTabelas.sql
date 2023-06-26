CREATE TABLE Clientes(
    id varchar (3) not null PRIMARY KEY, 
    nome varchar (50) not null,
    email VARCHAR(20) not null,
)
CREATE TABLE Pedidos(
    id varchar (3) not null,
    valor DECIMAL(3,2) not null,
    FOREIGN KEY (id_cliente) REFERENCES Clientes
)
