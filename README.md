# Testes Automatizados com Cypress para OpenLibrary

Este projeto contém um conjunto de testes automatizados para o site [OpenLibrary](https://openlibrary.org/), desenvolvidos com a ferramenta **Cypress**. Os testes abrangem funcionalidades como pesquisa de livros, navegação e validação de formulários de login e cadastro. Além disso, um relatório em HTML é gerado automaticamente ao final da execução dos testes.

## Estrutura do Projeto

- **spec.cy.js**: Arquivo contendo os testes automatizados.
- **cypress.config.js**: Configurações do Cypress para uso do Mochawesome como gerador de relatórios.
- **generate-report.js**: Script para a geração dos relatórios após os testes serem executados.
- **mochawesome-report/**: Diretório onde o relatório final dos testes é gerado.

## Pré-requisitos

- **Node.js**: Versão 12 ou superior.
- **Cypress**: Instalado via npm.
- **Mochawesome**: Utilizado para a geração de relatórios.

## Instalação e Configuração

1. Adicione o arquivo "spec.cy.js" na pasta cypress/e2e

2. Adicione os arquivos "cypress.config.js" e "generate-report.js" na pasta raiz onde foi instalado o cypress via npm

3. Adicione o seguinte código de script:
"scripts": {
    "test": "cypress run",
    "report": "node generate-report.js",
    "test:report": "npm run test && npm run report"
  }
 No arquivo package.json na pasta raiz onde está o seu cypress

4. Execute o teste no Gitbash usando o comando "npm run test:report" ou execute pelo próprio Cypress se preferir

5. Após todos os testes serem executados será gerada uma pasta chamada "mochawesome-report" na pasta raiz do cypress contendo o relatório dos testes
