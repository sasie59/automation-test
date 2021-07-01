/** @note
 * it.only: 只會執行這個
 * it.skip: 不會執行這個
 * it: 正常執行，如有 only 會省略，如有 skip 則執行
 */
export const GoToBookingPageTest = () => {
  it.only('should go to booking page\n(前往個人訂票頁)', () => {
    cy.visit('/tra-tip-web/tip/tip001/tip121/query');
    cy.contains('首頁 線上訂票 個人訂票').should('be.visible');
  });
}

// 我就幫你改前幾個，後面的測試你就自己參考一下我怎麼寫的
export const MainMenuTests = () => {
  it.only('should display main menu \n(應出現選單: 快速, 完整, 花東常態實名制, 兩鐵列車, 連假加班實名制, 原住民返鄉)', () => {
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
  it.only('should booking type can change\n(訂票類型可否正常切換\n快速, 完整, 花東常態實名制, 兩鐵列車, 連假加班實名制, 原住民返鄉)', () => {
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
  it('輸入身分證字號', () => {
    cy.contains('身分證字號').should('be.visible');
    cy.get('#pid.idmember.pid.form-input').type('A123456789');
    // 你的驗證只驗身分證字號是否有出現，對嗎？那這樣你的 it 應該改成
    // 「身分證字號輸入格有出現」，而不是「輸入身分證字號」
    // 因為你的輸入沒有"驗證"
  });
}

export const ChooseStartStationTest = () => {
  it('選擇出發站', () => {
    cy.contains('出發站').should('be.visible');
    cy.get('#startStation.startStation.ui-autocomplete-input').type('宜蘭');
  });
}

export const ChooseEndStationTest = () => {
  it('選擇抵達站', () => {
    cy.contains('抵達站').should('be.visible');
    cy.get('#endStation.endStation.ui-autocomplete-input').type('花蓮');
  });
}

export const ChooseTypeTimeTest = () => {
  it('行程及時段', () => {
    cy.contains('行程類型').should('be.visible');
    cy.contains('訂票方式').should('be.visible');
    cy.contains('去回').click();
    cy.contains('依時段').click({ force: true });
  });
}

export const ChooseTicketQtyTest = () => {
  it('選擇張數', () => {
    cy.contains('一般座票數').should('be.visible');
    cy.get('#normalQty.normalSeat.seatQty').clear();
    cy.get('#normalQty.normalSeat.seatQty').type(2);
  });
}

export const ChooseGoCarTypeTest = () => {
  it('選擇去程時段的車種', () => {
    cy.contains('日期').should('be.visible');
    cy.contains('時段').should('be.visible');
    cy.contains('查詢出發時間').should('be.visible');
    cy.contains('查詢抵達時間').should('be.visible');
    cy.contains('座位偏好').should('be.visible');
    cy.get('#rideDate1.rideDate').clear();
    cy.get('#rideDate1.rideDate').type(20210630);
    cy.get('#startTime1.form-control.timeRng').select('07:00');
    cy.get('#endTime1.form-control.timeRng').select('12:00');
    cy.contains('太魯閣').click();
  });
}

export const ChooseReturnCarTypeTest = () => {
  it('選擇回程時段的車種', () => {
    cy.contains('車種').should('be.visible');
    // cy.contains('優惠').should('be.visible');
    cy.contains('限定早享車次').should('be.visible');
    cy.contains('偏好查詢').should('be.visible');
    cy.get('#rideDate2.rideDate').type(20210702);
    cy.get('#startTime2.form-control.timeRng').select('16:00');
    cy.get('#endTime2.form-control.timeRng').select('20:00');
    cy.contains('普悠瑪').click({ force: true });
  });
}

export const NotBotTest = () => {
  it('不是機器人 & 訂票', () => {
    cy.contains('訂票').should('be.visible');
    // cy.get('#recaptcha-anchor-label').contains('我不是機器人').click();
    cy.get('.btn-sentgroup').contains('訂票').click();
  });
}

// test