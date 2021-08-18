/** @note
 * it: 只會執行這個
 * it.skip: 不會執行這個
 * it: 正常執行，如有 only 會省略，如有 skip 則執行
 */
export const GoToBookingPageTest = () => {
  it('should go to booking page\n(預期連結台鐵個人訂票頁面)', () => {
    cy.visit('/tra-tip-web/tip/tip001/tip121/query');
    cy.get('.breadcrumb').should('be.visible');
  });
};
const bookTicktetType = [
  '完整',
  '花東常態實名制',
  '兩鐵列車',
  '連假加班實名制',
  '原住民返鄉',
  '快速'
];
// 我就幫你改前幾個，後面的測試你就自己參考一下我怎麼寫的
export const MainMenuTests = () => {
  it('should display main menu \n(預期應出現選單: 完整, 花東常態實名制, 兩鐵列車, 連假加班實名制, 原住民返鄉, 快速)', () => {
    // 先用 get 抓到選單，定義為 menu, 之後可用 get('@menu') 抓
    cy.get('#tablist').as('menu');
    bookTicktetType.forEach(item => {
      cy.get('@menu').contains(`${item}`).should('be.visible');
    });
  });
};

export const SwitchQueryTypeTest = () => {
  it('should booking type can change\n(預期訂票類型可否正常切換\n快速, 完整, 花東常態實名制, 兩鐵列車, 連假加班實名制, 原住民返鄉)', () => {
    cy.get('#tablist').as('menu');

    const tipTypeList = [
      '/tra-tip-web/tip/tip001/tip123/query',
      '/tra-tip-web/tip/tip001/tip130/query',
      '/tra-tip-web/tip/tip001/tip126/query',
      '/tra-tip-web/tip/tip001/tip124/query',
      '/tra-tip-web/tip/tip001/tip128/query',
      '/tra-tip-web/tip/tip001/tip121/query'
    ];
    for (let i = 0; i < tipTypeList.length; i++) {
      cy.get('@menu').contains(`${bookTicktetType[i]}`).click();
      cy.wait(1000
      );
      cy.url().should('eq', Cypress.config().baseUrl + `${tipTypeList[i]}`);
    }
  });
};

export const InputIDTest = () => {
  it('should display ID input\n(預期身分證字號輸入格可輸入)', () => {
    cy.get('#pid.form-input.idmember.pid')
      .type('A123456789')
      .should('have.value', 'A123456789');
  });
};

export const ChooseStartStationTest = () => {
  it('should dispaly counties and cities menu and click startStaton is Toucheng\n(預期應該出現縣市選單並選擇出發站為宜蘭縣頭城)', () => {
    cy.get('.startStation.ui-autocomplete-input').siblings('.icon.icon-list').click();
    cy.get('a[href*="#mainline"]').should('be.visible');
    cy.get('a[href*="#branchline"]').should('be.visible');
    cy.get('#mainline').as('menu');
    cy.get('@menu').contains('宜蘭縣').click();
    cy.get('@menu').contains('頭城').click();
  });
};

/** @fix: modify to should have.value */
export const ChooseEndStationTest = () => {
  it('should dispaly counties and cities menu and click endtStaton is Nangang\n(預期應該出現縣市選單並選擇抵達站為臺北市南港)', () => {
    cy.get('.endStation.ui-autocomplete-input').siblings('.icon.icon-list').click();
    cy.get('a[href*="#mainline"]').should('be.visible');
    cy.get('a[href*="#branchline"]').should('be.visible');

    cy.get('#mainline').as('menu');
    cy.get('@menu').contains('臺北市').click();
    cy.get('@menu').contains('南港').click({ force: true });
    cy.get('input[name="endStation"').should('have.value', '0980-南港');
  });
};

export const StrokeType = () => {
  it('should display stroke type\n(預期應出現行程類型為: 單程，去回)', () => {
    cy.get('.form_title').contains('行程類型').as('type');
    cy.get('@type').should('be.visible');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear.active')
      .contains('單程').should('be.visible');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear')
      .contains('去回').should('be.visible');
  });
};

