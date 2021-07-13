import * as tests from './tests/uniqlo.tw.tests';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('台灣Uniqlo', () => {
  tests.GoToUniqloPageTests();
  describe('登入帳號', () => {
    tests.DefineElement();
    tests.LoginTests();
    tests.MainTypeTests();
    tests.CarouselTests();
    tests.SearchBarTests();
    tests.StoreInformationTests();
    tests.WomenAreaTests();
    tests.MenAreaTests();
    tests.KidsAreaTests();
    tests.BabyAreaTests();
    tests.CommodityInformationTests();
    tests.ShoppingCartTests();
  });
});
