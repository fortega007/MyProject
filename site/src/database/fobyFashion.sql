create database fobyFashion;

use fobyFashion;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45) not null,
sobrenome varchar(45),
email varchar(50) not null,
senha varchar (50) not null   
) auto_increment=100;


create table quiz(
idQuiz int primary key auto_increment,
respostaA varchar(50),
respostaB varchar(50),
respostaC varchar(50),
respostaD varchar(50),
respostaE varchar(50)
)auto_increment=200;


create table usuario_quiz(
idusuario_quiz int auto_increment,
fkusuario int,
fkquiz int,
constraint fkusu foreign key (fkusuario) references usuario(idUsuario),
constraint fkqui foreign key (fkquiz) references quiz(idQuiz),
constraint pkTripla primary key (idusuario_quiz,fkusuario,fkquiz)

);

insert into usuario value
(null,'felipe','ortega','felipe@hotmail.com','123456');

insert into quiz values
(null,'música','cinema','Estilo de vida','Fitness''Tecnologia');


insert into usuario_quiz values
(null,100,200);


select * from usuario;

select * from quiz;

select * from usuario_quiz;

select * from usuario_quiz join usuario on fkusuario=idUsuario;



