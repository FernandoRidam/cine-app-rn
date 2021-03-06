<img src="/src/assets/icon.png" height="55">

# Cine App

Aplicativo de consulta e dicas de filmes. Suas principais funcionalidades são:

1. Listar filmes e séries lançamentos.
2. Busca de filmes e séries por titulo.
3. Listar filmes e séries por genêro.
4. Exibe detalhes dos filmes e séries, com trailers.
5. Com duas opções de idiomas. Português do Brasil e Inglês.

### Screens

| <img src="/screens/films.png" width="200">
| <img src="/screens/details.png" width="200">
| <img src="/screens/series.png" width="200">
| <img src="/screens/search.png" width="200">
| <img src="/screens/settings.png" width="200">

## Executando o projeto

- Após clonar o projeto:
- yarn install
- cd ios && pod install (se ios)
- yarn android ou yarn ios para executar

## APi de Filmes

- A Api do [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction) foi utilizada para obter as informações sobre os filmes.

## Tecnologias e Bibliotecas

### React native

- O [React Native](https://reactnative.dev/) foi utilizado em sua versão 0.63.4

### Principais libs:

- [axios](https://github.com/axios/axios) para o consumo da api.
- [react navigation v5](https://reactnavigation.org/) para gerenciamento da navegação entre telas.
- [i18next, react-i18next](https://www.i18next.com/) para internacionalização.

### Padrões

#### Componentização de codigo reutilizavel

Componentes para exibição de posteres, listagens e botoes foram criados para evitar a repetição de codigo. Os componentes são reutilizaveis e não contem regras de negocio, podendo ser utilizados nas variadas telas.

#### Separação de responsabilidades

- Uma camada de serviço foi criada e atua de forma transparente para as camadas superiores, seu funcionamento nao depende das regras superiores e vice e versa.
- As telas se preocupam em obter inputs dos usuarios e mostrar resultados. Dessa forma, adicionar uma nova tela não é um trabalho tão arduo.

