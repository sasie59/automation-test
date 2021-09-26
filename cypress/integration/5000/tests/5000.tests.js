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

    for(let i = 1; i <= 31; i++) {
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

    for(let i = 1; i <= 4; i++) {
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
    
    for(let i = 1; i <= 8; i++) {
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
  it('should ', () => {

  });
};

export const OverWeight = () => {

};

export const GoodForEatTicketTests = () => {
  it('should ', () => {

  });
};

export const TravelTicketTests = () => {
  it('should ', () => {

  });
};

export const AboriginalTicketTests = () => {
  it('should ', () => {

  });
};

export const FarmingTourTicketTests = () => {
  it('should ', () => {

  });
};

export const ArtFunTicketTests = () => {
  it('should ', () => {

  });
};

export const DomsTicketTests = () => {
  it('should ', () => {

  });
};

export const HakkaTicketTests = () => {
  it('should ', () => {

  });
};

export const LocalCreationTicketTests = () => {
  it('should ', () => {

  });
};

export const BookingAndCheck = () => {

};
