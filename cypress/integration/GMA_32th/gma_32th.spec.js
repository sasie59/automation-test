import * as tests from './tests/gma_32th.tests';

describe('設定視窗比例', () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
  });

  describe('前往第32屆金曲獎首頁', () => {
    tests.GoToGMA_32thTests();
  });

});
