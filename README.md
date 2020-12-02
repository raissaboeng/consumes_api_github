<h1 align="center">API que consome API Github armazenando dados dos usuários</h1> 
<p align="center">A aplicação armazenara informações a respeito dos usuários dos github (Back-end).</p>


### :mag: Sobre o projeto 
A aplicação é um projeto em construção iniciado como um desafio de aprendizado de algumas tecnologias descritas abaixo. No momento conta com CRUD de users e repositories direto da api do github.
Futuramente será feito CRUD para followers, following e stars de repositories que necessitam um pouco mais de experiência já que fazem o relacionamento entre tabelas.

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express.js](http://expressjs.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [Sequelize](https://sequelize.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [Contauner Docker- Postgres](https://hub.docker.com/_/postgres)

### :key: Instalação e Execução
1. Faça um clone desse repositório https://github.com/raissaboeng/consumes_api_github.git;
2. Entre na pasta cd consumes_api_github;
3. Rode yarn para instalar as dependências;
4. Altere as credencias dentro de /src/config/database.js;
5. Rode yarn sequelize db:create para criar o banco de dados;
6. Rode yarn sequelize db:migrate para executar as migrations;
7. Rode yarn dev para iniciar o servidor.

### :bulb: Melhorias 

- [ ] CRUD de follower (todo follower deve ser um usuário, criar a relação pertinente para follower e user).
- [ ] CRUD de following (todo following deve ser um usuário, criar a relação pertinente para following e user).
- [ ] CRUD de repositories stars (Esse crud devera manter a relação de usuários que deram stars para um repositório, criar relação pertinente entre users, repositories).
