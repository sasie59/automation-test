export const GoToCheckFarePageTests = () => {
  it("should go to check fare page\n(前往票價查詢頁)", () => {
    cy.visit("/tra-tip-web/tip/tip001/tip114/query");
    cy.get(".breadcrumb").should("be.visible");
  });
};

export const MainMenuTests = () => {
  it("should dispaly main menu\n(應出現: 車票類型, 出發站, 抵達站, 車種, 票種, 票數)", () => {
    cy.get("#queryBlock").as("menu");
    const rundownList = [
      "車票類型",
      "出發站",
      "抵達站",
      "車種",
      "票種",
      "票數",
    ];
    rundownList.forEach((item) => {
      cy.get("@menu").contains(`${item}`).should("be.visible");
    });
  });
};

export const ChooseTrainTicketTypeTests = () => {
  it("should choose ticket type\n(選擇車票類型為單程票)", () => {
    cy.get("#ticketDeadlineType0").select("電子票證");
    cy.get("#ticketDeadlineType0").should("have.value", "ELECTRONIC_TICKET");
    cy.get("#ticketDeadlineType0").select("30天期通用定期票");
    cy.get("#ticketDeadlineType0").should(
      "have.value",
      "0029d6fa-ced2-4b6b-92f1-0dad1cb9bb46"
    );
    cy.get("#ticketDeadlineType0").select("60天期通用定期票");
    cy.get("#ticketDeadlineType0").should(
      "have.value",
      "de98a9f9-39b9-492d-91eb-7eae0fa7efd3"
    );
    cy.get("#ticketDeadlineType0").select("單程票");
    cy.get("#ticketDeadlineType0").should("have.value", "ONCE");
  });
};

export const ChooseStartStationTests = () => {
  it("should choose start station\n(選擇出發站為臺北)", () => {
    cy.get("#mainline").as("county");
    cy.get("#city63000").as("city");
    cy.get(".startStation.ui-autocomplete-input")
      .siblings(".icon.icon-list")
      .click();
    const countiesAndCitiesList = [
      "常用",
      "基隆市",
      "新北市",
      "臺北市",
      "桃園市",
      "新竹縣",
      "新竹市",
      "苗栗縣",
      "臺中市",
      "彰化縣",
      "南投縣",
      "雲林縣",
      "嘉義縣",
      "嘉義市",
      "臺南市",
      "高雄市",
      "屏東縣",
      "臺東縣",
      "花蓮縣",
      "宜蘭縣",
    ];
    countiesAndCitiesList.forEach((item) => {
      cy.get("@county").contains(`${item}`).should("be.visible");
    });
    cy.get("@county").contains("臺北市").click();
    const taipeiCityStation = ["南港", "松山", "臺北", "臺北-環島", "萬華"];
    taipeiCityStation.forEach((item) => {
      cy.get("@city").contains(`${item}`).should("be.visible");
    });
    cy.get("@city").contains("臺北").click();
    cy.get('input[name="tip114QueryVOs[0].startStation"]').should(
      "have.value",
      "1000-臺北"
    );
  });
};

export const ChooseEndStationTests = () => {
  it("should choose end station\n(選擇抵達站為南投縣集集)", () => {
    cy.get("#mainline").as("county");
    cy.get("#city10008").as("city");
    cy.get(".endStation.ui-autocomplete-input")
      .siblings(".icon.icon-list")
      .click();
    cy.get("@county").contains("南投縣").click();
    const NantouStation = ["濁水", "龍泉", "集集", "水里", "車埕"];
    NantouStation.forEach((item) => {
      cy.get("@city").contains(`${item}`).should("be.visible");
    });
    cy.get("@city").contains("集集").click();
    cy.get('input[name="tip114QueryVOs[0].endStation"]').should(
      "have.value",
      "3434-集集"
    );
  });
};

export const ChooseTrainTypeTests = () => {
  it("should choose train type\n(選擇車種類型為普悠瑪)", () => {
    cy.get("#trainTypes0").select("普悠瑪");
    cy.get('select[name="tip114QueryVOs[0].trainType"]').should(
      "have.value",
      "2"
    );
  });
};

export const ChooseTicketTypeTests = () => {
  it("should choose ticket for old man type\n(選擇車票類型為敬老票)", () => {
    cy.get('select[name="tip114QueryVOs[0].ticketPriceType"]')
      .select("敬老")
      .should("have.value", "3");
  });
};

export const ChooseVotesTests = () => {
  it("should choose voets is 2\n(選擇2張)", () => {
    cy.get(".add").click();
    cy.get('input[name="tip114QueryVOs[0].ticketCount"]').should(
      "have.value",
      "2"
    );
  });
};

export const AddOrClear = () => {
  it.skip("should add or clear\n(選擇新增一筆或清空)", () => {});
};

export const Inquire = () => {
  it("should Inquire how much\n(查詢價錢)", () => {
    cy.get(".btn.btn-3d.no-margin").click({ force: true });
    cy.get(".rightnote.price")
      .children(".red")
      .contains("518")
      .should("be.visible");
  });
};
