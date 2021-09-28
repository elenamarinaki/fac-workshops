/* eslint-disable no-undef */
it('can run a test', () => {
  assert.equal(1, 1);
});

it('index page with message appears', () => {
  cy.visit('/').contains('Welcome to my site');
});

it('working "/about" route', () => {
  cy.visit('/about');
  cy.url().get('h1').contains('About this site');
  // testing the <title> tag
  cy.title().should('eq', 'About this site');
});

it('working "/sign-up" route', () => {
  cy.visit('/');
  cy.get('nav').find('a').contains('Sign up').click();
  cy.url().should('include', 'sign-up');
  cy.get('h1').contains('Sign up');
});

it('/sign-up page with a form containing email/password inputs', () => {
  cy.visit('/sign-up');
  cy.get('form').find('input[name="email"]').type('elenamarinaki.em@gmail.com');
  cy.get('form').find('input[name="password"]').type('12345');
  cy.get('form').find('button').click();
  cy.url().should('include', '/welcome');
});
