export const GoToPlusCouponCheckWinnerTests = () => {
  it('should \n(預期連結加碼券中獎查詢)', () => {
    cy.visit('https://sexyoung.github.io/vhpi.5000/');
    cy.wait(1000);
  });
};

export const WebPageElementTests = () => {
  it('should display all elements\n(預期呈現所有的元素)', () => {
    cy.get('.App_App__3_kPP').as('title');

    const classList = [
      '.App_logo__1DTn3',
      '.App_text__1FlLb',
      '.App_footer__2bprW'
    ];
    classList.forEach(item => {
      cy.get('@title').find(`${item}`).should('be.visible');
      cy.wait(500);
    });
    cy.get('@title').find('small a')
      .should('have.attr', 'target', '_blank', 'href');

    cy.get('@title').find('form #code')
      .should('be.visible');
  });
};