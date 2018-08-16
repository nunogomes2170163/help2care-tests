$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "line": 1,
  "name": "Web Server Authentication",
  "description": "As a user\r\nI want to login on the website\r\nSo that I can manage all the resources applied to my role",
  "id": "web-server-authentication",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2655156381,
  "status": "passed"
});
formatter.before({
  "duration": 1627984983,
  "status": "passed"
});
formatter.before({
  "duration": 3200156445,
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
  "duration": 407947312,
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
  "duration": 64819478,
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
  "duration": 353680368,
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
  "duration": 61913036,
  "status": "passed"
});
formatter.after({
  "duration": 532174890,
  "status": "passed"
});
formatter.after({
  "duration": 82637386,
  "status": "passed"
});
formatter.after({
  "duration": 530550638,
  "status": "passed"
});
formatter.before({
  "duration": 1620071220,
  "status": "passed"
});
formatter.before({
  "duration": 1624466985,
  "status": "passed"
});
formatter.before({
  "duration": 3456114375,
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
  "duration": 337616535,
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
  "duration": 71976544,
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
  "duration": 361622210,
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
  "duration": 61145036,
  "status": "passed"
});
formatter.after({
  "duration": 529460995,
  "status": "passed"
});
formatter.after({
  "duration": 82096941,
  "status": "passed"
});
formatter.after({
  "duration": 540252755,
  "status": "passed"
});
formatter.before({
  "duration": 1640640584,
  "status": "passed"
});
formatter.before({
  "duration": 1632773500,
  "status": "passed"
});
formatter.before({
  "duration": 3178320573,
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
  "duration": 331401419,
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
  "duration": 93849613,
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
  "duration": 85930381,
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
  "duration": 353651195,
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
  "duration": 55041144,
  "status": "passed"
});
formatter.after({
  "duration": 538998280,
  "status": "passed"
});
formatter.after({
  "duration": 517877896,
  "status": "passed"
});
formatter.after({
  "duration": 86430346,
  "status": "passed"
});
formatter.before({
  "duration": 1619116507,
  "status": "passed"
});
formatter.before({
  "duration": 1633616259,
  "status": "passed"
});
formatter.before({
  "duration": 3534832989,
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
  "duration": 327523125,
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
  "duration": 94015903,
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
  "duration": 79264528,
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
  "duration": 959399530,
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
  "duration": 115837188,
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
  "duration": 17946273,
  "status": "passed"
});
formatter.after({
  "duration": 533669318,
  "status": "passed"
});
formatter.after({
  "duration": 83447689,
  "status": "passed"
});
formatter.after({
  "duration": 537519533,
  "status": "passed"
});
formatter.before({
  "duration": 1623954255,
  "status": "passed"
});
formatter.before({
  "duration": 1631601078,
  "status": "passed"
});
formatter.before({
  "duration": 3075853380,
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
  "duration": 333106993,
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
  "duration": 111894347,
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
  "duration": 76699055,
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
  "duration": 1183491996,
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
  "duration": 435175599,
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
  "duration": 37814735,
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
  "duration": 12778131,
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
  "duration": 14814463,
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
  "duration": 12990006,
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
  "duration": 34979040,
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
  "duration": 35636910,
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
  "duration": 12354017,
  "status": "passed"
});
formatter.after({
  "duration": 531233305,
  "status": "passed"
});
formatter.after({
  "duration": 76112297,
  "status": "passed"
});
formatter.after({
  "duration": 532318571,
  "status": "passed"
});
formatter.before({
  "duration": 1569884234,
  "status": "passed"
});
formatter.before({
  "duration": 1623443349,
  "status": "passed"
});
formatter.before({
  "duration": 4419549009,
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
  "duration": 1618761316,
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
  "duration": 51479386,
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
  "duration": 265613735,
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
  "duration": 47792545,
  "status": "passed"
});
formatter.after({
  "duration": 532368166,
  "status": "passed"
});
formatter.after({
  "duration": 79412585,
  "status": "passed"
});
formatter.after({
  "duration": 533945011,
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
  "duration": 1631366228,
  "status": "passed"
});
formatter.before({
  "duration": 1600966748,
  "status": "passed"
});
formatter.before({
  "duration": 3196358743,
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
  "duration": 324845698,
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
  "duration": 550512456,
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
  "duration": 25564286,
  "status": "passed"
});
formatter.match({
  "location": "US2StepDefs.shouldBePresentTheFieldToFillWithAnEmail()"
});
formatter.result({
  "duration": 23469241,
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
  "duration": 23857982,
  "status": "passed"
});
formatter.after({
  "duration": 518479242,
  "status": "passed"
});
formatter.after({
  "duration": 84865171,
  "status": "passed"
});
formatter.after({
  "duration": 538021323,
  "status": "passed"
});
formatter.before({
  "duration": 1643766194,
  "status": "passed"
});
formatter.before({
  "duration": 1624991020,
  "status": "passed"
});
formatter.before({
  "duration": 3672230357,
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
  "duration": 577907399,
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
  "duration": 86946358,
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
  "duration": 1316097200,
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
  "duration": 23149058,
  "status": "passed"
});
formatter.after({
  "duration": 518264815,
  "status": "passed"
});
formatter.after({
  "duration": 85298402,
  "status": "passed"
});
formatter.after({
  "duration": 530077292,
  "status": "passed"
});
formatter.before({
  "duration": 1642432585,
  "status": "passed"
});
formatter.before({
  "duration": 1622241753,
  "status": "passed"
});
formatter.before({
  "duration": 3122440317,
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
  "duration": 598009252,
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
  "duration": 77618760,
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
  "duration": 353332470,
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
  "duration": 23254084,
  "status": "passed"
});
formatter.after({
  "duration": 519513089,
  "status": "passed"
});
formatter.after({
  "duration": 570293033,
  "status": "passed"
});
formatter.after({
  "duration": 84599690,
  "status": "passed"
});
formatter.uri("US3.feature");
formatter.feature({
  "line": 1,
  "name": "Manage Users",
  "description": "As an admin\r\nI want to manage all the users\r\nSo that she/he can use the Web or Mobile App",
  "id": "manage-users",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "#CREATES"
    }
  ],
  "line": 7,
  "name": "Access User Create Page",
  "description": "",
  "id": "manage-users;access-user-create-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"\u003ctext\u003e\" button -UStrhee",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"\u003cpage\u003e\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"\u003cuser\u003e\" form should be shown",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "manage-users;access-user-create-page;",
  "rows": [
    {
      "cells": [
        "text",
        "page",
        "user"
      ],
      "line": 13,
      "id": "manage-users;access-user-create-page;;1"
    },
    {
      "cells": [
        "new admin",
        "new admin",
        "admin"
      ],
      "line": 14,
      "id": "manage-users;access-user-create-page;;2"
    },
    {
      "cells": [
        "new healthcare professional",
        "new healthcare professional",
        "healthcare professional"
      ],
      "line": 15,
      "id": "manage-users;access-user-create-page;;3"
    },
    {
      "cells": [
        "new caregiver",
        "new caregiver",
        "caregiver"
      ],
      "line": 16,
      "id": "manage-users;access-user-create-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1575530826,
  "status": "passed"
});
formatter.before({
  "duration": 1642485828,
  "status": "passed"
});
formatter.before({
  "duration": 3494165054,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Access User Create Page",
  "description": "",
  "id": "manage-users;access-user-create-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new admin\" button -UStrhee",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new admin\" page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"admin\" form should be shown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessTheDashboardUSthree(String)"
});
formatter.result({
  "duration": 114943011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUStrhee(String)"
});
formatter.result({
  "duration": 190712151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePage(String)"
});
formatter.result({
  "duration": 25062496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFormShouldBeShown(String)"
});
formatter.result({
  "duration": 176679910,
  "status": "passed"
});
formatter.after({
  "duration": 518040176,
  "status": "passed"
});
formatter.after({
  "duration": 81159367,
  "status": "passed"
});
formatter.after({
  "duration": 550554758,
  "status": "passed"
});
formatter.before({
  "duration": 1631022342,
  "status": "passed"
});
formatter.before({
  "duration": 1629299628,
  "status": "passed"
});
formatter.before({
  "duration": 3191700414,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Access User Create Page",
  "description": "",
  "id": "manage-users;access-user-create-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new healthcare professional\" button -UStrhee",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new healthcare professional\" page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"healthcare professional\" form should be shown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessTheDashboardUSthree(String)"
});
formatter.result({
  "duration": 118594478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUStrhee(String)"
});
formatter.result({
  "duration": 204197747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePage(String)"
});
formatter.result({
  "duration": 23863817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthcare professional",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFormShouldBeShown(String)"
});
formatter.result({
  "duration": 242680199,
  "status": "passed"
});
formatter.after({
  "duration": 517038421,
  "status": "passed"
});
formatter.after({
  "duration": 84033353,
  "status": "passed"
});
formatter.after({
  "duration": 542314250,
  "status": "passed"
});
formatter.before({
  "duration": 1632455141,
  "status": "passed"
});
formatter.before({
  "duration": 1638231191,
  "status": "passed"
});
formatter.before({
  "duration": 4288012296,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Access User Create Page",
  "description": "",
  "id": "manage-users;access-user-create-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new caregiver\" button -UStrhee",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new caregiver\" page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"caregiver\" form should be shown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessTheDashboardUSthree(String)"
});
formatter.result({
  "duration": 142990353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUStrhee(String)"
});
formatter.result({
  "duration": 292831082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePage(String)"
});
formatter.result({
  "duration": 77378441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "caregiver",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFormShouldBeShown(String)"
});
formatter.result({
  "duration": 292667343,
  "status": "passed"
});
formatter.after({
  "duration": 517119013,
  "status": "passed"
});
formatter.after({
  "duration": 79709794,
  "status": "passed"
});
formatter.after({
  "duration": 539094555,
  "status": "passed"
});
formatter.before({
  "duration": 1632677956,
  "status": "passed"
});
formatter.before({
  "duration": 1611419361,
  "status": "passed"
});
formatter.before({
  "duration": 3145987233,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create New Admin Successfully",
  "description": "",
  "id": "manage-users;create-new-admin-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I access the \"new admin\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I fill the \"username\" field with \"cucumber\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill the \"name\" field with \"Cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I fill the \"email\" field with \"cucumber@gmail.com\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I fill the \"password\" field with \"cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I fill the \"password_confirmation\" field with \"cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should be redirected to the \"admin\" dashboard - USthree",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the \"Cucumber\" user should be present in the \"users\" table",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 517032950,
  "status": "passed"
});
formatter.after({
  "duration": 81720599,
  "status": "passed"
});
formatter.after({
  "duration": 530197999,
  "status": "passed"
});
formatter.before({
  "duration": 1635125639,
  "status": "passed"
});
formatter.before({
  "duration": 1621835507,
  "status": "passed"
});
formatter.before({
  "duration": 3515597599,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Create New Healthcare Professional Successfully",
  "description": "",
  "id": "manage-users;create-new-healthcare-professional-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I access the \"new healthcare professional\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I fill the \"username\" field with \"cucumber\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I fill the \"name\" field with \"Cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I fill the \"email\" field with \"cucumber@gmail.com\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I fill the \"job\" field with \"Medic\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I fill the \"facility\" field with \"Leiria\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I fill the \"password\" field with \"cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I fill the \"password_confirmation\" field with \"cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should be redirected to the \"admin\" dashboard - USthree",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "the \"Cucumber\" user should be present in the \"users\" table",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 518390626,
  "status": "passed"
});
formatter.after({
  "duration": 88315340,
  "status": "passed"
});
formatter.after({
  "duration": 82622434,
  "status": "passed"
});
formatter.before({
  "duration": 1624162483,
  "status": "passed"
});
formatter.before({
  "duration": 1624522780,
  "status": "passed"
});
formatter.before({
  "duration": 3207472143,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Create New Caregiver Successfully",
  "description": "",
  "id": "manage-users;create-new-caregiver-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I access the \"new caregiver\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I fill the \"username\" field with \"cucumber\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I fill the \"name\" field with \"Cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I fill the \"email\" field with \"cucumber@gmail.com\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I fill the \"gender\" field with \"male\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I fill the \"birthDate\" field with \"12-12-1994\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I fill the \"experienceNumber\" field with \"7\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I fill the \"experiencePeriod\" field with \"years\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I fill the \"password\" field with \"cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I fill the \"password_confirmation\" field with \"cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should be redirected to the \"admin\" dashboard - USthree",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "the \"Cucumber\" user should be present in the \"users\" table",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 517311195,
  "status": "passed"
});
formatter.after({
  "duration": 82759551,
  "status": "passed"
});
formatter.after({
  "duration": 535202038,
  "status": "passed"
});
formatter.before({
  "duration": 1622321251,
  "status": "passed"
});
formatter.before({
  "duration": 1619051231,
  "status": "passed"
});
formatter.before({
  "duration": 3515089973,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 58,
      "value": "#DETAILS"
    }
  ],
  "line": 59,
  "name": "Access Admin User Details",
  "description": "",
  "id": "manage-users;access-admin-user-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "I press the \"Detalhes\" button of the \"Admin\" user",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I should be redirected to the \"details\" page of \"Admin\" user",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "the field \"Utilizador\" should show \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the field \"Nome\" should show \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the field \"Email\" should show \"admin@mail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the field \"Função\" should show \"Administador\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the field \"Data da criação\" should show \"2018-01-26 19:36:10\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the \"Editar\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the \"Bloquear\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the \"Voltar Atrás\" button should be present",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessTheDashboardUSthree(String)"
});
formatter.result({
  "duration": 118006626,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 519082411,
  "status": "passed"
});
formatter.after({
  "duration": 82320120,
  "status": "passed"
});
formatter.after({
  "duration": 542188802,
  "status": "passed"
});
formatter.before({
  "duration": 1636062483,
  "status": "passed"
});
formatter.before({
  "duration": 1633669866,
  "status": "passed"
});
formatter.before({
  "duration": 3080725407,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Access Healthcare Professional User Details",
  "description": "",
  "id": "manage-users;access-healthcare-professional-user-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I press the \"Detalhes\" button of the \"Alexandra Teixeira\" user",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I should be redirected to the \"details\" page of \"Alexandra Teixeira\" user",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "the field \"Utilizador\" should show \"alexandra.teixeira\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the field \"Nome\" should show \"Alexandra Teixeira\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the field \"Email\" should show \"maxxabersi@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the field \"Função\" should show \"Profissional de Saúde\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the field \"Trabalho/Estatuto\" should show \"Enfermeira\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the field \"Local de Trabalho\" should show \"Leiria\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the field \"Data da criação\" should show \"2018-06-13 14:34:58\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the \"Editar\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the \"Bloquear\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the \"Voltar Atrás\" button should be present",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessTheDashboardUSthree(String)"
});
formatter.result({
  "duration": 115806920,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 517777976,
  "status": "passed"
});
formatter.after({
  "duration": 83514424,
  "status": "passed"
});
formatter.after({
  "duration": 529676882,
  "status": "passed"
});
formatter.before({
  "duration": 1640154475,
  "status": "passed"
});
