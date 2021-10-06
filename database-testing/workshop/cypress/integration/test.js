// beforeEach(() => {
//   cy.task('resetDb');
// });

// const { describe } = require('mocha');

// it('hi', () => {
//   assert.equal(1, 1);
// });

describe('list of users at /', () => {
  beforeEach(() => {
    cy.task('resetDb');
  });
  it('displays a list of users', () => {
    cy.visit('/');
  });
});

describe('create user', () => {
  beforeEach(() => {
    cy.task('resetDb');
  });
  it('create user from /users/create', () => {
    cy.visit('/');
    cy.contains('New user').click();
    cy.url().should('include', '/users/create');
    cy.get('form').find("input[name='username']").type('elena');
    cy.get('form').find("input[name='age']").type('32');
    cy.get('form').find("input[name='location']").type('london');
    cy.get('form').find('button').click();
  });
});

describe('delete user', () => {
  beforeEach(() => {
    cy.task('resetDb');
  });
  it('delete user from /create-user', () => {
    cy.visit('/');
    cy.get(`[aria-label="Delete Sery1976"]`).click();
    // cy.get('value')
    cy.url().should('include', '/');
  });
});