export const SwitchStrokeType = () => {
  it('should stroke type can change\n(預期行程類型可否正常切換 單程，去回)', () => {
    cy.get('.form_title').contains('行程類型').as('type');
    cy.get('.method-content').as('stroke');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear.active')
      .contains('單程').click()
      .get('@stroke').contains('單行程').should('be.visible');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear')
      .contains('去回').click()
      .get('@stroke').contains('去程').should('be.visible');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear')
      .contains('去回').click()
      .get('@stroke').contains('回程').should('be.visible');
  });
};

export const BookingMethodType = () => {
  it('should dispaly booking method type\n(預期應出現訂票方式類型為: 依車次，依時段)', () => {
    cy.get('.form_title').contains('訂票方式').as('type');
    cy.get('@type').should('be.visible');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear.active')
      .contains('依車次').should('be.visible');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear')
      .contains('依時段').should('be.visible');
  });
};

export const SwitchBookingMethodType = () => {
  it('should dispaly booking method type\n(預期訂票方式類型可否正常切換 依車次，依時段)', () => {
    cy.get('.form_title').contains('訂票方式').as('type');
    cy.get('.method-content').as('stroke');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear.active')
      .contains('依車次').click()
      .get('@stroke').contains('車次').should('be.visible');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear')
      .contains('依時段').click({ force: true })
      .get('@stroke').contains('車種').should('be.visible');
  });
};

export const ChooseTicketQtyTest = () => {
  it('should choose tictet quantity\n(預期選擇張數)', () => {
    cy.get('#normalQty.normalSeat.seatQty').clear();
    cy.get('#normalQty.normalSeat.seatQty').type(2);
    cy.get('input[name="normalQty"]').should('have.value', '2');
  });
};

export const ChooseGoCarTypeTest = () => {
  it('should choose start train type\n(預期選擇去程時段及車種)', () => {
    cy.get('.form_title').contains('行程類型').as('type');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear')
      .contains('去回').click();
    cy.get('.form_title').contains('訂票方式').as('stroke');
    cy.get('@stroke')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear')
      .contains('依時段').click({ force: true });
    cy.get('#rideDate1.rideDate').clear();
    cy.get('#rideDate1.rideDate').type(20210805);
    cy.get('input[name="ticketOrderParamList[0].rideDate"]').should('have.value', '2021/08/05');
    cy.get('#startTime1.form-control.timeRng').select('07:00');
    cy.get('#startTime1.form-control.timeRng').should('have.value', '07:00');
    cy.get('#endTime1.form-control.timeRng').select('12:00');
    cy.get('#endTime1.form-control.timeRng').should('have.value', '12:00');
    cy.get('.column.col2').contains('太魯閣').click()
      .get('.btn.btn-lg.btn-linear.active.focus')
      .should('be.visible');
  });
};

export const ChooseReturnCarTypeTest = () => {
  it('should choose return train type and ticket quantity\n(預期選擇回程時段及車種)', () => {
    cy.get('.form_title').contains('行程類型').as('type');
    cy.get('@type')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear')
      .contains('去回').click();
    cy.get('.form_title').contains('訂票方式').as('stroke');
    cy.get('@stroke')
      .siblings('.btn-group')
      .children('.btn.btn-lg.btn-linear')
      .contains('依時段').click({ force: true });
    cy.get('#rideDate2.rideDate').clear();
    cy.get('#rideDate2.rideDate').type(20210807);
    cy.get('input[name="ticketOrderParamList[1].rideDate"]').should('have.value', '2021/08/07');
    cy.get('#startTime2.form-control.timeRng').select('16:00');
    cy.get('#startTime2.form-control.timeRng').should('have.value', '16:00');
    cy.get('#endTime2.form-control.timeRng').select('22:00');
    cy.get('#endTime2.form-control.timeRng').should('have.value', '22:00');
    cy.get('.method-content')
      .last('.column col2')
      .contains('普悠瑪').click()
      .get('.btn.btn-lg.btn-linear.active.focus')
      .should('be.visible');
  });
};

export const BookingTicket = () => {
  it('should click not RBT booking ticket\n(預期要點擊訂票)', () => {
    // cy.get('.rc-inline-block').last().click();
    cy.get('.btn.btn-3d').click();
  });
};
