# Database Testing

```js
describe('Dog forms', () => {
  it('creates a new dog', () => {
    cy.visit('/');
    cy.get("input[name='dogName']").type('rover');
    cy.get("button[type='submit']").click();
  });
  it('deletes a dog', () => {
    cy.visit('/');
    cy.get("button[aria-label='Delete rover']").click();
    // make sure that Rover entry is removed from page
    cy.contains('Rover').should('not.exist');
  });
});
```

⚠️ These tests work fine together, but if we ran the delete test on its own it would fail.
Tests should always be self-contained and able to run on their own.
