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
  cy.visit('https://emake.5000.gov.tw/hpg/webLogin?token=query&language=ch');
  cy.wait(1000); //前往 身分認証//

  cy.get('.title-con.style-line2').contains('身分認證')
    .should('be.exist');
  cy.wait(500);

  cy.get('.title-sm').contains('身分證號+健保卡號')
    .should('be.exist');
  cy.wait(500);

  cy.get('.form-group.row.required').contains('身分證號/統一證號')
    .should('be.exist');
  cy.wait(500);

  cy.get('#nhCardNoModal_idn[placeholder="請輸入身分證號/居留證號最長10位"]')
    .should('be.exist');
  cy.wait(500);

  cy.get('#nhCardNoModal_nhCard1[placeholder="1~4"]')
    .should('be.exist');
  cy.wait(500);

  cy.get('#nhCardNoModal_nhCard2[placeholder="5~8"]')
    .should('be.exist');
  cy.wait(500);

  cy.get('#nhCardNoModal_nhCard3[placeholder="9~12"]')
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

  cy.get('.btn-box').contains('執行身分認證').should('be.exist');
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
    cy.get('.simple-text.btn.go a[title="最大化[縮放]"]')
      .contains('最大化').should('be.visible');

    cy.get('.simple-text.btn.go a[title="最大化[縮放]"]').click();
    cy.wait(1000);
    cy.get('.simple-text.btn.go a[title="最小化[縮放]"]')
      .contains('最小化').should('be.visible');
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

    cy.get('.simple-text.heading').contains('信用卡').should('be.visible');
    //title//
    cy.get('.group-list.page-block .area-figure.page-figure').its('length')
      .should('eq', 31); //31家信用卡//

    const bankList = [
      '中國信託商業銀行', '國泰世華銀行', '兆豐銀行', '合作金庫商業銀行', '聯邦銀行',
      '玉山商業銀行', '台新國際商業銀行', '華南銀行', '陽信商業銀行', '渣打國際商業銀行',
      '花旗(台灣)商業銀行', '三信商業銀行', '星展(台灣)商業銀行', '台灣美國運通', '高雄銀行',
      '遠東國際商業銀行', '臺灣新光商業銀行', '上海銀行', '台中商業銀行', '臺灣銀行',
      '彰化商業銀行', '台北富邦銀行', '滙豐(台灣)商業銀行', '日盛國際商業銀行', '永豐商業銀行',
      '中華郵政', '元大商業銀行', '第一商業銀行', '安泰商業銀行', '臺灣中小企業銀行',
      '臺灣土地銀行',
    ];

    bankList.forEach(item => {
      cy.get('.group-list.page-block').contains(`${item}`).scrollIntoView().should('be.exist');
      cy.wait(500);
    });

    cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
    cy.get('.group-list.nav ul[data-index="1"]').find('li').eq(0).click();
    cy.get('.list-text.nav').eq(0).find('li').eq(1).click();
    cy.wait(500);
    cy.url().should('eq', 'https://hpm.5000.gov.tw/News_Photo.aspx?n=194&sms=9200');

    cy.get('.simple-text.heading').contains('電子票證').should('be.visible');
    //title//
    cy.get('.group-list.page-block .area-figure.page-figure').its('length')
      .should('eq', 4); //4家電子票證//

    const e_TicketList = [
      '遠鑫電子票證股份有限公司',
      '悠遊卡股份有限公司-悠遊卡',
      'icash2.0',
      'iPASS 一卡通',
    ];

    e_TicketList.forEach(item => {
      cy.get('.group-list.page-block').contains(`${item}`).should('be.exist');
      cy.wait(500);
    });

    cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
    cy.get('.group-list.nav ul[data-index="1"]').find('li').eq(0).click();
    cy.get('.list-text.nav').eq(0).find('li').eq(2).click();
    cy.wait(500);
    cy.url().should('eq', 'https://hpm.5000.gov.tw/News_Photo.aspx?n=288&sms=9201');

    cy.get('.simple-text.heading').contains('行動支付').should('be.visible');
    //title//
    cy.get('.group-list.page-block .area-figure.page-figure').its('length')
      .should('eq', 8); //8家行動支付//

    const digitalPaymentList = [
      '街口支付',
      '台灣Pay',
      'Pi 拍錢包',
      '悠遊付',
      '橘子支付',
      'icash Pay',
      '歐付寶',
      'LINE Pay Money',
    ];

    digitalPaymentList.forEach(item => {
      cy.get('.group-list.page-block').contains(`${item}`).scrollIntoView().should('be.exist');
      cy.wait(500);
    });
  });
};

