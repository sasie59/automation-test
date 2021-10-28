export const GoTo5000Tests = () => {
  it('should go to 5000 index\n(預期連結振興五倍卷)', () => {
    cy.visit('https://hpm.5000.gov.tw/Default.aspx');
    cy.wait(1000);
    //title振興五倍卷//
    // cy.get('.sa-button-container').click();
    //網站要維護 跳出一個modal 先關掉//
  });
};

export const id_Verification = () => {
  cy.visit('https://plus.5000.gov.tw/hpg/webLogin?token=coupon&language=ch');
  cy.wait(1000); //前往 身分認証//

  cy.get('.title-con.style-line2').contains('身分認證')
    .should('be.exist');
  cy.wait(500);

  cy.get('.title-sm').contains('身分證號、健保卡號')
    .should('be.exist');
  cy.wait(500);

  cy.get('.form-group.row.required').contains('身分證號/統一證號')
    .should('be.exist');
  cy.wait(500);

  cy.get('#divSmsIdn[placeholder="請輸入身分證號/居留證號最長10位"]')
    .should('be.exist');
  cy.wait(500);

  cy.get('#divSmsCardNo1[placeholder="1~4"]')
    .should('be.exist');
  cy.wait(500);

  cy.get('#divSmsCardNo2[placeholder="5~8"]')
    .should('be.exist');
  cy.wait(500);

  cy.get('#divSmsCardNo3[placeholder="9~12"]')
    .should('be.exist');
  cy.wait(500);

  cy.get('.custom-control-label').contains('有健保身分者')
    .should('be.exist');
  cy.wait(500);

  cy.get('.custom-control-label').contains('無健保身分者')
    .should('be.exist');
  cy.wait(500);

  cy.get('#otpcaptcha[placeholder="圖形驗證碼"]')
    .should('be.exist');
  cy.wait(500);

  cy.get('img[title="語音播放圖形驗證碼"]').should('be.exist');
  cy.wait(500);

  cy.get('#otpCheckCode[title="圖形驗證碼"]').should('be.exist');
  cy.wait(500);

  cy.get('img[title="看不清楚換一張"]').should('be.exist');
  cy.wait(500);
  
  cy.get('.btn-box').contains('健保卡號認證').should('be.exist');
  cy.wait(500);
};

export const HomeTourTests = () => {
  it('should guided tour this index all elements\n(預期導覽此網頁的全部元件)', () => {
    cy.get('.area-editor.default.group-ball').as('main');

    id_Verification();

    cy.visit('https://hpm.5000.gov.tw/Default.aspx');
    cy.wait(1000);
    
    cy.get('@main').find('.img > img[alt="振興五倍券"]')
      .should('be.exist'); //左上的logo//
    cy.get('@main').find('.p').contains('10/8數位、紙本消費起跑')
      .should('be.visible');
    cy.get('@main').find('.box > a').contains('預訂與查詢')
      .should('be.visible'); //右上的button//

    cy.get('@main').get('.ct > ul').first().find('li').its('length')
      .should('eq', 4); //4種領取方式//

    const getWay = [
      '.credit-card',
      '.card',
      '.mobile',
      '.paper',
    ];
    getWay.forEach(item => {
      cy.get('@main').get('.ct > ul').first().find(`${item} a`)
        .should('be.visible');
      cy.wait(500);
    });

    cy.get('@main').get('.coupon > .hd > .img').find('a[title="額度再加碼"]')
      .get('img[alt="額度加碼"]').should('be.exist',); //加碼卷logo//

    cy.get('@main').get('.ct > ul').eq(1).find('li').its('length')
      .should('eq', 8); //8個部會//
    cy.get('@main').get('.ct > ul').eq(1).find('li a')
      .should('be.exist');
  });
};

export const ZoomOutAndEnlargetests = () => {
  it('should click to zoom\n(預期點擊可縮放)', () => {
    cy.get('.simple-text.btn.go a').should('have.attr', 'href');
    cy.get('.simple-text.btn.go a').contains('最小化').should('be.visible');
    //右下角「最小化」//
    cy.get('.simple-text.btn.go a[title="最小化[縮放]"]').click();
    cy.wait(1000);
    cy.get('.simple-text.btn.go a[title="最大化[縮放]"]').should('be.visible');

    cy.get('.simple-text.btn.go a[title="最大化[縮放]"]').click();
    cy.wait(1000);
    cy.get('.simple-text.btn.go a[title="最小化[縮放]"]').should('be.visible');
  });
};

export const TypeToUse = () => {
  beforeEach(() => {
    cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
    cy.wait(1000);
  });
};

