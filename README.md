Starbucks Clone
Um projeto de clone simples do site da Starbucks, desenvolvido utilizando HTML, CSS, SCSS e JavaScript. Este projeto visa recriar a aparência e funcionalidade básicas do site da Starbucks como um exercício de desenvolvimento front-end.

Sumário
Descrição
Tecnologias Utilizadas
Estrutura do Projeto
Instalação e Execução
Uso
Contribuição
Licença
Descrição
Este projeto é uma recriação do site da Starbucks, focando em design responsivo e interatividade básica. Inclui seções como a homepage, menu de produtos e informações sobre a empresa.

Tecnologias Utilizadas
HTML: Para estruturar o conteúdo da página.
SCSS: Para estilizar o projeto com recursos avançados de CSS.
JavaScript: Para adicionar interatividade e funcionalidades dinâmicas.
Estrutura do Projeto
arduino
Copiar código
starbucks-clone/
│
├── index.html
├── css/
│   └── main.css
|   └── main.css.map
|   └── main.min.css
├── js/
│   └── burger-menu.js
├── scss/
│   ├── config/
│   │   └── _variables.scss
|   |   └── _global.scss
|   |   └── _minireset.scss
|   |   └── _mixins.scss
│   ├── pages/
│   │   └── _main.scss
│   │   └── _section.scss
│   │   └── _header.scss
│   │   └── _footer.scss
│   ├── util/
│   │   └── _burger-menu.scss
│   │   └── _buttons.scss
│   │   └── _menu-modal.scss
│   └── main.scss
└── assets/
    └── images/
index.html: Arquivo principal da página.
css/main.min.css: Arquivo CSS compilado a partir do SCSS.
js/scripts.js: Arquivo JavaScript para funcionalidades dinâmicas.
scss/: Diretório contendo arquivos SCSS.
assets/images/: Diretório para armazenar imagens usadas no projeto.
Instalação e Execução
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/starbucks-clone.git
Navegue para o diretório do projeto:

bash
Copiar código
cd starbucks-clone
Instale as dependências SCSS (se necessário) e compile o SCSS:

bash
Copiar código
npm install
npm run build-css
Certifique-se de ter o Node.js e o npm instalados. O comando npm run build-css deve compilar o SCSS para CSS.

Abra o arquivo index.html em seu navegador preferido:

bash
Copiar código
open index.html
Uso
Homepage: Visualize a página inicial que apresenta a marca e promoções.
Menu: Navegue pelo menu de produtos da Starbucks.
Interatividade: Experimente as funcionalidades dinâmicas implementadas com JavaScript, como sliders e efeitos de hover.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar o projeto.

Fork o repositório
Crie uma branch para sua feature (git checkout -b minha-feature)
Faça commit das suas mudanças (git commit -am 'Adiciona nova feature')
Push para a branch (git push origin minha-feature)
Crie uma Pull Request
Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
