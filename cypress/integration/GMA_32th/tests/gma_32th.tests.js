
export const GoToGMA_32thTests = () => {
  it('should go to GMA_32th index\n(預期連結第32屆金曲獎首頁)', () => {
    cy.visit('https://gma.tavis.tw/gm32/index.htm');
    cy.get('#left').get('#right').should('be.visible');
  });
};

export const Into2021GoldenMelodyFestivalTests = () => {
  it('should into GMF page\n(預期進入2021金曲國際音樂節頁面)', () => {
    cy.get('#right').find('.btn-outline-secondary1').click();
    cy.wait(1000);
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMF/default.asp');
  });
};

export const GMF_CarouselTests = () => {
  it('should Click to turn the page, the specified tab will switch the photo\n(預期點擊翻頁、指定頁籤，會切換照片)', () => {
    cy.get('#carouselExampleIndicators').should('be.visible');
    cy.get('#carouselExampleIndicators').find('ol > li')
      .its('length').should('eq', 13);  //13張照片//

    cy.get('#P2').click();  //點擊頁籤2//
    cy.wait(1000);
    cy.get('#P2').should('have.class', 'active');

    cy.get('#carouselExampleIndicators') //翻上頁//
      .find('a[data-slide="prev"]').click();
    cy.wait(1000);
    cy.get('#P2').should('not.have.class', 'active');

    cy.get('#P10').click(); //點擊頁籤10//
    cy.wait(1000);
    cy.get('#P10').should('have.class', 'active');

    cy.get('#carouselExampleIndicators') //翻下頁//
      .find('a[data-slide="next"]').click();
    cy.wait(1000);
    cy.get('#P10').should('not.have.class', 'active');
  });
};

export const GMF_IntroductionTests = () => {
  it('should go to specified paragraph GMA Introduction\n(預期到指定段落,GMA簡介)', () => {
    cy.get('#main-top').scrollIntoView();
    cy.wait(2000);

    cy.get('#main-top img').should('have.attr', 'src'); // 左圖logo//
    cy.get('#main-top .tip-interpret').should('be.visible'); // 右邊text//
  });
};

export const GMF_SeriesOfActivitiesTests = () => {
  it('should go to specified paragraph series of activities\n(預期到指定段落,全系列活動)', () => {
    cy.get('.tip-black').last().scrollIntoView();
    cy.wait(2000);

    cy.get('.tip-black').last().get('.card-deck > div')
      .its('length').should('eq', 4); //4張活動照片//

    cy.get('.tip-black').last().get('.card-deck a > img')
      .should('have.attr', 'src');

    cy.get('.tip-black').last().get('.card-body')
      .should('be.visible');
  });
};

export const GMF_SuccessiveLinksTests = () => {
  it('should previous annual music festivals with bounce link attributes\n(預期歷屆年度音樂節,具有彈跳連結屬性)', () => {
    cy.get('.bg-gold').scrollIntoView();
    cy.wait(2000);

    cy.get('.bg-gold a').its('length')
      .should('eq', 7); //有7屆//

    cy.get('.bg-gold a')
      .should('have.attr', 'target', '_blank', 'href');
  });
};

export const GMF_UnitTests = () => {
  it('should all units are displayed at the bottom\n(預期底部呈現所有單位)', () => {
    cy.get('footer').scrollIntoView();
    cy.wait(2000);

    cy.get('footer .row > div').last().find('.py-3.d-xl-flex.align-items-center').its('length')
      .should('eq', 4); //有四個單位//

    cy.get('footer .row > div').last().find('img')
      .should('have.attr', 'src');
  });
};

export const Into32thGoldenMelodyAwardsTests = () => {
  it('should into GMA page\n(預期進入第32屆金曲獎頒獎典禮)', () => {
    // cy.get('.navbar-brand').click();
    // cy.wait(2000);

    cy.get('#right').find('.btn-outline-secondary2').click();
    cy.wait(1000);
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMA/default.asp');
  });
};

