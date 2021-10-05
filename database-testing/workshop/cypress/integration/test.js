// beforeEach(() => {
//   cy.task('resetDb');
// });

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
  it('create user from /create-user', () => {
    cy.visit('/');
    cy.contains('New user').click();
    cy.url().should('include', '/users/create');
    cy.get('form').find("input[name='username']").type('elena');
    cy.get('form').find("input[name='age']").type('32');
    cy.get('form').find("input[name='location']").type('london');
    cy.get('form').find('button').click();
  });
});
