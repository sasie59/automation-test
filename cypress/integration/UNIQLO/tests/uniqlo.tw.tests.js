export function GoToUniqloPageTests() {
  it('should go to uniqlo index\n(前往uniqlo)', () => {
    cy.visit('https://www.uniqlo.com/tw/');
    cy.get('a[title="UNIQLO"]').should('be.visible');
  });
}

export const DefineElement = () => {
  beforeEach(() => {
    cy.get('#gnav_header').as('menu');
  });
}
export const DefineControlElement = () => {
  beforeEach(() => {
    cy.get('#navHeader').as('main');
  });
}

export const MainTypeTests = () => {
  it('should display main type and can each switch\n(應該呈現主要類型為: WOMEN, MEN, KIDS, BABY並且可以各自切換)', () => {
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
      'gnav_women',
      'gnav_men',
      'gnav_kids',
      'gnav_baby',
    ];
    for (let i = 0; i < 4; i++) {
      cy.get('@menu').find(`a[id=${mainList[0]}]`).click();
      cy.get(`#${idList[0]}`).should('be.visible');
    }
  });
}

export const SearchBarTests = () => {
  it('should key in keyword can find What you want\n(輸入關鍵字可以找到你想要的)', () => {
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
    cy.get('@result').first().contains('搜尋結果：21件').first().should('be.visible');
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
    cy.get('@result').last().contains('搜尋結果：21件').last().should('be.visible');

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
    })
  });
}

export const StoreInformationTests = () => {
  it('should target_blank a windows about store infomation(應彈跳出有關店舖資訊的頁面)', () => {
    cy.get('#navUtil a[href="/tw/stores/"]').should('have.attr', 'target', '_blank', 'https://www.uniqlo.com/tw/stores/');
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
    // cy.get('@leftInfo img').should('have.attr', 'src'); 
    //若是新品的話才有這句斷言式//
    cy.get('@leftInfo').find('#BVRRRatingOverall_Rating_Summary_1').should('be.visible');
    cy.get('@leftInfo').find('a[name="BV_TrackingTag_Rating_Summary_1_ReadReviews_440681"]').click();
    cy.get('@leftInfo').find('#BVRRRatingSummaryLinkReadID').contains('讀取總共 3 則商品評論').should('be.visible');
    cy.get('#BVRRDisplayContentReviewID_135098465').should('be.visible');
    cy.get('#BVRRDisplayContentReviewID_135123625').should('be.visible');
    cy.get('#BVRRDisplayContentReviewID_135479033').should('be.visible');

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
      cy.get('#subImages').find(`img[src="${IMG_BASE}${IMG}"]`).scrollIntoView()
      cy.get('#subImages').find(`img[src="${IMG_BASE}${IMG}"]`).click();
      cy.get('#prodImgDefault').scrollIntoView();
    });

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
  it('should display shopping cart checkout process\n(應呈現購物車結帳流程)', () => {
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
    cy.get('.slider.newslider2020 img').should('have.attr', 'src');

    cy.wait(1000);

    cy.get('@carousel_1').find('a[data-slide-index="3"]').click();
    cy.get('.slider.newslider2020 img').should('have.attr', 'src');

    cy.wait(1000);

    cy.get('@carousel_1').contains('Prev').click();
    cy.get('.slider.newslider2020 img').should('have.attr', 'src');

    cy.wait(1000);

    cy.get('@carousel_1').find('a[data-slide-index="0"]').click();
    cy.get('.slider.newslider2020 img').should('have.attr', 'src');
    // 網頁更新 下面沒輪播器
    // cy.get('@carousel_2').scrollIntoView();

    // cy.get('@carousel_2').contains('Next').click({ force: true });
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_02.jpg"]');
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_03.jpg"]');
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_04.jpg"]');
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_05.jpg"]');

    // cy.wait(1000);

    // cy.get('@carousel_2').find('a[data-slide-index="3"]').click();
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_04.jpg"]');
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_05.jpg"]');
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_01.jpg"]');
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_02.jpg"]');

    // cy.wait(1000);

    // cy.get('@carousel_2').contains('Prev').click({ force: true });
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_03.jpg"]');
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_04.jpg"]');
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_05.jpg"]');
    // cy.get('.slider.newslider2020').last().find('img[src="https://im.uniqlo.com/images/tw/uq/pc/img/feature/top/210709/210709_L1_specialcollaborationstyling_01.jpg"]');


  });
}



