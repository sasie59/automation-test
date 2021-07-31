export const GoToGoShareTests = () => {
  it("should go to Go Share\n(前GoShare)", () => {
    cy.visit("https://www.ridegoshare.com/");
    cy.get(".privacy").should("be.visible");
  });
};

export const IntroductionTests = () => {
  it('should introduce what service the app does\n(簡單介紹app是什麼服務)', () => {
    cy.get('.home-hero').should("be.visible");
    cy.scrollTo(0, 400);
    cy.wait(1000);
    cy.get('a[href="/download"]').should("be.visible");
    cy.get('a[href="/download"]').last().click();
    cy.wait(1000);
    cy.get('.container > img').should('have.attr', 'src');
    cy.go(-1);
    cy.wait(1000);
  });
}

export const UseStepTests = () => {
  it('should show use step\n(使用步驟)', () => {
    cy.get('.standard-container.ghost-header.steps').scrollIntoView()
      .should('be.visible');
    const stepList = ['.step-1', '.step-2', '.step-2'];
    stepList.forEach(item => {
      cy.get(`${item}`).scrollIntoView();
      cy.wait(2000);
    });
  });
}


export const GoRideEveryWhereTests = () => {
  it('should display go ride every where\n(到處騎乘)', () => {
    cy.get('.standard-container.ghost-header.go-everywhere').scrollIntoView();
    const rowList = [
      '.row-first',
      '.row-second',
    ];
    rowList.forEach(item => {
      cy.get(`${item}`).scrollIntoView().should('be.visible');
      cy.wait(3000);
    });
    cy.get('.standard-container.ghost-header.go-everywhere  img')
      .scrollIntoView()
      .should('have.attr', 'src');
    cy.wait(3000);
  });
};

export const FirstRideAndShareToEarnTests = () => {
  it('should display go first ride and share\n(優專介紹)', () => {
    cy.get('.standard-container.promotion')
      .scrollIntoView()
      .should('be.visible');
    const discountList = ['.first-ride', '.share-and-earn'];
    discountList.forEach(item => {
      cy.get(`${item}`).should('be.visible');
      cy.wait(5000);
    });
  });
};

export const FooterNavTests = () => {
  it('should display footer main menu\n(底部應該呈現選單)', () => {
    cy.get('footer').scrollIntoView();
    const mainMenuList = [
      '.downloads',
      '.contact',
      '.icons',
      '.language',
      '.gogoro-logo'
    ];
    mainMenuList.forEach(item => {
      cy.get('footer').find(`${item}`).should('be.visible');
    });
    cy.get('footer .downloads img').its('length').should('eq', 2)
    cy.get('footer .downloads').find('img').should('have.attr', 'src');

    cy.get('footer .contact a').its('length').should('eq', 6);
    cy.get('footer .contact').find('a').should('have.attr', 'href');
    cy.get('footer .contact a').eq(0).click();
    const aboutUsList = [
      '.hero-about-us',
      '.section.vision',
      '.section.achievement',
      '.features',
    ];
    aboutUsList.forEach(item => {
      cy.get(`${item}`).scrollIntoView().should('be.visible');
      cy.wait(5000);
    });
    cy.get('footer .contact a').eq(1).click();
    const serversList = [
      '.hero',
      '.models',
      '.most-fun',
      '.find-us',
    ];
    serversList.forEach(item => {
      cy.get(`${item}`).scrollIntoView().should('be.visible');
      cy.wait(5000);
    })
    cy.get('footer .contact a').eq(2).click();
    const partnerList = [
      '.hero.blue-dark',
      '.features',
      '.feature-partners'
    ];
    partnerList.forEach(item => {
      cy.get(`${item}`).scrollIntoView().should('be.visible');
      cy.wait(5000);
    });
    cy.get('footer .contact a').eq(3).click();
    const businessCooperationList = [
      '.hero',
      '.bussiness-cooperation'
    ];
    businessCooperationList.forEach(item => {
      cy.get(`${item}`).scrollIntoView().should('be.visible');
      cy.wait(5000);
    });
    const infomationList = [
      '台灣電力公司',
      'https://www.taipower.com.tw/tc/index.aspx',
      '台灣',
      '宜蘭',
      // 'xxx',
      '士偉',
      '謝',
      '0912345678',
      'abc@gmail.com'
    ];
    for (let i = 0; i < 8; i++) {
      cy.get('.custom-input-wrapper input').eq(i).type(`${infomationList[i]}`);
      cy.wait(2000)
      cy.get('.custom-input-wrapper input').eq(i).should('have.value', `${infomationList[i]}`);
    };
    cy.get('.custom-input-wrapper textarea').eq(0).type('xxx');
    cy.get('.custom-input-wrapper textarea').eq(0).should('have.value', 'xxx');
    cy.get('input[type="submit"]').should('be.visible');

    cy.get('footer .contact a').eq(4).click();
    const newsList = [
      '.hero',
      '.news-list',
    ];
    newsList.forEach(item => {
      cy.get(`${item}`).should('be.visible');
    });
    cy.get('.news-list li').its('length').should('eq', 10);
    cy.get('.news-list .news-item').find('a').should('have.attr', 'href');

    cy.get('footer .contact a').eq(5).should('have.attr', 'target', '_blank', 'https://www.104.com.tw/company/ojonwyo')

    cy.get('footer .icons a').its('length').should('eq', 4);
    cy.get('footer .icons').find('a').should('have.attr', 'href');

    cy.get('footer .language a').its('length').should('eq', 2);
    cy.get('footer .language').find('a').should('have.attr', 'href');
    cy.get('footer .language a').last().click();
    cy.get('.privacy .btn-dark').contains('I accept').should('be.visible')
    cy.get('footer .language a').first().click();
    cy.get('.privacy .btn-dark').contains('我接受').should('be.visible')

    cy.get('footer .gogoro-logo').should('have.attr', 'target', '_blank', 'https://www.gogoro.com/tw/')
  });
};