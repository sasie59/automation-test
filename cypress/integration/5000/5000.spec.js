import * as tests from './tests/5000.tests';

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe('振興五倍卷', () => {
  beforeEach(() => {
    cy.viewport(1200, 1000);
  });

  describe('前往振興五倍卷', () => {
    tests.GoTo5000Tests();
  });

  describe('首頁導覽', () => {
    tests.HomeTourTests();
    tests.ZoomOutAndEnlargetests();
    // ok
  });

  describe('領取方式', () => {
    tests.TypeToUse();
    tests.DigitalBindingTests();
    tests.PaperRollTests();
    // ok
  });

  describe('數位標章', () => {
    tests.DigitalLabelTests();
    // ok
  });

  describe('各部會加碼', () => {
    tests.eightDepartmentOverweightTests();
    tests.OverViewTests();
    // ok
  });

  describe('預訂與查詢', () => {
    tests.BookingAndCheck();
    tests.PersonalBindingTests();
    tests.PaperFor5000tests();
    tests.PostOfficeReserveTests();
    tests.OverWeightLogInTests();
    tests.CheckTests();
    // ok
  });

  describe('影音教學', () => {
    tests.AudiovisualTeachingTests();
    // ok
  });

  describe('常見問答', () => {
    tests.CommonQATests(); 
    // ok
  });

  describe('切換語系', () => {
    tests.SwitchLanguageTests();
    // ok
  });

});
