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
  });
  describe("首頁導覽", () => {
    tests.ChangeLanguageTests();
    tests.OnSitToNumQueryTests();
    tests.CarouselTests();
    tests.TopTenTests();
    tests.NewsTests();
    tests.StoresTests();
    tests.MobileAppTests();
    tests.BackToTopTests();
  });

  describe("主要選單", () => {
    tests.ClickMenu();
    tests.MainMenuTests();
    tests.AboutDinTaiFungTests();
    tests.LatestNewsTests();
    tests.WorldwideLocationTests();
    tests.CuisineTests();
    tests.PeaceOfMindGuaranteeTests();
    tests.ContactUstests();
    tests.TargetBlankShoppingOnLineTests();
    tests.TargetBlankRecruitingTests();
  });
});
