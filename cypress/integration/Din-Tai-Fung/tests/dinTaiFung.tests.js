
// 前往鼎泰豐
export const GoToDinTaiFungTests = () => {
  it('should go to Din-Tai-Fang index\n(前往鼎泰豐首頁)', () => {
    cy.visit('https://www.dintaifung.com.tw/');
    cy.get('#menubox_box').should('be.visible');
  });
}


// 首頁導覽
export const HomeTourTests = () => {
  it('should home tour to Din-Tai-Fang\n(鼎泰豐首頁導覽)', () => {

  });
}

export const ChangeLanguageTests = () => {
  it('should change language\n(改變語系)', () => {

  });
}

export const OnSitToNumQueryTests = () => {
  it('should on-sit To number query\n(現場到號查詢)', () => {

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
