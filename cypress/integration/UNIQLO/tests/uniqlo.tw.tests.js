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
  it.only('should display commodity information\n(應呈現商品資訊)', () => {
    cy.visit('https://www.uniqlo.com/tw/store/goods/440681#thumbnailSelect');

    cy.get('#primary').as('leftInfo');
    cy.get('#tertiary').as('rightInfo');

    cy.get('@leftInfo').contains('男裝 Manga UT印花T恤(短袖)').should('be.visible');
    cy.get('@leftInfo').find('.btnOpen.readmore-js-toggle').click();
    cy.get('@leftInfo').find('#shortComment').should('be.visible');
    cy.get('@leftInfo').find('.btnClose.readmore-js-toggle').click();
    cy.get('#shortComment').should('have.css', 'height', '99px');
    cy.get('@leftInfo').find('#price').should('be.visible');
    cy.get('@leftInfo').find('.number').contains('商品編號440681').should('be.visible');
    cy.get('@leftInfo')
    .find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/l4/txt_tag_special01_TW.gif"]')
    .should('be.visible'); //若是新品的話才有這句斷言式//
    cy.get('@leftInfo').find('#BVRRRatingOverall_Rating_Summary_1').should('be.visible');
    cy.get('@leftInfo').find('a[name="BV_TrackingTag_Rating_Summary_1_ReadReviews_440681"]').click();
    cy.get('@leftInfo').find('#BVRRRatingSummaryLinkReadID').contains('讀取總共 3 則商品評論').should('be.visible');
    cy.get('#BVRRDisplayContentReviewID_135098465').should('be.visible');
    cy.get('#BVRRDisplayContentReviewID_135123625').should('be.visible');
    cy.get('#BVRRDisplayContentReviewID_135479033').should('be.visible');

    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub1_mini.jpg"]').scrollIntoView()
    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub1_mini.jpg"]').click();
    cy.get('#prodImgDefault').scrollIntoView();

    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub2_mini.jpg"]').scrollIntoView()
    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub2_mini.jpg"]').click();
    cy.get('#prodImgDefault').scrollIntoView();

    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub7_mini.jpg"]').scrollIntoView()
    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub7_mini.jpg"]').click();
    cy.get('#prodImgDefault').scrollIntoView();

    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub13_mini.jpg"]').scrollIntoView()
    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub13_mini.jpg"]').click();
    cy.get('#prodImgDefault').scrollIntoView();

    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub14_mini.jpg"]').scrollIntoView()
    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub14_mini.jpg"]').click();
    cy.get('#prodImgDefault').scrollIntoView();

    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub18_mini.jpg"]').scrollIntoView()
    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub18_mini.jpg"]').click();
    cy.get('#prodImgDefault').scrollIntoView();

    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub19_mini.jpg"]').scrollIntoView()
    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub19_mini.jpg"]').click();
    cy.get('#prodImgDefault').scrollIntoView();

    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub27_mini.jpg"]').scrollIntoView()
    cy.get('#subImages').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/440681_sub27_mini.jpg"]').click();
    cy.get('#prodImgDefault').scrollIntoView();

    cy.get('@rightInfo').find('#prodSelectColor').should('be.visible');

    cy.get('@rightInfo').find('#prodSelectSize').should('be.visible');
    cy.get('#listChipSize').find('li[size="003"]').should('be.visible');
    cy.get('#listChipSize').find('li[size="003"]').click();
    cy.get('#sizeNmId').contains('尺寸:S').should('be.visible');

    cy.get('#listChipSize').find('li[size="004"]').should('be.visible');
    cy.get('#listChipSize').find('li[size="004"]').click();
    cy.get('#sizeNmId').contains('尺寸:M').should('be.visible');

    cy.get('#listChipSize').find('li[size="005"]').should('be.visible');
    cy.get('#listChipSize').find('li[size="005"]').click();
    cy.get('#sizeNmId').contains('尺寸:L').should('be.visible');
    
    cy.get('#listChipSize').find('li[size="007"]').should('be.visible');
    cy.get('#listChipSize').find('li[size="007"]').click();
    cy.get('#sizeNmId').contains('尺寸:XXL').should('be.visible');
    
    cy.get('#listChipSize').find('li[size="006"]').should('be.visible');
    cy.get('#listChipSize').find('li[size="006"]').click();
    cy.get('#sizeNmId').contains('尺寸:XL').should('be.visible');

    cy.get('@rightInfo').find('#prodSelectQuantity').should('be.visible');
    cy.get('#selectNum').select('2')
    cy.get('#selectNum').should('have.value', '2');

    cy.get('#intoCartOff').click();
    cy.get('#msgAddedCart').should('be.visible');
    cy.get('#msgAddedCart').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/l4/btn_view_cart_TW.gif"]').click();
    cy.url().should('eq', 'https://www.uniqlo.com/tw/store/FSC02020E02.do');
  });
}

export const ShoppingCartTests = () => {
  it.only('should display shopping cart checkout process\n(應呈現購物車結帳流程)', () => {
    cy.get('#tblCartItemList').contains('商品照片').eq(0).should('be.visible');
    cy.get('#tblCartItemList').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/item/09_440681_small.jpg"]').should('be.visible');
    cy.get('#tblCartItemList').contains('顏色').eq(0).should('be.visible');
    cy.get('#tblCartItemList').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/goods/440681/chip/09_440681.gif"]').should('be.visible');
    cy.get('#tblCartItemList').contains('商品名稱').eq(0).should('be.visible');
    cy.get('#tblCartItemList').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/material/tag/txt_tag_001.gif"]').should('be.visible');
    cy.get('#tblCartItemList').find('a[title="男裝 Manga UT印花T恤(短袖)"]').should('be.visible');
    cy.get('#tblCartItemList').contains('尺寸').eq(0).should('be.visible');
    cy.get('#tblCartItemList').find('.cellSize').contains('XL').should('be.visible');
    cy.get('#tblCartItemList').contains('長度').eq(0).should('be.visible');
    cy.get('#tblCartItemList').find('.cellLength').contains('－').should('be.visible');
    cy.get('#tblCartItemList').contains('商品單價').eq(0).should('be.visible');
    cy.get('#tblCartItemList').find('.cellPrice').contains('NT$590').should('be.visible');
    cy.get('#tblCartItemList').contains('數量').eq(0).should('be.visible');
    cy.get('#tblCartItemList').find('.cellQuantity').find('input[maxlength="2"]').should('have.value', '2');
    cy.get('#tblCartItemList').find('.cellQuantity').find('input[src="https://im.uniqlo.com/images/tw/uq/pc/img/material/btn-change-02_TW.gif"]').should('be.visible');
    cy.get('#tblCartItemList').contains('小計').eq(0).should('be.visible');
    cy.get('#tblCartItemList').find('.cellSubtotal').contains('NT$1,180').should('be.visible');
    cy.get('#tblCartItemList').contains('刪除商品').eq(0).should('be.visible');
    cy.get('#tblCartItemList').find('.cellCancel').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/material/btn-cancel-01_TW.gif"]').should('be.visible');
    cy.get('#tblCartItemList').contains('備註').eq(0).should('be.visible');
    cy.get('#tblCartItemList').find('.cellNote').should('be.visible');
    cy.get('#btnCheckOut').should('be.visible');
    cy.get('#btnCheckOut').click(); 
    // 按下結帳發生錯誤
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





