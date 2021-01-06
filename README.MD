# Cucumber + Cypress
Projeto para automação com Cucumber e cypress.

## Requisitos
- [Node LTS](https://nodejs.org/pt-br/)
- [Yarn] (https://classic.yarnpkg.com/en/)

## Uso
```bash
yarn
```

#### Executando em modo gráfico
Para acompanhar a execução, em momento de desenvolvimento, pode ser utilizado o script:
`yarn run cypress:open`

#### Executando todos os testes
Para executar todos os testes, pode ser utilizado o script:
`yarn test`

#### Executando por tags
Para executar features específicas, podem ser utilizadas tags do cucumber.
Para isso, pode ser utilizado o script a seguir, apenas trocando `@tag` pela tag desejada:
`yarn run cucumber TAGS=@tag`