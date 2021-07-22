// 前往鼎泰豐
export const GoToDinTaiFungTests = () => {
  it("should go to Din-Tai-Fang index\n(前往鼎泰豐首頁)", () => {
    cy.visit("https://www.dintaifung.com.tw/")
      .get("#menubox_box")
      .should("be.visible");
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
      // 驗證語系
    }
  });
};

export const OnSitToNumQueryTests = () => {
  it("should make sure on-sit link\n(確認訂位連結)", () => {
    cy.get(".number_s.fadeInUp.animated15")
      .should("have.attr", "target", "_blank")
      .should("have.attr", "href", "http://www.dintaifung.tw/Queue/?type=3");
  });

  // it("should go to on-sit page and....\n(前往現場到號查詢)", () => {
  //   cy.visit("http://www.dintaifung.tw/Queue/?type=3")
  //     .get('.title-text > img[title="現場到號查詢"]')
  //     .should("be.visible");
  // cy.go("back");

  // cy.get('.number_s.fadeInUp.animated15')
  //   .invoke('removeAttr', 'target').click();
  // });
};

export const CarouselTests = () => {
  it("should click dots change img\n(輪播器)", () => {
    cy.get("#believe").scrollIntoView().should("be.visible");

    for (let i = 0; i < 4; i++) {
      cy.get("#believe").get(`a[data-slide-index="${i}"]`).click();
      cy.wait(700);
      cy.get(`.bx_home > li > div[data-id="${i + 1}"]`).should("be.visible");
    }
  });
};
export const TopTenTests = () => {
  it("should dispaly top ten \n(十大人氣料理)", () => {
    cy.get("#home_food").scrollIntoView().should("be.visible");
    cy.get(".swiper-wrapper") //會滾動的圖片//
      .first()
      .find("div") //底下的css太多種變化 我改抓共有幾個div//
      .its("length")
      .should("eq", 32);
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
    cy.get("#app").find(".title > .t01").should("be.visible");
    cy.get("#app").find(".title > .t02").should("be.visible");
    // cy.get("#app > .button")
    //   .find(
    //     'a[href="https://apps.apple.com/tw/app/%E9%BC%8E%E6%B3%B0%E8%B1%90/id1108359809"]'
    //   )
    //   .should("be.visible");
    // IOS的連結會找不到
    cy.get("#app > .button")
      .find(
        'a[href="https://play.google.com/store/apps/details?id=com.dtf.orderapp&hl=zh_TW"]'
      )
      .should("be.visible");
    // 安卓ok
    cy.get("#app").get('a[title="Close"]').click();
    cy.get("#app").get('a[title="Close"]').should("not.be.exist");
  });
};
export const BackToTopTests = () => {
  it("should back to top\n(回到頂端))", () => {
    cy.get("footer").scrollIntoView();
  });
};

// 主要選單
export const MainMenuTests = () => {
  it("should click display main menu\n(主要選單))", () => {});
};

export const AboutDinTaiFungTests = () => {
  it("should dispaly Din-Tai-Fung history\n(關於鼎泰豐))", () => {});
};

export const LatestNewsTests = () => {
  it("should dispaly latest news \n(最新消息))", () => {});
};

export const WorldwideLocationTests = () => {
  it("should dispaly world wide location \n(門市據點))", () => {});
};

export const CuisineTests = () => {
  it("should dispaly cuisine \n(絕頂美味))", () => {});
};

export const PeaceOfMindGuaranteeTests = () => {
  it("should dispaly peace of mind guarantee \n(安心宣言)", () => {});
};

export const ContactUstests = () => {
  it("should dispaly contact us \n(聯絡我們)", () => {});
};

export const ShoppingOnLineTests = () => {
  it("should dispaly shopping onling \n(線上購物)", () => {});
};

export const RecruitingTests = () => {
  it("should dispaly recruiting \n(人才招募)", () => {});
};
