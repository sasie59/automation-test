export function GoToUniqloPageTests() {
  it('should go to uniqlo index\n(預期連結uniqlo)', () => {
    cy.visit('https://www.uniqlo.com/tw/');
    cy.get('a[title="UNIQLO"]').should('be.visible');
  });
}

export const DefineElement = () => {
  beforeEach(() => {
    cy.get('#gnav_header').as('menu');
  });
};
export const DefineControlElement = () => {
  beforeEach(() => {
    cy.get('#navHeader').as('main');
  });
};

export const MainTypeTests = () => {
  it('should display main type and can each switch\n(預期應該呈現主要類型為: WOMEN, MEN, KIDS, BABY並且可以各自切換)', () => {
    const mainList = [
      'header_women',
      'header_men',
      'header_kids',
      'header_baby'
    ];
    mainList.forEach(item => {
      cy.get('@menu').find(`a[id=${item}]`).should('be.visible');
    });
    const idList = [
      '#gnav_women',
      '#gnav_men',
      '#gnav_kids',
      '#gnav_baby',
    ];
    for (let i = 0; i < 4; i++) {
      cy.get('@menu').find(`a[id=${mainList[i]}]`).click();
      cy.wait(1000);
      cy.get(`${idList[i]}`).should('be.visible');
    }
  });
};

export const SearchBarTests = () => {
  it('should key in keyword can find What you want\n(預期輸入關鍵字可以找到你想要的)', () => {
    cy.get('@menu').find('input[name="qtext"]')
      .type('咒術迴戰').type('{enter}');
    cy.get('.blkProdSearchOptions').should('be.visible');

    cy.get('.blkPaginationTop').as('result');
    const firstSortList = [
      'img[title="排序方式"]',
      'img[title="人氣度"]',
      'img[title="新品"]',
      '.prev',
      '.num',
      '.next',
    ];
    cy.get('#blkMainItemList > .unit').its('length').should('eq', 21);

    firstSortList.forEach(item => {
      cy.get('@result').first().find(`${item}`).should('be.visible');
    });

    const lastSortList = [
      'img[title="排序方式"]',
      'img[title="人氣度"]',
      'img[title="新品"]',
      '.prev',
      '.num',
      '.next',
    ];
    cy.get('@result').last().scrollIntoView();

    lastSortList.forEach(item => {
      cy.get('@result').first().find(`${item}`).should('be.visible');
    });

    cy.get('#blkNarrowSearch').as('filter');
    const filterList = [
      'MEN',
      'WOMEN',
      'KIDS',
      '白色系',
      '灰色系',
      '黑色',
      '紅色系',
      '綠色系',
      '藍色系',
      'NT$499以下',
      'NT$500～NT$999',
    ];

    filterList.forEach(item => {
      cy.get('@filter').contains(`${item}`).should('be.visible');
    });
  });
};

export const StoreInformationTests = () => {
  it('should target_blank a windows about store infomation(預期頁面應有彈跳出有關店舖資訊的屬性)', () => {
    cy.get('#navUtil a[href="/tw/stores/"]').should('have.attr', 'target', '_blank', 'https://www.uniqlo.com/tw/stores/');
  });
};

export const LoginTests = () => {
  it('should login account secret\n(預期可登入帳號密碼)', () => {
    cy.get('img[alt="登入"]').click({ force: true });
    cy.wait(1000);
    cy.url().should('eq', 'https://www.uniqlo.com/tw/store/FSC01010E02.do');
    cy.get('input[name="cust_eml_id"]').type(Cypress.env('account'));
    cy.get('input[name="cust_eml_id"]').should('have.value', Cypress.env('account'));
    cy.get('input[name="cust_pass"]').type(Cypress.env('password'));
    cy.get('input[name="cust_pass"]').should('have.value', Cypress.env('password'));
    // cy.get('input[title="登入"]').click();
  });
};

