// 前往鼎泰豐
export const GoToDinTaiFungTests = () => {
  it("should go to Din-Tai-Fang index\n(前往鼎泰豐首頁)", () => {
    cy.visit("https://www.dintaifung.com.tw/");
    cy.wait(4000);
    cy.get("#menubox_box").should("be.visible");
  });
};

// 首頁導覽
export const ChangeLanguageTests = () => {
  it("should change language\n(改變語系)", () => {
    // 應該要寫迴圈
    const LANGUAGE_LIST = ["繁體中文", "ENGLISH", "日本語", "한국어"];
    for (let i = 0; i <= LANGUAGE_LIST.length - 1; i++) {
      cy.get("#language-button")
        .click({ force: true })
        .get("#language-menu")
        .get(`#ui-id-${i + 1}`)
        .click({ force: true });
      // 切換語系
      cy.wait(700);

      cy.get("#language-button")
        .click({ force: true })
        .get("#language-menu")
        .get(`#ui-id-${i + 1}`)
        .contains(`${LANGUAGE_LIST[i]}`)
        .should("be.visible");
      cy.wait(700);
      // 驗證語系
    }
    cy.get("#language-button")
      .click({ force: true })
      .get("#language-menu")
      .get("#ui-id-1")
      .click({ force: true });
    cy.wait(700);
    // 切回繁中
  });
};

export const OnSitToNumQueryTests = () => {
  it("should make sure on-sit link\n(確認訂位連結)", () => {
    cy.get(".number_s.fadeInUp.animated15")
      .should("have.attr", "target", "_blank")
      .should("have.attr", "href");
  });
};

export const CarouselTests = () => {
  it("should click dots change img\n(輪播器)", () => {
    cy.get("#believe").scrollIntoView().should("be.visible");
    for (let i = 0; i < 4; i++) {
      cy.get(`#believe a[data-slide-index="${i}"]`).click({ force: true });
      cy.wait(1000);
      cy.get(".memo_block.fadeInUp.animated15 div").should(
        "have.class",
        `memo_box${i + 1}`
      );
    }
  });
};
export const TopTenTests = () => {
  it("should dispaly top ten \n(十大人氣料理)", () => {
    cy.get("#home_food").scrollIntoView().should("be.visible");
    cy.get(".swiper-wrapper") //會滾動的圖片//
      .first()
      .find("div")
      .its("length").should("eq", 32);
  });
};

export const NewsTests = () => {
  it("should display news\n(最新消息)", () => {
    cy.get("#home_news").scrollIntoView().should("be.visible");
    cy.get("#home_news").as("news");
    const newList = ["downbg", "title_img.active", "newsblock.clear", "flower"];
    newList.forEach((news) => {
      cy.get("@news").find(`.${news}`).should("be.visible");
    });
  });
};

export const StoresTests = () => {
  it("should display stroe\n(門市據點)", () => {
    cy.get("#globo").scrollIntoView().should("be.visible");
    cy.get("#globo").as("globo");
    const storeList = ["title_img.active", "mainmemo.active", "map.active"];
    storeList.forEach((store) => {
      cy.get("@globo").find(`.${store}`).should("be.visible");
    });
    cy.get("#album_show").scrollIntoView().should("be.visible");
    cy.get("#album").find(".show_big").should("be.visible");
    cy.get("#album").find(".thumb_block").should("be.visible");

    cy.get("#people").scrollIntoView().should("be.visible");
    cy.get("#people").find("figure").its("length").should("eq", 5);
  });
};

export const MobileAppTests = () => {
  it("should download mobile app\n(智能手機App下載)", () => {
    cy.get("footer").scrollIntoView();
    cy.get("footer").find(".custom.a_link.download.app_show").click();
    cy.wait(1000);
    cy.get("#app").find(".title > .t01").should("be.visible");
    cy.get("#app").find(".title > .t02").should("be.visible");
    cy.get("#app > .button").find("a").first().should("have.attr", "href");
    cy.get("#app > .button a").should("have.attr", "href");
    cy.get("#app").get('a[title="Close"]').click();
    cy.wait(1000);
    cy.get("#app").get('a[title="Close"]').should("not.be.exist");
  });
};
export const BackToTopTests = () => {
  it("should back to top\n(回到頂端))", () => {
    cy.get("footer").scrollIntoView();
    cy.get("#gotop").click();
    cy.wait(1000);
    cy.get("#nav_btn").should("be.visible"); //三條線//
  });
};

// 主要選單

export const ClickMenu = () => {
  beforeEach(() => {
    cy.get("#nav_btn").click({ force: true });
    cy.wait(1000);
  });
};

export const MainMenuTests = () => {
  it("should click display main menu\n(主要選單))", () => {
    cy.get("#menu").should("be.visible");
  });
};

