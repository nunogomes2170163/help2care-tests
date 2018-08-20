$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US4.feature");
formatter.feature({
  "line": 1,
  "name": "Manage Needs",
  "description": "As an admin\r\nI want to manage all the needs\r\nSo that I can use them on patients",
  "id": "manage-needs",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4422907645,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#CREATE"
    }
  ],
  "line": 7,
  "name": "Access New Need Page",
  "description": "",
  "id": "manage-needs;access-new-need-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I access the \"needs\" dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new need\" button - USfour",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new need\" page - USfour",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"Nova Necessidade\" text should be shown",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "needs",
      "offset": 14
    }
  ],
  "location": "US4StepDefs.iAccessTheDashboard(String)"
});
formatter.result({
  "duration": 678893291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new need",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "duration": 193891732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new need",
      "offset": 31
    }
  ],
  "location": "US4StepDefs.iShouldBeRedirectedToThePageUSfour(String)"
});
formatter.result({
  "duration": 25949745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nova Necessidade",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "duration": 23841571,
  "status": "passed"
});
formatter.after({
  "duration": 533685364,
  "status": "passed"
});
formatter.before({
  "duration": 4444375197,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create New Need Successfully",
  "description": "",
  "id": "manage-needs;create-new-need-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I access the \"new need\" page - USfour",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I fill the \"description\" field with \"Cucumber\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I press the \"create\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be redirected to the \"needs\" page - USfour",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the \"Cucumber\" need should be present in the \"needs\" table",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new need",
      "offset": 14
    }
  ],
  "location": "US4StepDefs.iAccessThePageUSfour(String)"
});
formatter.result({
  "duration": 137888582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber",
      "offset": 37
    }
  ],
  "location": "US4StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 69077761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "duration": 356243288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "needs",
      "offset": 31
    }
  ],
  "location": "US4StepDefs.iShouldBeRedirectedToThePageUSfour(String)"
});
formatter.result({
  "duration": 52926407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 5
    },
    {
      "val": "needs",
      "offset": 46
    }
  ],
  "location": "US4StepDefs.theNeedShouldBePresentInTheTable(String,String)"
});
formatter.result({
  "duration": 160501571,
  "status": "passed"
});
formatter.after({
  "duration": 529789931,
  "status": "passed"
});
formatter.before({
  "duration": 2852074896,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#DETAILS"
    }
  ],
  "line": 21,
  "name": "Access Need Details",
  "description": "",
  "id": "manage-needs;access-need-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I access the \"needs\" page - USfour",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I press the \"details\" button of the \"Acamado\" need",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should be redirected to the \"details\" page of \"Acamado\" need",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the field \"need\" should show \"Acamado\" - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the field \"created_by\" should show \"jose.silva\" - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the \"edit\" button should be present - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the \"delete\" button should be present - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the \"back\" button should be present - USfour",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "needs",
      "offset": 14
    }
  ],
  "location": "US4StepDefs.iAccessThePageUSfour(String)"
});
formatter.result({
  "duration": 328380470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 13
    },
    {
      "val": "Acamado",
      "offset": 37
    }
  ],
  "location": "US4StepDefs.iPressTheButtonOfTheNeed(String,String)"
});
formatter.result({
  "duration": 368381419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Acamado",
      "offset": 49
    }
  ],
  "location": "US4StepDefs.iShouldBeRedirectedToThePageOfNeed(String,String)"
});
formatter.result({
  "duration": 25696297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "need",
      "offset": 11
    },
    {
      "val": "Acamado",
      "offset": 30
    }
  ],
  "location": "US4StepDefs.theFieldShouldShowUSfour(String,String)"
});
formatter.result({
  "duration": 7661409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "created_by",
      "offset": 11
    },
    {
      "val": "jose.silva",
      "offset": 36
    }
  ],
  "location": "US4StepDefs.theFieldShouldShowUSfour(String,String)"
});
formatter.result({
  "duration": 12052433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theButtonShouldBePresentUSfour(String)"
});
formatter.result({
  "duration": 63088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theButtonShouldBePresentUSfour(String)"
});
formatter.result({
  "duration": 38290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theButtonShouldBePresentUSfour(String)"
});
formatter.result({
  "duration": 39020,
  "status": "passed"
});
formatter.after({
  "duration": 530731880,
  "status": "passed"
});
formatter.before({
  "duration": 3433916749,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#EDIT"
    }
  ],
  "line": 32,
  "name": "Access Edit Need Page",
  "description": "",
  "id": "manage-needs;access-edit-need-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I access the \"details\" page of the \"need\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I press the \"edit\" button - USfour",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I should be redirected to the \"edit\" page of the need",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the editable field \"description\" should show \"Alimentaion\" - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the \"save\" button should be present - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the \"cancel\" button should be present - USfour",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "need",
      "offset": 36
    }
  ],
  "location": "US4StepDefs.iAccessThePageOfThe(String,String)"
});
formatter.result({
  "duration": 222358083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "duration": 204319183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 31
    }
  ],
  "location": "US4StepDefs.iShouldBeRedirectedToThePageOfTheNeed(String)"
});
formatter.result({
  "duration": 23251896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 20
    },
    {
      "val": "Alimentaion",
      "offset": 46
    }
  ],
  "location": "US4StepDefs.theEditableFieldShouldShowUSfour(String,String)"
});
formatter.result({
  "duration": 13738679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theButtonShouldBePresentUSfour(String)"
});
formatter.result({
  "duration": 40479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theButtonShouldBePresentUSfour(String)"
});
formatter.result({
  "duration": 25892,
  "status": "passed"
});
formatter.after({
  "duration": 530821589,
  "status": "passed"
});
formatter.before({
  "duration": 3318870536,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Edit Need Successfully",
  "description": "",
  "id": "manage-needs;edit-need-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I access the \"edit need\" page of the \"need\"",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I fill the \"description\" field with \"Alimentation\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I press the \"save\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I should be redirected to the \"details\" page of the \"need\" - USfour",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "the field \"Necessidade\" should show the new need - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "should be present a log at the \"Registos\" section - USfour",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit need",
      "offset": 14
    },
    {
      "val": "need",
      "offset": 38
    }
  ],
  "location": "US4StepDefs.iAccessThePageOfThe(String,String)"
});
formatter.result({
  "duration": 368846741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Alimentation",
      "offset": 37
    }
  ],
  "location": "US4StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 81755972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "duration": 392990991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "need",
      "offset": 53
    }
  ],
  "location": "US4StepDefs.iShouldBeRedirectedToThePageOfTheUSfour(String,String)"
});
formatter.result({
  "duration": 22941924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Necessidade",
      "offset": 11
    }
  ],
  "location": "US4StepDefs.theFieldShouldShowTheNewNeedUSfour(String)"
});
formatter.result({
  "duration": 6577237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 32
    }
  ],
  "location": "US4StepDefs.shouldBePresentALogAtTheSectionUSfour(String)"
});
formatter.result({
  "duration": 70747,
  "status": "passed"
});
formatter.after({
  "duration": 532642765,
  "status": "passed"
});
formatter.before({
  "duration": 3320203780,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 48,
      "value": "#DELETE"
    }
  ],
  "line": 49,
  "name": "Delete Need",
  "description": "",
  "id": "manage-needs;delete-need",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "I access the \"details\" page of the \"Cucumber\" need",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I press the \"delete\" button - USfour",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I press the \"Sim\" button from the modal",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should be redirected to the \"needs\" page - USfour",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "the \"Cucumber\" need should not be present in the \"needs\" table",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "Cucumber",
      "offset": 36
    }
  ],
  "location": "US4StepDefs.iAccessThePageOfTheNeed(String,String)"
});
formatter.result({
  "duration": 3505543572,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text (\u0027Cucumber0\u0027) to be present in element [[PhantomJSDriver: phantomjs on XP (74fd3c90-a48c-11e8-9bbb-b32f468feb93)] -\u003e xpath: //table[@id\u003d\u0027needs\u0027]/tbody/tr/td] (tried for 3 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-HLMLFPV4\u0027, ip: \u0027192.168.56.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities {acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: phantomjs, cssSelectorsEnabled: true, databaseEnabled: false, driverName: ghostdriver, driverVersion: 1.2.0, handlesAlerts: false, javascriptEnabled: true, locationContextEnabled: false, nativeEvents: true, platform: XP, platformName: XP, proxy: Proxy(direct), rotatable: false, takesScreenshot: true, version: 2.1.1, webStorageEnabled: false}\nSession ID: 74fd3c90-a48c-11e8-9bbb-b32f468feb93\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat US4StepDefs.iAccessThePageOfTheNeed(US4StepDefs.java:209)\r\n\tat ✽.Given I access the \"details\" page of the \"Cucumber\" need(US4.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sim",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonFromTheModal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "needs",
      "offset": 31
    }
  ],
  "location": "US4StepDefs.iShouldBeRedirectedToThePageUSfour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 5
    },
    {
      "val": "needs",
      "offset": 50
    }
  ],
  "location": "US4StepDefs.theNeedShouldNotBePresentInTheTable(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 535778950,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 56,
      "value": "#ERRORS"
    }
  ],
  "line": 57,
  "name": "Description field already exists",
  "description": "",
  "id": "manage-needs;description-field-already-exists",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "I access the \"\u003cpage\u003e\" page - USfour",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I fill the \"description\" field with \"Acamado\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I press the \"\u003cbutton\u003e\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the \"Já existe uma necessidade com essa descrição. Escolha outra.\" error message should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "manage-needs;description-field-already-exists;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 63,
      "id": "manage-needs;description-field-already-exists;;1"
    },
    {
      "cells": [
        "new need",
        "create"
      ],
      "line": 64,
      "id": "manage-needs;description-field-already-exists;;2"
    },
    {
      "cells": [
        "edit need",
        "save"
      ],
      "line": 65,
      "id": "manage-needs;description-field-already-exists;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4860730038,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Description field already exists",
  "description": "",
  "id": "manage-needs;description-field-already-exists;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "I access the \"new need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I fill the \"description\" field with \"Acamado\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I press the \"create\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the \"Já existe uma necessidade com essa descrição. Escolha outra.\" error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new need",
      "offset": 14
    }
  ],
  "location": "US4StepDefs.iAccessThePageUSfour(String)"
});
formatter.result({
  "duration": 121345569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Acamado",
      "offset": 37
    }
  ],
  "location": "US4StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 78595718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "duration": 372640066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma necessidade com essa descrição. Escolha outra.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShown(String)"
});
formatter.result({
  "duration": 355540928,
  "error_message": "org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with class name \u0027alert\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"38\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:32801\",\"User-Agent\":\"okhttp/3.9.1\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"class name\\\",\\\"value\\\":\\\"alert\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/795d3b50-a48c-11e8-9666-7f898fe00174/element\"}}\nCommand duration or timeout: 0 milliseconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat US4StepDefs.theErrorMessageShouldBeShown(US4StepDefs.java:232)\r\n\tat ✽.Then the \"Já existe uma necessidade com essa descrição. Escolha outra.\" error message should be shown(US4.feature:61)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:140)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat US4StepDefs.theErrorMessageShouldBeShown(US4StepDefs.java:232)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with class name \u0027alert\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"38\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:32801\",\"User-Agent\":\"okhttp/3.9.1\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"class name\\\",\\\"value\\\":\\\"alert\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/795d3b50-a48c-11e8-9666-7f898fe00174/element\"}}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-HLMLFPV4\u0027, ip: \u0027192.168.56.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 529962420,
  "status": "passed"
});
formatter.before({
  "duration": 3180189886,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Description field already exists",
  "description": "",
  "id": "manage-needs;description-field-already-exists;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "I access the \"edit need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I fill the \"description\" field with \"Acamado\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I press the \"save\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the \"Já existe uma necessidade com essa descrição. Escolha outra.\" error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit need",
      "offset": 14
    }
  ],
  "location": "US4StepDefs.iAccessThePageUSfour(String)"
});
formatter.result({
  "duration": 167832586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Acamado",
      "offset": 37
    }
  ],
  "location": "US4StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 72812374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "duration": 381278797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma necessidade com essa descrição. Escolha outra.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShown(String)"
});
formatter.result({
  "duration": 351603557,
  "error_message": "org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with class name \u0027alert\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"38\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:25558\",\"User-Agent\":\"okhttp/3.9.1\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"class name\\\",\\\"value\\\":\\\"alert\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/7d2abe10-a48c-11e8-8920-ad302c1a4368/element\"}}\nCommand duration or timeout: 0 milliseconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat US4StepDefs.theErrorMessageShouldBeShown(US4StepDefs.java:232)\r\n\tat ✽.Then the \"Já existe uma necessidade com essa descrição. Escolha outra.\" error message should be shown(US4.feature:61)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:140)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat US4StepDefs.theErrorMessageShouldBeShown(US4StepDefs.java:232)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with class name \u0027alert\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"38\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:25558\",\"User-Agent\":\"okhttp/3.9.1\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"class name\\\",\\\"value\\\":\\\"alert\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/7d2abe10-a48c-11e8-8920-ad302c1a4368/element\"}}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-HLMLFPV4\u0027, ip: \u0027192.168.56.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 532002764,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "Description field empty",
  "description": "",
  "id": "manage-needs;description-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I access the \"\u003cpage\u003e\" page - USfour",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "the \"description\" field is empty",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I press the \"\u003cbutton\u003e\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "manage-needs;description-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 73,
      "id": "manage-needs;description-field-empty;;1"
    },
    {
      "cells": [
        "new need",
        "create"
      ],
      "line": 74,
      "id": "manage-needs;description-field-empty;;2"
    },
    {
      "cells": [
        "edit need",
        "save"
      ],
      "line": 75,
      "id": "manage-needs;description-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3208793717,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Description field empty",
  "description": "",
  "id": "manage-needs;description-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I access the \"new need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "the \"description\" field is empty",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I press the \"create\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new need",
      "offset": 14
    }
  ],
  "location": "US4StepDefs.iAccessThePageUSfour(String)"
});
formatter.result({
  "duration": 286139338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theFieldIsEmpty(String)"
});
formatter.result({
  "duration": 30572336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "duration": 349774723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShown(String)"
});
formatter.result({
  "duration": 24045424,
  "status": "passed"
});
formatter.after({
  "duration": 70915711,
  "status": "passed"
});
formatter.before({
  "duration": 3340625450,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Description field empty",
  "description": "",
  "id": "manage-needs;description-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 68,
  "name": "I access the \"edit need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "the \"description\" field is empty",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I press the \"save\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit need",
      "offset": 14
    }
  ],
  "location": "US4StepDefs.iAccessThePageUSfour(String)"
});
formatter.result({
  "duration": 259773502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theFieldIsEmpty(String)"
});
formatter.result({
  "duration": 33900704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "duration": 347528704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShown(String)"
});
formatter.result({
  "duration": 26033984,
  "status": "passed"
});
formatter.after({
  "duration": 541905816,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 77,
  "name": "Description field min length",
  "description": "",
  "id": "manage-needs;description-field-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "I access the \"\u003cpage\u003e\" page - USfour",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I fill the \"description\" field with \"12\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I press the \"\u003cbutton\u003e\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the \"A descrição tem que ter pelo menos 5 letras.\" error message should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 82,
  "name": "",
  "description": "",
  "id": "manage-needs;description-field-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 83,
      "id": "manage-needs;description-field-min-length;;1"
    },
    {
      "cells": [
        "new need",
        "create"
      ],
      "line": 84,
      "id": "manage-needs;description-field-min-length;;2"
    },
    {
      "cells": [
        "edit need",
        "save"
      ],
      "line": 85,
      "id": "manage-needs;description-field-min-length;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3330049212,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Description field min length",
  "description": "",
  "id": "manage-needs;description-field-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "I access the \"new need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I fill the \"description\" field with \"12\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I press the \"create\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the \"A descrição tem que ter pelo menos 5 letras.\" error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new need",
      "offset": 14
    }
  ],
  "location": "US4StepDefs.iAccessThePageUSfour(String)"
});
formatter.result({
  "duration": 176922417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 37
    }
  ],
  "location": "US4StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 60868614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "duration": 411949595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ter pelo menos 5 letras.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShown(String)"
});
formatter.result({
  "duration": 389883250,
  "error_message": "org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with class name \u0027alert\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"38\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:12323\",\"User-Agent\":\"okhttp/3.9.1\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"class name\\\",\\\"value\\\":\\\"alert\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/850cdeb0-a48c-11e8-b87b-fd23310966cc/element\"}}\nCommand duration or timeout: 0 milliseconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat US4StepDefs.theErrorMessageShouldBeShown(US4StepDefs.java:232)\r\n\tat ✽.Then the \"A descrição tem que ter pelo menos 5 letras.\" error message should be shown(US4.feature:81)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:140)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat US4StepDefs.theErrorMessageShouldBeShown(US4StepDefs.java:232)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with class name \u0027alert\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"38\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:12323\",\"User-Agent\":\"okhttp/3.9.1\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"class name\\\",\\\"value\\\":\\\"alert\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/850cdeb0-a48c-11e8-b87b-fd23310966cc/element\"}}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-HLMLFPV4\u0027, ip: \u0027192.168.56.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 530864985,
  "status": "passed"
});
formatter.before({
  "duration": 5098555349,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Description field min length",
  "description": "",
  "id": "manage-needs;description-field-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "I access the \"edit need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I fill the \"description\" field with \"12\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I press the \"save\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the \"A descrição tem que ter pelo menos 5 letras.\" error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit need",
      "offset": 14
    }
  ],
  "location": "US4StepDefs.iAccessThePageUSfour(String)"
});
formatter.result({
  "duration": 169021054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 37
    }
  ],
  "location": "US4StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 62092820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US4StepDefs.iPressTheButtonUSfour(String)"
});
formatter.result({
  "duration": 398316671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ter pelo menos 5 letras.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShown(String)"
});
formatter.result({
  "duration": 402026122,
  "error_message": "org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with class name \u0027alert\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"38\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:20809\",\"User-Agent\":\"okhttp/3.9.1\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"class name\\\",\\\"value\\\":\\\"alert\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/87f92930-a48c-11e8-9baf-e34571e38e8f/element\"}}\nCommand duration or timeout: 0 milliseconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat US4StepDefs.theErrorMessageShouldBeShown(US4StepDefs.java:232)\r\n\tat ✽.Then the \"A descrição tem que ter pelo menos 5 letras.\" error message should be shown(US4.feature:81)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:140)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat US4StepDefs.theErrorMessageShouldBeShown(US4StepDefs.java:232)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with class name \u0027alert\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"38\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:20809\",\"User-Agent\":\"okhttp/3.9.1\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"class name\\\",\\\"value\\\":\\\"alert\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/87f92930-a48c-11e8-9baf-e34571e38e8f/element\"}}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-HLMLFPV4\u0027, ip: \u0027192.168.56.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 530443059,
  "status": "passed"
});
});