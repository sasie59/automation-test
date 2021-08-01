import * as tests from './tests/book.ticket.tests';
describe("固定行高", () => {
  beforeEach(() => {
    cy.viewport(1000, 800);
  });
  describe('台鐵訂票系統', () => {
    describe('訂票系統', () => {
      tests.GoToBookingPageTest();
      tests.MainMenuTests();
      tests.SwitchQueryTypeTest();
      tests.InputIDTest();
      tests.ChooseStartStationTest();
      tests.ChooseEndStationTest();
      tests.StrokeType();
      tests.SwitchStrokeType();
      tests.BookingMethodType();
      tests.SwitchBookingMethodType();
      tests.ChooseTicketQtyTest();
      tests.ChooseGoCarTypeTest();
      tests.ChooseReturnCarTypeTest();
      tests.BookingTicket();
    });
  });
});
