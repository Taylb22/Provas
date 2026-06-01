create database RH;
use RH;

create table setor(
	id_setor int not null primary key auto_increment,
    descricao varchar(100) not null
);

create table funcao(
	id_funcao int not null primary key auto_increment,
    descricao varchar(100) not null
);

create table funcionario(
	id_funcionario int not null primary key auto_increment,
    nome varchar(64) not null,
    sobrenome varchar(100) not null,
    
    id_setor int not null,
    constraint fk_setor
    foreign key (id_setor) references
    setor(id_setor)
    on delete restrict
    on update cascade,
    
    id_funcao int not null,
    constraint fk_funcao
    foreign key (id_funcao) references
    funcao(id_funcao)
    on delete restrict
    on update cascade
);

create view V_funcionarios as
select
	a.id_funcionario,
    a.nome,
    a.sobrenome,
    b.descricao as setor,
    c.descricao as funcao
from funcionario a join setor b
on a.id_setor = b.id_setor
join funcao c
on a.id_funcao = c.id_funcao;

select * from V_funcionarios;

insert into setor values 
(default, "ETS"),
(default, "QMM"),
(default, "CRIN");

insert into funcao values
(default, "Aprendiz"),
(default, "Gestor"),
(default, "Operador");

select * from setor;
select * from funcao;

