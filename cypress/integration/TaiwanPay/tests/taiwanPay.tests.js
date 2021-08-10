export const GoToTaiwanPayTests = () => {
  it("should go to TaiwanPay index\n(前往台灣Pay)", () => {
    cy.visit("https://www.taiwanpay.com.tw/content/info/index.aspx");
    cy.get("#testlink").should("be.visible");
  });
};

export const HeaderTests = () => {
  it("should As the width of the window is different, the display of the screen will also change\n(隨著視窗寬度不同 畫面呈現也會有改變)", () => {
    cy.viewport(500, 500);
    cy.wait(2000);
    cy.get(".globalnav > a").should("have.attr", "href");
    cy.get("#menu1").should("be.visible");
    cy.viewport(800, 500);
    cy.wait(2000);
    cy.get(".toolmenu li").its("length").should("eq", 6);
    cy.viewport(1000, 500);
    cy.wait(2000);
    cy.get(".mainNav li").its("length").should("eq", 14);
  });
};

export const AdvertiseTests = () => {
  it("should every three seconds change different advertise\n(每三秒更換不同的廣告) ", () => {
    cy.get(".intro").scrollIntoView();
    const advImgIdList = [
      "#ContentPlaceHolder1_panelImage1",
      "#ContentPlaceHolder1_panelImage2",
      "#ContentPlaceHolder1_panelImage4",
    ];
    advImgIdList.forEach((item) => {
      cy.get(`${item}`).should("be.visible");
      cy.wait(2500);
    });
    cy.get(".slick-dots").first().find("button").its("length").should("eq", 3);
    cy.get(".slick-dots").first().find("button").eq(2).click();
    cy.wait(500);
    cy.get("#ContentPlaceHolder1_panelImage4").should("be.visible");
  });
};

export const CarouselTests = () => {
  it("should dispaly Carousel\n(輪播器)", () => {
    cy.get(".in_news").scrollIntoView();
    cy.get(".in_news h2 a").should("have.attr", "href");
    cy.get("#activity .col-sm-6 a").its("length").should("eq", 18);
    const turnPageList = [".slick-prev.slick-arrow", ".slick-next.slick-arrow"];
    turnPageList.forEach((item) => {
      cy.get(`${item}`).should("be.visible");
    });
    cy.get(".slick-dots").last().find("li").its("length").should("eq", 10);
  });
};

export const VideoTests = () => {
  it("should display video\n(呈現影片)", () => {
    cy.get(".video_slider").scrollIntoView();
    cy.get(".video h2 a").should("have.attr", "href");
    cy.get(".slick-track").last().find("a").its("length").should("eq", 2);
  });
};

export const WhatisTaiwanPayTests = () => {
  it("should introduce what is taiwan pay\n(介紹什麼是台灣pay)", () => {
    cy.get(".about").scrollIntoView();
    cy.get(".about p").its("length").should("eq", 5);
    cy.get(".about .item li").its("length").should("eq", 4);
    for (let i = 1; i <= 4; i++) {
      cy.get(`.about .item .box_0${i}`).should("be.visible");
    }
    cy.get(".about .item li").find("a").should("have.attr", "href");
  });
};

export const FooterTests = () => {
  it("should display footer info\n(呈現底部資訊)", () => {
    cy.get("#footer").scrollIntoView();
    cy.get('#footer .footer_link a').its('length').should('eq', 4);
    cy.get('#footer .footer_link a').should('have.attr', 'href');
    cy.get('#footer ul > li').its('length').should('eq', 12);
    cy.get('#gotop').should('be.visible').click();
    cy.wait(500);
  });
};

export const ContentUsTests = () => {
  it("should", () => {

  });
};

export const LittleHelperTests = () => {
  it("should click to trigger little helper\n(點擊觸發小幫手)", () => {
    cy.get('.open_btn img').should('have.attr', 'src');
    const btnIdList = [
      '#open',
      '#open_facebook',
      '#open_line',
    ];
    btnIdList.forEach(item => {
      cy.get(`${item}`).should('be.visible').should('have.attr', 'href');
    });
    cy.get('.open_btn').click();
    cy.wait(500);
    cy.get('#chatbot.on').should('be.visible');
    const helpFormList = [
      '.chatbot_head',
      '.box_inner',
      '.box_bottom',
    ];
    helpFormList.forEach(item => {
      cy.get(`#chatbot ${item}`).should('be.visible');
      cy.get('#chatbot > div > div').eq(0).find('img').should('have.attr', 'src');
      cy.get('#chatbot > div > div .chatbot_close').should('be.visible');
      cy.get('#chatbot > div > div').eq(1).get('.box_content > div')
        .its('length').should('eq', 2);
      cy.wait(1000);
      cy.get(`#chatbot #input`).should('be.visible');
      cy.get(`#chatbot #send`).should('be.visible');
      cy.get('#close').should('be.visible');
    });
  });
};

export const DefineElementAndClickDropDown = () => {
  beforeEach(() => {
    cy.get("#menu1").click({ force: true });
    cy.wait(1000);
    cy.get('.container.hb_content').as('menu');
  });
};

