
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
    cy.get('.navbar-brand').click();
    cy.wait(2000);

    cy.get('#right').find('.btn-outline-secondary2').click();
    cy.wait(1000);
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMA/default.asp');
  });
};

export const GMA_CarouselTests = () => {
  it('should Click to turn the page, the specified tab will switch the photo\n(預期點擊翻頁、指定頁籤，會切換照片)', () => {
    cy.get('#carouselExampleIndicators').should('be.visible');
    cy.get('#carouselExampleIndicators').find('ol > li')
      .its('length').should('eq', 21); //21張照片//

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
  it('should list all broadcast locations, regions, channels, and times\n(預期列出所有播放的地點、區域、頻道、時間)', () => {
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

export const DefineElements = () => {
  beforeEach(() => {
    cy.get('#navbarCollapse').as('title');
    
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
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMA/News.asp?PID=12');

    cy.get('.text-light45.text-right.pr-lg-4 > a')
      .last().click(); //第三個連結為下一頁//
    cy.wait(1500);//此時變為二個連結，到底頁了//
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMA/News.asp?PID=13');

    cy.get('.text-light45.text-right.pr-lg-4 > a')
      .eq(1).click(); //第二個連結為清單列表//
    cy.wait(1500);

    cy.get('.col-12 .newslist li a').its('length')
      .should('eq', 13); //清單共有13則消息//
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
    cy.get('.savefunc .funcxx').should('be.visible').click(); //註冊按鈕//
    cy.wait(1500);
    cy.url().should('eq', 'https://gma.tavis.tw/GM32/Member/SignIn.aspx');
    //金曲獎已結束 無法接下來的註冊行為//
  });
};

export const LanguageSwitchTests = () => {
  it('should can language switch\n(預期可以語言切換)', () => {
    cy.get('.navbar-nav .nav-item')
      .last().click(); //英文//
    cy.wait(2000);

    cy.get('.form-signin-heading').contains('Log In')
      .should('be.visible');
      
    cy.get('.navbar-nav .nav-item').eq(3)
      .first().click(); //中文//
    cy.wait(2000);
      
    cy.get('.form-signin-heading').contains('登入')
      .should('be.visible');
  });
};

export const SocialMediaTests = () => {
  it('should 4 kinds of social media links, and have the attribute of opening another window\n(預期有4種社群媒體連結,且具有另開視窗的屬性)', () => {
    cy.get('.social_media').find('a').its('length').should('eq', 4);
    cy.get('.social_media').find('a').should('have.attr', 'target', '_blank', 'href');
  });
};

export const GMA_MainMenu = () => {
  beforeEach(() => {
    cy.get('#menu_button').click();
    cy.wait(1000);
    cy.get('.row.no-gutters.pt-3').as('GMA');
  });
};

export const GMA_BroadcastMessageTests = () => {
  it('should into broadcast message page\n(預期進入播出訊息頁面)', () => {
    cy.get('@GMA').find('.mm a').eq(0).click();
    cy.wait(1500);
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMA/default.asp');
    // tests.GMA_CarouselTests();
    // tests.GMA_PageNavigationTests();
    // tests.GMA_UnitTests();
    //這三項已獨立驗証過//
  });
};

export const GMA_AppLinksTests = () => {
  it('should into page display QRCode of two platforms, and has the attribute of pop-up window\n(預期進入頁面後呈現兩種平台的QRCode,且具有彈出視窗的屬性)', () => {
    cy.get('@GMA').find('.mm a').eq(1).click();
    cy.wait(1500);
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMA/App.asp');

    cy.get('#main-top').find('.d-flex').should('be.visible'); //金曲APP//
    cy.get('#main-top').find('.row').should('be.visible'); //app的功能簡介//

    cy.get('.row.px-1.mx-1.px-md-5').find('.row a').its('length')
      .should('eq', 2); //ios & Android 兩種平台// 

    cy.get('.row.px-1.mx-1.px-md-5').find('.row a')
      .should('have.attr', 'target', '_blank', 'href');
    cy.get('.row.px-1.mx-1.px-md-5').find('.row a img')
      .should('have.attr', 'src');
  });
};

export const GMA_LiveTests = () => {
  it('should into page display link with pop-up window \n(預期進入頁面後呈現具有彈出視窗的連結)', () => {
    cy.get('@GMA').find('.mm a').eq(2).click();
    cy.wait(1500);

    cy.get('#main-top').find('.tip-title').should('be.visible');
    //title//
    cy.get('.tip-interpret').find('.col-md-4.pb-3.pb-md-1')
      .its('length').should('eq', 6);

    for(let i = 1; i <= 6; i++) {
      cy.get('.tip-interpret').find(`.order-md-${i} > a`)
        .should('have.attr', 'target', '_blank', 'href'); //連結//
      cy.get('.tip-interpret').find(`.order-md-${i} > a > img`)
        .should('have.attr', 'src'); //照片//
      cy.wait(1000);
    }
  });
};

export const GMA_ShortlistedListTests = () => {
  it('should into page later, display all shortlists\n(預期進入頁面後會呈現所有入圍名單)', () => {
    cy.get('@GMA').find('.nominee').click();
    cy.wait(1500);

    cy.get('#main-top').find('.tip-line').should('be.visible'); //title//

    cy.get('.px-0.px-md-5 .award-category').its('length')
      .should('eq', 8); //八大入圍名單//

    for(let i = 0; i < 8; i++) {
      cy.get('.list-group-item').eq(`${i}`)
        .scrollIntoView({ duration: 4000 });
    } //所有入圍名單//
  });
};

export const GMA_PastWinnersListTests = () => {
  it('should into page later, click on the GMA for each session, and the list of winners will appear below\n(預期進入頁面後,點擊各屆金曲獎 以下出現得獎名單)', () => {
    cy.get('@GMA').get('.col-md').eq(1)
      .find('p a').last().click();
    cy.wait(1500);
    
    cy.get('#main-top').find('.tip-line').should('be.visible'); //title//
    
    cy.get('#tip-content .justify-content-around a').its('length')
      .should('eq', 31);
    cy.get('#tip-content .justify-content-around a')
      .should('have.attr', 'href'); 
    
    cy.get('#tip-content').find('.list-group > .active_T')
      .should('be.visible'); //得獎名單//
    
    for(let i = 0; i < 31; i++) {
      cy.get('#tip-content').find('.justify-content-around > a').eq(`${i}`).click();
      cy.wait(500);
      cy.get('.br').last().scrollIntoView({ duration: 3000 });
    }
  });
};

export const GMA_AudioAndVideoTests = () => {
  it('should into page later, display video clips of the award ceremony\n(預期進入頁面後,呈現頒獎典禮的影音片段)', () => {
    cy.get('@GMA').get('.col-md').eq(2)
      .find('.mm').eq(0).click();
    cy.wait(1500);
    
    cy.get('#main-top').find('.tip-line').should('be.visible'); //title//

    cy.get('#main-top').find('.row .col-md-6')
      .its('length').should('eq', 15); //15則影音//

    for(let i = 0; i < 15; i++) {
      cy.get('#main-top').find('.row .col-md-6 a').eq(`${i}`)
        .should('have.attr', 'href');
      cy.get('#main-top').find('.row .col-md-6 > a img').eq(`${i}`)
        .should('have.attr', 'src');
        
      cy.get('#main-top').find('.row .col-md-6 a').eq(`${i}`)
        .click();
      cy.wait(3000);

      cy.get('.fancybox-wrap').find('div[title="Close"]')
        .should('be.visible').click();
      cy.wait(500);
    }
  });
};

export const GMA_TrailerTests = () => {
  it('should into page later, display Video and audio clips of the trailer\n(預期進入頁面後,呈現預告花絮的影音片段)', () => {
    cy.get('@GMA').get('.col-md').eq(2)
      .find('.mm a').eq(1).click();
    cy.wait(1500);
    
    cy.get('#main-top').find('.tip-line').should('be.visible'); //title//
    
    cy.get('#main-top').find('.row .col-md-6')
      .its('length').should('eq', 37); //37則影音//
    
    for(let i = 0; i < 37; i++) {
      cy.get('#main-top').find('.row .col-md-6 a').eq(`${i}`)
        .should('have.attr', 'href');
      cy.get('#main-top').find('.row .col-md-6 > a img').eq(`${i}`)
        .should('have.attr', 'src');
        
      cy.get('#main-top').find('.row .col-md-6 a').eq(`${i}`)
        .click();
      cy.wait(3000);
    
      cy.get('.fancybox-wrap').find('div[title="Close"]')
        .should('be.visible').click();
      cy.wait(500);
    }
  });
};

export const GMA_HeatTests = () => {
  it('should into page later, display Video clips of the finalists special\n(預期進入頁面後,呈現入圍者特輯的影音片段)', () => {
    cy.get('@GMA').get('.col-md').eq(2)
      .find('.mm a').eq(2).click();
    cy.wait(1500);
    
    cy.get('#main-top').find('.tip-line').should('be.visible'); //title//
    
    cy.get('#main-top').find('.row .col-md-6')
      .its('length').should('eq', 46); //46則影音//
    
    for(let i = 0; i < 46; i++) {
      cy.get('#main-top').find('.row .col-md-6 a').eq(`${i}`)
        .should('have.attr', 'href');
      cy.get('#main-top').find('.row .col-md-6 > a img').eq(`${i}`)
        .should('have.attr', 'src');
        
      cy.get('#main-top').find('.row .col-md-6 a').eq(`${i}`)
        .click();
      cy.wait(3000);
    
      cy.get('.fancybox-wrap').find('div[title="Close"]')
        .should('be.visible').click();
      cy.wait(500);
    }
  });
};

export const GMA_CeremonyLocationTests = () => {
  it('should into page later, display information about the place\n(預期進入頁面後,呈現地點的相關資訊)', () => {
    cy.get('@GMA').get('.col-md').eq(3)
      .find('a').click();
    cy.wait(1500);

    cy.get('#main-top').find('.tip-line').should('be.visible'); //title//

    cy.get('.row.justify-content-center > .col-md-4.mt-md-1 img')
      .should('have.attr', 'src'); //左邊圖案//
      
    const rightClass = [
      '.bold.text-gold',
      '.text-light',
      'a',
      '#map-container',
    ];
    rightClass.forEach(item => {
      cy.get('.row.justify-content-center > .col-md-8').first()
        .find(`${item}`).should('be.visible'); //地點資訊//
    });
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
    // tests.GMF_CarouselTests();
    // tests.GMF_IntroductionTests();
    // tests.GMF_SeriesOfActivitiesTests();
    // tests.GMF_SuccessiveLinksTests();
    // tests.GMF_UnitTests();
    //這五項已獨立驗証過//
  });
};

export const GMF_UniversityExchangeTests = () => {
  it('should into page display registration method, teacher introduction, course tutors, results announcements, highlights photos\n(預期進入頁面呈現: 報名辦法、師資介紹、課程導師、成果發表、花絮照片)', () => {
    cy.get('@GMF').get('.mm2 > a').eq(0).click();
    cy.wait(1500);
    
    cy.get('.tip-line .tip-black').should('be.visible'); //title//
    cy.get('.row .tip-interpret h5').should('be.visible'); //描述//
    
    cy.get('#myTab a').its('length').should('eq', 5); //五筆選單//
    cy.get('#myTab a').should('have.attr', 'href');
    
    cy.get('#myTab a').eq(0).click();
    cy.wait(1500);

    const textClass = [
      '.color',
      '.line-behind.text-gold',
      '.mt-5',
    ];
    textClass.forEach(item => {
      cy.get('.ABC.text-gold.pl-lg-5.pr-lg-3').find(`${item}`)
        .should('be.visible');
    });
    for(let i = 0; i < 10; i++) {
      cy.get('.ABC.text-gold.pl-lg-5.pr-lg-3').find('.mt-5 > h5')
        .eq(`${i}`).scrollIntoView().should('be.visible');
      cy.wait(1000);
    }

    cy.get('#myTab a').eq(1).scrollIntoView().click();
    cy.wait(1500);

    cy.get('#nav-2').find('.row .col-6.col-lg-4').its('length')
      .should('eq', 9);  //9位導師//  
    
    for(let i = 0; i < 9; i++) {
      cy.get('.col-6.col-lg-4 a').eq(`${i}`)
        .should('have.attr', 'href');
      cy.get('.col-6.col-lg-4 a img').eq(`${i}`)
        .should('have.attr', 'src');
      cy.get('.col-6.col-lg-4 a .photo_overlay_text').eq(`${i}`)
        .should('be.visible'); //姓名//
      cy.get('.col-6.col-lg-4 a .photo_overlay_text .middle1').eq(`${i}`)
        .should('be.visible'); //指導部分//
      cy.wait(1000);
    }

    cy.get('#myTab a').eq(2).scrollIntoView().click();
    cy.wait(1500);

    cy.get('.fancybox-skin .fancybox-outer')
      .should('be.visible'); //導師簡介//
    cy.get('.fancybox-skin a[title="Close"]')
      .should('be.visible').click(); //右上角的關閉鈕//
    cy.wait(500);

    cy.get('#myTab a').eq(3).scrollIntoView().click();
    cy.wait(1500);

    cy.get('.line-behind.text-gold').find('.line-behind-title')
      .should('be.visible'); //title//
    cy.get('.line-behind.text-gold').find('.line-behind-tail')
      .should('be.visible'); //title//

    cy.get('.ABC.text-gold.pl-lg-5.pr-lg-3').last().find('.mt-5')
      .its('length').should('eq', 5); //5組獎項//

    for(let i = 0; i < 5; i++) {
      cy.get('.ABC.text-gold.pl-lg-5.pr-lg-3').last().find('.mt-5')
        .eq(`${i}`).scrollIntoView().should('be.visible');
      cy.wait(1000);
    }

    cy.get('#myTab a').eq(4).scrollIntoView().click();
    cy.wait(1500);

    cy.get('#PhotoWall').find('.mb-3').its('length')
      .should('eq', 12); //共12張照片//

    cy.get('#PhotoWall').find('.mb-3').eq(0).click();
    cy.wait(1000); //點擊第一張照片//

    cy.get('.fancybox-skin .fancybox-outer').find('a[title="Previous"]')
      .should('be.visible').click(); //上一張//
    cy.wait(1000);

    cy.get('.fancybox-skin .fancybox-outer').find('a[title="Next"]')
      .should('be.visible').click(); //下一張//
    cy.wait(1000);

    cy.get('.fancybox-skin .child').should('be.visible'); //底部文字//
    cy.get('.fancybox-skin a[title="Close"]') //右上角的關閉鈕//
      .should('be.visible').click();
  });
};

export const GMF_InternationalForumTests = () => {
  it('should display the content includes sessions, theme schedule and speaker information\n(預期呈現內容包括場次、主題時程表及演講者資訊)', () => {
    cy.get('@GMF').get('.mm2 > a').eq(1).click();
    cy.wait(1500);

    cy.get('.tip-line .tip-black').should('be.visible'); //title//
    cy.get('.row .tip-interpret h5').should('be.visible'); //描述//
    cy.get('.row .tip-interpret .middle3.text-light65 li')
      .its('length').should('eq', 3); //清單有三筆//
    
    cy.get('#myTab a').its('length').should('eq', 2); //兩筆選單//
    cy.get('#myTab a').should('have.attr', 'href');

    cy.get('#myTab a').last().click();
    cy.wait(1000);
    cy.get('#myTab a').last().should('have.class', 'show');
    cy.get('#myTab a').first().should('not.have.class', 'show');

    cy.get('#myTab a').first().click();
    cy.wait(1000);
    cy.get('#myTab a').first().should('have.class', 'show');
    cy.get('#myTab a').last().should('not.have.class', 'show');
    
    cy.get('#nav-tabContent thead td').its('length')
      .should('eq', 4); //表單標題//
      
    const dataClass = [
      '.c-1',
      '.c-2',
      '.c-3',
    ];
    dataClass.forEach(item => [
      cy.get(`#nav-tabContent tbody ${item}`)
        .should('be.visible') //共有三天//
    ]);
      
    cy.get('#nav-tabContent tbody tr').its('length')
      .should('eq', 10); //共10個場次//

    cy.get('#nav-tabContent tbody tr a').eq(1).click();
    cy.wait(1500);

    cy.get('.row.pt-5').first().find('img').should('be.visible');

    const textDom = [
      'h1', //姓名//
      'h5', //職稱//
      'hr', //簡介一//
      'div', //簡介二//
    ];
    textDom.forEach(item => {
      cy.get('.row.pt-5').first().find('.p-3.px-md-5')
        .find(`${item}`).should('be.visible');
    }); 

    cy.get('.text-right.prev_next a').its('length')
      .should('eq', 3); //上頁，目錄，下頁//
    cy.get('.text-right.prev_next a')
      .should('have.attr', 'href');
    
    cy.get('.text-right.prev_next a').eq(2).click();
    cy.wait(2000);
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMF/Conference.asp?P=2&PID=3');
    //主題3//
    
    cy.get('.text-right.prev_next a').eq(0).click();
    cy.wait(2000);
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMF/Conference.asp?P=2&PID=2');
    //主題2//

    cy.get('.text-right.prev_next a').eq(1).click();
    cy.wait(2000);
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMF/Conference.asp?P=1');
    //回場次時間清單//
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
