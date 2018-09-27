$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US12.feature");
formatter.feature({
  "line": 1,
  "name": "Behavior on conflicts",
  "description": "As an admin\r\nI want to associate the resources available\r\nSo that I can check the behavior on the association of this resources",
  "id": "behavior-on-conflicts",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7000344251,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Delete the same need in two different sessions",
  "description": "",
  "id": "behavior-on-conflicts;delete-the-same-need-in-two-different-sessions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I access the details page of the \"Tomar a medicação\" \"need\" in two different sessions",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I delete the \"Tomar a medicação\" need in the session 1",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I delete the \"Tomar a medicação\" need in the session 2",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the \"A necessidade Tomar a medicação já se encontra apagada.\" error message should be shown on session 2",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tomar a medicação",
      "offset": 34
    },
    {
      "val": "need",
      "offset": 54
    }
  ],
  "location": "US12StepDefs.iAccessTheDetailsPageOfTheInTwoDifferentSessions(String,String)"
});
formatter.result({
  "duration": 705724192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomar a medicação",
      "offset": 14
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "US12StepDefs.iDeleteTheNeedInTheSession(String,int)"
});
formatter.result({
  "duration": 1006848916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomar a medicação",
      "offset": 14
    },
    {
      "val": "2",
      "offset": 53
    }
  ],
  "location": "US12StepDefs.iDeleteTheNeedInTheSession(String,int)"
});
formatter.result({
  "duration": 445373144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A necessidade Tomar a medicação já se encontra apagada.",
      "offset": 5
    },
    {
      "val": "2",
      "offset": 103
    }
  ],
  "location": "US12StepDefs.theErrorMessageShouldBeShownOnSession(String,int)"
});
formatter.result({
  "duration": 52256484,
  "status": "passed"
});
formatter.after({
  "duration": 619775974,
  "status": "passed"
});
});