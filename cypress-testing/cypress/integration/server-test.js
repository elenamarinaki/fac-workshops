// const { it } = require("mocha");

it('can run a test', () => {
  assert.equal(1, 1);
});

it('index page with message appears', () => {
  cy.visit('http://localhost:3333/').contains('Welcome to my site');
  cy.title().should('eq', 'Welcome to my site');
});
