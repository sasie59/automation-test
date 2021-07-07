import * as tests from './tests/uniqlo.tw.tests';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('台灣Uniqlo', () => {
  describe('登入帳號', () => {
    tests.GoToUniqloPageTests();
    tests.LoginTests();
  });
});
