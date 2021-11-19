<img height="50em"   align="left" src="https://user-images.githubusercontent.com/89614560/142313904-e129bf9e-611b-4c32-96d7-8ae2c531a55b.png"/>

# UniExpress

Projeto criado para simulação de um sistema de loja on-line para venda de produtos variados no contexto da disciplina de Gestão e Qualidade de Software

## Docker

Toda a aplicação foi construída de maneira a utilizar containers ou seja, se faz necessário o uso do docker, que pode ser baixado no site [Docker](https://docker.com/)

Após instalado executar o seguinte comando para rodar a imagem do mysql

```bash
$ docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest
```

Caso prefira existe um arquivo do docker-compose no projeto, o seu conteúdo é listado abaixo

```yml
---  
version: "3.8"  
  
services:  
  uniexpress-backend:  
    build:  
      context: .  
      dockerfile: dockerfile  
    image: uniexpress-backend:latest  
    container_name: api-uniexpress-backend  
    ports:  
      - "8080:8080"  
  networks:  
      - uniexpress-nt  
  
  database:  
    image: mysql  
  container_name: db-mysql  
    command: --default-authentication-plugin=mysql_native_password  
    restart: always  
    environment:  
      MYSQL_ROOT_PASSWORD: example  
    ports:  
      - "3306:3306"  
  networks:  
      - uniexpress-nt  
  
networks:  
  uniexpress-nt:  
    name: uniexpress-nt  
    driver: bridge  
    ipam:  
      driver: default  
      config:  
        - subnet: 10.10.1.0/29  
          gateway: 10.10.1.1
```

Para rodar utilizando docker-compose utilize

```bash
$ docker-compose up -d --build 
```


## Carga do banco

Após a instalação e execução da imagem docker, é necessário executar o script de carga.

A seguinte estrutura de banco deve ser criada para que seja possível utilizar a aplicação, perceba que inicialmente é criado um usuário **`obiwan@jedicouncil.com`** com a senha **`skywalker`**

```sql
CREATE DATABASE uniexpress;

USE uniexpress;

CREATE TABLE Users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(32) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO Users (name, email, password)
VALUES ('Obi-Wan Kenobi', 'obiwan@jedicouncil.com', md5('skywalker'));
```

##[Figma](https://www.figma.com/file/2sMUz8ko3ErH2gVl9O1HhZ/UniExpress?node-id=0%3A1)


## React
![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square) 
![Dependency Status](https://img.shields.io/badge/dependencies-react-blue)
![Dependency Status](https://img.shields.io/badge/dependencies-webpack-9cf)
![Dependency Status](https://img.shields.io/badge/dependencies-axios-orange)

Tela de Login
[![INSERT YOUR GRAPHIC HERE](https://i.imgur.com/ni4YmRa.png)]()
Tela de Cadastro
[![INSERT YOUR GRAPHIC HERE](https://i.imgur.com/ivwpcKc.png)]()
Pagina Principal
[![INSERT YOUR GRAPHIC HERE](https://i.imgur.com/NTzEi3o.png)]()

### Setup
Para executar clone o repositorio [UniExpressReact](https://github.com/UC-GestaoEQualidadeDeSoftware/UniExpress/tree/main/UniExpressReact)
### Setup
> instalar usando npm ou yarn, vá a pasta onde feito o clone do repositório, abra o terminal e siga os comandos utilizando seu gerenciador de pacotes preferido
```shell
$ npm install 
```
ou 
```shell
$ yarn 
```
Apos isso rode o comando abaixo para subir a aplicação
```shell
$ npm start
```
ou
```shell
$ yarn start
```
A aplicação irá subir no caminho localhost:3000
