import * as tests from "./tests/taiwanPay.tests";

describe("固定行高", () => {
  beforeEach(() => {
    cy.viewport(1000, 700);
  });
  describe("前往台灣Pay", () => {
    tests.GoToTaiwanPayTests();
  });
  describe("首頁導覽", () => {
    tests.HeaderTests();
    tests.AdvertiseTests();
    tests.CarouselTests();
    tests.VideoTests();
    tests.WhatisTaiwanPayTests();
    tests.FooterTests();
  });
  describe("線上客服小幫手", () => {
    // tests.LittleHelperTests();
  });

  describe("功能選單", () => {
    beforeEach(() => {
      describe("", () => {
        // tests.MainMenuTests();
      });
    });
    // tests.IntroductionTests();
    // tests.HowToApplyTests();
    // tests.LatestNewsTests();
    // tests.WhereToUseTests();
    // tests.MerchantZoneTests();
    // tests.EpidemicPreventionZoneTests();
    // tests.VideoZoneTests();
    // tests.CommonProblemTests();
    // tests.FriendlyServiceTests();
    // tests.ContentUsTests();
    // tests.WebsiteUseStatementTests();
    // tests.PrivacyPolicyTests();
    // tests.MediaCommunityTests();
  });
});
