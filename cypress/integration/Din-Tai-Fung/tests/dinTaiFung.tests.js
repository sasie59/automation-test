
// 前往鼎泰豐
export const GoToDinTaiFungTests = () => {
  it.only('should go to Din-Tai-Fang index\n(前往鼎泰豐首頁)', () => {
    cy.visit('https://www.dintaifung.com.tw/');
    cy.get('#menubox_box').should('be.visible');
  });
}


// 首頁導覽
export const ChangeLanguageTests = () => {
  it.only('should change language\n(改變語系)', () => {
    cy.get('#language-button').should('be.visible');
  });
}

export const OnSitToNumQueryTests = () => {
  it('should on-sit To number query\n(現場到號查詢)', () => {
    // cy.get('#video').find('a[href="https://www.dintaifung.tw/Queue/?type=3"]').click();
    // 精準的找不到
    cy.get('#video').contains('現場到號查詢').click({force: true});
    // 不精準的ok?
  });
}

export const CarouselTests = () => {
  it('should click dots change img\n(輪播器)', () => {

  });
}

export const TopTenTests = () => {
  it('should dispaly top ten \n(十大人氣料理)', () => {

  });
}

export const NewsTests = () => {
  it('should display news\n(最新消息)', () => {

  });
}

export const StoresTests = () => {
  it('should display stroe\n(門市據點)', () => {

  });
}

export const MobileAppTests = () => {
  it('should download mobile app\n(智能手機App下載)', () => {

  });
}
export const BackToTopTests = () => {
  it('should back to top\n(回到頂端))', () => {

  });
}


// 主要選單
export const MainMenuTests = () => {
  it('should click display main menu\n(主要選單))', () => {

  });
}

export const AboutDinTaiFungTests = () => {
  it('should dispaly Din-Tai-Fung history\n(關於鼎泰豐))', () => {

  });
}

export const LatestNewsTests = () => {
  it('should dispaly latest news \n(最新消息))', () => {

  });
}

export const WorldwideLocationTests = () => {
  it('should dispaly world wide location \n(門市據點))', () => {

  });
}

export const CuisineTests = () => {
  it('should dispaly cuisine \n(絕頂美味))', () => {

  });
}

export const PeaceOfMindGuaranteeTests = () => {
  it('should dispaly peace of mind guarantee \n(安心宣言)', () => {

  });
}

export const ContactUstests = () => {
  it('should dispaly contact us \n(聯絡我們)', () => {

  });
}

export const ShoppingOnLineTests = () => {
  it('should dispaly shopping onling \n(線上購物)', () => {

  });
}

export const RecruitingTests = () => {
  it('should dispaly recruiting \n(人才招募)', () => {

  });
}