export const WomenAreaTests = () => {
  it('should display all women clothing category products\n(應呈現所有女裝的分類產品)', () => {
    cy.get('@main').find('a[id="header_women"]').click();
    cy.get('#gnav_women').contains('女裝首頁').should('be.visible');
    // 外套類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/outerlineup/women/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/outer/casual-outer/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/outer/jacket/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/tops/uvcut/"]').should('be.visible');
    // cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/list/extra-size/women/"]').should('be.visible');
    // 有重覆
    // 下身類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/bottomscollection/women/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/bottoms/jeans/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/bottoms/long-pants/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/bottoms/easy-and-gaucho/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/bottoms/leggings/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/bottoms/widepants/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/bottoms/short-and-half-pants/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/bottoms/bannopants/"]').should('be.visible');
    // 上衣類
    // cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/topscollection/women/"]').should('be.visible');
    // bug
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/tops/short-sleeves-and-tank-top/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/tops/long-and-3-4sleeves-and-cardigan/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/tops/shirts-and-blouses/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/linen/women/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/inner/bratop/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/tops/knit/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/ut/women/#anchor08"]').should('be.visible');
    // 洋裝/裙子
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/tops/dresses/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/bottoms/skirt/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/inner/socks/#anchor07"]').should('be.visible');
    // 內衣類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/innercollection/women/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/inner/inner-wear/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/inner/wireless-bra/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/inner/bratop/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/inner/shorts/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/inner/airism/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/collection/contents/front-open/?_ga=2.135717619.392663098.1615536499-447449683.1615536499"]').should('be.visible');
    // 家居服
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/roomwearcollection/women/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/room/lounge-wear/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/room/stetecorelaco/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/room/room-shoes/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/room/bedding/"]').should('be.visible');
    // 孕婦類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/newborn/maternity/"]').should('be.visible');
    // 清洗快乾專區
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/women/#anchor11"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/women/#anchor04"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/women/#anchor05"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/women/#anchor10"]').should('be.visible');
    // 配件類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/accessories/all/items/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/accessories/all/items/#anchor09"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/collection/airism-mask/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/goods/shoes/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/goods/bag/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/goods/belt/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/goods/caphatsunglass"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/inner/socks/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/accessories/all/items/#anchor13"]').should('be.visible');
  });
}

export const MenAreaTests = () => {
  it('should should display all men clothing category products\n(應呈現所有男裝的分類產品)', () => {
    cy.get('@main').find('a[id="header_men"]').click();
    cy.get('#gnav_men').contains('男裝首頁').should('be.visible');
    // 外套類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/outerlineup/men/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/outer/casual-outer/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/outer/jacket-and-coat/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/tops/uvcut/"]').should('be.visible');
    // 下身類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/bottomscollection/men/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/bottoms/jeans/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/bottoms/long-pants/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/bottoms/easyanklepants/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/bottoms/short-and-roll-up-pants/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/bottoms/chino/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/bottoms/kandopants/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/bottoms/bannopants/"]').should('be.visible');
    // 上衣類
    // cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/topscollection/men/"]').should('be.visible');
    // bug
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/tops/short-sleeves-and-tank-top/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/tops/polo-shirt/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/tops/long-t-shirt/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/linen/men/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/tops/casual-shirts-long/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/tops/dress-shirts-long-and-short/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/tops/knit/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/ut/women/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/ut/women/#anchor08"]').should('be.visible');
    // 內衣類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/innercollection/men/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/inner/inner-wear/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/inner/airism/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/collection/contents/front-open/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/inner/trunks-and-brief/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/inner/socks/"]').should('be.visible');
    // 家居服
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/roomwearcollection/men/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/room/room-wear/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/room/stetecorelaco/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/room/room-shoes/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/women/room/bedding/"]').should('be.visible');
    // 清洗快乾專區
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/men/#anchor03"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/men/#anchor04"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/men/#anchor05"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/men/#anchor01"]').should('be.visible');
    // 配件
    // cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/accessories/all/items/"]').should('be.visible');
    // 有重覆
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/collection/airism-mask/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/goods/cap-and-hat/#anchor01"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/goods/cap-and-hat/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/goods/shoes/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/goods/bag/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/goods/belts/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/men/inner/socks/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/accessories/all/items/#anchor13"]').should('be.visible');
  });
}

