export const GoToPlusCouponCheckWinnerTests = () => {
  it('should \n(預期連結加碼券中獎查詢)', () => {
    cy.visit('https://sexyoung.github.io/vhpi.5000/');
    cy.wait(1000);
  });
};

export const WebPageElementTests = () => {
  it('should display all elements\n(預期呈現所有的元素)', () => {
    cy.get('.App_App__3_kPP').as('title');

    const classList = [
      '.App_logo__1DTn3',
      '.App_text__1FlLb',
      '.App_footer__2bprW'
    ];
    classList.forEach(item => {
      cy.get('@title').find(`${item}`).should('be.visible');
      cy.wait(500);
    });
    cy.get('@title').find('small a')
      .should('have.attr', 'target', '_blank', 'href');

    cy.get('@title').find('form #code')
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
    
    cy.get('.App_result__3TkmB .App_title__2CLN0')
      .should('be.visible'); //中獎title//
      
    cy.get('.App_result__3TkmB .result a') //中獎內容//
      .should('have.attr', 'target', '_blank', 'href'); 
    
    cy.get('#code').type('28'); //沒中獎//
    cy.wait(500);
    cy.get('form button').click();
    cy.wait(1500);

    cy.get('.App_resultList__2RRsi .App_result__3TkmB')
      .should('be.visible'); //沒中獎title//
    
    cy.get('.App_resultList__2RRsi .App_result__3TkmB')
      .find('img').should('have.attr', 'src'); //貓咪哭哭//
  });
};