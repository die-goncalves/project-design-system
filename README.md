<h1 align="center" style="text-decoration: underline overline; text-decoration-thickness: 4px; text-underline-offset: 6px; text-decoration-color: #015F43;">
    Design System
</h1>

<!-- TABLE OF CONTENTS -->

<h5 align="center"> 
<a href="#sobre">Sobre</a>
   •   <a href="#tecnologias">Tecnologias</a> 
   •   <a href="#instalação">Instalação</a> 
   •   <a href="#interface-gráfica-e-deploy">Interface gráfica e deploy</a> 
   •   <a href="#agradecimento">Agradecimento</a> 
   •   <a href="#licença">Licença</a>     
   •   <a href="#autor">Autor</a> 
</h5>

## Sobre
<h4>Criação de um design system a partir de uma interface gráfica</h4>

O propósito deste projeto é analisar a interface de uma aplicação no figma e utilizar o Storybook para desenvolver nossos componentes com testes e documentações de uso. A documentação ajuda designers e desenvolvedores permitindo a reutilização e a padronização de suas criações. O primeiro passo é identificar os tokens, que são dados que armazenam propriedades CSS e que substituem valores fixos dentro do código fonte e integram aplicações e plataformas garantindo a consistência visual, com os tokens cria-se os componentes e a partir disso criamos a documentação. Em posse da documentação o desenvolvedor é beneficiado pois terá padrões a seguir.

O projeto possui estrutura de um monorepo, isto é, o projeto é dividido em pacotes que podem ser aplicações dependentes entre si em um mesmo repositório no github. O monorepo está dividido em:
1. Pacotes [eslint-config](/packages/eslint-config/) e [ts-config](/packages/ts-config/) que contam com a configuração do eslint e prettier e do typescript que servem de base para todos os outros pacotes.
2. Pacote [tokens](/packages/tokens/) que compreende os valores padrões para algumas propriedades CSS como fonte e espaçamento.
3. Pacote [react](/packages/react/) que possui o conjunto de componentes que foram construídos utilizando o pacote de tokens e respeitando o [design da aplicação](https://www.figma.com/file/k5N8wfxo0hDIgUkW0Y8ql8/Ignite-Call-i).
4. E no pacote [docs](/packages/docs/) que é onde trabalhamos com o Storybook, nele documentamos todos nossos tokens e componentes.

Acesse o `Readme.md` dos pacotes para maiores detalhes.

## Tecnologias

- <img style="width: 16px; margin-bottom: -2px" src="assets/turbo-icon.svg" alt="turbo"> [turbo](https://turbo.build/repo) — Simplifica o gerenciamento do monorepo utilizando recursos como cache remoto e execução paralela. Com a execução paralela temos um script único para `dev` e `build`, executando o script `dev` da raiz principal, executamos todos os `dev`'s de todos os pacotes paralelamente. Com o cache remoto melhoramos a performance do Github Actions.

> Veja o arquivo  [package.json](/package.json)

## Instalação

- ### **Pré-requisitos**
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  - É **necessário** ter o gerenciador de pacotes **[Npm](https://www.npmjs.com/)**.
  
- ### **Próximo passo**
1. Faça um clone deste repositório:
    ```sh
    $ git clone https://github.com/die-goncalves/project-design-system.git
    ```

2. Instale as dependências:
    ```sh
    # Entre no diretório do repositório clonado
    $ cd project-design-system
    # Instale as dependências do projeto.
    $ npm install
    ```

3. Execute a aplicação:
    ```sh
    # Na raiz do projeto abra o terminal e execute o comando 
    $ npm run dev
    # A aplicação inciará automaticamente na porta 6006 - acesse <http://localhost:6006>
    ```

## Interface gráfica e deploy

Clique nos links abaixo para ver a interface da aplicação e a documentação publicada.
<div style="display: flex; justify-content: center; gap: 2rem;">
    <div>
      <a href="https://www.figma.com/file/k5N8wfxo0hDIgUkW0Y8ql8/Ignite-Call-i">
          <img alt="Link no figma" src="https://img.shields.io/static/v1?label=Figma&message=interface&color=FFC700&style=flat-square&logo=figma" />
      </a>
    </div>
    <div>
      <a href="https://die-goncalves.github.io/project-design-system/">
          <img alt="Link do site publicado" src="https://img.shields.io/static/v1?label=Github Pages&message=deployed&color=00B37E&style=flat-square&logo=github" />
      </a>
    </div>
</div>

## Agradecimento

<table width="100%" align="center">
    <tr>
        <th>
            <a href="https://rocketseat.com.br/">
                <img width="100" height="150" src="assets/rocketseat-icon.svg">
                <br /><sub><b>Rocketseat</b></sub>
            </a>
        </th>
    </tr>
</table>

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Feito por Diego Gonçalves, contato:

[![Badge](https://img.shields.io/static/v1?label=Linkedin&message=Diego%20Gonçalves&color=208BEE&style=flat-square&logo=linkedin&link=https://www.linkedin.com/in/diego-goncalves1990)](https://www.linkedin.com/in/diego-goncalves1990)
[![Badge](https://img.shields.io/static/v1?label=Gmail&message=die.goncalves1990@gmail.com&color=EA5134&style=flat-square&logo=gmail&link=mailto:die.goncalves1990@gmail.com)](mailto:die.goncalves1990@gmail.com)
