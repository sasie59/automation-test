/** @note
 * it: 只會執行這個
 * it.skip: 不會執行這個
 * it: 正常執行，如有 only 會省略，如有 skip 則執行
 */
export const GoToBookingPageTest = () => {
  it('should go to booking page\n(前往個人訂票頁)', () => {
    cy.visit('/tra-tip-web/tip/tip001/tip121/query');
    cy.get('.breadcrumb').should('be.visible');
  });
}

// 我就幫你改前幾個，後面的測試你就自己參考一下我怎麼寫的
export const MainMenuTests = () => {
  it('should display main menu \n(應出現選單: 快速, 完整, 花東常態實名制, 兩鐵列車, 連假加班實名制, 原住民返鄉)', () => {
    // 先用 get 抓到選單，定義為 menu, 之後可用 get('@menu') 抓
    cy.get('#tablist').as('menu');

    cy.get('@menu').contains('快速').should('be.visible');
    cy.get('@menu').contains('完整').should('be.visible');
    cy.get('@menu').contains('花東常態實名制').should('be.visible');
    cy.get('@menu').contains('兩鐵列車').should('be.visible');
    cy.get('@menu').contains('連假加班實名制').should('be.visible');
    cy.get('@menu').contains('原住民返鄉').should('be.visible');
  });
}

export const SwitchQueryTypeTest = () => {
  it('should booking type can change\n(訂票類型可否正常切換\n快速, 完整, 花東常態實名制, 兩鐵列車, 連假加班實名制, 原住民返鄉)', () => {
    cy.get('#tablist').as('menu');

    cy.get('@menu').contains('快速').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/tra-tip-web/tip/tip001/tip121/query');

    cy.get('@menu').contains('完整').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/tra-tip-web/tip/tip001/tip123/query');

    cy.get('@menu').contains('花東常態實名制').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/tra-tip-web/tip/tip001/tip130/query');

    cy.get('@menu').contains('兩鐵列車').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/tra-tip-web/tip/tip001/tip126/query');

    cy.get('@menu').contains('連假加班實名制').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/tra-tip-web/tip/tip001/tip124/query');

    cy.get('@menu').contains('原住民返鄉').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/tra-tip-web/tip/tip001/tip128/query');
  });
}

export const InputIDTest = () => {
  it('should display ID input\n(身分證字號輸入格有出現)', () => {
    cy.get('#pid.form-input.idmember.pid').type('A123456789');
    // cy.get('#pid.form-input.idmember.pid').contains('A123456789').should('be.visible');
    // 這樣的抓法會報錯

    // 你的驗證只驗身分證字號是否有出現，對嗎？那這樣你的 it 應該改成
    // 「身分證字號輸入格有出現」，而不是「輸入身分證字號」
    // 因為你的輸入沒有"驗證"
  });
}

export const ChooseStartStationTest = () => {
  it('should dispaly counties and cities menu and click startStaton is Toucheng\n(應該出現縣市選單並選擇出發站為宜蘭縣頭城)', () => {
    cy.get('.startStation.ui-autocomplete-input').siblings('.icon.icon-list').click({ multiple: true });
    cy.get('a[href*="#mainline"]').should('be.visible');
    cy.get('a[href*="#branchline"]').should('be.visible');
    cy.contains('宜蘭縣').click({ force: true });

    cy.get('#mainline').as('menu');

    cy.get('@menu').contains('頭城').click();
    cy.contains('7230-頭城').should('be.visible');
  });
}

export const ChooseEndStationTest = () => {
  it('should dispaly counties and cities menu and click endtStaton is Nangang\n(應該出現縣市選單並選擇抵達站為臺北市南港)', () => {
    cy.get('.endStation.ui-autocomplete-input').siblings('.icon.icon-list').click({ multiple: true });
    cy.get('a[href*="#mainline"]').should('be.visible');
    cy.get('a[href*="#branchline"]').should('be.visible');
    cy.contains('臺北市').click();

    cy.get('#mainline').as('menu');

    cy.get('@menu').contains('南港').click({ force: true });
    cy.contains('0980-南港').should('be.visible');
  });
}

export const StrokeType = () => {
  it('should display stroke type\n(應出現行程類型為: 單程，去回)', () => {
    cy.get('.form_title').contains('行程類型').should('be.visible');
    cy.get('.btn.btn-lg.btn-linear.active').contains('單程').should('be.visible');
    cy.get('.btn.btn-lg.btn-linear').contains('去回').should('be.visible');
  });
}

export const SwitchStrokeType = () => {
  it('should stroke type can change\n(行程類型可否正常切換 單程，去回)', () => {
    cy.contains('單程').click();
    cy.get('.method-title').should('be.visible');
    cy.contains('去回').click();
    cy.get('.method-title').contains('行程一').should('be.visible');
    cy.get('.method-title').contains('行程二').should('be.visible');
  });
}

export const BookingMethodType = () => {
  it('should dispaly booking method type\n(應出現訂票方式類型為: 依車次，依時段)', () => {
    cy.get('.form_title').contains('訂票方式').should('be.visible');
    cy.get('.btn.btn-lg.btn-linear').contains('依車次').should('be.visible');
    // cy.get('.btn.btn-lg.btn-linear.active').contains('依時段').should('be.visible');
    cy.contains('依時段').should('be.visible');
  });
}

export const SwitchBookingMethodType = () => {
  it('should dispaly booking method type\n(訂票方式類型可否正常切換 依車次，依時段)', () => {
    cy.contains('依車次').click();
    cy.get('#trainNoList1').should('be.visible');
    cy.contains('依時段').click({ force: true });
    cy.get('.switch-radio.switch-time').contains('查詢出發時間').should('be.visible');
    cy.get('.switch-radio.switch-time').contains('查詢抵達時間').should('be.visible');
  });
}

export const ChooseTicketQtyTest = () => {
  it('should choose tictet quantity\n(選擇張數)', () => {
    cy.get('#normalQty1.normalSeat.seatQty').clear();
    cy.get('#normalQty1.normalSeat.seatQty').type(2);
    // cy.get('#normalQty1.normalSeat.seatQty').contains(2).should('be.visible');
  });
}

export const ChooseGoCarTypeTest = () => {
  it('should choose start train type\n(選擇去程時段)', () => {
    cy.get('#rideDate1.rideDate').clear();
    cy.get('#rideDate1.rideDate').type(20210715);
    cy.get('#startTime1.form-control.timeRng').select('07:00');
    cy.get('#startTime1.form-control.timeRng').contains('07:00').should('be.visible');
    cy.get('#endTime1.form-control.timeRng').select('12:00');
    cy.get('#endTime1.form-control.timeRng').contains('12:00').should('be.visible');
    cy.get('#normalQty1.normalSeat.seatQty').clear();
    cy.get('#normalQty1.normalSeat.seatQty').type(2);
  });
}

export const ChooseReturnCarTypeTest = () => {
  it('should choose return train type and ticket quantity\n(選擇回程時段及張數)', () => {
    cy.get('#rideDate2.rideDate').type(20210717);
    cy.get('#startTime2.form-control.timeRng').select('16:00');
    cy.get('#startTime2.form-control.timeRng').contains('16:00').should('be.visible');
    cy.get('#endTime2.form-control.timeRng').select('20:00');
    cy.get('#endTime2.form-control.timeRng').contains('20:00').should('be.visible');
    cy.get('#normalQty2.normalSeat.seatQty').clear();
    cy.get('#normalQty2.normalSeat.seatQty').type(2);
  });
}

export const Inquire = () => {
  it('should inquire\n(查詢)', () => {
    cy.get('.btn.btn-3d').click();
  });
}