export const GMA_CarouselTests = () => {
  it('should Click to turn the page, the specified tab will switch the photo\n(預期點擊翻頁、指定頁籤，會切換照片)', () => {
    cy.get('#carouselExampleIndicators').should('be.visible');
    cy.get('#carouselExampleIndicators').find('ol > li')
      .its('length').should('eq', 20); //20張照片//

    cy.get('#P9').click();  //點擊頁籤9//
    cy.wait(1000);
    cy.get('#P9').should('have.class', 'active');

    cy.get('#carouselExampleIndicators') //翻上頁//
      .find('a[data-slide="prev"]').click();
    cy.wait(1000);
    cy.get('#P9').should('not.have.class', 'active');

    cy.get('#P20').click(); //點擊頁籤20//
    cy.wait(1000);
    cy.get('#P20').should('have.class', 'active');

    cy.get('#carouselExampleIndicators') //翻下頁//
      .find('a[data-slide="next"]').click();
    cy.wait(1000);
    cy.get('#P20').should('not.have.class', 'active');
  });
};

export const GMA_PageNavigationTests = () => {
  it('should list all broadcast locations, regions, channels, and times\n(列出所有播放的地點、區域、頻道、時間)', () => {
    cy.get('.container').eq(1).scrollIntoView();
    cy.wait(2000);

    cy.get('.container .mt-md-5.pt-5').scrollIntoView()
      .should('be.visible');
    cy.wait(2000); //頒獎典禮舉辦時間地點//

    cy.get('.container .table-responsive.pt-5').first().scrollIntoView()
      .should('be.visible');
    cy.wait(2000); //LIVE直播//

    cy.get('.container .table-responsive.pt-5').last().scrollIntoView()
      .should('be.visible');
    cy.wait(2000); //重播//

  });
};

export const GMA_UnitTests = () => {
  it('should all units are displayed at the bottom\n(預期底部呈現所有單位)', () => {
    cy.get('.bottom').scrollIntoView().should('be.visible');
    cy.wait(1000);
    cy.get('.bottom footer').scrollIntoView();
    cy.wait(3000);

    cy.get('.bottom footer > .pb-5 > .row').its('length')
      .should('eq', 7); //共有7列//
  });
};

export const GMF_MainMenuTests = () => {
  it('should display GMF Main Menu\n(預期呈現金曲國際音樂節主選單)', () => {

  });
};

export const GMA_MainMenuTests = () => {
  it('should display GMA Main Menu\n(預期呈現金曲獎頒獎典禮主選單)', () => {
    
  });
};

export const DefineElements = () => {
  beforeEach(() => {
    cy.get('.navbar.navbar-expand-md.navbar-dark.fixed-top').as('title');
    cy.get('.social_media.d-none.d-md-block').as('side');
  });
};

export const BothTitleTests = () => {
  it('should title has two nav links,click to expand, click again to close\n(預期標題有兩個nav連結,點擊後會展開，再次點擊即關閉)', () => {
    cy.get('@title').find('.navbar-nav').first().find('.nav-item')
      .its('length').should('eq', 2); //金曲獎頒獎典禮,曲國際音樂節兩項//
    
    cy.get('@title').get('#menu_button').should('be.visible').click();
    cy.wait(1000);
    cy.get('@title').get('#menu_button2').should('be.visible').click();
    cy.wait(1000);
    cy.get('@title').get('#menu_button2').should('be.visible').click();
    cy.wait(1000);
    
    cy.get('@title').get('img').should('be.attr', 'src');
  });
};

export const LatestNewsTests = () => {
  it('should into latest news page, Provides the function of page turning and list\n(預期進入最新消息的頁面,提供了翻頁及清單的功能)', () => {
    cy.get('@title').find('#li_News > a')
      .should('be.visible').click();
    cy.wait(1500);
    
    cy.get('.text-light45.text-right.pr-lg-4 > a')
      .its('length').should('eq', 2); //兩個連結//
    cy.get('.text-light45.text-right.pr-lg-4 > a')
      .should('have.attr', 'href');
    
    cy.get('.text-light45.text-right.pr-lg-4 > a')
      .first().click(); //第一個連結為上一頁//
    cy.wait(1500);//此時變為三個連結，多了下一頁//
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMA/News.asp?PID=10');
    
    cy.get('.text-light45.text-right.pr-lg-4 > a')
      .last().click(); //第三個連結為下一頁//
    cy.wait(1500);//此時變為二個連結，到底頁了//
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMA/News.asp?PID=11');
      
    cy.get('.text-light45.text-right.pr-lg-4 > a')
      .eq(1).click(); //第二個連結為清單列表//
    cy.wait(1500);

    cy.get('.col-12 .newslist li a').its('length')
      .should('eq', 11); //清單共有11則消息//
    cy.get('.col-12 .newslist li a').should('have.attr', 'href');
    
    cy.get('.tip-black').scrollIntoView();
    cy.wait(2000);
  });
};