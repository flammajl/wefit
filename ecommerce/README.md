# Libs

Adicionado algumas libs para melhorar o desenvolvimento e experiência do usuário, como:

- [React-Icons](https://react-icons.github.io/react-icons/)
- [React Query](https://tanstack.com/query/)


# Como utilizar

```bash
# Clone este repositório
$ git clone git@github.com:flammajl/wefit.git

# Acesse a pasta do projeto no terminal/cmd
$ cd wefit

# Acesse a pasta do backend
$ cd ecommerce

# Se estiver usando docker execute apenas, senão siga os próximos passos
$ docker compose up -d

# Instale as dependências
$ npm install | yarn install

# Execute a API
$ npm run server | yarn server

# Em outro terminal acesse novamente a pasta do projeto
$ cd ecommerce

# Crie um arquivo .env.local e coloque as variáveis
# de ambiente baseado no arquivo .env.example

# Execute a aplicação em modo de desenvolvimento
$ npm run dev | yarn dev

# O servidor inciará na porta:5173 - acesse <http://localhost:5173>
```

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo de [LICENÇA](https://github.com/flammajl/wefit/blob/master/license) para detalhes.
