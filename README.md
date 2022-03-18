
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


> API REST para gerenciamento e otimização de tarefas desenvolvida com NodeJS, Express e MongoDB.
  
## Sumário

- [Instruções](#instruções)
- [Documentação](#documentação)
	- [Versão Node](#versão-node)
	- [Bando de Dados](#banco-de-dados)
	- [Respostas](#respostas)
	- [Pontos de Acesso](#pontos-de-acesso)
		- [Usuário](#usuário)
			- [Login](#login)
			- [Registro](#registro)
		- [Tarefa](#tarefa)
			- [Tarefas por Usuário](#tarefas-por-usuário)
			- [Tarefas por ID](#tarefa-por-id)
			- [Criar Tarefas](#criar-tarefa)
			- [Editar Tarefas](#editar-tarefa)
			- [Remover Tarefas](#remover-tarefa)
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
#### MongoDB:

![User Schema](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/user-schema.png)

![Task Schema](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/task-schema.png)

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

##### Login

```
POST /login
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-login/params.png)

![Corpo](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-login/body.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-login/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-login/responses/bad-request.png)

##### Registro

```
POST register
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-register/params.png)

![Corpo](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-register/body.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-register/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-register/responses/bad-request.png)

#### Tarefa

##### Tarefas por Usuário

```
GET /tasks
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/get-tasks/params.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/get-tasks/responses/ok.png)

##### Tarefa por ID

```
GET /tasks/:id
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/get-tasks-id/params.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/get-tasks-id/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/get-tasks-id/responses/bad-request.png)

##### Criar Tarefa

```
POST /tasks
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-create-task/params.png)

![Corpo](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-create-task/body.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-create-task/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/post-create-task/responses/bad-request.png)

##### Editar Tarefa

```
POST /tasks
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/update-task/params.png)

![Corpo](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/update-task/body.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/update-task/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/update-task/responses/bad-request.png)

##### Remover Tarefa

```
DELETE /task/:id
```

![Parâmetros](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/delete-task/params.png)

![Corpo](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/delete-task/body.png)

![Resposta OK](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/delete-task/responses/ok.png)

![Resposta Bad Request](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/routes/delete-task/responses/bad-request.png)


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
