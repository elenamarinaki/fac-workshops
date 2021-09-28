// const { it } = require('mocha');

// eslint-disable-next-line no-undef
it('can run a test', () => {
  assert.equal(1, 1);
});

it('can navigate pages', () => {
//   cy.visit('https://example.cypress.io/');
//   cy.contains('within').click();
    cy.visit('https://example.cypress.io/commands/querying');
  cy.url().should('include', '/commands/querying');
  //   cy.contains('zzzzzzzz');
});

it('submit form', () => {
  cy.get('#signup-form').find("input[name='email']").type('my-email@test.com');
  cy.get('#signup-form').submit();
});