export const KidsAreaTests = () => {
  it('should should display all kids clothing category products\n(應呈現所有童裝的分類產品)', () => {
    cy.get('@main').find('a[id="header_kids"]').click();
    cy.get('#gnav_kids').contains('童裝首頁').should('be.visible');
    // 外套類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/outer/casualouter/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/tops/uvcut/"]').should('be.visible');
    // 上衣類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/tops/cut-and-sewn/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/tops/shirts/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/tops/knit/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/tops/sweat/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/ut/women/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/ut/women/#anchor08"]').should('be.visible');
    // 洋裝/裙子
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/tops/dresses/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/bottoms/skirts/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/inner/leggings/"]').should('be.visible');
    // 下身類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/bottoms/short/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/bottoms/longpants/"]').should('be.visible');
    // 內衣類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/inner/tops/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/inner/airism/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/inner/airism/#anchor01"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/inner/brief-and-shorts/"]').should('be.visible');
    // 家居類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/special/roomwearcollection/kids/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/room/loungewear/"]').should('be.visible');
    // 配件類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/accessories/all/items/#anchor06"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/kids/inner/socks/"]').should('be.visible');
    // 清洗快乾專區
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/kids/#anchor01"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/kids/#anchor03"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/kids/#anchor04"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/activewear/kids/#anchor02"]').should('be.visible');
    // 相關推薦
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/allitem/products/160cm/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/list/extra-size/women/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/collection/special-size/"]').should('be.visible');
  });
}

export const BabyAreaTests = () => {
  it('should should display all baby clothing category products\n(應呈現所有嬰幼兒的分類產品)', () => {
    cy.get('@main').find('a[id="header_baby"]').click();
    cy.get('#gnav_baby').contains('嬰幼兒首頁').should('be.visible');
    // 新生兒(50~60cm.0~3個月)
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/newborn/childbirth/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/newborn/childbirth/#anchor05"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/newborn/childbirth/#anchor11"]').should('be.visible');
    // 新生兒(50~90cm.0~2歲)
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/newborn/newborn/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/newborn/bodysuit/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/allinone/baby/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/newborn/childbirth/#anchor05"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/airism/baby/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/newborn/newborn/#anchor10"]').should('be.visible');
    // 孕婦裝
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/newborn/maternity/"]').should('be.visible');
    // 嬰幼兒(70~110cm/6個月~5歲)
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/toddler/outer/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/toddler/tops/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/ut/baby-all/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/ut/women/#anchor08"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/toddler/bottoms/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/toddler/leggings/"]').should('be.visible');
    // 家居/內衣類
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/toddler/inner-and-loungewear/#anchor08"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/toddler/inner-and-loungewear/#anchor09"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/airism/baby/"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/toddler/inner-and-loungewear/"]').should('be.visible');
    // 其他
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/toddler/inner-and-loungewear/#anchor10"]').should('be.visible');
    cy.get('@main').find('a[href="https://www.uniqlo.com/tw/store/feature/baby/toddler/goods/"]').should('be.visible');

  });
}
