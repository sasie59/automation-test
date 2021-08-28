
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
      .its('length').should('eq', 9); //9張照片//

    cy.get('#P9').click();  //點擊頁籤9//
    cy.wait(1000);
    cy.get('#P9').should('have.class', 'active');

    cy.get('#carouselExampleIndicators') //翻上頁//
      .find('a[data-slide="prev"]').click();
    cy.wait(1000);
    cy.get('#P9').should('not.have.class', 'active');

    cy.get('#P5').click(); //點擊頁籤5//
    cy.wait(1000);
    cy.get('#P5').should('have.class', 'active');

    cy.get('#carouselExampleIndicators') //翻下頁//
      .find('a[data-slide="next"]').click();
    cy.wait(1000);
    cy.get('#P5').should('not.have.class', 'active');
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
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMA/News.asp');
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

export const MediaRegistrationTests = () => {
  it('should into media registration, list all the lists and provide relevant documents to download\n(預期進入媒體報名頁面,列出所有清單及提供相關文件下載)', () => {
    cy.get('@title').find('#li_Media > a')
      .should('be.visible').click();
    cy.wait(1500);
    cy.url().should('eq', 'https://gma.tavis.tw/mediaGroup/default.asp');

    cy.get('.col-md-4').first().find('.btn-success')
      .should('be.visible');  //媒體註冊 按鈕//
    cy.get('.col-md-4').first().find('.btn-primary')
      .should('be.visible');  //媒體登入 按鈕//

    cy.get('.col-12 ol > li').first().find('a')
      .should('have.attr', 'target', '_blank', 'href');
    //『媒體授權承諾書』可提供下載//

    cy.get('.col-12 ol > li').its('length')
      .should('eq', 8);  //8點注意事項//

    for (let i = 0; i < 8; i++) {
      cy.get('.col-12 ol > li').eq(`${i}`).scrollIntoView();
      cy.wait(2000);
    }
  });
};

