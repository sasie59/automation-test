import * as tests from './tests/query.tests';

describe('台鐵訂票系統', () => {
  describe('訂票系統', () => {
    tests.GoToBookingPageTest();
    tests.SwitchQueryTypeTest();
    tests.InputIDTest();
    tests.ChooseStartStationTest();
    tests.ChooseEndStationTest();
    tests.ChooseTypeTimeTest();
    tests.ChooseTicketQtyTest();
    tests.ChooseGoCarTypeTest();
    tests.ChooseReturnCarTypeTest();
    tests.NotBotTest();
  });
})
