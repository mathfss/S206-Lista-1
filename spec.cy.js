/// <reference types="cypress" />

describe('Testes de funcionalidade para o site OpenLibrary', () => {

  beforeEach(() => {
    cy.visit('https://openlibrary.org');
  });

  it('1. Validação de Pesquisa de Livro', () => {
    cy.get('input[type="text"]').type('Harry Potter');
    cy.get('.search-bar-submit').click();
    cy.url().should('include', '/search?q=Harry+Potter');
    cy.get('.searchResultItem').should('contain', 'Harry Potter');
  });

  it('2. Navegação para a Página de Login', () => {
    cy.contains('Log In').click();
    cy.url().should('include', '/account/login');
    cy.get('form').should('contain', 'Email').and('contain', 'Password');
  });

  it('3. Cadastro de Conta Nova Sem Email - Campos Obrigatórios (Caso Negativo)', () => {
    cy.visit('https://openlibrary.org/account/create');
    cy.get('input[name="username"]').type('NovoUsuario');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Email is required').and('contain', 'Password is required');
  });

  it('4. Validação de Livro Específico', () => {
    cy.get('input[type="text"]').type('The War of the Worlds');
    cy.get('.search-bar-submit').click();
    cy.get(':nth-child(1) > .sri__main > .details > .resultTitle > .booktitle > .results').click();
    cy.url().should('include', '/works/');
    cy.get('h1').should('contain', 'The war of the worlds');
  });

  it('5. Validação de Responsividade', () => {
    cy.viewport(768, 1024);
    cy.get('input[type="text"]').type('Science Fiction');
    cy.get('.search-bar-submit').click();
    cy.get('.searchResultItem').should('be.visible');
  });

  it('6. Login com Credenciais Inválidas (Caso Negativo)', () => {
    cy.contains('Log In').click();
    cy.get('input[name="username"]').type('usuarioinvalido@example.com');
    cy.get('input[name="password"]').type('senhaerrada');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Invalid username or password');
  });

});
