export const GoTo5000Tests = () => {
  it('should go to 5000 index\n(預期連結振興五倍卷)', ()=> {
    cy.visit('https://5000.gov.tw/');
    cy.wait(2000);
    cy.get('.simple-text.major-logo a').should('have.attr', 'href');
    //title振興五倍卷//
    cy.get('#Group_5317_twxNNhFwXX').should('be.visible');
  });
};

export const HomeTourTests = () => {
  it('should ', ()=> {
    
  });
};

export const ZoomOutAndEnlargetests = () => {
  it('should ', ()=> {

  });
};

export const TypeToUse = () => {
  beforeEach(() => {
    
  });
};

export const CreditCardTests = () => {
  it('should ', ()=> {

  });
};

export const E_TicketTests = () => {
  it('should ', ()=> {

  });
};

export const MobilePaymentTests = () => {
  it('should ', ()=> {

  });
};

export const PaperRollTests = () => {
  it('should ', ()=> {

  });
};

export const OverWeight = () => {

};

export const GoodForEatTicketTests = () => {
  it('should ', ()=> {

  });
};

export const TravelTicketTests = () => {
  it('should ', ()=> {

  });
};

export const AboriginalTicketTests = () => {
  it('should ', ()=> {

  });
};

export const FarmingTourTicketTests = () => {
  it('should ', ()=> {

  });
};

export const ArtFunTicketTests = () => {
  it('should ', ()=> {

  });
};

export const DomsTicketTests = () => {
  it('should ', ()=> {

  });
};

export const HakkaTicketTests = () => {
  it('should ', ()=> {

  });
};

export const LocalCreationTicketTests = () => {
  it('should ', ()=> {

  });
};

export const BookingAndCheck = () => {
  
};
