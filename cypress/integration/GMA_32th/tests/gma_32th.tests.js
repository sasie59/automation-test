
export const GoToGMA_32thTests = () => {
  it('should go to GMA_32th index\n(前往第32屆金曲獎首頁)', () => {
    cy.visit('https://gma.tavis.tw/gm32/index.htm');
    cy.get('#left').get('#right').should('be.visible');
  });
};