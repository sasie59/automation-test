import * as tests from './tests/5000.tests';

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe('振興五倍卷', () => {
  beforeEach(() => {
    cy.viewport(800, 1000);
  });
  
  describe('前往振興五倍卷', () => {
    tests.GoTo5000Tests();
  });
  
});
