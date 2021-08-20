
export const GoToGMA_32thTests = () => {
  it('should go to GMA_32th index\n(前往第32屆金曲獎首頁)', () => {
    cy.visit('https://gma.tavis.tw/gm32/index.htm');
    cy.get('#left').get('#right').should('be.visible');
  });
};

export const Into2021GoldenMelodyFestivalTests = () => {
  it('should into GMF page\n(預期進入2021金曲國際音樂節頁面)', () => {
    cy.get('#right').find('.btn-outline-secondary1').click();
    cy.wait(500);
    cy.url().should('eq', 'https://gma.tavis.tw/gm32/GMF/default.asp');
  });
};

export const GMF_CarouselTests = () => {
  it('should photos will switch every five seconds\n(預期每經過五秒,會切換照片)', () => {
    cy.get('#carouselExampleIndicators').should('be.visible');
    cy.get('#carouselExampleIndicators').find('ol > li')
      .its('length').should('eq', 13);
    cy.get('#P1').click();
    cy.wait(500);
    cy.get('#P1').should('have.class', 'active');
  });
};

export const GMF_MainMenuTests = () => {
  it('should display GMF Main Menu\n(預期呈現金曲國際音樂節主選單)', () => {

  });
};

export const Into32thGoldenMelodyAwardsTests = () => {
  it('should into GMA page\n(預期進入第32屆金曲獎頒獎典禮)', () => {

  });
};

export const GMA_MainMenuTests = () => {
  it('should display GMA Main Menu\n(預期呈現金曲獎頒獎典禮主選單)', () => {

  });
};

export const CommonOwnElementsTests = () => {
  it('should common own elements\n(預期共同擁有的元素)', () => {

  });
};