export const AboutDinTaiFungTests = () => {
  it("should dispaly Din-Tai-Fung history\n(關於鼎泰豐))", () => {
    cy.get("#menu").find('a[href="about.php"]').click({ force: true });
    cy.wait(4000);
    cy.get(".triggerblk").find("li").its("length").should("eq", 4);
    cy.get('li[togo="sec1"]').click({ force: true }); //緣起//
    cy.wait(1000);
    const baseClass = ".editblk.sec1.fadeInUp.animated15";
    cy.get(`${baseClass}`).find("img").its("length").should("eq", 3);
    cy.get(`${baseClass} img`).should("have.attr", "src");
    cy.get('li[togo="sec2"]').click({ force: true }); //信念//
    cy.wait(1000);
    for (let i = 0; i < 3; i++) {
      cy.get(".editblk.sec2.fadeInUp.animated15 .editblk2 .img")
        .eq(i) // element query
        .should("have.attr", "style")
        .should(
          "eq", // equal
          `background-image:url('https://www.dintaifung.com.tw/archive/images/about/c${i + 1
          }.png')`
        );
    }
    const img4 =
      "https://www.dintaifung.com.tw/archive/images/about/c4.png.png";
    cy.get(".editblk.sec2.fadeInUp.animated15 .editblk2 .img")
      .eq(3)
      .should("have.attr", "style")
      .should("eq", `background-image:url('${img4}')`);
    cy.get('li[togo="memoblk"]').click({ force: true }); //記事//
    cy.wait(1000);
    cy.get(
      ".yearblk > .swiper-container.swiper-container-horizontal > .swiper-wrapper > .swiper-slide"
    )
      .find(".year")
      .its("length")
      .should("eq", 26);
    cy.get('li[togo="videoblk"]').click({ force: true }); //影片//
    cy.wait(4000);

    cy.get(
      ".bg > .videopick > .thumb_contain.swiper-container-horizontal.swiper-container-autoheight > .swiper-wrapper"
    )
      .find("img")
      .its("length")
      .should("eq", 6);
    cy.get(".prev.swiper-button-disabled").last().should("be.visible");
    cy.get(".next").last().should("be.visible");
  });
};

export const LatestNewsTests = () => {
  it("should dispaly latest news \n(最新消息))", () => {
    cy.get("#menu").find('a[href="news.php"]').click();
    cy.wait(4000);
    const selectBox = ["year.select_box", "type.select_box"];
    selectBox.forEach((item) => {
      cy.get("#news")
        .find(`.search.fadeInUp.animated15 > #form1 > .${item}`)
        .should("be.visible");
    });
    cy.get(".news_list.fadeInUp.animated15 > .news_box > .imgs > span")
      .find("img")
      .its("length")
      .should("eq", 4);
    cy.get(".pager").scrollIntoView();
    const pageList = [".first.p2", ".prev,p1", ".num", ".next.p1", ".end.p2"];
    pageList.forEach((page) => {
      cy.get(`${page}`).should("be.visible");
    });
  });
};
export const WorldwideLocationTests = () => {
  it("should dispaly world wide location \n(門市據點))", () => {
    cy.get("#menu").find('a[href="store.php"]').click();
    cy.wait(4000);
    cy.get("#globo").should("be.visible");
    cy.get('.mainmemo.active > .new__btns > a[href="store.php"]').click();
    cy.wait(4000);
    const storeInfo = [".imgs", ".info", ".album_box.active", ".botton.active"];
    storeInfo.forEach((store) => {
      cy.get(`#album_list .store_line.store_line_198.clear ${store}`).should(
        "be.visible"
      );
    });
    // 門市基本資訊
    cy.get("#album_list").find(".imgs").its("length").should("eq", 12);
    // 國內分店有12間
    cy.get('.mainmemo.active > .new__btns > a[href="store_world.php"]').click();
    cy.wait(4000);
    cy.get(
      ".map.active > .world > .type > .world-container.swiper-container-horizontal > .swiper-wrapper"
    )
      .find(".swiper-slide")
      .its("length")
      .should("eq", 12);
    // 在全球海外12個國家有門市
  });
};

