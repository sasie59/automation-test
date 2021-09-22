export const GoTo5000Tests = () => {
  it('should go to 5000 index\n(預期連結振興五倍卷)', ()=> {
    cy.visit('https://5000.gov.tw/');
    cy.wait(2000);
    cy.get('.simple-text.major-logo a').should('have.attr', 'href');
    //title振興五倍卷//
  });
};