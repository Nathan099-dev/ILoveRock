CREATE DATABASE iLoveRock;
USE iLoveRock;

-- criando tablas

CREATE TABLE subgeneros(
    id_subgenero int PRIMARY KEY auto_increment,
    nome VARCHAR(40)
);

CREATE TABLE bandas(
    id_banda int PRIMARY KEY auto_increment,
    nome VARCHAR(40),
	fk_subgenero int,
	FOREIGN KEY fk_subgenero
    (fk_subgenero) references subgeneros (id_subgenero)
);

CREATE TABLE usuario_cadastrado(
    id_usuario int PRIMARY KEY auto_increment,
    nome varchar(45),
    sobrenome varchar(45),
    idade int,
    sexo varchar(45),
	fk_banda int,
	FOREIGN KEY (fk_banda) REFERENCES bandas(id_banda)
);


-- inserindo dados nas tabelas

INSERT INTO usuario_cadastrado VALUES
(null, 'Douglas', 'Jen', 40, 'masculino', 2),
(null, 'Nathan', 'Tonini', 23, 'masculino', 4),
(null, 'Bruno', 'Tonini', 21, 'masculino', 4),
(null, 'Matheus', 'Mosca', 25, 'masculino', 1),
(null, 'Ronaldo', 'Tonini', 64, 'masculino', 3),
(null, 'Anna Luiza', 'Bertarello', 12, 'feminino', 3),
(null, 'Márcia', 'Gamba', 60, 'feminino', 4),
(null, 'Laís', 'Mariko', 25, 'feminino', 4),
(null, 'Bianca ', 'de Villa',19, 'feminino', 5),
(null, 'Nicolas', 'de Villa', 17, 'masculino', 5);



INSERT INTO subgeneros VALUES
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

select * from bandas;

SELECT * FROM usuario_cadastrado;
SELECT * FROM subgeneros s;
SELECT * FROM bandas b;

SELECT * FROM usuario_cadastrado;
SELECT * FROM subgeneros;
SELECT * FROM bandas;

-- juntando tabelas
SELECT * FROM subgeneros JOIN bandas ON id_subgenero = fk_subgenero JOIN usuario_cadastrado ON id_banda = fk_banda;