export const PaperRollTests = () => {
  it('should display access to paper rolls\n(預期呈現紙本卷的領取通路)', () => {
    cy.get('.simple-text.major-logo a[href="Default.aspx"]').click({ force: true });
    cy.get('.area-editor.default.group-ball').get('.ct > ul').first()
      .find('.ball.paper').click();

    cy.get('.simple-text.heading').contains('紙本券').should('be.visible');

    cy.get('.g.is-right .g.is-inline img').its('length').should('eq', 2);
    cy.get('.g.is-right .g.is-inline img').should('be.exist');
    cy.get('.is-center').eq(0).contains('平台預訂').should('be.visible');
    cy.get('.is-center').eq(1).contains('超商預訂').should('be.visible');
    //最上方的圖示//
    cy.get('.p.is-bold').contains('第一梯次').should('be.exist');
    cy.get('.g.is-right .list').eq(0).find('li').eq(0)
      .contains('預訂 110/09/25(六) 9:00 至 110/10/01(五) 22:00').should('be.exist');
    cy.get('.g.is-right .list').eq(0).find('li').eq(1)
      .contains('領取 110/10/08(五) 至 110/10/21(四)').should('be.exist');

    cy.get('.p.is-bold').contains('第二梯次').should('be.exist');
    cy.get('.g.is-right .list').eq(1).find('li').eq(0)
      .contains('預訂 110/10/25(一) 9:00 至 110/10/31(日) 22:00').should('be.exist');
    cy.get('.g.is-right .list').eq(1).find('li').eq(1)
      .contains('領取 110/11/08(一) 至 110/11/21(日)').should('be.exist');

    cy.get('.mark').contains('超商的預定與領取時間為每日09:00-22:00').should('be.exist');

    cy.get('.is-left img').should('be.exist'); //郵局圖案//
    cy.get('.is-center').eq(2).contains('郵局領取').should('be.visible');
    cy.get('.g.is-left .list').find('li').eq(0).contains('預約 110/10/04(一) 起開放預約')
      .should('be.exist');
    cy.get('.g.is-left .list').find('li').eq(1)
      .contains('領取 110/10/12(二)~110/10/30(六)上班日受理預約民眾領券')
      .should('be.exist');
    cy.get('.g.is-left .list').find('li').eq(2)
      .contains('110/10/16、110/10/23兩個週六支局全日服務(機關、學校內之郵局除外)')
      .should('be.exist');
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
    const goTOIndexArray = [
      '前往好食券網站',
      '前往國旅券網站',
      '前往i原券網站',
      '前往農遊券網站',
      '前往藝FUN券網站',
      '前往動滋券網站',
      '前往客庄券網站',
      '前往地方創生券網站',
    ];

    const eightDepartment = [
      '好食券',
      '國旅券',
      'i原券',
      '農遊券',
      '藝FUN券',
      '動滋券',
      '客庄券',
      '地方創生券',
    ];

    for (let i = 1; i <= 8; i++) {
      cy.get('.group.base-mobile a[title="必[手機版選單]"]').click();
      cy.wait(1000);
      cy.get('.group-list.nav .group.nav').eq(2).click();
      cy.wait(500);

      cy.get('.list-text.nav ul[data-child="9"]').find('li').eq(`${i}`).click();
      cy.wait(500);

      cy.get('.double').find('a').contains(`${goTOIndexArray[i - 1]}`).should('have.attr', 'href'); //好食卷連結//
      cy.wait(1000);

      cy.get('.base-footer').scrollIntoView();
      cy.wait(2500);

      cy.get('.content .caption').contains(`${eightDepartment[i - 1]}`).should('be.visible');

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

    cy.get('.group.default.info .simple-text.heading').contains('總覽')
      .should('be.exist');
    ///title/
    cy.get('.list-text.classify.eight ul li').its('length')
      .should('eq', 10); //10筆nav//
    const eightDepartment = [
      '總覽',
      '好食券',
      '國旅券',
      'i原券',
      '農遊券',
      '藝FUN券',
      '動滋券',
      '客庄券',
      '地方創生券',
      '加碼券登記修改時程'
    ];
    eightDepartment.forEach(item => {
      cy.get('.list-text.classify.eight ul li').contains(`${item}`).should('be.exist');
    });
    cy.get('.area-editor.user-edit ol > li').its('length')
      .should('eq', 7); //六筆資訊//
    for (let i = 0; i < 7; i++) {
      cy.get('.area-editor.user-edit ol > li').eq(`${i}`)
        .scrollIntoView().should('be.visible');
      cy.wait(750);
    }

    const titleArray = [
      '八大部會', '加碼券', '經濟部', '好食券', '交通部', '國旅券', '原民會', '農委會', '農遊券',
      'i原券', '文化部', '藝Fun券', '教育部', '動滋券', '客委會', '客庄券', '國發會', '地方創生券'
    ];
    titleArray.forEach(item => {
      cy.get('.box .title').contains(`${item}`).should('be.exist');
      cy.wait(500);
    });

    const dataArray = [
      '抽籤時間', '10/29前綁定者不抽籤',
      '每週二', '上午', '每週二', '下午',
      '每週三', '上午', '每週三', '下午',
      '每週四', '上午', '每週四', '下午',
      '每週五', '上午',
    ];
    dataArray.forEach(item => {
      cy.get('.box .date').contains(`${item}`).should('be.exist');
      cy.wait(500);
    });

    const dollarArray = [
      '票券面額', '500元', '1,000元',
      '1,000元', '888元', '600元',
      '500元', '500元', '500元',
    ];
    dollarArray.forEach(item => {
      cy.get('.box .dollar').contains(`${item}`).should('be.exist');
      cy.wait(500);
    });

    cy.get('.is-table tr').its('length').should('eq', 8);

    cy.get('#week1').contains('第一週').should('be.exist');
    cy.get('#week1').contains('10/11~10/15').should('be.exist');

    cy.get('#week2').contains('第二週').should('be.exist');
    cy.get('#week2').contains('10/18~10/22').should('be.exist');

    cy.get('#week3').contains('第三週').should('be.exist');
    cy.get('#week3').contains('10/25~10/29').should('be.exist');

    cy.get('#week4').contains('第四週').should('be.exist');
    cy.get('#week4').contains('11/01~11/05').should('be.exist');

    const totalBudget = [
      '合計', '400萬以上', '240萬',
      '10萬', '88萬', '300萬',
      '200萬', '40萬', '20萬',
    ];
    totalBudget.forEach(item => {
      cy.get('.box').contains(`${item}`).should('be.exist');
      cy.wait(500);
    });
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

    cy.get('.group.default.info .simple-text.heading').contains('數位標章')
      .should('be.visible'); //title//

    cy.get('.area-editor.user-edit .badge ol li').its('length').should('eq', 3);
    cy.get('.area-editor.user-edit .badge ul li').its('length').should('eq', 4);

    cy.get('.g.is-inline a').its('length').should('eq', 2); //2個連結//
    cy.get('.g.is-inline a .hd.is-center').should('be.visible');

    cy.get('.list-text.classify.eight a').contains('數位標章運用注意事項')
      .click(); //數位標章運用注意事項//
    cy.wait(1000);

    cy.get('.group.default.info .simple-text.heading').contains('數位標章運用注意事項')
      .should('be.visible'); //title//

    cy.get('.area-editor.user-edit p').its('length').should('eq', 3);
    //三個段落//
    cy.get('.area-editor.user-edit p').contains('數位標章組成').should('be.exist');
    cy.get('.area-editor.user-edit p').contains('民眾運用時應特別注意').should('be.exist');
    cy.get('.area-editor.user-edit p').contains('店家運用時應特別注意').should('be.exist');

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
    cy.go('back');
    cy.wait(500);

    cy.get('.g.is-inline a').its('length').should('eq', 2);

    cy.get('.div.customer').contains('民眾').should('be.exist');
    cy.get('.div.customer').contains('您可按此圖示').should('be.exist');
    cy.get('.div.customer').contains('輸入身分證+手機號碼 即可顯示您的數位標章').should('be.exist');

    cy.get('.div.store').contains('店家').should('be.exist');
    cy.get('.div.store').contains('可二擇一查詢').should('be.exist');
    cy.get('.div.store').contains('直接以手機掃描民眾數位標章QR Code查詢是否滿額').should('be.exist');
    cy.get('.div.store').contains('按此圖示後輸入優惠代碼+圖形驗證碼查詢是否滿額').should('be.exist');
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