export const VendorZoneTests = () => {
  it('should into vendor zone, fill in the registration process\n(預期進入廠商專區,填寫報名流程)', () => {
    cy.get('@title').find('.nav-item > a').eq(2)
      .should('be.visible').click();
    cy.wait(1500);
    cy.url().should('eq', 'https://gma.tavis.tw/GM32/Member/SignIn.aspx');

    cy.get('#cphContent_txtEmail').type(Cypress.env('account'));
    cy.get('#cphContent_txtEmail').should('have.value', Cypress.env('account'));
    cy.get('#cphContent_txtPWD').type(Cypress.env('password'));
    cy.get('#cphContent_txtPWD').should('have.value', Cypress.env('password'));

    cy.get('.savefunc input[value="登入"]').should('be.visible'); //登入按鈕//
    cy.get('.savefunc a').should('be.visible').click(); //註冊按鈕//
    cy.wait(1500);
    cy.url().should('eq', 'https://gma.tavis.tw/GM32/Member/Edit.aspx?lang=tw');

    //1.帳號資訊//
    cy.get('#cphContent_txtLastName').type('謝');
    cy.get('#cphContent_txtLastName').should('have.value', '謝');
    cy.get('#cphContent_txtFirstName').type('士偉');
    cy.get('#cphContent_txtFirstName').should('have.value', '士偉');
    cy.get('#cphContent_txtEnglishName').type('Hsieh Shih Wei');
    cy.get('#cphContent_txtEnglishName').should('have.value', 'Hsieh Shih Wei');
    cy.get('.form-group.memt1none.memt3none a').first().should('have.attr', 'href');
    //上傳個人照片//
    cy.get('#cphContent_txtEmail').type(Cypress.env('account'));
    cy.get('#cphContent_txtEmail').should('have.value', Cypress.env('account'));
    cy.get('#cphContent_txtPassword').type(Cypress.env('password'));
    cy.get('#cphContent_txtPassword').should('have.value', Cypress.env('password'));
    cy.get('#cphContent_txtPassword2').type(Cypress.env('password'));
    cy.get('#cphContent_txtPassword2').should('have.value', Cypress.env('password'));
    cy.get('.form-group.memt1none.memt3none a').last().get('#memtype2').should('be.visible');
    cy.get('.form-group.memt1none.memt3none a').last().get('#memtype4').should('be.visible');

    //2.公司簡介//
    cy.get('#cphContent_txtCompanyName').type('統一企業');
    cy.get('#cphContent_txtCompanyName').should('have.value', '統一企業');
    cy.get('#cphContent_txtCompanyNameEN').type('Uni-President');
    cy.get('#cphContent_txtCompanyNameEN').should('have.value', 'Uni-President');
    cy.get('.form-group.memt1none.memt3none a').last().should('have.attr', 'href');
    cy.get('#cphContent_txtTitle').type('部長');
    cy.get('#cphContent_txtTitle').should('have.value', '部長');
    cy.get('#cphContent_txtCompanyID').type('12345678');
    cy.get('#cphContent_txtCompanyID').should('have.value', '12345678');
    cy.get('.cbgroup').first().find('label').its('length').should('eq', 16);
    cy.get('#cphContent_txtCompanyCountry').type('台灣');
    cy.get('#cphContent_txtCompanyCountry').should('have.value', '台灣');
    cy.get('#cphContent_txtCompanyCity').type('台北');
    cy.get('#cphContent_txtCompanyCity').should('have.value', '台北');
    cy.get('#cphContent_txtCompanyAddress').type('中山路1號');
    cy.get('#cphContent_txtCompanyAddress').should('have.value', '中山路1號');
    cy.get('#cphContent_txtCompanyTel').type('02-22345678');
    cy.get('#cphContent_txtCompanyTel').should('have.value', '02-22345678');
    cy.get('#cphContent_txtCompanyMobile').type('0912345678');
    cy.get('#cphContent_txtCompanyMobile').should('have.value', '0912345678');
    cy.get('#cphContent_txtCompanyEstYear').type('2000');
    cy.get('#cphContent_txtCompanyEstYear').should('have.value', '2000');
    cy.get('#cphContent_txtNumberOfEmployees').type('100');
    cy.get('#cphContent_txtNumberOfEmployees').should('have.value', '100');
    cy.get('#cphContent_txtLastYearRevenue').type('100');
    cy.get('#cphContent_txtLastYearRevenue').should('have.value', '100');
    cy.get('#cphContent_txtCompanyWebSite').type('http://xxx.com.tw');
    cy.get('#cphContent_txtCompanyWebSite').should('have.value', 'http://xxx.com.tw');
    cy.get('#cphContent_txtCompanyOverview').type('xxx');
    cy.get('#cphContent_txtCompanyOverview').should('have.value', 'xxx');
    cy.get('#cphContent_txtCompanyOverviewEN').type('aaa');
    cy.get('#cphContent_txtCompanyOverviewEN').should('have.value', 'aaa');

    //3.本次預訂媒合項目//
    cy.get('.form-group.bzinterest > div > label').its('length')
      .should('eq', 16);

    //4.個人資料使用聲明//
    const isAgreeClassList = [
      '#cbServicePolicy',
      '#cphContent_rbUseMarketingY',
      '#cphContent_rbUseMarketingN',
    ];
    isAgreeClassList.forEach(item => {
      cy.get(`${item}`).should('be.visible');
    });
    cy.get('.savefunc').find('#cphContent_btnSave').should('be.visible');
    cy.get('.savefunc').find('.btn.btn-default.btn-md').should('be.visible');

    cy.go(-1);
    cy.wait(1500);

    cy.get('.savefunc .blnk button').should('be.visible').click(); //忘記密碼按鈕//
    cy.wait(1500); //浮出一個視窗//

    cy.get('#person_email').type(Cypress.env('account'));
    cy.get('#person_email').should('have.value', Cypress.env('account'));

    cy.get('#fpwdModal').find('.modal-content .modal-footer .btn-primary')
      .should('be.visible'); //確定按鈕//
    cy.get('#fpwdModal').find('.modal-content .modal-footer .btn-default')
      .should('be.visible').click(); //取消按鈕//

    cy.go(-1);
    cy.wait(1500);
  });
};

export const LanguageSwitchTests = () => {
  it('should can language switch\n(預期可以語言切換)', () => {
    cy.get('@title').get('.navbar-nav.justify-content-end.pl-2.pl-md-0 > a')
      .its('length').should('eq', 2);

    cy.get('.navbar-nav.justify-content-end.pl-2.pl-md-0 > a')
      .last().click(); //英文//
    cy.wait(2000);

    cy.get('#menu_button').contains('Golden Melody Awards')
      .should('be.visible');
    cy.get('#menu_button2').contains('Golden Melody Festival')
      .should('be.visible');

    cy.get('.navbar-nav.justify-content-end.pl-2.pl-md-0 > a')
      .first().click(); //中文//
    cy.wait(2000);

    cy.get('#menu_button').contains('金曲獎頒獎典禮')
      .should('be.visible');
    cy.get('#menu_button2').contains('金曲國際音樂節')
      .should('be.visible');
  });
};

export const SocialMediaTests = () => {
  it('should 4 kinds of social media links, and have the attribute of opening another window\n(預期有4種社群媒體連結,且具有另開視窗的屬性)', () => {
    cy.get('@side').find('a').its('length').should('eq', 4);
    cy.get('@side').find('a').should('have.attr', 'target', '_blank', 'href');
  });
};

export const GoTopTests = () => {
  it('should press the inverted triangle button and it will slide to the top of the page\n(預期按倒三角按鈕，會滑至頁首)', () => {
    cy.get('footer').scrollIntoView();
    cy.wait(1500);

    cy.get('#top-navigator').should('be.visible').click();
    cy.wait(1500);

    cy.get('.navbar.navbar-expand-md.navbar-dark.fixed-top')
      .should('be.visible');
  });
};

