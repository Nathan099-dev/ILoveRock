create database iLoveRock;
use iLoveRock;

-- Criando tabela usuário

create table usuario_cadastrado(
    id_usuario int primary key auto_increment;
    nome varchar(45);
    sobrenome varchar(45);
    idade int;
    sexo varchar(45)
);

-- inserindo usuários

insert into usuario_cadastrado values
(null, 'Douglas', 'Jen', 40, 'masculino'),
(null, 'Nathan', 'Tonini' 23, 'masculino'),
(null, 'Bruno', 'Tonini', 21, 'masculino'),
(null, 'Matheus', 'Mosca', 25, 'masculino'),
(null, 'Ronaldo', 'Tonini', 64, 'masculino'),
(null, 'Anna Luiza', 'Bertarello', 12, 'feminino');
(null, 'Márcia', 'Gamba', 60, 'feminino');
(null, 'Laís', 'Mariko', 25, 'feminino');
(null, 'Bianca ', 'de Villa',19, 'feminino');
(null, 'Nicolas', 'de Villa', 17, 'masculino');

-- Criando as tabelas

CREATE TABLE banda_heavy_metal(
id_banda_heavy_metal int PRIMARY KEY auto_increment,
nome VARCHAR(40)
);

CREATE TABLE banda_hard_rock(
id_banda_hard_rock int PRIMARY KEY auto_increment,
nome VARCHAR(40)
);

CREATE TABLE banda_progressivo(
id_banda_progressivo int PRIMARY KEY auto_increment,
nome VARCHAR(40)
);

CREATE TABLE banda_metal_melódico(
    id_banda_metal_melódico int PRIMARY KEY auto_increment,
    nome VARCHAR(40)
);

-- inserindo dados nas tabelas

INSERT INTO banda_heavy_metal (id_banda_heavy_metal, nome) VALUES 
(1, 'Guns and Roses'),
(2, 'System of a Down'),
(3, 'Slipknot'),
(4, 'Iron Maiden'),
(5, 'Black Sabath'),
(6, 'Dio'),
(7, 'Ozzy Osbourne'),
(8, 'Angra'),
(9, 'Nightwish'),
(11, 'Judas Priest'),
(12, 'Raimbow'),
(13, 'Dream Theater'),
(14, 'Metalica'),
(15, 'Disturbed')
(16, 'Rhapsody of Fire'),
(17, 'Saxon'),
(18, 'Shadowside'),
(19, 'Queensriche'),
(20, 'Savatage');


INSERT INTO banda_hard_rock (id_banda_hard_rock, nome) VALUES 
(1, 'Scorpions'),
(2, 'Queen'),
(3, 'Bon Jovi'),
(4, 'Evanecence'),
(5, 'Foo Fighters'),
(6, 'Journey'),
(7, 'Bad Company'),
(8, 'Van Halen'),
(9, 'Aerosmith'),
(10, 'Alice Cooper'),
(11, 'Alice in Chains'),
(12, 'Uriah Heep'),
(13, 'Led Zeppelin'),
(14, 'Skillet'),
(15, 'Heart'),
(16, 'skid Row'),
(17, 'Europe'),
(18, 'Stryper'),
(19, 'Twisted Siater'),
(20, 'Whitesnake');


INSERT INTO banda_progressivo (id_banda_progressivo, nome) VALUES
(1, 'Casa das Máquinas'),
(2, 'Kansas'),
(3, 'Rush'),
(4, 'Marilion'),
(5, 'Supertramp'),
(6, 'Gênesis'),
(7, 'Yes'),
(8, 'Jethro Tull'),
(9, 'Focus'),
(10, 'Mutantes');

INSERT INTO banda_metal_melódico (id_banda_metal_melódico, nome) VALUES
(1, 'Heavenly'),
(2, 'Nightwish'),
(3, 'Angra'),
(4, 'Shaman'),
(5, 'Blind Guardian'),
(6, 'DragonForce'),
(7, 'Stratovarius'),
(8, 'Manowar'),
(9, 'Symphony X');
(10, 'Kalidia');
(11, 'Lunática');
(12, 'Temperence');
(13, 'Eluveitie');
(14, 'Within Temptation');
(15, 'Avantasia');
(16, 'Viper');

-- mostrando os dados na tela

SELECT * FROM usuario_cadastrado;
SELECT * FROM banda_heavy_metal;
SELECT * FROM banda_hard_rock;
SELECT * FROM banda_progressivo;
SELECT * FROM banda_metal_melódico;

fk_usuario INT, 
FOREIGN KEY (fk_usuario_cadastrado) REFERENCES usuario_cadastrado (id_usuario)


-- juntando tabelas

