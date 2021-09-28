/* eslint-disable no-undef */
it('can run a test', () => {
  assert.equal(1, 1);
});

it('index page with message appears', () => {
  cy.visit('/').contains('Welcome to my site');
  // cy.title().should('eq', 'Welcome to my site');
});
