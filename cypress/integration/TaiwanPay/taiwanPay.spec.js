import * as tests from "./tests/taiwanPay.tests";

describe("固定行高", () => {
  beforeEach(() => {
    cy.viewport(1000, 600);
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
    tests.ContentUsTests();
  });

  describe('功能選單', () => {
    tests.DefineElementAndClickDropDown();

    tests.IntroductionTests();
    tests.HowToApplyTests();
    tests.LatestNewsTests();
    tests.WhereToUseTests();
    tests.MerchantZoneTests();
    tests.EpidemicPreventionZoneTests();
    tests.VideoZoneTests();
    tests.CommonProblemTests();
    tests.WebsiteUseStatementTests();
    tests.PrivacyPolicyTests();
    tests.SocialMediaTests();
  });
  
  describe("線上客服小幫手", () => {
    tests.LittleHelperTests();
  });
  
  describe('友善服務網', () => {
    tests.FriendlyServiceTests();
  });
});