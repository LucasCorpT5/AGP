# AGP
<!-- 
<img src="https://miro.medium.com/max/1100/0*_6u-GumXiNP1KQDe.jpg"> -->
<img src="https://cdn.freelogovectors.net/wp-content/uploads/2021/01/graphql-logo-freelogovectors.net_.png" width=400>

## About
This is an authentication api developed with graphql prism and typescript, this is auth for graphql <br>
graphql is a language of facebook for APIs<br>

API with graphql and prism

## Clone:
### With HTTPS:
```git
git clone https://github.com/LucasCorpT5/AGP.git
```

### With SSH:
```git
git clone git@github.com:LucasCorpT5/AGP.git
```

### With GitHub CLI
```git
git clone gh repo clone LucasCorpT5/AGP
```
## Tools:
* Graphql
* Prism
* Typescript
* Apollo-server
* Reflect-metadata
* BcryptJS
* Postgresql

## JSON CONFIGS:
```json
{
	"name": "AGP",
	"version": "1.0.0",
	"main": "index.js",
	"license": "MIT",
	"dependencies": {
		"@prisma/client": "^2.24.1",
		"apollo-server": "^2.25.0",
		"bcryptjs": "^2.4.3",
		"class-validator": "^0.13.1",
		"graphql": "^15.5.0",
		"graphql-fields": "^2.0.3",
		"reflect-metadata": "^0.1.13",
		"type-graphql": "^1.1.1",
		"uuid": "^8.3.2"
	},
	"scripts": {
		"dev": "ts-node-dev --respawn --transpile-only src/index.ts"
	},
	"devDependencies": {
		"@types/bcryptjs": "^2.4.2",
		"@types/express": "^4.17.13",
		"@types/graphql": "^14.5.0",
		"@types/graphql-fields": "^1.3.3",
		"@types/node": "^15.12.1",
		"@types/uuid": "^8.3.0",
		"prisma": "^2.24.1",
		"ts-node": "^10.0.0",
		"ts-node-dev": "^1.1.8",
		"typegraphql-prisma": "^0.14.3",
		"typescript": "^4.3.2"
	}
}
```
## PARAMS:
### Mutation SingUp:
```graphql
mutation {
	singUp(data: {name: "name", email: "email@gmail.com", password: "password"}){
		name,
		email,
		createdAt
	}
}
```
### Returns:
```json
{
	"data": {
		"singUp": {
			"name": "k2kkk",
			"email": "kkkk2k@gmail.com",
			"createdAt": "2021-12-16T02:42:38.115Z"
		}
	}
}
```
#
### Mutatation Login
```graphql
mutation {
	login(data: {email: "kkkkk@gmail.com", password: "7277222"}){
		user {
			name,
			email,
			createdAt,
		},
		token,
	}
}
```

### Returns:
```json
{
	"data": {
		"login": {
			"user": {
				"name": "name",
				"email": "email@gmail.com",
				"createdAt": "2021-12-15T23:25:45.789Z"
			},
			"token": "81481be1-451a-4b90-86ca-27915f7dd17e"
		}
	}
}
```
#
### Query ProfileInfo:
```graphql
query {
	privateInfo(token: "81481be1-451a-4b90-86ca-27915f7dd17e") {
		email,
		name,
		password,
		createdAt
	}
}
```
### Returns:
```json
{
	"data": {
		"privateInfo": {
			"email": "email@gmail.com",
			"name": "name",
			"password": "$2a$10$IeU8j3tPtcJ8EkiuDD05nOnoM4Hjz0c2tHcRPcEALlp3s7VYDTP2C",
			"createdAt": "2021-12-15T23:25:45.789Z"
		}
	}
}
```
## Running the project:
### Build database:
```git
sudo docker --name apiauthgraphql -p 5432:5432 -e POSTGRES_PASSWORD=docker -d -t postgres
```
### Run project:
```git
ts-node-dev --respawn --transpile-only src/index.ts
```
