import * as tests from './tests/checkWinning.tests';

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe('前往加碼券中獎查詢', () => {
  tests.GoToPlusCouponCheckWinnerTests();
  tests.WebPageElementTests();
});
