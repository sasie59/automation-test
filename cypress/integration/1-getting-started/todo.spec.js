/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.

// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
//on.cypress.io/introduction-to-cypress

https: describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress 開始時每個測試都是空白的
    // 所以我們必須告訴它使用 `cy.visit()` 命令訪問我們的網站
    // 因為我們想在所有測試開始時訪問相同的 URL，
    // 我們將它包含在我們的 beforeEach 函數中，
    // 以便它在每次測試之前運行

    cy.visit("https://example.cypress.io/todo");
  });

  it("displays two todo items by default", () => {
    // 我們使用 `cy.get()` 命令來獲取與選擇器匹配的所有元素。
    // 然後，我們使用 `should` 來斷言有兩個匹配的項目，這是兩個默認項目。

    cy.get(".todo-list li").should("have.length", 2);

    // 我們可以更進一步檢查每個默認的待辦事項是否包含正確的文本。我們使用
    // `first` 和 `last` 函數分別獲取第一個和最後一個匹配的元素，
    // 然後使用 `should` 執行斷言。

    cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
    cy.get(".todo-list li").last().should("have.text", "Walk the dog");
  });

  it("can add new todo items", () => {
    // 我們將我們的項目文本存儲在一個變量中，以便我們可以重用它

    const newItem = "Feed the cat";
    // 讓我們獲取 input 元素並使用 `type` 命令輸入我們的新列表項。
    // 輸入我們項目的內容後，我們還需要輸入回車鍵以提交輸入。
    // 此輸入具有 data-test 屬性，因此我們將使用它來根據最佳實踐選擇元素：

    //on.cypress.io/selecting-elements

    https: cy.get("[data-test=new-todo]").type(`${newItem}{enter}`);

    // 現在我們已經輸入了我們的新項目，讓我們檢查它是否真的被添加到列表中。
    // 由於它是最新的項目，它應該作為列表中的最後一個元素存在。
    // 此外，使用兩個默認項，我們應該在列表中總共有 3 個元素。
    // 由於斷言產生了被斷言的元素，我們可以將這兩個斷言鏈接到一個語句中。

    cy.get(".todo-list li")
      .should("have.length", 3)
      .last()
      .should("have.text", newItem);
  });

  it("can check off an item as completed", () => {
    // 除了使用`get` 命令通過選擇器獲取元素之外，我們還可以使用`contains` 命令通過其內容獲取元素。
    // 但是，這將產生 <label>，它是包含文本的最低級別元素。為了檢查項目，
    // 我們將通過遍歷 dom 到父元素來找到此 <label> 的 <input> 元素。從那裡，我們可以`find`
    // 子復選框<input> 元素並使用`check` 命令來檢查它。

    cy.contains("Pay electric bill")
      .parent()
      .find("input[type=checkbox]")
      .check();

    // 現在我們已經檢查了按鈕，我們可以繼續確保列表元素現在被標記為已完成。
    // 同樣，我們將使用 `contains` 來查找 <label> 元素，
    // 然後使用 `parents` 命令在 dom 上遍歷多個級別，直到找到相應的 <li> 元素。
    // 一旦我們獲得了那個元素，我們就可以斷言它有完整的類。
    cy.contains("Pay electric bill")
      .parents("li")
      .should("have.class", "completed");
  });

  context("with a checked task", () => {
    beforeEach(() => {
      // 我們將使用上面使用的命令來檢查一個元素 因為我們要執行多個測試，
      // 從檢查一個元素開始，我們將它放在 beforeEach 鉤子中，
      // 以便它在每個測試開始時運行。

      cy.contains("Pay electric bill")
        .parent()
        .find("input[type=checkbox]")
        .check();
    });

    it("can filter for uncompleted tasks", () => {
      // 我們將單擊“活動”按鈕以僅顯示不完整的項目
      cy.contains("Active").click();

      // 過濾後，我們可以斷言列表中只有一個不完整的項目。
      cy.get(".todo-list li")
        .should("have.length", 1)
        .first()
        .should("have.text", "Walk the dog");

      // 為了更好地衡量，我們還斷言我們檢查的任務在頁面上不存在。
      cy.contains("Pay electric bill").should("not.exist");
    });

    it("can filter for completed tasks", () => {
      // 我們可以執行與上述測試類似的步驟，以確保只顯示已完成的任務
      cy.contains("Completed").click();

      cy.get(".todo-list li")
        .should("have.length", 1)
        .first()
        .should("have.text", "Pay electric bill");

      cy.contains("Walk the dog").should("not.exist");
    });

    it("can delete all completed tasks", () => {
      // 首先，讓我們點擊“清除完成”按鈕 `contains` 在這裡實際上有兩個目的。
      // 首先，它確保按鈕存在於 dom 中。此按鈕僅在選中至少一項任務時出現，
      // 因此此命令隱式驗證它確實存在。其次，它選擇按鈕以便我們可以單擊它。

      cy.contains("Clear completed").click();

      // 然後我們可以確保列表中只有一個元素並且我們的元素不存在
      cy.get(".todo-list li")
        .should("have.length", 1)
        .should("not.have.text", "Pay electric bill");

      // 最後，確保清除按鈕不再存在。
      cy.contains("Clear completed").should("not.exist");
    });
  });
});
