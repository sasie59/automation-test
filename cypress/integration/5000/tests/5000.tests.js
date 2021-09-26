export const GoTo5000Tests = () => {
  it('should go to 5000 index\n(預期連結振興五倍卷)', () => {
    cy.visit('https://hpm.5000.gov.tw/Default.aspx');
    cy.wait(2000);
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

  });
};

export const CreditCardTests = () => {
  it('should ', () => {

  });
};

export const E_TicketTests = () => {
  it('should ', () => {

  });
};

export const MobilePaymentTests = () => {
  it('should ', () => {

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
