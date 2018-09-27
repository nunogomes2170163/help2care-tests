$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US8.feature");
formatter.feature({
  "line": 1,
  "name": "Manage Caregivers",
  "description": "As an healthcare professional\r\nI want to manage my caregivers\r\nSo that I prepare them for the mobile app",
  "id": "manage-caregivers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4620919273,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#BLOCK AND UNBLOCK"
    }
  ],
  "line": 8,
  "name": "Block Quiz",
  "description": "",
  "id": "manage-caregivers;block-quiz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I access the \"details\" page of the \"caregiver\" caregiver",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I press the \"block\" button - USeight",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be redirected to the \"details\" page of the \"caregiver\" caregiver",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the \"unblock\" button should be present - USeight",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "caregiver",
      "offset": 36
    }
  ],
  "location": "US8StepDefs.iAccessThePageOfTheCaregiver(String,String)"
});
formatter.result({
  "duration": 547682891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 13
    }
  ],
  "location": "US8StepDefs.iPressTheButtonUSeight(String)"
});
formatter.result({
  "duration": 1364619288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "caregiver",
      "offset": 53
    }
  ],
  "location": "US8StepDefs.iShouldBeRedirectedToThePageOfTheCaregiver(String,String)"
});
formatter.result({
  "duration": 43157492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unblock",
      "offset": 5
    }
  ],
  "location": "US8StepDefs.theButtonShouldBePresentUSeight(String)"
});
formatter.result({
  "duration": 14214921,
  "status": "passed"
});
formatter.after({
  "duration": 535757747,
  "status": "passed"
});
formatter.before({
  "duration": 3000880319,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Unblock Quiz",
  "description": "",
  "id": "manage-caregivers;unblock-quiz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I access the \"details\" page of the \"caregiver\" caregiver",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the caregiver is blocked",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I press the \"unblock\" button - USeight",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should be redirected to the \"details\" page of the \"caregiver\" caregiver",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the \"block\" button should be present - USeight",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "caregiver",
      "offset": 36
    }
  ],
  "location": "US8StepDefs.iAccessThePageOfTheCaregiver(String,String)"
});
formatter.result({
  "duration": 460496341,
  "status": "passed"
});
formatter.match({
  "location": "US8StepDefs.theCaregiverIsBlocked()"
});
formatter.result({
  "duration": 12939662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unblock",
      "offset": 13
    }
  ],
  "location": "US8StepDefs.iPressTheButtonUSeight(String)"
});
formatter.result({
  "duration": 376389447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "caregiver",
      "offset": 53
    }
  ],
  "location": "US8StepDefs.iShouldBeRedirectedToThePageOfTheCaregiver(String,String)"
});
formatter.result({
  "duration": 175363186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US8StepDefs.theButtonShouldBePresentUSeight(String)"
});
formatter.result({
  "duration": 12064449,
  "status": "passed"
});
formatter.after({
  "duration": 534491605,
  "status": "passed"
});
});