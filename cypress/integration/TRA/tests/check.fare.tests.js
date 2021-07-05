export const GoToCheckFarePageTests = () => {
  it.only('should go to check fare page\n(前往票價查詢頁)', () => {
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
  it('should choose ticket type\n(選擇車票類型)', () => {
    cy.get('#ticketDeadlineType0').select('單程票');
    cy.get('#ticketDeadlineType0').should('have.value', 'ONCE');
    // cy.get('#ticketDeadlineType0').select('電子票證');
    // cy.get('#ticketDeadlineType0').should('have.value', 'ELECTRONIC_TICKET');
    // cy.get('#ticketDeadlineType0').select('30天期通用定期票');
    // cy.get('#ticketDeadlineType0').should('have.value', '0029d6fa-ced2-4b6b-92f1-0dad1cb9bb46');
    // cy.get('#ticketDeadlineType0').select('60天期通用定期票');
    // cy.get('#ticketDeadlineType0').should('have.value', 'de98a9f9-39b9-492d-91eb-7eae0fa7efd3');
  });
}

export const ChooseStartStationTests = () => {
  it.only('should choose start station\n(選擇出發站)', () => {

  });
}

export const ChooseEndStationTests = () => {
  it('should choose end station\n(選擇抵達站)', () => {

  });
}

export const ChooseTrainTypeTests = () => {
  it('should choose train type\n(選擇車種類型)', () => {

  });
}

export const ChooseTicketTypeTests = () => {
  it('should choose ticket type\n(選擇車票類型)', () => {

  });
}

export const ChooseVotesTests = () => {
  it('should choose voets\n(選擇張數)', () => {

  });
}

export const AddOrClear = () => {
  it('should add or clear\n(選擇新增一筆或清空)', () => {

  });
}

export const Inquire = () => {
  it('should choose start station\n(選擇出發站)', () => {

  });
}