export const CommodityInformationTests = () => {
  it('should display commodity information\n(預期應呈現商品資訊)', () => {
    cy.visit('https://www.uniqlo.com/tw/store/goods/440681#thumbnailSelect');

    cy.get('#primary').as('leftInfo');
    cy.get('#tertiary').as('rightInfo');

    cy.get('@leftInfo').contains('男裝 Manga UT印花T恤(短袖)').should('be.visible');
    cy.get('@leftInfo').find('.btnOpen.readmore-js-toggle').click();
    cy.wait(1000);
    cy.get('@leftInfo').find('#shortComment').should('be.visible');
    cy.get('@leftInfo').find('.btnClose.readmore-js-toggle').click();
    cy.wait(1000);
    cy.get('#shortComment').should('have.css', 'height', '98.99305725097656px');
    cy.get('@leftInfo').find('#price').should('be.visible');
    cy.get('@leftInfo').find('.number').contains('商品編號440681').should('be.visible');
    // cy.get('@leftInfo img').should('have.attr', 'src'); 
    //若是新品的話才有這句斷言式//
    cy.get('@leftInfo').find('#BVRRRatingOverall_Rating_Summary_1').should('be.visible');
    cy.get('@leftInfo').find('a[name="BV_TrackingTag_Rating_Summary_1_ReadReviews_440681"]').click();
    cy.wait(1000);
    cy.get('@leftInfo').find('#BVRRRatingSummaryLinkReadID').contains('讀取總共 3 則商品評論').should('be.visible');
    const commentIdList = [
      '#BVRRDisplayContentReviewID_135098465',
      '#BVRRDisplayContentReviewID_135123625',
      '#BVRRDisplayContentReviewID_135479033'
    ];
    commentIdList.forEach(item => {
      cy.get(`${item}`).should('be.visible');
    });
    const IMG_BASE = 'https://im.uniqlo.com/images/tw/uq/pc/goods/440681/sub/';
    const IMG_LIST = [
      '440681_sub1_mini.jpg',
      '440681_sub2_mini.jpg',
      '440681_sub7_mini.jpg',
      '440681_sub13_mini.jpg',
      '440681_sub14_mini.jpg',
      '440681_sub18_mini.jpg',
      '440681_sub19_mini.jpg',
      '440681_sub27_mini.jpg',
    ];

    IMG_LIST.forEach(IMG => {
      cy.get('#subImages').find(`img[src="${IMG_BASE}${IMG}"]`).scrollIntoView();
      cy.get('#subImages').find(`img[src="${IMG_BASE}${IMG}"]`).click();
      cy.wait(1000);
      cy.get('#prodImgDefault').scrollIntoView();
    });

    cy.get('@rightInfo').find('#prodSelectColor').should('be.visible');
    cy.get('@rightInfo').find('#prodSelectSize').should('be.visible');
    const sizeCodeList = [
      '003',
      '004',
      '005',
      '007',
      '006'
    ];
    const sizeList = [
      'S',
      'M',
      'L',
      'XXL',
      'XL',
    ];

    for (let i = 0; i < sizeList.length; i++) {
      cy.get('#listChipSize').find(`li[size="${sizeCodeList[i]}"]`).should('be.visible');
      cy.get('#listChipSize').find(`li[size="${sizeCodeList[i]}"]`).click();
      cy.wait(1000);
      cy.get('#sizeNmId').contains(`尺寸:${sizeList[i]}`).should('be.visible');
    }

    cy.get('@rightInfo').find('#prodSelectQuantity').should('be.visible');
    cy.get('#selectNum').select('2');
    cy.get('#selectNum').should('have.value', '2');

    cy.get('#intoCartOff').click();
    cy.wait(1000);
    cy.get('#msgAddedCart').should('be.visible');
    cy.get('#msgAddedCart').find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/l4/btn_view_cart_TW.gif"]').click();
    cy.wait(1000);
    cy.url().should('eq', 'https://www.uniqlo.com/tw/store/FSC02020E02.do');
  });
};

