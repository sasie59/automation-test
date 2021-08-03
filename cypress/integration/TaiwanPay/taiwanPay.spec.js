import * as tests from "./tests/taiwanPay.tests";

describe("固定行高", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
  });
  describe("前往台灣Pay", () => {
    tests.GoToTaiwanPayTests();
  });
});
