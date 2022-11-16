CREATE DATABASE iLoveRock;
USE iLoveRock;

-- criando tablas

CREATE TABLE usuario_cadastrado(
    id_usuario int primary key auto_increment,
    nome varchar(45),
    sobrenome varchar(45),
    idade int,
    sexo varchar(45)
);

CREATE TABLE subgêneros(
    id_subgrenero int PRIMARY KEY auto_increment,
    nome VARCHAR(40)
);

CREATE TABLE bandas(
    id_banda int PRIMARY KEY auto_increment,
    nome VARCHAR(40)
);

-- inserindo dados nas tbelas

INSERT INTO usuario_cadastrado VALUES
(null, 'Douglas', 'Jen', 40, 'masculino'),
(null, 'Nathan', 'Tonini' 23, 'masculino'),
(null, 'Bruno', 'Tonini', 21, 'masculino'),
(null, 'Matheus', 'Mosca', 25, 'masculino'),
(null, 'Ronaldo', 'Tonini', 64, 'masculino'),
(null, 'Anna Luiza', 'Bertarello', 12, 'feminino'),
(null, 'Márcia', 'Gamba', 60, 'feminino'),
(null, 'Laís', 'Mariko', 25, 'feminino'),
(null, 'Bianca ', 'de Villa',19, 'feminino'),
(null, 'Nicolas', 'de Villa', 17, 'masculino');



INSERT INTO subgêneros VALUES
(null, 'hard rock'),
(null, 'heavy metal'),
(null, 'Progressivo'),
(null, 'metal melódico'),
(null, 'soft rock');


INSERT INTO bandas VALUES 
(NULL, 'Iron Maiden'),
(NULL, 'Angra'),
(NULL, 'Evannecence'),
(NULL, 'Whitesnake'),
(NULL, 'Casa das máquinas'),
(NULL, 'Kansas'),
(NULL, 'Nightwish'),
(NULL, 'Kalidia'),
(NULL, 'Phill Collins'),
(NULL, 'Eagles');

FOREIGN KEY (fk_usuario_cadastrado) REFERENCES usuario_cadastrado (id_usuario);
