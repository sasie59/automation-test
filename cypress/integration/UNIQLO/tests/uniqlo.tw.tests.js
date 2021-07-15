export function GoToUniqloPageTests() {
  it('should go to uniqlo index\n(前往uniqlo)', () => {
    cy.visit('https://www.uniqlo.com/tw/');
    cy.get('a[title="UNIQLO"]').should('be.visible');
  });
}

export const DefineElement = () => {
  beforeEach(() => {
    // alias the $btn.text() as 'text'
    cy.get('#gnav_header').as('menu');
  });
}

export const MainTypeTests = () => {
  it('should display main type and can each switch\n(應該呈現主要類型為: WOMEN, MEN, KIDS, BABY並且可以各自切換)', () => {

    cy.get('@menu').find('a[id="header_women"]').should('be.visible');
    cy.get('@menu').find('a[id="header_men"]').should('be.visible');
    cy.get('@menu').find('a[id="header_kids"]').should('be.visible');
    cy.get('@menu').find('a[id="header_baby"]').should('be.visible');

    cy.get('@menu').find('a[id="header_women"]').click();
    cy.get('#gnav_women').contains('女裝首頁').should('be.visible');
    cy.get('@menu').find('a[id="header_men"]').click();
    cy.get('#gnav_men').contains('男裝首頁').should('be.visible');
    cy.get('@menu').find('a[id="header_kids"]').click();
    cy.get('#gnav_kids').contains('童裝首頁').should('be.visible');
    cy.get('@menu').find('a[id="header_baby"]').click();
    cy.get('#gnav_baby').contains('嬰幼兒首頁').should('be.visible');
  });
}

export const SearchBarTests = () => {
  it('should key in keyword can find What you want\n(輸入關鍵字可以找到你想要的)', () => {

  });
}

export const StoreInformationTests = () => {
  it('should target_blank a windows about store infomation(應彈跳出有關店舖資訊的頁面)', () => {
    cy.get('@menu')
      .find('img[src="//im.uniqlo.com/images/tw/uq/pc/img/feature/top/2020_L1_update/header_nav_stores.gif"]')
      .click({ force: true });
    cy.get('a[href="/tw/stores/"]').should('have.attr', 'target', '_blank');
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

export const CommodityInformationTests = () => {
  it('should display commodity information\n(應呈現商品資訊)', () => {
    cy.visit('https://www.uniqlo.com/tw/store/goods/440681#thumbnailSelect')
  });
}

export const ShoppingCartTests = () => {
  it('should display shopping cart checkout process\n(應呈現購物車結帳流程)', () => {

  });
}

export const CarouselTests = () => {
  it('should click arrow or dots will change img\n(點擊箭頭或圓點會改變圖片)', () => {
    cy.get('#main-slider').as('carousel_1');
    cy.get('.uni-spacing-XS').last().as('carousel_2');

    cy.get('@carousel_1').contains('Next').click({ force: true });
    cy.get('.slider.newslider2020').first().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_hero_02.jpg"]').should('be.visible');

    cy.wait(1000);

    cy.get('@carousel_1').find('a[data-slide-index="3"]').click();
    cy.get('.slider.newslider2020').first().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_hero_04.jpg"]').should('be.visible');

    cy.wait(1000);

    cy.get('@carousel_1').contains('Prev').click();
    cy.get('.slider.newslider2020').first().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_hero_03.jpg"]').should('be.visible');

    cy.wait(1000);

    cy.get('@carousel_1').find('a[data-slide-index="0"]').click();
    cy.get('.slider.newslider2020').first().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_hero_01.jpg"]').should('be.visible');

    cy.get('@carousel_2').scrollIntoView();

    cy.get('@carousel_2').contains('Next').click({ force: true });
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_02.jpg"]');
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_03.jpg"]');
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_04.jpg"]');
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_05.jpg"]');

    cy.wait(1000);

    cy.get('@carousel_2').find('a[data-slide-index="3"]').click();
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_04.jpg"]');
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_05.jpg"]');
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_01.jpg"]');
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_02.jpg"]');

    cy.wait(1000);

    cy.get('@carousel_2').contains('Prev').click({ force: true });
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_03.jpg"]');
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_04.jpg"]');
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_05.jpg"]');
    cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_01.jpg"]');


  });
}



export const WomenAreaTests = () => {
  it('should display all women clothing category products\n(應呈現所有女裝的分類產品)', () => {
    // cy.go(-1);
    // cy.get('a[title="UNIQLO"]').should('be.visible');
  });
}

export const MenAreaTests = () => {
  it('should should display all men clothing category products\n(應呈現所有男裝的分類產品)', () => {

  });
}

export const KidsAreaTests = () => {
  it('should should display all kids clothing category products\n(應呈現所有童裝的分類產品)', () => {

  });
}

export const BabyAreaTests = () => {
  it('should should display all baby clothing category products\n(應呈現所有嬰幼兒的分類產品)', () => {

  });
}





