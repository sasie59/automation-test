export const GoToGoShareTests = () => {
  it("should go to Go Share\n(前GoShare)", () => {
    cy.visit("https://www.ridegoshare.com/");
    cy.get(".cover-image.transition-section.shrink").should("be.visible");
  });
};