export const GMA_MainMenu = () => {
  beforeEach(() => {
    cy.get('#menu_button').click();
    cy.wait(1000);
  });
};

export const GMF_MainMenu = () => {
  beforeEach(() => {
    cy.get('#menu_button2').click();
    cy.wait(1000);
    cy.get('.row.pt-3').as('GMF');
  });
};

export const GMF_AboutGMATests = () => {
  it('should display introduction to GMF\n(預期進入「有關GMA」簡介頁面)', () => {
    cy.get('@GMF').get('.dropdown-header').eq(4).find('a').click();
    cy.wait(1500);
    cy.get('#main-top').should('be.visible');
    // tests.GMA_CarouselTests();
    // tests.GMA_PageNavigationTests();
    // tests.GMA_UnitTests();
    //這三項已獨立驗証過//
  });
};

export const GMF_UniversityExchangeTests = () => {
  it('should \n()', () => {
    // cy.get('@GMF').get('.text-nowrap > a').click();
    // cy.wait(1500);
  });
};
export const GMF_InternationalForumTests = () => {
  it('should \n()', () => {

  });
};
export const GMF_TradeFairTradingCenterTests = () => {
  it('should display trade fair trading center Results\n(預期呈現商展交易中心的成果展)', () => {
    cy.get('@GMF').get('.mm2 > a').eq(2).click();
    cy.wait(1500);
    
    cy.get('.tip-line .tip-black').should('be.visible'); //title//
    cy.get('.row .tip-interpret').should('be.visible'); //描述//
    
    cy.get('.justify-content-center > .card-columns > .card')
      .its('length').should('eq', 12);
    cy.get('.justify-content-center > .card-columns > .card')
      .find('a').should('have.attr', 'href');
    cy.get('.justify-content-center > .card-columns > .card')
      .find('a > img').should('have.attr', 'src');
    
    cy.get('#BothSideLine').should('be.visible'); //照片底部的文字//
    
    cy.get('.justify-content-center > .card-columns > .card')
      .find('a > img').first().click(); //點擊圖片的測試//
    cy.wait(500);
    cy.get('.fancybox-skin').should('be.visible');

    cy.get('.fancybox-skin > .fancybox-outer > a[title="Previous"]')
      .should('be.visible').click(); //上一頁//
    cy.wait(1000);
    cy.get('.fancybox-skin > .fancybox-outer > a[title="Next"]')
      .should('be.visible').click();  //下一頁//
    cy.wait(1000);
    cy.get('.fancybox-skin >.fancybox-title.fancybox-title-float-wrap')
      .should('be.visible'); //照片底部的文字//
    cy.get('.fancybox-skin > a[title="Close"]')
      .should('be.visible').click(); //右上角的關閉鈕//
    cy.wait(500);  
  });
};

export const GMF_ShowCaseTests = () => {
  it('should dispaly artist profile and performance schedule\n(預期出現藝人簡介及演出的行程表)', () => {
    cy.get('@GMF').get('.mm2 > a').last().click();
    cy.wait(1500);

    cy.get('.tip-black').contains('Showcase').should('be.visible');
    cy.get('#main-top > .row ol > li').its('length').should('eq', 3);

    cy.get('.card-deck').find('.card.d-block.border-gold.mb-3') //3列//
      .its('length').should('eq', 3);

    cy.get('.card-deck').find('.card.d-block.border-gold.mb-3 > .card-header.bg-deco.text-white')
      .its('length').should('eq', 3); //有3天演出//

    cy.get('.card-deck').find('.card.d-block.border-gold.mb-3 > .card-body.text-dark > a')
      .its('length').should('eq', 15); //共有15組演出//
    cy.get('.card-deck').find('.card.d-block.border-gold.mb-3 > .card-body.text-dark > a')
      .should('have.attr', 'href');

    cy.get('.card-deck').find('.card.d-block.border-gold.mb-3 > .card-body.text-dark').first()
      .find('a').first().click(); //點擊第一列 第一組//
    cy.wait(1500);
    cy.get('#myTab').should('be.visible');

    cy.get('#myTab > a').its('length').should('eq', 3);  //表演日期有3天//
    cy.get('#myTab > a').should('have.attr', 'href');

    for (let i = 1; i <= 3; i++) {
      cy.get('#myTab > a').eq(`${i - 1}`).scrollIntoView().click();
      cy.wait(2000);
      for (let j = 1; j <= 5; j++) {
        cy.get(`#sc${i}_${j}`).find('.col-md-6 > img').scrollIntoView()
          .should('have.attr', 'src'); //照片//
        cy.wait(1000);
        cy.get(`#sc${i}_${j}`).find('div').last().get('h1')
          .should('be.visible'); //名字//
        cy.wait(1000);
        cy.get(`#sc${i}_${j}`).find('div').last().get('p')
          .should('be.visible'); //簡介//
        cy.wait(1000);
        cy.get(`#sc${i}_${j}`).find('div').last().get('a')
          .should('have.attr', 'href'); //其他照片//
        cy.wait(1000);
      }
    }
  });
};
