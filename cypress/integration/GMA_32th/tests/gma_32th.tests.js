
export const GoToGMA_32thTests = () => {
  it('should go to GMA_32th index\n(前往第32屆金曲獎首頁)', () => {
    cy.visit('https://gma.tavis.tw/gm32/index.htm');
    cy.get('#left').get('#right').should('be.visible');
  });
};

export const Into2021GoldenMelodyFestivalTests = () => {
  it('should into GMF page\n(預期進入2021金曲國際音樂節頁面)', () => {

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
