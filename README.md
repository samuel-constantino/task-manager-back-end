
<h1 align="center">Gerenciador de Tarefas [Back-End] 👋</h1>

<p>
  <img  alt="Version"  src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000"  />
	
  <a  href="https://github.com/samuel-constantino/task-manager-back-end#readme"  target="_blank">
    <img  alt="Documentation"  src="https://img.shields.io/badge/documentation-yes-brightgreen.svg"  />
  </a>
	
  <a  href="https://github.com/samuel-constantino/task-manager-back-end/graphs/commit-activity"  target="_blank">
    <img  alt="Maintenance"  src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"  />
  </a>
</p>


> Esta API REST é parte do sistema Full Stack [Gerenciador de Tarefas](https://github.com/samuel-constantino/task-manager) desenvolvido em Node.js com Express idealizado para otimização e monitoramento de tarefas. </br>
> Os diferenciais dessa aplicação incluem: arquitetura MSC, operações CRUD, registro e login de usuários para acesso às rotas protegidas, documentação openAPI com swagger e testes unitários </br>
> A motivação para o desenvolvimento dessa aplicação partiu da ideia de criar um sistema Full Stack capaz de testar meus conhecimentos atuais e minha capacidade de adaptação a novas tecnologias.
  
## Sumário

- [Instruções](#instruções)
- [Documentação](#documentação)
	- [Uso Local](#uso-local)
	- [Uso em Núvem](#uso-em-núvem)
	- [Versão Node](#versão-node)
	- [Bando de Dados](#banco-de-dados)
	- [Respostas](#respostas)
- [Tecnologias](#tecnologias)
- [Próximos Passos](#próximos-passos)
- [Autor](#autor)
- [Suporte](#suporte)
- [Licença](#-licença)

## Instruções

### Instalação Local

Clone o repositório
  
```
git clone https://github.com/samuel-constantino/task-manager-back-end.git
```

Entre na pasta do repositório:

```
cd task-manager-back-end
```

Instale as dependências:

```
npm install
```

Renomeie arquivo de configurações de ambiente
```
mv .env.example .env
```

Ative servidor do MongoDB
```
sudo service mongod start
```

Rode a aplicação

```
npm start
```
  
Teste a aplicação
 
```
npm run test
```

## Documentação

### Uso em Núvem

Esta API está disponível na núvem por meio desse [link](https://task-manager-bk-0209.herokuapp.com/swagger/)

### Uso local

Com a aplicação rodando, acesse o seguinte URL

```
http://localhost:4000/swagger
```

![Swagger Routes](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/rotas-swagger.png)

### Versão Node

```
v16.14.0
```

### Banco de Dados

<details>
<summary>MongoDB</summary>

![User Schema](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/user-schema.png)

![Task Schema](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/task-schema.png)
	
</details>

### Respostas


| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (Success).|
| `201` | Registro criado com sucesso (Created).|
| `400` | Dados da requisição mal formados (Bad request).|
| `401` | Usuário não autorizado (Unauthorized).|
| `404` | Registro pesquisado não encontrado (Not found).|

### Tecnologias

- ESLint
- Express
- Swagger UI Express
- Json Web Token
- Md5
- Joi
- MongoDB
- MongoDB Memory Server
- Mocha
- Chai
- Sinon
- NYC

### Próximos Passos

- Aumentar a cobertura de testes
- Implementar rota para relatórios e insigts

### Autor

👤 **Samuel Constantino <samuelicapuidados@gmail.com>**

* Website: https://www.linkedin.com/in/samuel-constantino/

* Github: [@samuel-constantino](https://github.com/samuel-constantino)
  

## Suporte

Deixe uma ⭐️ se este projeto te ajudou!

## 📝 Licença

Copyright © 2022 [Samuel Constantino <samuelicapuidados@gmail.com>](https://github.com/samuel-constantino).<br  />

Este projeto é licenciado pela [ISC](https://github.com/samuel-constantino/task-manager-back-end/blob/master/LICENSE) .

***

Foi usado o seguinte Template para esse Readme: [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