export const DigitalBindingTests = () => {
  it('should display there are several ways of digital binding\n(預期介紹數位綁定有幾點方式)', () => {
    cy.get('.group-list.nav ul[data-index="1"]')
      .find('li').eq(0).click();
    cy.get('.list-text.nav').eq(0).find('li')
      .its('length').should('eq', 3); //數位綁定有三種方式//

    cy.get('.list-text.nav').eq(0).find('li').eq(0)
      .click(); //信用卡//
    cy.wait(500);
    cy.url().should('eq', 'https://hpm.5000.gov.tw/News_Photo.aspx?n=193&sms=9199');

    cy.get('.simple-text.heading').should('be.visible');
    //title//
    cy.get('.group-list.page-block .area-figure.page-figure').its('length')
      .should('eq', 31); //31家信用卡//

    for (let i = 1; i <= 31; i++) {
      cy.get(`li[data-index=${i}] a`)
        .should('have.attr', 'href')
        .get('.img img').should('have.attr', 'src')
        .get('.essay .figcaption').should('be.visible')
        .get('.essay .label').should('be.visible')
        .get('.essay .p').should('be.visible');
      cy.wait(500);
    }
    cy.get('.list-text.breadcrumb li[data-index="2"]').click();
    cy.wait(500);
    cy.url().should('eq', 'https://hpm.5000.gov.tw/cp.aspx?n=299');

    cy.get('.digitFasten li').eq(1).click();
    ////選擇電子票證
    cy.get('.simple-text.heading').should('be.visible');
    //title//
    cy.get('.group-list.page-block .area-figure.page-figure').its('length')
      .should('eq', 4); //4家電子票證//

    for (let i = 1; i <= 4; i++) {
      cy.get(`li[data-index=${i}] a`)
        .should('have.attr', 'href')
        .get('.img img').should('have.attr', 'src')
        .get('.essay .figcaption').should('be.visible')
        .get('.essay .label').should('be.visible')
        .get('.essay .p').should('be.visible');
      cy.wait(500);
    }

    cy.get('.list-text.breadcrumb li[data-index="2"]').click();
    cy.wait(500);
    cy.url().should('eq', 'https://hpm.5000.gov.tw/cp.aspx?n=299');

    cy.get('.digitFasten li').eq(2).click();
    ////選擇行動支付
    cy.get('.simple-text.heading').should('be.visible');
    //title//
    cy.get('.group-list.page-block .area-figure.page-figure').its('length')
      .should('eq', 8); //8家行動支付//

    for (let i = 1; i <= 8; i++) {
      cy.get(`li[data-index=${i}] a`)
        .should('have.attr', 'href')
        .get('.img img').should('have.attr', 'src')
        .get('.essay .figcaption').should('be.visible')
        .get('.essay .label').should('be.visible')
        .get('.essay .p').should('be.visible');
      cy.wait(500);
    }
  });
};

export const PaperRollTests = () => {
  it('should display access to paper rolls\n(預期呈現紙本卷的領取通路)', () => {
    cy.get('.simple-text.major-logo a[href="Default.aspx"]').click({ force: true });
    cy.get('.area-editor.default.group-ball').get('.ct > ul').first()
      .find('.ball.paper').click();

    cy.get('.simple-text.heading').should('be.visible');

    cy.get('.g.is-right .g.is-inline img').its('length').should('eq', 2);
    cy.get('.g.is-right .g.is-inline img').should('have.attr', 'src');
    cy.get('.g.is-right .g.is-inline .title').should('be.visible');
    //最上方的圖示//
    const periodClass = [
      '.p.is-bold',
      '.list',
      '.mark'
    ];
    periodClass.forEach(item => {
      cy.get(`.g.is-right ${item}`).its('length').should('eq', 2); //有2個梯次//
      cy.get(`.g.is-right ${item}`).should('be.visible');
    }); //上半部//

    cy.get('.is-left img').should('have.attr', 'src'); //郵局圖案//
    cy.get('.is-left .g').last().get('.list .p').should('be.visible');
    //下半部//
  });
};

export const OverWeight = () => {
  beforeEach(() => {
    cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
    cy.wait(1000);
    cy.get('.group-list.nav .group.nav').eq(1).click();
    cy.wait(500);
  });
};

export const eightDepartmentOverweightTests = () => {
  it('should display Overweight information of the eight major ministries\n(預期出現八大部會的加碼資訊)', () => {
    for (let i = 1; i <= 8; i++) {
      cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
      cy.wait(1000);
      cy.get('.group-list.nav .group.nav').eq(2).click();
      cy.wait(500);

      cy.get('.list-text.nav ul[data-child="9"]').find('li').eq(`${i}`).click();
      cy.wait(500);

      cy.get('.double').find('a').should('have.attr', 'href'); //好食卷連結//
      cy.get('.double img').scrollIntoView().should('have.attr', 'src');  //好食卷圖片//
      cy.wait(1000);

      const goodForEatInfo = [
        '.content',
        '.title',
        '.p'
      ];
      cy.get('.base-footer').scrollIntoView();
      cy.wait(2500);

      goodForEatInfo.forEach(item => {
        cy.get('.double > .content').get(`${item}`).should('be.visible');
      }); //infomation//
      cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
      cy.wait(1000);
      cy.get('.group-list.nav .group.nav').eq(1).click();
      cy.wait(500);
    }
  });
};

