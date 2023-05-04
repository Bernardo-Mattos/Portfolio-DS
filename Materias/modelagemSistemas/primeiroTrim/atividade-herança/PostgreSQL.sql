create table usuario (
  nome varchar(50) not null,
  email varchar(50) not null,
  senha varchar(50) not null, 
  id_usuario VARCHAR(25) not null,
  tarefa_fk VARCHAR(25) not null,
  primary key(id_usuario),
  FOREIGN key(tarefa_fk)
  REFERENCES tarefa(nome_tarefa)
);

CREATE TABLE administrador(
 tarefa VARCHAR (150) NOT NULL,
 permissaoadm BOOLEAN NOT NULL, 
 admin_tarefa_fk VARCHAR(50) not null,
 id_admin VARCHAR (50) NOT NULL,
 PRIMARY KEY (id_admin),
 FOREIGN key (tarefa)
 references usuario (id_usuario),
 FOREIGN KEY (admin_tarefa_fk)
 REFERENCES tarefa(nome_tarefa)
);


create table tarefa(
  nome_tarefa varchar(50) not null,
  grafico_fk VARCHAR not null,
  prazo int not null,
  peso VARCHAR(25) not null,
  responsaveis usuario not null,
  cronograma cronograma not null,
  PRIMARY key(nome_tarefa),
  FOREIGN key(prazo)
  REFERENCES cronograma(prazofinal),
  FOREIGN key(grafico_fk)
  references grafico(id_grafico)
);

CREATE TABLE Cronograma (
  hora INT NOT NULL,
  diadasemana VARCHAR (10) NOT NULL,
  data INT NOT NULL,
  ano INT NOT NULL,
  prazofinal INT NOT NULL,
  cronometro INT NOT NULL,
  PRIMARY KEY (prazofinal)
);

CREATE TABLE Grafico(
  tarefasfeitas VARCHAR (300) NOT NULL,
  tarefasincompletas VARCHAR (300) NOT NULL,
  id_grafico VARCHAR (50) NOT NULL,
  PRIMARY KEY (id_grafico)
);



