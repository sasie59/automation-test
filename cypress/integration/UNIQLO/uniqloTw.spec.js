import * as tests from './tests/uniqlo.tw.tests';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('前往台灣Uniqlo', () => {
  tests.GoToUniqloPageTests();
});

describe('主要選單', () => {
  tests.DefineElement();
  tests.MainTypeTests();
  tests.SearchBarTests();
  tests.StoreInformationTests();
  tests.LoginTests();
  tests.ShoppingCartTests();
});

describe('旋轉木馬', () => {
  tests.CarouselTests();
});

describe('行為測試', () => {
  // tests.DefineControlElement();
  tests.WomenAreaTests();
  tests.MenAreaTests();
  tests.KidsAreaTests();
  tests.BabyAreaTests();
  tests.CommodityInformationTests();
});