export const OverViewTests = () => {
  it('should display lottery time, denomination, extra budget\n(預期出現抽獎時間、面額、加碼預算)', () => {
    cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
    cy.wait(1000);
    cy.get('.group-list.nav .group.nav').eq(2).click();
    cy.wait(500);

    cy.get('.list-text.nav ul[data-child="9"]').find('li').eq(0).click();
    cy.wait(500);

    cy.get('.group.default.info .simple-text.heading');
    ///title/
    cy.get('.list-text.classify.eight ul li').its('length')
      .should('eq', 9); //九筆nav//
    cy.get('.area-editor.user-edit ol > li').its('length')
      .should('eq', 7); //六筆資訊//
    for (let i = 0; i < 7; i++) {
      cy.get('.area-editor.user-edit ol > li').eq(`${i}`)
        .scrollIntoView().should('be.visible');
      cy.wait(750);
    }

    const tableClass = [
      '.title',
      '.name',
      '.date',
      '.dollar',
    ];
    tableClass.forEach(item => {
      cy.get(`.is-table ${item}`).scrollIntoView()
        .should('be.visible');
      cy.wait(500);
    });
    cy.get('.is-table tr').its('length').should('eq', 9);
  });
};

export const BookingAndCheck = () => {
  beforeEach(() => {
    cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
    cy.wait(1000);
    cy.get('.group-list.nav .group.nav').eq(3).click();
    cy.wait(500);

    cy.get('.group.default.info .simple-text.heading')
      .should('be.visible'); //title//
  });
};

export const PersonalBindingTests = () => {
  it('should display Personal binding\n(預期呈現個人綁定的方式)', () => {
    cy.get('.is-one').click();
    cy.wait(1000);

    cy.get('.group.default.info .simple-text.heading')
      .should('be.visible'); //title//

    cy.get('.digitFasten li').its('length').should('eq', 3); //個人綁定有3種方式//
    cy.get('.digitFasten a').should('have.attr', 'href');
    //這邊就不在重覆驗証了，首頁已驗証過//
    //數位標章已在外層驗証過了， 在此就不在重覆驗証//
  });
};

export const PaperFor5000tests = () => {
  it('should display PaperFor5000 info\n(預期呈現紙本五倍券資訊)', () => {
    cy.get('.btn.yellow .box').its('length').should('eq', 3);
    cy.get('.btn.yellow').should('have.attr', 'href');
    cy.get('.btn.yellow').click();
    cy.wait(1000);

    cy.get('.group.default.info .simple-text.heading')
      .should('be.visible'); //title//

    cy.get('#CCMS_Content img').should('have.attr', 'src');
    //coming soon//
  });
};

export const PostOfficeReserveTests = () => {
  it('should this link has the property of popping up a new window\n(預期此連結具有彈跳出新視窗的屬性)', () => {
    cy.get('.btn.green').first().should('have.attr', 'target', '_blank', 'href');
    cy.get('.btn.green').first().find('.box').should('be.visible');

    //之後會針對彈跳出新視窗的內容做驗証//
  });
};

export const OverWeightLogInTests = () => {
  it('should this link has the property of popping up a new window\n(預期此連結具有彈跳出新視窗的屬性)', () => {
    cy.get('.btn.green').last().should('have.attr', 'target', '_blank', 'href');
    cy.get('.btn.green').last().find('.box').should('be.visible');

    id_Verification();

    cy.visit('https://hpm.5000.gov.tw/Default.aspx');
    cy.wait(1000);
  });
};

export const CheckTests = () => {
  it('should this link has the property of popping up a new window\n(預期此連結具有彈跳出新視窗的屬性)', () => {
    cy.get('.btn.blue').should('have.attr', 'target', '_blank', 'href');
    cy.get('.btn.blue').find('.box').should('be.visible');

    id_Verification();

    cy.visit('https://hpm.5000.gov.tw/Default.aspx');
    cy.wait(1000);
  });
};