export const ShoppingCartTests = () => {
  it('should display shopping cart checkout process\n(預期應呈現購物車結帳流程)', () => {
    const commodityInfoList = [
      '商品照片',
      '顏色',
      '商品名稱',
      '尺寸',
      '長度',
      '商品單價',
      '數量',
      '小計',
      '刪除商品',
      '備註',
    ];
    commodityInfoList.forEach(item => {
      cy.get('#tblCartItemList').contains(`${item}`).eq(0).should('be.visible');
    });
    cy.get('#tblCartItemList img').should('have.attr', 'src');
    cy.get('#tblCartItemList a[title="男裝 Manga UT印花T恤(短袖)"]').should('have.attr', 'href');
    cy.get('#tblCartItemList').find('.cellSize').contains('XL').should('be.visible');
    cy.get('#tblCartItemList').find('.cellLength').contains('－').should('be.visible');
    cy.get('#tblCartItemList').find('.cellPrice').contains('NT$590').should('be.visible');
    cy.get('#tblCartItemList').find('.cellQuantity input').should('have.attr', 'type');
    cy.get('#tblCartItemList').find('.cellSubtotal').contains('NT$1,180').should('be.visible');
    cy.get('#tblCartItemList').find('.cellCancel img').should('have.attr', 'src');
    cy.get('#tblCartItemList').find('.cellNote').should('be.visible');
    cy.get('#btnCheckOut').should('be.visible');
    cy.get('#btnCheckOut').click();
    cy.wait(1000);
    // 按下結帳發生錯誤
  });
};

export const CarouselTests = () => {
  it('should click arrow or dots will change img\n(預期點擊箭頭或圓點會改變圖片)', () => {
    cy.get('#main-slider').as('carousel_1');

    cy.get('@carousel_1').contains('Next').click();
    cy.wait(1000);
    cy.get('.slider.newslider2020 img').should('have.attr', 'src');

    cy.get('@carousel_1').find('a[data-slide-index="3"]').click();
    cy.wait(1000);
    cy.get('.slider.newslider2020 img').should('have.attr', 'src');

    cy.get('@carousel_1').contains('Prev').click();
    cy.wait(1000);
    cy.get('.slider.newslider2020 img').should('have.attr', 'src');

    cy.get('@carousel_1').find('a[data-slide-index="0"]').click();
    cy.wait(1000);
    cy.get('.slider.newslider2020 img').should('have.attr', 'src');
  });
};

export const WomenAreaTests = () => {
  it('should display all women clothing category products\n(預期應呈現所有女裝的分類產品)', () => {
    cy.get('@main').find('a[id="header_women"]').click();
    cy.wait(1000);
    cy.get('#gnav_women').contains('女裝首頁').should('be.visible');

    cy.get('.pure-g').first().find('li').its('length').should('eq', 85);
    cy.get('.pure-g').first().find('a').its('length').should('eq', 75);
    cy.get('.pure-g').first().find('a').should('have.attr', 'href');
  });
};

export const MenAreaTests = () => {
  it('should should display all men clothing category products\n(預期應呈現所有男裝的分類產品)', () => {
    cy.get('@main').find('a[id="header_men"]').click();
    cy.wait(1000);
    cy.get('#gnav_men').contains('男裝首頁').should('be.visible');

    cy.get('.pure-g').first().find('li').its('length').should('eq', 85);
    cy.get('.pure-g').first().find('a').its('length').should('eq', 75);
    cy.get('.pure-g').first().find('a').should('have.attr', 'href');
  });
};

export const KidsAreaTests = () => {
  it('should should display all kids clothing category products\n(預期應呈現所有童裝的分類產品)', () => {
    cy.get('@main').find('a[id="header_kids"]').click();
    cy.wait(1000);
    cy.get('#gnav_kids').contains('童裝首頁').should('be.visible');

    cy.get('.pure-g').first().find('li').its('length').should('eq', 85);
    cy.get('.pure-g').first().find('a').its('length').should('eq', 75);
    cy.get('.pure-g').first().find('a').should('have.attr', 'href');
  });
};

export const BabyAreaTests = () => {
  it('should should display all baby clothing category products\n(預期應呈現所有嬰幼兒的分類產品)', () => {
    cy.get('@main').find('a[id="header_baby"]').click();
    cy.wait(1000);
    cy.get('#gnav_baby').contains('嬰幼兒首頁').should('be.visible');

    cy.get('.pure-g').first().find('li').its('length').should('eq', 85);
    cy.get('.pure-g').first().find('a').its('length').should('eq', 75);
    cy.get('.pure-g').first().find('a').should('have.attr', 'href');
  });
};
