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
    // tests.HomeTourTests();
    // tests.ZoomOutAndEnlargetests();
  });

  describe('領取方式', () => {
    // tests.TypeToUse();
    // tests.DigitalBindingTests();
    // tests.PaperRollTests();
  });

  describe('各部會加碼', () => {
    // tests.eightDepartmentOverweightTests();
    // tests.OverViewTests();
  });

  describe('預訂與查詢', () => {
    tests.BookingAndCheck();
    // tests.PersonalBindingTests();
    // tests.Co_BindingTests();
    // tests.QuitCo_BindingTests();
    // tests.PaperFor5000tests();
    // tests.OverWeightLogInTests();
    // tests.CheckTests()
  });

  describe('影音教學', () => {
    // tests.AudiovisualTeachingTests();
  });

  describe('常見問答', () => {
    // tests.CommonQATests();
  });

  describe('切換語系', () => {
    tests.SwitchLanguageTests();
  });

});
