import * as tests from "./tests/goShare.tests";

describe('預設網頁大小', () => {
  beforeEach(() => {
    cy.viewport(1000, 500);
  });
  describe("前往GoShare", () => {
    tests.GoToGoShareTests();
  });

  describe('網頁導覽', () => {
    tests.IntroductionTests();
    tests.UseStepTests();
    tests.GoRideEveryWhereTests();
    tests.FirstRideAndShareToEarnTests();
    tests.FooterNavTests();
  });
});
