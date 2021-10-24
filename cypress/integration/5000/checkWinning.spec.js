import * as tests from './tests/checkWinning.tests';

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe('前往加碼券中獎查詢', () => {
  beforeEach(() => {
    cy.viewport(1200, 1500);
  });

  tests.GoToPlusCouponCheckWinnerTests();
  tests.WebPageElementTests();
  tests.DoubleZeroTo99Tests();
});
