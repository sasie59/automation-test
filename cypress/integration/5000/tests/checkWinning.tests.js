export const GoToPlusCouponCheckWinnerTests = () => {
  it('should \n(預期連結加碼券中獎查詢)', () => {
    cy.visit('https://sexyoung.github.io/vhpi.5000/');
    cy.wait(1000);
  });
};

export const WebPageElementTests = () => {
  it('should display all elements\n(預期呈現所有的元素)', () => {
    cy.get('.App_App__3_kPP').as('title');

    cy.get('@title').find('.App_logo__1DTn3').should('be.visible');
    cy.get('@title').find('.App_text__1FlLb').contains('身份證加碼查')
      .should('be.visible');

    cy.get('@title').find('small').contains('非官方，加碼券得獎請看振興五倍券官網')
      .should('be.visible');

    cy.get('@title').get('form div').contains('請輸入後三碼查詢').should('be.visible');
    cy.get('@title').get('#code').should('be.visible');
    cy.get('@title').get('form button').contains('查詢').should('be.visible');

    cy.get('@title').find('.App_footer__2bprW').contains('原始碼都在 Github') 
      .should('be.visible');

    cy.get('@title').find('.App_author__3d67c').contains('本程式由 sexyoung 開發')
      .should('be.visible');

  });
};

export const DoubleZeroTo99Tests = () => {
  it('should check 00 to 99 is Win a lottery ?\n(預期查詢00至99是否中獎?)', () => {
    const arrayList = [
      '00', '01', '02', '03', '04',
      '05', '06', '07', '08', '09',
    ];
    arrayList.forEach(item => {
      cy.get('#code').type(`${item}`);
      cy.wait(500);
      cy.get('form button').click();
      cy.wait(1500);
    });

    for(let i = 10; i < 99; i++) {
      cy.get('#code').type(`${i}`);
      cy.wait(500);
      cy.get('form button').click();
      cy.wait(1500);
    }
  });
};

export const CheckResultTests = () => {
  it('should display elements after check result\n(預期檢查結果會出現的元素)', () => {
    cy.get('#code').type('13'); //有中獎//
    cy.wait(500);
    cy.get('form button').click();
    cy.wait(1500);
    
    cy.get('.App_result__3TkmB .App_title__2CLN0').contains('Wooow 中獎了')
      .should('be.visible'); //中獎title//
    
    cy.get('.App_result__3TkmB .result').its('length')
      .should('eq', 2); //中兩個獎//

    cy.get('.App_result__3TkmB .result').eq(0).contains('第1期動滋券')
      .contains('(500元)').should('be.visible'); 
      
    cy.get('.App_result__3TkmB .result').eq(1).contains('第2期農遊券')
      .contains('(888元)').should('be.visible'); 
    
    cy.get('#code').type('28'); //沒中獎//
    cy.wait(500);
    cy.get('form button').click();
    cy.wait(1500);

    cy.get('.App_resultList__2RRsi .App_result__3TkmB').contains('沒中獎 ')
      .should('be.visible');
    
  });
};