export const CuisineTests = () => {
  it("should dispaly cuisine \n(絕頂美味))", () => {
    cy.get("#menu").find('a[href="food.php"]').click({ force: true });
    cy.wait(4000);
    const foodLayOut = [
      ".title_img.active",
      ".downbg",
      ".food_slider.fadeInUp.animated15",
    ];
    foodLayOut.forEach((item) => {
      cy.get(`#food ${item}`).should("be.visible");
    });
    cy.get(".title_img.active img").should("have.attr", "src");
    const foodInfo = [
      ".swiper-container.swiper-container-horizontal",
      ".button_box",
      ".text",
    ];
    const foodSinder = ".food_slider.fadeInUp.animated15";
    foodInfo.forEach((item) => {
      cy.get(`#food ${foodSinder} ${item}`).should("be.visible");
    });
    cy.get(`${foodSinder}`).find("img").its("length").should("eq", 23);
    const pageClass = [".swiper-button-next", ".swiper-button-prev", ".page"];
    pageClass.forEach((item) => {
      cy.get(`#food ${foodSinder} .button_box ${item}`).should("be.visible");
    });
    const state = [".now", ".all"];
    state.forEach((item) => {
      cy.get(`#food ${foodSinder} .button_box .page ${item}`).should(
        "be.visible"
      );
    });
    cy.get("#food .text").find("a").its("length").should("eq", 13);
    cy.get('#food .text a[data-id="2"]').click({ force: true }); //選擇最經典的小籠包//
    cy.wait(1000);
    cy.get("#food_show").should("be.visible");
    const introduce = [".main_img", ".title_img.active", ".food_memo"];
    introduce.forEach((item) => {
      cy.get(`#food_show ${item}`).should("be.visible");
    });
    const mainImg = [
      //'.title_img.active', 有上下兩個 另外驗証//
      ".img_",
      "a",
    ];
    mainImg.forEach((item) => {
      cy.get(`#food_show .main_img ${item}`).should("be.visible");
    });
    cy.get("#food_show .main_img")
      .find(".title_img.active")
      .first()
      .should("be.visible");
    cy.get("#food_show .main_img .title_img.active")
      .find("img")
      .should("have.attr", "src");
    cy.get("#food_show .main_img .img_").find("img").should("have.attr", "src");
    cy.get("#food_show .main_img").find("a").should("have.attr", "href");
    cy.get("#food_show").find(".title_img.active").last().should("be.visible");
    cy.get("#food_show .bx_food_list").find("li").its("length").should("eq", 6); //小籠包有6種選項//
    cy.get("#food_show .bx-controls-direction")
      .find("a")
      .its("length")
      .should("eq", 2); //上一頁 下一頁//

    const foodMemo = [".left", ".right.buying"];
    foodMemo.forEach((item) => {
      cy.get(`.food_memo ${item}`).should("be.visible");
    });
    const leftType = [".type", ".word", ".icon"];
    leftType.forEach((item) => {
      cy.get(`.food_memo .left ${item}`).should("be.visible");
    });
    cy.get(".food_memo .left .icon").find("img").its("length").should("eq", 2);
    cy.get(".food_memo .left .icon").find("img").should("have.attr", "src");
    const rightBuying = [".mid", ".album"];
    rightBuying.forEach((item) => {
      cy.get(`.food_memo .right.buying ${item}`).should("be.visible");
    });
    const midClass = [".memo", ".linkbox"];
    midClass.forEach((item) => {
      cy.get(`.food_memo .right.buying .mid ${item}`).should("be.visible");
    });
    cy.get(".right.buying .linkbox a").its("length").should("eq", 2);
    cy.get(".right.buying .linkbox").find("a").should("have.attr", "href");
    cy.get(".right.buying .album img").its("length").should("eq", 2);
    cy.get(".right.buying .album").find("img").should("have.attr", "src");
    cy.get(`#food_show .main_img a`).click({ force: true });
    cy.wait(1000);
    cy.get("#food").should("be.visible");
  });
};