export const IntroductionTests = () => {
  it("should link to introduction page\n(連結至台灣Pay介紹頁面)", () => {
    cy.get('@menu').find('.hb_list > li > a').eq(0).click();
    cy.wait(3000);
    cy.get('.container').eq(0).should('be.visible');
    cy.get('.title.title_b').scrollIntoView().should('be.visible');
    cy.get('.title.title_b h2').scrollIntoView().should('be.visible');
    cy.wait(1000);
    cy.get('.title.title_b p').its('length').should('eq', 5);
    cy.wait(1000);
    cy.get('.item.row').scrollIntoView().should('be.visible');
    cy.get('.item.row li').its('length').should('eq', 4);
    cy.wait(1000);
    cy.get('.item.row li a').should('have.attr', 'href');
    cy.wait(1000);
  });
};
export const HowToApplyTests = () => {
  it("should link to how to apply page\n(連結至如何申請頁面)", () => {
    cy.get('@menu').find('.hb_list > li > a').eq(1).click();
    cy.wait(3000);
    cy.get('.section-navtab').should('be.visible');
    cy.get('.pane-bank-logo').should('be.visible');
    cy.get('.pane-bank-logo h4').its('length').should('eq', 3);
    cy.get('.pane-bank-logo .bankApp').its('length').should('eq', 30);
    cy.get('.pane-bank-logo .bankApp a').should('have.attr', 'href');
    for (let i = 0; i < 7; i++) {
      cy.scrollTo(0, 400 * i);
      cy.wait(1000);
    }
  });
};
export const LatestNewsTests = () => {
  it("should link to latest news page\n(連結至最新消息頁面)", () => {
    cy.get('@menu').find('.hb_list')
      .eq(2).find('li').last().find('a').eq(0).click();
    cy.wait(1000);
    cy.get('.nav.nav-tabs li').its('length').should('eq', 2);
    cy.get('.nav.nav-tabs li a').should('have.attr', 'href');
    cy.get('#activity a').its('length').should('eq', 205);
    cy.get('.nav.nav-tabs li').last().find('a').click();
    cy.wait(1000);
    cy.get('#events a').its('length').should('eq', 30);
    cy.get('#activity a').should('have.attr', 'href');

    cy.get('@menu').find('.hb_list')
      .eq(2).find('li').last().find('a').eq(2).click({ force: true });
    cy.wait(4000);
    cy.get('.services').should('be.visible');
    // 第一區塊
    cy.get('.wrap__kv img').should('have.attr', 'src');
    cy.get('.wrap__kv a').should('have.attr', 'target', '_blank', 'https://page.line.me/439jjrex?openQrModal=true');
    // 第二區塊
    cy.get('.wrap__title').eq(0).scrollIntoView();
    cy.wait(1000);
    cy.get('.wrap__title').eq(0).find('img').should('have.attr', 'src');
    cy.get('.swiper-wrapper').first().find('.swiper-slide.promotion__slide')
      .its('length').should('eq', 3);
    cy.get('.slide__next.promotion__next').should('be.visible');
    cy.get('.slide__prev.promotion__prev').should('be.visible');
    // 第三區塊
    cy.get('.wrap__title').eq(1).scrollIntoView();
    cy.wait(1000);
    cy.get('.wrap__title').eq(1).find('img').should('have.attr', 'src');
    cy.get('.swiper-wrapper').eq(1).find('img').its('length')
      .should('eq', 7);
    cy.get('.swiper-wrapper').eq(1).find('img').should('have.attr', 'src');
    cy.get('.slide__prev.binding__prev').should('be.visible');
    cy.get('.slide__next.binding__next').should('be.visible');
    // 第四區塊
    cy.get('.wrap__title').eq(2).scrollIntoView();
    cy.wait(1000);
    cy.get('.wrap__title').eq(2).find('img').should('have.attr', 'src');
    cy.get('.wrap__slide.financial img').its('length').should('eq', 9);
    cy.get('.wrap__slide.financial img').should('have.attr', 'src');
    // 第五區塊
    cy.get('.wrap__title').eq(3).scrollIntoView();
    cy.wait(1000);
    cy.get('.wrap__title').eq(3).find('img').should('have.attr', 'src');
    cy.get('.qa__tab li').its('length').should('eq', 9);
    cy.get('.qa__tab li a').should('have.attr', 'href');
    cy.get('.tab__q').eq(0).should('be.visible');
    cy.get('.qa__tab li a').eq(0).click();
    cy.get('.tab__q.tab__q--active').eq(0).should('be.visible');
    // 第六區塊
    cy.get('.services__footer').scrollIntoView().should('be.visible');
    cy.get('.services__footer img').should('have.attr', 'src');
  });
};
export const WhereToUseTests = () => {
  it("should", () => { });
};
export const MerchantZoneTests = () => {
  it("should", () => { 
    cy.get('@menu').find('.hb_list').last().find('a').eq(0);
    cy.wait(2000);
  });
};
export const EpidemicPreventionZoneTests = () => {
  it("should", () => { 
    cy.get('@menu').find('.hb_list').last().find('a').eq(1);
    cy.wait(2000);
  });
};
export const VideoZoneTests = () => {
  it("should", () => { 
    cy.get('@menu').find('.hb_list').last().find('a').eq(2);
    cy.wait(2000);
    
  });
};
export const CommonProblemTests = () => {
  it("should", () => { 
    cy.get('@menu').find('.hb_list').last().find('a').eq(3);
    cy.wait(2000);
    
  });
};
export const FriendlyServiceTests = () => {
  it("should", () => { 
    cy.get('@menu').find('.hb_list').last().find('a').eq(4);
    cy.wait(2000);
    
  });
};

export const WebsiteUseStatementTests = () => {
  it("should", () => { 
    cy.get('@menu').find('.hb_list').last().find('a').eq(5);
    cy.wait(2000);

  });
};
export const PrivacyPolicyTests = () => {
  it("should", () => { 
    cy.get('@menu').find('.hb_list > li > a').last();
    cy.wait(2000);
  });
};
export const MediaCommunityTests = () => {
  it("should", () => { });
};
