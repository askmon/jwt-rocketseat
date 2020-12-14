# JWT - Autenticação e melhores práticas

Repositório do Workshop de melhores práticas usando JWT.

Na branch `complete` você encontra a versão final do projeto feita durante o workshop.

Este projeto foi desenvolvido em um Mac, mas acredito que tudo rode em Linux, e no Windows com algumas modificações em alguns comandos.

## Requisitos

Este projeto consiste de uma API feita em Node.js que consome um banco PostgreSQL. Há um arquivo `.nvmrc` no projeto caso queira realizar a instalação usando o [nvm](https://github.com/nvm-sh/nvm).

O arquivo que possui o uso das libs do JWT em si, é o `src/services/token.js`

## Rodando o projeto

Para rodar o projeto é necessário rodar um banco Postgres, sugiro o uso do docker. Pode ser usado o seguinte comando:

`docker run --name db-jwt-example -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres`

Caso queira rodar em outro local, lembre-se de editar a url no arquivo `config/database.js`.

O próximo passo é instalar as depêndencias:

`npm install`

Depois é necessário rodar a migration para criar as tabelas no banco:

`npm run sequelize:migrate`

E então pode-se rodar com nodemon:

`npm run dev`

Para facilitar os testes dos endpoints, pode ser usado o arquivo `JWT.postman_collection.json`

## Comandos para criação de chaves privada e pública

```
openssl genrsa -out private-key.pem 2048 
openssl rsa -in private-key.pem -pubout -out public-key.pem
```

Caso queira usar chaves previamente geradas, copie o arquivo `.env.example` para o arquivo `.env`. Mas lembre-se: **Não** use essas chaves em produção, **apenas** para teste.

## Dúvidas

Qualquer dúvida/problema referente ao projeto, sinta-se livre para abrir uma issue no projeto que eu vou responder assim que possível.

## Links e referências

Escrevi um artigo em que falo de alguns conceitos abordados no workshop, ele pode ser acessado clicando [aqui](https://askanayama.medium.com/entendendo-a-autentica%C3%A7%C3%A3o-com-jwt-2c562697a240).

- [jwt.io](https://jwt.io/) - Debugger e referências sobre JWT (em inglês)
- [Melhores práticas ao usar JWT](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/) (em inglês)
- [RFC do JWT](https://tools.ietf.org/html/rfc7519) (em inglês)
- [Claims do JWT](https://ldapwiki.com/wiki/JSON%20Web%20Token%20Claims) - Aqui você encontra as reserved claims com breves explicações e também as do - [OpenID Connect Standard Claims](https://ldapwiki.com/wiki/OpenID%20Connect%20Standard%20Claims)
