

export const GoToDinTaiFungTests = () => {
  it('should go to Din-Tai-Fang index\n(前往鼎泰豐首頁)', () => {
    cy.visit('https://www.dintaifung.com.tw/');
    cy.get('#menubox_box').should('be.visible');
  });
}