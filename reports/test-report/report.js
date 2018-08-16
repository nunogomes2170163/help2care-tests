$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Web Server Authentication",
  "description": "As a user\r\nI want to login on the website\r\nSo that I can manage all the resources applied to my role",
  "id": "web-server-authentication",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2669725055,
  "status": "passed"
});
formatter.before({
  "duration": 1626770258,
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
  "duration": 737491452,
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
  "duration": 61839008,
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
  "duration": 350423841,
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
  "duration": 57465124,
  "status": "passed"
});
formatter.after({
  "duration": 528518316,
  "status": "passed"
});
formatter.after({
  "duration": 517849452,
  "status": "passed"
});
formatter.before({
  "duration": 1640880903,
  "status": "passed"
});
formatter.before({
  "duration": 1631721419,
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
  "duration": 432979175,
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
  "duration": 65984243,
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
  "duration": 351377095,
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
  "duration": 59500727,
  "status": "passed"
});
formatter.after({
  "duration": 529336643,
  "status": "passed"
});
formatter.after({
  "duration": 83801057,
  "status": "passed"
});
formatter.before({
  "duration": 1633061956,
  "status": "passed"
});
formatter.before({
  "duration": 1597519496,
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
  "duration": 241329815,
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
  "duration": 111086597,
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
  "duration": 78811240,
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
  "duration": 350597790,
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
  "duration": 63466178,
  "status": "passed"
});
formatter.after({
  "duration": 539162019,
  "status": "passed"
});
formatter.after({
  "duration": 81586764,
  "status": "passed"
});
formatter.before({
  "duration": 1623132283,
  "status": "passed"
});
formatter.before({
  "duration": 1585220545,
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
  "duration": 631741841,
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
  "duration": 64432196,
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
  "duration": 78621975,
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
  "duration": 919697248,
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
  "duration": 204467240,
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
  "duration": 23929093,
  "status": "passed"
});
formatter.after({
  "duration": 532487779,
  "status": "passed"
});
formatter.after({
  "duration": 83111460,
  "status": "passed"
});
formatter.before({
  "duration": 1590104606,
  "status": "passed"
});
formatter.before({
  "duration": 1625220035,
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
  "duration": 234806186,
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
  "duration": 111881583,
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
  "duration": 75197698,
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
  "duration": 962781504,
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
  "duration": 426205744,
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
  "duration": 41810454,
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
  "duration": 12822257,
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
  "duration": 11529857,
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
  "duration": 11985698,
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
  "duration": 12473265,
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
  "duration": 24574564,
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
  "duration": 22124328,
  "status": "passed"
});
formatter.after({
  "duration": 534112761,
  "status": "passed"
});
formatter.after({
  "duration": 83789022,
  "status": "passed"
});
formatter.before({
  "duration": 1626930349,
  "status": "passed"
});
formatter.before({
  "duration": 1626152138,
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
  "duration": 1630418079,
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
  "duration": 61288352,
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
  "duration": 255077976,
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
  "duration": 51970965,
  "status": "passed"
});
formatter.after({
  "duration": 537419977,
  "status": "passed"
});
formatter.after({
  "duration": 82742412,
  "status": "passed"
});
formatter.uri("US2.feature");
formatter.feature({
  "line": 1,
  "name": "Web Server Forgot Password",
  "description": "As a user\r\nI want to reset my password\r\nSo that I can login if I forgot my password",
  "id": "web-server-forgot-password",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1604021610,
  "status": "passed"
});
formatter.before({
  "duration": 1619207675,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Forgot Password Button on the Login Page",
  "description": "",
  "id": "web-server-forgot-password;forgot-password-button-on-the-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I access the login page of the Help2care website - UStwo",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"Esqueceu-se da sua password?\" button - UStwo",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"reset password\" page - UStwo",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "should be present the field to fill with an email",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "should be present the button \"Enviar o link de reset password\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "US2StepDefs.iAccessTheLoginPageOfTheHelpCareWebsiteUStwo(int)"
});
formatter.result({
  "duration": 664417244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Esqueceu-se da sua password?",
      "offset": 13
    }
  ],
  "location": "US2StepDefs.iPressTheButtonUStwo(String)"
});
formatter.result({
  "duration": 647395416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reset password",
      "offset": 31
    }
  ],
  "location": "US2StepDefs.iShouldBeRedirectedToThePageUStwo(String)"
});
formatter.result({
  "duration": 25754644,
  "status": "passed"
});
formatter.match({
  "location": "US2StepDefs.shouldBePresentTheFieldToFillWithAnEmail()"
});
formatter.result({
  "duration": 24510381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enviar o link de reset password",
      "offset": 30
    }
  ],
  "location": "US2StepDefs.shouldBePresentTheButton(String)"
});
formatter.result({
  "duration": 24905322,
  "status": "passed"
});
formatter.after({
  "duration": 517454512,
  "status": "passed"
});
formatter.after({
  "duration": 86697287,
  "status": "passed"
});
formatter.before({
  "duration": 1622431382,
  "status": "passed"
});
formatter.before({
  "duration": 1623394118,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Send Password Reset Email Successfully",
  "description": "",
  "id": "web-server-forgot-password;send-password-reset-email-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I access the reset password page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I fill the \"email\" field with \"zecoroados@gmail.com\" - UStwo",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I press the \"Enviar o link de reset password\" button - UStwo",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the \"O email com o link para efetuar o reset da password foi enviado!\" message should be shown - UStwo",
  "keyword": "Then "
});
formatter.match({
  "location": "US2StepDefs.iAccessTheResetPasswordPage()"
});
formatter.result({
  "duration": 635735736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "zecoroados@gmail.com",
      "offset": 31
    }
  ],
  "location": "US2StepDefs.iFillTheFieldWithUStwo(String,String)"
});
formatter.result({
  "duration": 84692317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enviar o link de reset password",
      "offset": 13
    }
  ],
  "location": "US2StepDefs.iPressTheButtonUStwo(String)"
});
formatter.result({
  "duration": 1313887648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email com o link para efetuar o reset da password foi enviado!",
      "offset": 5
    }
  ],
  "location": "US2StepDefs.theMessageShouldBeShownUStwo(String)"
});
formatter.result({
  "duration": 24152273,
  "status": "passed"
});
formatter.after({
  "duration": 520276349,
  "status": "passed"
});
formatter.after({
  "duration": 562368695,
  "status": "passed"
});
formatter.before({
  "duration": 1646445809,
  "status": "passed"
});
formatter.before({
  "duration": 1594992680,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Send Password Reset Email Unsuccessfully",
  "description": "",
  "id": "web-server-forgot-password;send-password-reset-email-unsuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I access the reset password page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I fill the \"email\" field with \"ze@mail.com\" - UStwo",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I press the \"Enviar o link de reset password\" button - UStwo",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the \"Não encontramos um utilizador associado ao email fornecido.\" error message should be shown - UStwo",
  "keyword": "Then "
});
formatter.match({
  "location": "US2StepDefs.iAccessTheResetPasswordPage()"
});
formatter.result({
  "duration": 498284033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "ze@mail.com",
      "offset": 31
    }
  ],
  "location": "US2StepDefs.iFillTheFieldWithUStwo(String,String)"
});
formatter.result({
  "duration": 76899990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enviar o link de reset password",
      "offset": 13
    }
  ],
  "location": "US2StepDefs.iPressTheButtonUStwo(String)"
});
formatter.result({
  "duration": 318104723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Não encontramos um utilizador associado ao email fornecido.",
      "offset": 5
    }
  ],
  "location": "US2StepDefs.theErrorMessageShouldBeShownUStwo(String)"
});
formatter.result({
  "duration": 25904890,
  "status": "passed"
});
formatter.after({
  "duration": 519514548,
  "status": "passed"
});
formatter.after({
  "duration": 569113317,
  "status": "passed"
});
});