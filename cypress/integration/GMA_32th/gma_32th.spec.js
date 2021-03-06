import * as tests from './tests/gma_32th.tests';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('設定視窗比例', () => {
  beforeEach(() => {
    cy.viewport(1200, 900);
  });

  describe('前往第32屆金曲獎首頁', () => {
    tests.GoToGMA_32thTests();
  });

  describe('2021金曲國際音樂節', () => {
    tests.Into2021GoldenMelodyFestivalTests();
    tests.GMF_CarouselTests();
    tests.GMF_IntroductionTests();
    tests.GMF_SeriesOfActivitiesTests();
    tests.GMF_SuccessiveLinksTests();
    tests.GMF_UnitTests();
  });

  describe('第32屆金曲獎頒獎典禮', () => {
    tests.Into32thGoldenMelodyAwardsTests();
    tests.GMA_CarouselTests();
    tests.GMA_PageNavigationTests();
    tests.GMA_UnitTests();
  });

  describe('金曲國際音樂節主選單', () => {
    tests.GMF_MainMenu();
    tests.GMF_AboutGMATests();
    tests.GMF_UniversityExchangeTests();
    tests.GMF_InternationalForumTests();
    tests.GMF_TradeFairTradingCenterTests();
    tests.GMF_ShowCaseTests();
  });

  describe('金曲獎頒獎典禮主選單', () => {
    tests.GMA_MainMenu();
    tests.GMA_BroadcastMessageTests();
    tests.GMA_AppLinksTests();
    tests.GMA_LiveTests();
    tests.GMA_ShortlistedListTests();
    tests.GMA_PastWinnersListTests();
    tests.GMA_AudioAndVideoTests();
    tests.GMA_TrailerTests();
    tests.GMA_HeatTests();
    tests.GMA_CeremonyLocationTests();
  });

  describe('共同擁有的元素', () => {
    tests.DefineElements();
    tests.SocialMediaTests();
    tests.BothTitleTests();
    tests.LatestNewsTests();
    tests.MediaRegistrationTests();
    tests.VendorZoneTests();
    tests.LanguageSwitchTests();
  });

});
// 已同步更新至104, CakeResume, LinkedIn