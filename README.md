# Watson Text to Speech


- Clone ou baixe o repositório 
```shell
	git clone https://github.com/botinho141516/watson-node
```

- Entre no projeto recém clonado
```shell
	cd watson-node
```

- Instale as dependências
```shell
	npm i
```

- Enquanto as dependências são instaladas, crie o arquivo de variáveis de ambiente
```shell
	cp .env.example .env
``` 
- Abra o recém criado .env e edite o valor das variaveis conforme a legenda. (Lembrando que o nome do banco não pode conter apenas números)

- Rode o script de criação de banco e tabelas
```shell
	npm run-script create-database
```

- Inicie a aplicação
```shell
	npm start
```

- Ela esta disponível em http://localhost:3000