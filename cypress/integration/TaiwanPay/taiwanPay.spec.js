import * as tests from "./tests/taiwanPay.tests";

describe("固定行高", () => {
  beforeEach(() => {
    cy.viewport(1000, 600);
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
    // ok
    // tests.EpidemicPreventionZoneTests();
    // ok
    // tests.VideoZoneTests();
    // ok
    // tests.CommonProblemTests();
    // tests.FriendlyServiceTests();
    // ok
    // tests.WebsiteUseStatementTests();
    // ok
    // tests.PrivacyPolicyTests();
    // ok
    // tests.SocialMediaTests();
  });

  describe("線上客服小幫手", () => {
    // tests.LittleHelperTests();
    // ok
  });
});