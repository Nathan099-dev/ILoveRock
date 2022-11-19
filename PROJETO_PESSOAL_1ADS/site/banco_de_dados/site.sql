CREATE DATABASE iLoveRock;
USE iLoveRock;

-- criando tablas

CREATE TABLE usuario_cadastrado(
    id_usuario int PRIMARY KEY auto_increment,
    nome varchar(45),
    sobrenome varchar(45),
    idade int,
    sexo varchar(45),
	fk_bandas int,
	FOREIGN KEY ('fkbandas') REFERENCES subgêneros('id_subgenero')
);

CREATE TABLE subgêneros(
    id_subgenero int PRIMARY KEY auto_increment,
    nome VARCHAR(40)
);

CREATE TABLE bandas(
    id_banda int PRIMARY KEY auto_increment,
    nome VARCHAR(40),
	fk_subgênero int,
	FOREIGN KEY fk_subgênero
    (fk_subgênero) references subgêneros (id_subgêneros)
);

-- inserindo dados nas tbelas

INSERT INTO usuario_cadastrado VALUES
(null, 'Douglas', 'Jen', 40, 'masculino'),
(null, 'Nathan', 'Tonini', 23, 'masculino'),
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
(NULL, 'Iron Maiden', 2),
(NULL, 'Angra', 4),
(NULL, 'Evannecence', 4),
(NULL, 'Whitesnake', 1),
(NULL, 'Casa das máquinas', 3),
(NULL, 'Kansas', 3),
(NULL, 'Nightwish', 4),
(NULL, 'Kalidia', 4),
(NULL, 'Phill Collins', 5),
(NULL, 'Eagles', 5);


SELECT * from usuario_cadastrado;
SELECT * FROM banda;
SELECT * FROM subgêneros;

SELECT * FROM bandas JOIN bandas ON subgêneros WHERE fk_bandas = id_subgenero;