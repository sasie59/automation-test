import * as tests from './tests/uniqlo.tw.tests';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe("固定行高", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
  });
  describe('前往台灣Uniqlo', () => {
    tests.GoToUniqloPageTests();
    // ok`
  });

  describe('輪播器', () => {
    tests.CarouselTests();
    // ok
  });
  describe('商品資訊', () => {
    tests.CommodityInformationTests();
    // ok
    tests.ShoppingCartTests();
    // ok
  });


  describe('主要選單', () => {
    tests.DefineElement();
    // ok
    tests.MainTypeTests();
    // ok
    tests.SearchBarTests();
    // ok
    tests.StoreInformationTests();
    // ok
    tests.LoginTests();
    // ok
  });

  describe('行為測試', () => {
    tests.DefineControlElement();
    // // ok
    tests.WomenAreaTests();
    // // ok
    tests.MenAreaTests();
    // // ok
    tests.KidsAreaTests();
    // // ok
    tests.BabyAreaTests();
    // ok
  });

});