export const PeaceOfMindGuaranteeTests = () => {
  it("should dispaly peace of mind guarantee \n(安心宣言)", () => {
    cy.get("#menu").find('a[href="care.php"]').click();
    cy.wait(4000);
    const peaceMindList = [
      ".title_img.active",
      ".sloganblk.fadeInUp.animated15",
      ".videoblk.fadeInUp.animated15",
      ".navblk",
      ".sec1",
      ".alyblkbg",
      ".sldieblk",
      // ".reportblk",
      // ".sec2",
      ".supplybg",
      // ".sec3",
    ];
    peaceMindList.forEach((peace) => {
      cy.get(`#care ${peace}`).should("be.visible");
    });
    cy.get(".title_img.active > img").should("have.attr", "src");
    cy.wait(4000);

    cy.get(".sloganblk.fadeInUp.animated15 > .ytitle").should("be.visible");
    cy.wait(4000);
    // const videoList = [".middle", ".video.mb_YTPlayer.isMuted"];
    cy.get(".videoblk.fadeInUp.animated15 div")
      .first()
      .should("have.class", "middle");
    cy.wait(4000);

    // cy.get(".videoblk.fadeInUp.animated15 > div")
    //   .eq(1)
    //   .should("have.attr", "class", "video");
    // cy.wait(4000);

    cy.get(".videoblk.fadeInUp.animated15 > div")
      .eq(1)
      .get(".video")
      .should("be.visible");

    cy.get(".navblk > .triggerblk").should("be.visible");
    cy.get(".navblk > .triggerblk").scrollIntoView();
    cy.get(".sec1 > .titlep").should("be.visible");
    cy.get(".alyblkbg > .alyblk > .alylist")
      .find(".item")
      .its("length")
      .should("eq", 4);
    cy.get(".sldieblk").scrollIntoView();
    cy.get(".sldieblk img").should("have.attr", "src");
    cy.get(".sldieblk p").should("be.visible");
    cy.get(".sldieblk .btnblk > div").find("a").its("length").should("eq", 4);
    cy.get(".mb2").scrollIntoView().should("be.visible");
    cy.get(".listtitle").first().should("be.visible");
    cy.get(".listtitle").last().click({ force: true });
    cy.wait(4000);
    cy.get(".tableblk tr").last().find("td").its("length").should("eq", 3);
    cy.get(".tableblk tbody").last().find("tr").its("length").should("eq", 7);
    cy.get(".dataTables_paginate.paging_full_numbers_no_ellipses").as("page");
    const turnPageList = [
      ".paginate_button.first.disabled",
      ".paginate_button.previous.disabled",
      ".paginate_button",
      ".paginate_button.next",
      ".paginate_button.last",
    ];
    turnPageList.forEach((page) => {
      cy.get("@page").find(`${page}`).should("be.visible");
    });
    cy.get(".closelist.active").last().click({ force: true });
    cy.wait(4000);
    cy.get(".sec2.fadeInUp.animated15").scrollIntoView();
    cy.get(".sourcelist").find("li").its("length").should("eq", 12);
    cy.get(".supplybg .supply").scrollIntoView();
    cy.get(".supplybg .supply").find("h4").should("be.visible");
    cy.get(".supplybg .supply").find("p").should("be.visible");
    cy.get(".supplybg img").first().should("have.attr", "src");
    cy.get(".supplybg img").last().should("have.attr", "src");
    cy.get(".sec3").scrollIntoView().should("be.visible");
    cy.get(".cardblk").should("be.visible");
    cy.get(".cardblk .card").should("be.visible");
    cy.get(".cardblk a").eq(1).should("have.attr", "href");
    cy.get(".QAblk").scrollIntoView().should("be.visible");
    cy.get(".QAblk .selectblk").should("be.visible");
    cy.get(".QAblk").find(".listblk").its("length").should("eq", 10);
    cy.get(".ui-selectmenu-text").last().click({ force: true });
    cy.wait(4000);
    cy.get("#QAselect-menu #ui-id-4").click({ force: true });
    cy.wait(4000);
    const qA = [".iconblk", ".anserblk"];
    qA.forEach((item) => {
      cy.get(`${item}`).should("be.visible");
    });
  });
};

export const ContactUstests = () => {
  it("should dispaly contact us \n(聯絡我們)", () => {
    cy.get("#menu").find('a[href="contact.php"]').click({ force: true });
    cy.wait(4000);
    cy.get("#eForm1").should("be.visible");
    const formList = [
      "#name",
      "#tel",
      "#mail",
      ".styled-select",
      "#datepicker",
      "#subject",
      "#contents",
      "#member_code",
      "#btn_submit",
    ];
    formList.forEach((form) => {
      cy.get(`${form}`).should("be.visible");
    });
    cy.get("#name").type("謝士偉");
    cy.get("#name").should("have.value", "謝士偉");
    cy.get("#tel").type("0912345678");
    cy.get("#tel").should("have.value", "0912345678");
    cy.get("#mail").type("abc@gmail.com");
    cy.get("#mail").should("have.value", "abc@gmail.com");
    cy.get(".ui-selectmenu-text").last().click();
    cy.wait(4000);
    cy.get("#store-menu #ui-id-2").click(); //"信義店"
    cy.wait(4000);
    cy.get(".styled-select")
      .find('span[aria-labelledby="ui-id-2"]')
      .should("be.visible");
    cy.get("#datepicker").type("20210701{enter}");
    cy.get("#subject").type("用餐");
    cy.get("#subject").should("have.value", "用餐");
    cy.get("#contents").type("no");
    cy.get("#contents").should("have.value", "no");
  });
};
export const TargetBlankShoppingOnLineTests = () => {
  it("should dispaly shopping onling \n(彈跳出線上購物的連結)", () => {
    cy.get("#menu a").eq(6).click({ force: true });
    cy.wait(1000);
    cy.get("#menu a").eq(6).should("have.attr", "target", "_blank");
  });
};

export const TargetBlankRecruitingTests = () => {
  it("should dispaly recruiting \n(彈跳出人才招募的連結)", () => {
    cy.get("#menu a").eq(7).click({ force: true });
    cy.wait(1000);
    cy.get("#menu a").last().should("have.attr", "target", "_blank");
  });
};
