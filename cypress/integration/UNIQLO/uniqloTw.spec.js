import * as tests from './tests/uniqlo.tw.tests';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('前往台灣Uniqlo', () => {
  tests.GoToUniqloPageTests();
  // ok`
});

describe('旋轉木馬', () => {
  tests.CarouselTests();
  // ok
});
describe('商品資訊', () => {
  tests.CommodityInformationTests();
});


describe('主要選單', () => {
  tests.DefineElement();
  tests.MainTypeTests();
  // ok
  tests.SearchBarTests();
  tests.StoreInformationTests();
  // ok
  tests.LoginTests();
  // ok
  tests.ShoppingCartTests();
});

describe('行為測試', () => {
  // tests.DefineControlElement();
  tests.WomenAreaTests();
  tests.MenAreaTests();
  tests.KidsAreaTests();
  tests.BabyAreaTests();
});


