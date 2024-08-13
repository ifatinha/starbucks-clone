# Starbucks Clone

Um projeto de clone simples do site da Starbucks, desenvolvido utilizando HTML, CSS, SCSS e JavaScript. Este projeto visa recriar a aparência e funcionalidade básicas do site da Starbucks como um exercício de desenvolvimento front-end.

## Sumário

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Execução](#instalação-e-execução)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

Este projeto é uma recriação do site da Starbucks, focando em design responsivo e interatividade básica. Inclui seções como a homepage, menu de produtos e informações sobre a empresa.

## Tecnologias Utilizadas

- **HTML**: Para estruturar o conteúdo da página.
- **SCSS**: Para estilizar o projeto com recursos avançados de CSS.
- **JavaScript**: Para adicionar interatividade e funcionalidades dinâmicas.

## Estrutura do Projeto

```
starbucks-clone/
│
├── index.html
├── css/
│ ├── main.css
│ ├── main.css.map
│ └── main.min.css
├── js/
│ └── burger-menu.js
├── scss/
│ ├── config/
│ │ ├── _variables.scss
│ │ ├── _global.scss
│ │ ├── _minireset.scss
│ │ └── _mixins.scss
│ ├── pages/
│ │ ├── _main.scss
│ │ ├── _section.scss
│ │ ├── _header.scss
│ │ └── _footer.scss
│ ├── util/
│ │ ├── _burger-menu.scss
│ │ ├── _buttons.scss
│ │ └── _menu-modal.scss
│ └── main.scss
└── assets/
└── images/
```

- **index.html**: Arquivo principal da página.
- **css/main.min.css**: Arquivo CSS compilado a partir do SCSS.
- **js/scripts.js**: Arquivo JavaScript para funcionalidades dinâmicas.
- **scss/**: Diretório contendo arquivos SCSS.
- **assets/images/**: Diretório para armazenar imagens usadas no projeto.

## Instalação e Execução

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/starbucks-clone.git
    ```

2. Navegue para o diretório do projeto:

    ```bash
    cd starbucks-clone
    ```

3. Instale as dependências SCSS (se necessário) e compile o SCSS:

    ```bash
    npm install
    npm run build-css
    ```

   Certifique-se de ter o Node.js e o npm instalados. O comando `npm run build-css` deve compilar o SCSS para CSS.

4. Abra o arquivo `index.html` em seu navegador preferido:

    ```bash
    open index.html
    ```

## Uso

- **Homepage**: Visualize a página inicial que apresenta a marca e promoções.
- **Menu**: Navegue pelo menu de produtos da Starbucks.
- **Interatividade**: Experimente as funcionalidades dinâmicas implementadas com JavaScript, como sliders e efeitos de hover.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar o projeto.

1. Fork o repositório.
2. Crie uma branch para sua feature:

    ```bash
    git checkout -b minha-feature
    ```

3. Faça commit das suas mudanças:

    ```bash
    git commit -am 'Adiciona nova feature'
    ```

4. Push para a branch:

    ```bash
    git push origin minha-feature
    ```

5. Crie uma Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
