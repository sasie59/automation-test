export const GoTo5000Tests = () => {
  it('should go to 5000 index\n(預期連結振興五倍卷)', () => {
    cy.visit('https://hpm.5000.gov.tw/Default.aspx');
    cy.wait(1000);
    //title振興五倍卷//
  });
};

export const HomeTourTests = () => {
  it('should guided tour this index all elements\n(預期導覽此網頁的全部元件)', () => {
    cy.get('.area-editor.default.group-ball').as('main');

    cy.get('@main').find('.img > img')
      .should('have.attr', 'src'); //左上的logo//
    cy.get('@main').find('.p').contains('10/8數位、紙本消費起跑')
      .should('be.visible');
    cy.get('@main').find('.box > a')
      .should('have.attr', 'href'); //右上的button//

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
        .should('have.attr', 'href');
      cy.wait(500);
    });

    cy.get('@main').get('.coupon > .hd > .img').find('a')
      .should('have.attr', 'target', '_blank', 'href',); //加碼卷logo//

    cy.get('@main').get('.ct > ul').eq(1).find('li').its('length')
      .should('eq', 8); //8個部會//
    cy.get('@main').get('.ct > ul').eq(1).find('li a')
      .should('have.attr', 'href');
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

export const GoodForEatTicketTests = () => {
  it('should display GoodForEatTicket info\n(預期出現好食卷的資訊)', () => {
    cy.get('.list-text.nav').eq(1).find('li').eq(1).click();
    cy.wait(500);

    cy.get('.double .hd a').should('have.attr', 'href'); //好食卷連結//
    cy.get('.double img').should('have.attr', 'src');  //好食卷圖片//

    const goodForEatInfo = [
      '.content',
      '.title',
      '.p'
    ];
    goodForEatInfo.forEach(item => {
      cy.get('.double > .content').get(`${item}`).should('be.visible');
    }); //infomation//
  });
};

export const TravelTicketTests = () => {
  it('should display TravelTicket info\n(預期出現國旅卷的資訊)', () => {
    cy.get('.list-text.nav').eq(1).find('li').eq(2).click();
    cy.wait(500);

    cy.get('.double .hd a').should('have.attr', 'href'); //國旅卷連結//
    cy.get('.double img').should('have.attr', 'src');  //國旅卷圖片//

    const travelInfo = [
      '.content',
      '.title',
      '.p'
    ];
    travelInfo.forEach(item => {
      cy.get('.double > .content').get(`${item}`).should('be.visible');
    }); //infomation//
  });
};

export const AboriginalTicketTests = () => {
  it('should display AboriginalTicket info\n(預期出現i原券的資訊', () => {
    cy.get('.list-text.nav').eq(1).find('li').eq(3).click();
    cy.wait(500);

    cy.get('.double .hd a').should('have.attr', 'href'); //i原券連結//
    cy.get('.double img').should('have.attr', 'src');  //i原券圖片//

    const travelInfo = [
      '.content',
      '.title',
      '.p'
    ];
    travelInfo.forEach(item => {
      cy.get('.double > .content').get(`${item}`).should('be.visible');
    }); //infomation//
  });
};

export const FarmingTourTicketTests = () => {
  it('should ', () => {
    cy.get('.group-list.nav .group.nav').eq(4).click();
  });
};

export const ArtFunTicketTests = () => {
  it('should ', () => {
    cy.get('.group-list.nav .group.nav').eq(5).click();
  });
};

export const DomsTicketTests = () => {
  it('should ', () => {
    cy.get('.group-list.nav .group.nav').eq(6).click();
  });
};

export const HakkaTicketTests = () => {
  it('should ', () => {
    cy.get('.group-list.nav .group.nav').eq(7).click();
  });
};

export const LocalCreationTicketTests = () => {
  it('should ', () => {
    cy.get('.group-list.nav .group.nav').eq(8).click();
  });
};

export const BookingAndCheck = () => {

};
