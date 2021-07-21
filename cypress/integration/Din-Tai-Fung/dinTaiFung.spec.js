import * as tests from "./tests/dinTaiFung.tests";

describe("鼎泰豐測試", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  describe("前往鼎泰豐", () => {
    tests.GoToDinTaiFungTests();
    // ok
  });

  describe("首頁導覽", () => {
    // tests.ChangeLanguageTests();
    // ok;
    // tests.OnSitToNumQueryTests();
    // ok
    // 現場到號查詢 上下各一個
    // tests.CarouselTests();
    // ok
    // tests.TopTenTests();
    // ok
    // tests.NewsTests();
    // ok
    // tests.StoresTests();
    // ok
    tests.MobileAppTests();
    // tests.BackToTopTests();
  });

  // describe('主要選單', () => {
  //   tests.MainMenuTests();
  //   tests.AboutDinTaiFungTests();
  //   tests.LatestNewsTests();
  //   tests.WorldwideLocationTests();
  //   tests.CuisineTests();
  //   tests.PeaceOfMindGuaranteeTests();
  //   tests.ContactUstests();
  //   tests.ShoppingOnLineTests();
  //   tests.RecruitingTests();
  // });
});
