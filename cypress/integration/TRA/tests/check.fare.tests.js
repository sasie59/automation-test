export const GoToCheckFarePageTests = () => {
  it('should go to check fare page\n(前往票價查詢頁)', () => {
    cy.visit('/tra-tip-web/tip/tip001/tip114/query');
    cy.get('.breadcrumb').should('be.visible');
  });
}

export const MainMenuTests = () => {
  it('should dispaly main menu\n(應出現: 車票類型, 出發站, 抵達站, 車種, 票種, 票數)', () => {
    cy.get('#queryBlock').as('menu');

    cy.get('@menu').contains('車票類型').should('be.visible');
    cy.get('@menu').contains('出發站').should('be.visible');
    cy.get('@menu').contains('抵達站').should('be.visible');
    cy.get('@menu').contains('車種').should('be.visible');
    cy.get('@menu').contains('票種').should('be.visible');
    cy.get('@menu').contains('票數').should('be.visible');
  });
}

export const ChooseTrainTicketTypeTests = () => {
  it('should choose ticket type\n(選擇車票類型為單程票)', () => {
    cy.get('#ticketDeadlineType0').select('電子票證');
    cy.get('#ticketDeadlineType0').should('have.value', 'ELECTRONIC_TICKET');
    cy.get('#ticketDeadlineType0').select('30天期通用定期票');
    cy.get('#ticketDeadlineType0').should('have.value', '0029d6fa-ced2-4b6b-92f1-0dad1cb9bb46');
    cy.get('#ticketDeadlineType0').select('60天期通用定期票');
    cy.get('#ticketDeadlineType0').should('have.value', 'de98a9f9-39b9-492d-91eb-7eae0fa7efd3');
    cy.get('#ticketDeadlineType0').select('單程票');
    cy.get('#ticketDeadlineType0').should('have.value', 'ONCE');
  });
}

export const ChooseStartStationTests = () => {
  it('should choose start station\n(選擇出發站為臺北)', () => {
    cy.get('#mainline').as('country');
    cy.get('#city63000').as('city');
    cy.get('.startStation.ui-autocomplete-input').siblings('.icon.icon-list').click();
    cy.get('@country').contains('常用').should('be.visible');
    cy.get('@country').contains('基隆市').should('be.visible');
    cy.get('@country').contains('新北市').should('be.visible');
    cy.get('@country').contains('臺北市').should('be.visible').click();
    cy.get('@country').contains('桃園市').should('be.visible');
    cy.get('@country').contains('新竹縣').should('be.visible');
    cy.get('@country').contains('新竹市').should('be.visible');
    cy.get('@country').contains('苗栗縣').should('be.visible');
    cy.get('@country').contains('臺中市').should('be.visible');
    cy.get('@country').contains('彰化縣').should('be.visible');
    cy.get('@country').contains('南投縣').should('be.visible');
    cy.get('@country').contains('雲林縣').should('be.visible');
    cy.get('@country').contains('嘉義縣').should('be.visible');
    cy.get('@country').contains('嘉義市').should('be.visible');
    cy.get('@country').contains('臺南市').should('be.visible');
    cy.get('@country').contains('高雄市').should('be.visible');
    cy.get('@country').contains('屏東縣').should('be.visible');
    cy.get('@country').contains('臺東縣').should('be.visible');
    cy.get('@country').contains('花蓮縣').should('be.visible');
    cy.get('@country').contains('宜蘭縣').should('be.visible');
    cy.get('@city').contains('南港').should('be.visible');
    cy.get('@city').contains('松山').should('be.visible');
    cy.get('@city').contains('臺北').should('be.visible');
    cy.get('@city').contains('臺北-環島').should('be.visible');
    cy.get('@city').contains('萬華').should('be.visible');
    cy.get('@city').contains('臺北').click();
    cy.get('input[name="tip114QueryVOs[0].startStation"]').should('have.value', '1000-臺北');
  });
}

export const ChooseEndStationTests = () => {
  it('should choose end station\n(選擇抵達站為南投縣集集)', () => {
    cy.get('#mainline').as('country');
    cy.get('#city10008').as('city');
    cy.get('.endStation.ui-autocomplete-input').siblings('.icon.icon-list').click();
    cy.get('@country').contains('南投縣').click();
    cy.get('@city').contains('濁水').should('be.visible');
    cy.get('@city').contains('龍泉').should('be.visible');
    cy.get('@city').contains('集集').should('be.visible');
    cy.get('@city').contains('水里').should('be.visible');
    cy.get('@city').contains('車埕').should('be.visible');
    cy.get('@city').contains('集集').should('be.visible').click();
    cy.get('input[name="tip114QueryVOs[0].endStation"]').should('have.value', '3434-集集');
  });
}

export const ChooseTrainTypeTests = () => {
  it('should choose train type\n(選擇車種類型為普悠瑪)', () => {
    cy.get('#trainTypes0').select('普悠瑪');
    cy.get('select[name="tip114QueryVOs[0].trainType"]').should('have.value', '2');
  });
}

export const ChooseTicketTypeTests = () => {
  it('should choose ticket for old man type\n(選擇車票類型為敬老票)', () => {
    cy.get('select[name="tip114QueryVOs[0].ticketPriceType"]').select('敬老');
    cy.get('select[name="tip114QueryVOs[0].ticketPriceType"]').should('have.value', '3');
  });
}

export const ChooseVotesTests = () => {
  it('should choose voets is 2\n(選擇2張)', () => {
    cy.get('.add').click();
    cy.get('input[name="tip114QueryVOs[0].ticketCount"]').should('have.value', '2');
  });
}

export const AddOrClear = () => {
  it.skip('should add or clear\n(選擇新增一筆或清空)', () => {

  });
}

export const Inquire = () => {
  it('should Inquire how much\n(查詢價錢)', () => {
    cy.get('.btn.btn-3d.no-margin').click({ force: true });
    cy.get('.rightnote.price')
      .children('.red')
      .contains('518')
      .should('be.visible')
  });
}

