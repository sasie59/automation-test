export const GoToTaiwanPayTests = () => {
  it("should go to TaiwanPay index\n(前往台灣Pay)", () => {
    cy.visit("https://www.taiwanpay.com.tw/content/info/index.aspx");
    cy.get("#testlink").should("be.visible");
  });
};
