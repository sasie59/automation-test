import * as tests from "./tests/taiwanPay.tests";

describe("固定行高", () => {
  beforeEach(() => {
    cy.viewport(1000, 1300);
  });
  describe("前往台灣Pay", () => {
    tests.GoToTaiwanPayTests();
    // ok
  });
  describe("首頁導覽", () => {
    // tests.HeaderTests();
    // ok
    // tests.AdvertiseTests();
    // ok
    // tests.CarouselTests();
    // ok
    // tests.VideoTests();
    // ok
    // tests.WhatisTaiwanPayTests();
    // ok
    // tests.FooterTests();
    // ok
    // tests.ContentUsTests();
  });

  describe('功能選單', () => {
    tests.DefineElementAndClickDropDown();
    // tests.IntroductionTests();
    // ok
    // tests.HowToApplyTests();
    // ok
    // tests.LatestNewsTests();
    // ok
    // tests.WhereToUseTests();
    // tests.MerchantZoneTests();
    // tests.EpidemicPreventionZoneTests();
    // tests.VideoZoneTests();
    // tests.CommonProblemTests();
    // tests.FriendlyServiceTests();
    // tests.WebsiteUseStatementTests();
    // tests.PrivacyPolicyTests();
    // tests.MediaCommunityTests();
  });

  describe("線上客服小幫手", () => {
    // tests.LittleHelperTests();
    // ok
  });
});