/* eslint-disable no-undef */
it('can run a test', () => {
  assert.equal(1, 1);
});

it('index page with message appears', () => {
  cy.visit('/').contains('Welcome to my site');
});

it('working /about route', () => {
  cy.visit('/about');
  // testing the <title> tag
  cy.title().should('eq', 'About this site');
});

it('working /sign-up route', () => {
  cy.visit('/sign-up');
});
