$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Web Server Authentication",
  "description": "As a user\r\nI want to login on the website\r\nSo that I can manage all the resources applied to my role",
  "id": "web-server-authentication",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2638021769,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Username empty",
  "description": "",
  "id": "web-server-authentication;username-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I access the login page of the Help2care website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the \"username\" field is empty",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I press the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the \"O nome de utilizador tem que ser preenchido.\" error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "US1StepDefs.iAccessTheLoginPageOfTheHelpCareWebsite(int)"
});
formatter.result({
  "duration": 510432002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theFieldIsEmpty(String)"
});
formatter.result({
  "duration": 61052364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "US1StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 782933840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome de utilizador tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theErrorMessageShouldBeShown(String)"
});
formatter.result({
  "duration": 32233396,
  "status": "passed"
});
formatter.after({
  "duration": 534555813,
  "status": "passed"
});
formatter.before({
  "duration": 1646566773,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Password empty",
  "description": "",
  "id": "web-server-authentication;password-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I access the login page of the Help2care website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the \"password\" field is empty",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I press the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the \"A password tem que ser preenchida.\" error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "US1StepDefs.iAccessTheLoginPageOfTheHelpCareWebsite(int)"
});
formatter.result({
  "duration": 341667071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theFieldIsEmpty(String)"
});
formatter.result({
  "duration": 61139521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "US1StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 249749926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A password tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theErrorMessageShouldBeShown(String)"
});
formatter.result({
  "duration": 56816694,
  "status": "passed"
});
formatter.after({
  "duration": 535452907,
  "status": "passed"
});
formatter.before({
  "duration": 1639926818,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Unsuccessful Authentication",
  "description": "",
  "id": "web-server-authentication;unsuccessful-authentication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I access the login page of the Help2care website",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I fill the \"username\" field with \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill the \"password\" field with \"adminpw123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I press the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the \"Estas credênciais não existem nos nossos registos\" error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "US1StepDefs.iAccessTheLoginPageOfTheHelpCareWebsite(int)"
});
formatter.result({
  "duration": 227899848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "US1StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 97092211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "adminpw123",
      "offset": 34
    }
  ],
  "location": "US1StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 83348072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "US1StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 454395342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estas credênciais não existem nos nossos registos",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theErrorMessageShouldBeShown(String)"
});
formatter.result({
  "duration": 38211472,
  "status": "passed"
});
formatter.after({
  "duration": 535097351,
  "status": "passed"
});
formatter.before({
  "duration": 1611321547,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "#ADMIN"
    }
  ],
  "line": 26,
  "name": "Successful Authentication as an admin",
  "description": "",
  "id": "web-server-authentication;successful-authentication-as-an-admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I access the login page of the Help2care website",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I fill the \"username\" field with \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I fill the \"password\" field with \"adminpw\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I press the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should be redirected to the \"admin\" dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the \"users\" table should be displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "US1StepDefs.iAccessTheLoginPageOfTheHelpCareWebsite(int)"
});
formatter.result({
  "duration": 235191837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "US1StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 102980212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "adminpw",
      "offset": 34
    }
  ],
  "location": "US1StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 74632401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "US1StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 955980756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "US1StepDefs.iShouldBeRedirectedToTheDashboard(String)"
});
formatter.result({
  "duration": 120763829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theTableShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 14529644,
  "status": "passed"
});
formatter.after({
  "duration": 542426538,
  "status": "passed"
});
formatter.before({
  "duration": 1666599324,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 34,
      "value": "#HEALTHCAREPRO"
    }
  ],
  "line": 35,
  "name": "Successful Authentication as a healthcarepro",
  "description": "",
  "id": "web-server-authentication;successful-authentication-as-a-healthcarepro",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I access the login page of the Help2care website",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I fill the \"username\" field with \"healthcarePro\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I fill the \"password\" field with \"propw\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I press the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should be redirected to the \"healthcare professional\" dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "the \"caregivers\" table should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the \"otherCaregivers\" table should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the \"messages\" table should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the \"retention-and-churn-rate\" graph should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the \"dau\" graph should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the \"sessions-per-dau\" graph should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the \"stickiness\" graph should be displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "US1StepDefs.iAccessTheLoginPageOfTheHelpCareWebsite(int)"
});
formatter.result({
  "duration": 261818396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    },
    {
      "val": "healthcarePro",
      "offset": 34
    }
  ],
  "location": "US1StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 99368497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "propw",
      "offset": 34
    }
  ],
  "location": "US1StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 73401632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "US1StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 1088931572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthcare professional",
      "offset": 31
    }
  ],
  "location": "US1StepDefs.iShouldBeRedirectedToTheDashboard(String)"
});
formatter.result({
  "duration": 434562632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "caregivers",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theTableShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 35468405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "otherCaregivers",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theTableShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 19757952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "messages",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theTableShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 10820561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "retention-and-churn-rate",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theGraphShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 12071022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dau",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theGraphShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 11948128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sessions-per-dau",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theGraphShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 11475148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stickiness",
      "offset": 5
    }
  ],
  "location": "US1StepDefs.theGraphShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 35281329,
  "status": "passed"
});
formatter.after({
  "duration": 537248189,
  "status": "passed"
});
formatter.before({
  "duration": 1660016257,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 49,
      "value": "#LOGOUT"
    }
  ],
  "line": 50,
  "name": "Logout",
  "description": "",
  "id": "web-server-authentication;logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "I access the \"admin\" dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I press the \"picture\" button",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I press the \"Logout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should be redirect to the \"login\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    }
  ],
  "location": "US1StepDefs.iAccessTheDashboard(String)"
});
formatter.result({
  "duration": 1631293563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "picture",
      "offset": 13
    }
  ],
  "location": "US1StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 53432169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 13
    }
  ],
  "location": "US1StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 255452309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 29
    }
  ],
  "location": "US1StepDefs.iShouldBeRedirectToThePage(String)"
});
formatter.result({
  "duration": 60799282,
  "status": "passed"
});
formatter.after({
  "duration": 543065079,
  "status": "passed"
});
});