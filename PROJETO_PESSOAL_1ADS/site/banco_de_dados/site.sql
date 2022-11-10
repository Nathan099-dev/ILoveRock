create database iLoveRock;
use iLoveRock;

create table usuario_cadastrado(
    id_usuario int primary key auto_increment;
    nome varchar(45);
    sobrenome varchar(45);
    idade int;
    sexo varchar(45)
);

insert into usuario_cadastrado values
(null, 'Douglas', 'Jen', 40),
(null, 'Nathan', 'Tonini' 23),
(null, 'Bruno', 'Tonini', 21),
(null, 'Matheus', 'Mosca', 25),
(null, 'Ronaldo', 'Tonini', 64),
(null, 'Anna Luiza', 'Bertarello', 12);

create table bandas(
    id_banda int, primary key,
    nome_banda varchar(45)
);


insert into bandas (id_banda, nome_banda) values
(1, 'Iron Maiden'),
(2, 'Angra'),
(3, 'Queen'),
(4, 'Deep Purple'),
(5, 'Black Sabath'),
(6, 'Pink Floyd'),
(7, 'Casa das Máquinas');
(8, 'Barão Vermelho');
(9, 'Whitesnake');
(10, 'Led Zepellin');