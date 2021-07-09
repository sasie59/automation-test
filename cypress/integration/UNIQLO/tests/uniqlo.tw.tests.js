
export const GoToUniqloPageTests = () => {
  it('should go to uniqlo index\n(前往uniqlo)', () => {
    cy.visit('https://www.uniqlo.com/tw/');
    cy.get('a[title="UNIQLO"]').should('be.visible');
  });
}

export const LoginTests = () => {
  it('should login account secret\n(登入帳號密碼)', () => {
    cy.get('img[alt="登入"]').click({ force: true });
    cy.url().should('eq', 'https://www.uniqlo.com/tw/store/FSC01010E02.do');
    cy.get('input[name="cust_eml_id"]').type(Cypress.env('account'));
    cy.get('input[name="cust_eml_id"]').should('have.value', Cypress.env('account'))
    cy.get('input[name="cust_pass"]').type(Cypress.env('password'));
    cy.get('input[name="cust_pass"]').should('have.value', Cypress.env('password'));
    // cy.get('input[title="登入"]').click();
  });
}