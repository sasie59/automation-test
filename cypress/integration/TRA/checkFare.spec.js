import * as tests from "./tests/check.fare.tests";

describe("台鐵票價試算", () => {
  describe("票價試算", () => {
    tests.GoToCheckFarePageTests();
    tests.MainMenuTests();
    tests.ChooseTrainTicketTypeTests();
    tests.ChooseStartStationTests();
    tests.ChooseEndStationTests();
    tests.ChooseTrainTypeTests();
    tests.ChooseTicketTypeTests();
    tests.ChooseVotesTests();
    tests.AddOrClear();
    tests.Inquire();
  });
});
