export const GoToTaiwanPayTests = () => {
  it("should go to TaiwanPay index\n(前往台灣Pay)", () => {
    cy.visit("https://www.taiwanpay.com.tw/content/info/index.aspx");
    cy.get("#testlink").should("be.visible");
  });
};

export const HeaderTests = () => {
  it("should", () => {});
};

export const AdvertiseTests = () => {
  it("should", () => {});
};

export const CarouselTests = () => {
  it("should", () => {});
};

export const VideoTests = () => {
  it("should", () => {});
};
export const WhatisTaiwanPayTests = () => {
  it("should", () => {});
};

export const FooterTests = () => {
  it("should", () => {});
};