export const DigitalLabelTests = () => {
  it('should display Digital Label info\n(預期呈現數位標章的資訊)', () => {
    cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
    cy.wait(1000);
    cy.get('.group-list.nav .group.nav').eq(1).click();
    cy.wait(500);

    cy.get('.group.default.info .simple-text.heading')
      .should('be.visible'); //title//

    cy.get('.area-editor.user-edit .badge ol li').its('length').should('eq', 3);
    cy.get('.area-editor.user-edit .badge ul li').its('length').should('eq', 4);

    cy.get('.g.is-inline a').its('length').should('eq', 2); //2個連結//
    cy.get('.g.is-inline a .hd.is-center').should('be.visible');
    cy.get('.g.is-inline a .ct').should('be.visible');
    cy.get('.g.is-inline a').should('have.attr', 'href');

    cy.get('.list-text.classify.eight a').should('have.attr', 'target', '_self', 'href')
      .click(); //數位標章運用注意事項//
    cy.wait(1000);

    cy.get('.group.default.info .simple-text.heading')
      .should('be.visible'); //title//

    cy.get('.area-editor.user-edit p').its('length').should('eq', 3);
    //三個段落//
    for (let i = 0; i < 3; i++) {
      cy.get('.area-editor.user-edit p').eq(`${i}`)
        .should('be.visible');
      cy.wait(500);
    }
    cy.get('.area-editor.user-edit ol').eq(0).find('li').its('length')
      .should('eq', 6);
    for (let i = 0; i < 6; i++) {
      cy.get('.area-editor.user-edit ol').eq(0).find('li').eq(`${i}`)
        .should('be.visible');
      cy.wait(500);
    }

    cy.get('.area-editor.user-edit ol').eq(1).find('li').its('length')
      .should('eq', 2);
    for (let i = 0; i < 2; i++) {
      cy.get('.area-editor.user-edit ol').eq(1).find('li').eq(`${i}`)
        .should('be.visible');
      cy.wait(500);
    }

    cy.get('.area-editor.user-edit ol').eq(2).find('li').its('length')
      .should('eq', 2);
    for (let i = 0; i < 2; i++) {
      cy.get('.area-editor.user-edit ol').eq(2).find('li').eq(`${i}`)
        .should('be.visible');
      cy.wait(500);
    }
  });
};

export const AudiovisualTeachingTests = () => {
  it('should display links to info about audio-visual teaching\n(預期呈現影音教學的資訊連結)', () => {
    cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
    cy.wait(1000);
    cy.get('.group-list.nav .group.nav').eq(4).click();
    cy.wait(500);

    cy.get('.group.default.info .simple-text.heading').contains('影音教學')
      .should('be.visible'); //title//

    cy.get('.list-text.classify li').its('length')
      .should('eq', 3); //三種篩選方式//

    cy.get('.list-text.classify li').eq(0).contains('全部').should('be.exist');
    cy.get('.list-text.classify li').eq(1).contains('懶人包').should('be.exist');
    cy.get('.list-text.classify li').eq(2).contains('影音').should('be.exist');

    cy.get('.group-list.page-block ul[data-child="20"] a').its('length')
      .should('eq', 20);
    for (let i = 1; i < 20; i++) {
      cy.get('.group-list.page-block a').eq(`${i}`)
        .scrollIntoView().should('be.visible');
      cy.wait(1000);
    }

    cy.get('.list-text.classify li').eq(1).click();
    cy.wait(500);

    cy.get('.group-list.page-block ul[data-child="3"] a').its('length')
      .should('eq', 3);
    for (let i = 1; i < 3; i++) {
      cy.get('.group-list.page-block a').eq(`${i}`)
        .scrollIntoView().should('be.visible');
      cy.wait(1000);
    }

    cy.get('.list-text.classify li').eq(2).click();
    cy.wait(500);

    cy.get('.group-list.page-block ul[data-child="17"] a').its('length')
      .should('eq', 17);
    for (let i = 1; i < 17; i++) {
      cy.get('.group-list.page-block a').eq(`${i}`)
        .scrollIntoView().should('be.visible');
      cy.wait(1000);
    }
  });
};

export const CommonQATests = () => {
  it('should display common QA\n(預期呈現常見問答)', () => {
    cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
    cy.wait(1000);
    cy.get('.group-list.nav .group.nav').eq(5).click();
    cy.wait(500);

    cy.get('.group.default.info .simple-text.heading')
      .contains('常見問答').should('be.visible'); //title//

    cy.get('.group-list.page-list ul[data-index="1"] .caption')
      .its('length').should('eq', 50);

    for (let i = 1; i < 50; i++) {
      cy.get('.group-list.page-list ul[data-index="1"] .caption')
        .eq(`${i}`).scrollIntoView().click();
      cy.wait(2000);  //打開所有解答//
      cy.get('.group-list.page-list ul[data-index="1"] .caption')
        .eq(`${i}`).click();
      cy.wait(500);  //看完再將其關閉//
    }
  });
};

export const SwitchLanguageTests = () => {
  it('should display switch between Chinese and English interface and link with pop-up window\n(可中英介面切換及具彈跳視窗的連結)', () => {
    cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
    cy.wait(1000);
    cy.get('.list-text.link').first().find('a[href="/en"]')
      .contains('EN').should('be.exist');
  });
};