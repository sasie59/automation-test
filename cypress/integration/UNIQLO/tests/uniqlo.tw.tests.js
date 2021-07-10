
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

export const MainTypeTests = () => {
  it('should display main type and can each switch\n(應該呈現主要類型為: WOMEN, MEN, KIDS, BABY並且可以各自切換)', () => {
    cy.go(-1);
    cy.get('a[title="UNIQLO"]').should('be.visible');

    cy.get('#navHeader').as('head');

    cy.get('@head').get('a[id="header_women"]').should('be.visible');
    cy.get('@head').get('a[id="header_men"]').should('be.visible');
    cy.get('@head').get('a[id="header_kids"]').should('be.visible');
    cy.get('@head').get('a[id="header_baby"]').should('be.visible');

    cy.get('@head').get('a[id="header_women"]').click();
    cy.get('#gnav_women').contains('女裝首頁').should('be.visible');
    cy.get('@head').get('a[id="header_men"]').click();
    cy.get('#gnav_men').contains('男裝首頁').should('be.visible');
    cy.get('@head').get('a[id="header_kids"]').click();
    cy.get('#gnav_kids').contains('童裝首頁').should('be.visible');
    cy.get('@head').get('a[id="header_baby"]').click();
    cy.get('#gnav_baby').contains('嬰幼兒首頁').should('be.visible');
  });
}


