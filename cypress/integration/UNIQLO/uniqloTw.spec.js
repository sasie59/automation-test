import * as tests from './tests/uniqlo.tw.tests';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('台灣Uniqlo', () => {
  describe('登入帳號', () => {
    tests.GoToUniqloPageTests();
    tests.LoginTests();
    tests.MainTypeTests();
    tests.CarouselTests();
    tests.SearchBarTests();
    tests.StoreInformationTests();
    tests.RegisteredTests();
    tests.WomenAreaTests();
    tests.MenAreaTests();
    tests.KidsAreaTests();
    tests.BabyAreaTests();
    tests.CommodityInformationTests();
    tests.ShoppingCartTests();
  });
});
