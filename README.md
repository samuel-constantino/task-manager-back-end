
<h1 align="center">Bem-vinda ao Gerenciador de Tarefas [Back-End] 👋</h1>

<p>
  <img  alt="Version"  src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000"  />
	
  <a  href="https://github.com/samuel-constantino/task-manager-back-end#readme"  target="_blank">
    <img  alt="Documentation"  src="https://img.shields.io/badge/documentation-yes-brightgreen.svg"  />
  </a>
	
  <a  href="https://github.com/samuel-constantino/task-manager-back-end/graphs/commit-activity"  target="_blank">
    <img  alt="Maintenance"  src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"  />
  </a>
</p>


> Esta API REST é parte do sistema Full Stack [Gerenciador de Tarefas](https://github.com/samuel-constantino/task-manager) desenvolvido em Node.js idealizado para otimização e monitoramento de tarefas.
> A motivação para o desenvolvimento dessa aplicação partiu da ideia de criar um sistema Full Stack capaz de testar meus conhecimentos atuais e minha capacidade de adaptação a novas tecnologias.
  
## Sumário

- [Instruções](#instruções)
- [Documentação](#documentação)
	- [Versão Node](#versão-node)
	- [Bando de Dados](#banco-de-dados)
	- [Respostas](#respostas)
	- [Pontos de Acesso](#pontos-de-acesso)
		- [Usuário](#usuário)
		- [Tarefa](#tarefa)
- [Tecnologias](#tecnologias)
- [Próximos Passos](#próximos-passos)
- [Autor](#autor)
- [Suporte](#suporte)
- [Licença](#-licença)

## Instruções

### Instalação

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

Rode a aplicação

```
npm start
```
  
Teste a aplicação
 
```
npm run test
```

## Documentação

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

### Pontos de Acesso

#### Usuário

<details>
<summary>Login</summary>

```
POST /login
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-login/params.png)

![Corpo](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-login/body.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-login/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-login/responses/bad-request.png)
	
</details>

<details>
	
<summary>Registro</summary>

```
POST /register
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-register/params.png)

![Corpo](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-register/body.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-register/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-register/responses/bad-request.png)
	
</details>

#### Tarefa

<details>
<summary>Tarefa por Usuário</summary>

```
POST /tasks
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/get-tasks/params.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/get-tasks/responses/ok.png)
	
</details>

<details>
<summary>Tarefa por ID</summary>

```
POST /tasks/:id
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/get-tasks-id/params.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/get-tasks-id/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/get-tasks-id/responses/bad-request.png)
	
</details>

</details>

<details>
<summary>Criar Tarefa</summary>

```
POST /tasks
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-create-task/params.png)

![Corpo](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-create-task/body.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-create-task/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-create-task/responses/bad-request.png)

</details>

<details>
<summary>Editar Tarefa</summary>

```
PUT /tasks/:id
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/put-task/params.png)

![Corpo](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/put-task/body.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/put-task/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/put-task/responses/bad-request.png)

</details>

<details>
<summary>Remover Tarefa</summary>

```
DELETE /tasks/:id
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/delete-task/params.png)

![Corpo](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/delete-task/body.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/delete-task/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/delete-task/responses/bad-request.png)

</details>

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

- Disponibilizar aplicação em núvem
- Disponibilizar acesso a documentação interativa do Swagger
- Implementar rota para relatório histórico

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
