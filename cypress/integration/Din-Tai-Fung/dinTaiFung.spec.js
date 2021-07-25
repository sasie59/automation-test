import * as tests from "./tests/dinTaiFung.tests";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("鼎泰豐測試", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  describe("前往鼎泰豐", () => {
    tests.GoToDinTaiFungTests();
    // ok
  });
  describe("首頁導覽", () => {
    tests.ChangeLanguageTests();
    // ok;
    tests.OnSitToNumQueryTests();
    // ok
    tests.CarouselTests();
    // ok
    tests.TopTenTests();
    // ok
    tests.NewsTests();
    // ok
    tests.StoresTests();
    // ok
    tests.MobileAppTests();
    // ok
    tests.BackToTopTests();
    // ok
  });

  describe("主要選單", () => {
    tests.ClickMenu();
    tests.MainMenuTests();
    // ok
    tests.AboutDinTaiFungTests();
    // ok
    tests.LatestNewsTests();
    // ok
    tests.WorldwideLocationTests();
    // ok
    tests.CuisineTests();
    // ok
    tests.PeaceOfMindGuaranteeTests();
    // ok
    tests.ContactUstests();
    // ok
    tests.TargetBlankShoppingOnLineTests();
    // ok
    tests.TargetBlankRecruitingTests();
    // ok
  });
});
