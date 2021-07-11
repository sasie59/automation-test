
export const GoToUniqloPageTests = () => {
  it.only('should go to uniqlo index\n(前往uniqlo)', () => {
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

export const CarouselTests = () => {
  it.only('should click arrow or dots will change img\n(點擊箭頭或圓點會改變圖片)', () => {
    cy.get('#main-slider').as('carousel_1');
    cy.get('@carousel_1').contains('Next').click({force: true});
    cy.get('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_hero_02.jpg"]').should('be.visible');
    // cy.get('@carousel_1').contains('Prev').click();
    // cy.get('.bx-pager.bx-default-pager').contains(4).click();
    // cy.get('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_hero_04.jpg"]').should('be.visible');
    // cy.get('.bx-pager.bx-default-pager').contains(1).click();
    // cy.get('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_hero_01.jpg"]').should('be.visible');
    cy.get('.bx-pager-item').contains(4).click();
    // cy.get('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_hero_03.jpg"]').should('be.visible');
  });
}

export const SearchBarTests = () => {
  it('should', () => {

  });
}

export const StoreInformationTests = () => {
  it('should', () => {

  });
}

export const RegisteredTests = () => {
  it('should', () => {

  });
}

export const WomenAreaTests = () => {
  it('should', () => {

  });
}

export const MenAreaTests = () => {
  it('should', () => {

  });
}

export const KidsAreaTests = () => {
  it('should', () => {

  });
}

export const BabyAreaTests = () => {
  it('should', () => {

  });
}

export const CommodityInformationTests = () => {
  it('should', () => {

  });
}

export const ShoppingCartTests = () => {
  it('should', () => {

  });
}



