$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US3.feature");
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
  "duration": 4084816423,
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
  "duration": 248002602,
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
  "duration": 159025641,
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
  "duration": 25997076,
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
  "duration": 202525861,
  "status": "passed"
});
formatter.after({
  "duration": 541518777,
  "status": "passed"
});
formatter.before({
  "duration": 2928631209,
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
  "duration": 120796749,
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
  "duration": 189386378,
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
  "duration": 28847349,
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
  "duration": 236886682,
  "status": "passed"
});
formatter.after({
  "duration": 533787009,
  "status": "passed"
});
formatter.before({
  "duration": 3734990571,
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
  "duration": 122040644,
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
  "duration": 326777145,
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
  "duration": 42192143,
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
  "duration": 320920154,
  "status": "passed"
});
formatter.after({
  "duration": 529038255,
  "status": "passed"
});
formatter.before({
  "duration": 4145123994,
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
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 185713770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    },
    {
      "val": "cucumber",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 90584434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 79670177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "cucumber@gmail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 85609583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "cucumber",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 67213722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "cucumber",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 69671974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 596409516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToTheDashboardUSthree(String)"
});
formatter.result({
  "duration": 116467367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 5
    },
    {
      "val": "users",
      "offset": 46
    }
  ],
  "location": "US3StepDefs.theUserShouldBePresentInTheTable(String,String)"
});
formatter.result({
  "duration": 198623875,
  "status": "passed"
});
formatter.after({
  "duration": 533548878,
  "status": "passed"
});
formatter.before({
  "duration": 3049970225,
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
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 125135612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    },
    {
      "val": "cucumber",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 100763148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 84156732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "cucumber@gmail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 93915709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 12
    },
    {
      "val": "Medic",
      "offset": 29
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 66285998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 12
    },
    {
      "val": "Leiria",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 63770857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "cucumber",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 68568842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "cucumber",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 73022577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 469309783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToTheDashboardUSthree(String)"
});
formatter.result({
  "duration": 109192898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 5
    },
    {
      "val": "users",
      "offset": 46
    }
  ],
  "location": "US3StepDefs.theUserShouldBePresentInTheTable(String,String)"
});
formatter.result({
  "duration": 198909777,
  "status": "passed"
});
formatter.after({
  "duration": 532359684,
  "status": "passed"
});
formatter.before({
  "duration": 2862072072,
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
  "name": "I fill the \"gender\" field with \"Masculino\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I fill the \"birthDate\" field with \"12-12-1994\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I fill the \"location\" field with \"Leiria\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I fill the \"experienceNumber\" field with \"7\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I fill the \"experiencePeriod\" field with \"Ano/s\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I fill the \"password\" field with \"cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I fill the \"password_confirmation\" field with \"cucumber\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I should be redirected to the \"admin\" dashboard - USthree",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the \"Cucumber\" user should be present in the \"users\" table",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 340842530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    },
    {
      "val": "cucumber",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 94179367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 88154627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "cucumber@gmail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 94170614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 12
    },
    {
      "val": "Masculino",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 82962067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 12
    },
    {
      "val": "12-12-1994",
      "offset": 35
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 73332183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 12
    },
    {
      "val": "Leiria",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 79519203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experienceNumber",
      "offset": 12
    },
    {
      "val": "7",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 89907968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experiencePeriod",
      "offset": 12
    },
    {
      "val": "Ano/s",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 83328562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "cucumber",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 66501883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "cucumber",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 69524282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 535226004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToTheDashboardUSthree(String)"
});
formatter.result({
  "duration": 114572898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 5
    },
    {
      "val": "users",
      "offset": 46
    }
  ],
  "location": "US3StepDefs.theUserShouldBePresentInTheTable(String,String)"
});
formatter.result({
  "duration": 187680809,
  "status": "passed"
});
formatter.after({
  "duration": 536524964,
  "status": "passed"
});
formatter.before({
  "duration": 3036679402,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 59,
      "value": "#DETAILS"
    }
  ],
  "line": 60,
  "name": "Access Admin User Details",
  "description": "",
  "id": "manage-users;access-admin-user-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I press the \"Detalhes\" button of the \"Admin\" user",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I should be redirected to the \"details\" page of \"Admin\" user",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "the field \"utilizador\" should show \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the field \"nome\" should show \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the field \"email\" should show \"admin@mail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the field \"função\" should show \"Administador\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the field \"created_at\" should show \"2018-01-26 19:36:10\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the \"edit\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the \"block\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the \"back\" button should be present",
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
  "duration": 230825110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Detalhes",
      "offset": 13
    },
    {
      "val": "Admin",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.iPressTheButtonOfTheUser(String,String)"
});
formatter.result({
  "duration": 453322578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Admin",
      "offset": 49
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfUser(String,String)"
});
formatter.result({
  "duration": 24728019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utilizador",
      "offset": 11
    },
    {
      "val": "admin",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 11935703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nome",
      "offset": 11
    },
    {
      "val": "Admin",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 6789456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 11
    },
    {
      "val": "admin@mail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 6820818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "função",
      "offset": 11
    },
    {
      "val": "Administador",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5187089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "created_at",
      "offset": 11
    },
    {
      "val": "2018-01-26 19:36:10",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 7260248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 90074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 60170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 24433,
  "status": "passed"
});
formatter.after({
  "duration": 541681421,
  "status": "passed"
});
formatter.before({
  "duration": 3027506817,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Access Healthcare Professional User Details",
  "description": "",
  "id": "manage-users;access-healthcare-professional-user-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I press the \"Detalhes\" button of the \"Alexandra Teixeira\" user",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I should be redirected to the \"details\" page of \"Alexandra Teixeira\" user",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "the field \"utilizador\" should show \"alexandra.teixeira\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the field \"nome\" should show \"Alexandra Teixeira\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the field \"email\" should show \"maxxabersi@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the field \"função\" should show \"Profissional de Saúde\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the field \"job\" should show \"Enfermeira\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the field \"facility\" should show \"Leiria\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the field \"created_at\" should show \"2018-09-20 12:38:27\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the \"edit\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the \"block\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the \"back\" button should be present",
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
  "duration": 118491659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Detalhes",
      "offset": 13
    },
    {
      "val": "Alexandra Teixeira",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.iPressTheButtonOfTheUser(String,String)"
});
formatter.result({
  "duration": 501320293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Alexandra Teixeira",
      "offset": 49
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfUser(String,String)"
});
formatter.result({
  "duration": 31249807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utilizador",
      "offset": 11
    },
    {
      "val": "alexandra.teixeira",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 9411081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nome",
      "offset": 11
    },
    {
      "val": "Alexandra Teixeira",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 8458558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 11
    },
    {
      "val": "maxxabersi@gmail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 4019775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "função",
      "offset": 11
    },
    {
      "val": "Profissional de Saúde",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5125095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 11
    },
    {
      "val": "Enfermeira",
      "offset": 29
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 7733227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 11
    },
    {
      "val": "Leiria",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 6127942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "created_at",
      "offset": 11
    },
    {
      "val": "2018-09-20 12:38:27",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 7943278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 74029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 23339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 20422,
  "status": "passed"
});
formatter.after({
  "duration": 531754695,
  "status": "passed"
});
formatter.before({
  "duration": 4350461474,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Access Caregiver User Details",
  "description": "",
  "id": "manage-users;access-caregiver-user-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "I press the \"Detalhes\" button of the \"Ana Luisa Roque\" user",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I should be redirected to the \"details\" page of \"Ana Luisa Roque\" user",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "the field \"utilizador\" should show \"ana.roque.cuidador\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the field \"nome\" should show \"Ana Luisa Roque\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the field \"função\" should show \"Cuidador\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the field \"email\" should show \"roque.ana2@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the field \"birthDate\" should show \"26-07-1992\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the field \"location\" should show \"Leiria\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the field \"gender\" should show \"Feminino\"",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the field \"experienceTime\" should show \"0 Ano/s\"",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the field \"healthcareProsCount\" should show \"1/2\"",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the field \"created_by\" should show \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the field \"created_at\" should show \"2018-04-14 10:46:17\"",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the \"edit\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the \"block\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the \"back\" button should be present",
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
  "duration": 130459454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Detalhes",
      "offset": 13
    },
    {
      "val": "Ana Luisa Roque",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.iPressTheButtonOfTheUser(String,String)"
});
formatter.result({
  "duration": 561545450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Ana Luisa Roque",
      "offset": 49
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfUser(String,String)"
});
formatter.result({
  "duration": 25416884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utilizador",
      "offset": 11
    },
    {
      "val": "ana.roque.cuidador",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 11504296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nome",
      "offset": 11
    },
    {
      "val": "Ana Luisa Roque",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 6215463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "função",
      "offset": 11
    },
    {
      "val": "Cuidador",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 8063255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 11
    },
    {
      "val": "roque.ana2@gmail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 4977403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 11
    },
    {
      "val": "26-07-1992",
      "offset": 35
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5099933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 11
    },
    {
      "val": "Leiria",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 152433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 11
    },
    {
      "val": "Feminino",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 6197230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experienceTime",
      "offset": 11
    },
    {
      "val": "0 Ano/s",
      "offset": 40
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5389846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthcareProsCount",
      "offset": 11
    },
    {
      "val": "1/2",
      "offset": 45
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 6175714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "created_by",
      "offset": 11
    },
    {
      "val": "admin",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5296126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "created_at",
      "offset": 11
    },
    {
      "val": "2018-04-14 10:46:17",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 6377742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 57618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 56889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 61629,
  "status": "passed"
});
formatter.after({
  "duration": 533792114,
  "status": "passed"
});
formatter.before({
  "duration": 2910928588,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 108,
      "value": "#DASHBOARD USER BLOCK \u0026 UNBLOCK"
    }
  ],
  "line": 109,
  "name": "Block User on the Admin Dashboard",
  "description": "",
  "id": "manage-users;block-user-on-the-admin-dashboard",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 110,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "I press the \"Bloquear\" button of the \"Alexandra Teixeira\" user",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "I should be redirected to the \"admin\" dashboard - USthree",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "the \"Desbloquear\" button should be present in the \"Alexandra Teixeira\" user options",
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
  "duration": 118179865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 13
    },
    {
      "val": "Alexandra Teixeira",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.iPressTheButtonOfTheUser(String,String)"
});
formatter.result({
  "duration": 606141143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToTheDashboardUSthree(String)"
});
formatter.result({
  "duration": 110963744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desbloquear",
      "offset": 5
    },
    {
      "val": "Alexandra Teixeira",
      "offset": 51
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresentInTheUserOptions(String,String)"
});
formatter.result({
  "duration": 176599897,
  "status": "passed"
});
formatter.after({
  "duration": 540061549,
  "status": "passed"
});
formatter.before({
  "duration": 2963973360,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Unblock User on the Admin Dashboard",
  "description": "",
  "id": "manage-users;unblock-user-on-the-admin-dashboard",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 116,
  "name": "I access the \"admin\" dashboard - USthree",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "the \"Alexandra Teixeira\" user is blocked",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I press the \"Desbloquear\" button of the \"Alexandra Teixeira\" user",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "I should be redirected to the \"admin\" dashboard - USthree",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "the \"Bloquear\" button should be present in the \"Alexandra Teixeira\" user options",
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
  "duration": 117466203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alexandra Teixeira",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theUserIsBlocked(String)"
});
formatter.result({
  "duration": 188157435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desbloquear",
      "offset": 13
    },
    {
      "val": "Alexandra Teixeira",
      "offset": 41
    }
  ],
  "location": "US3StepDefs.iPressTheButtonOfTheUser(String,String)"
});
formatter.result({
  "duration": 630374668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToTheDashboardUSthree(String)"
});
formatter.result({
  "duration": 31942318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    },
    {
      "val": "Alexandra Teixeira",
      "offset": 48
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresentInTheUserOptions(String,String)"
});
formatter.result({
  "duration": 169736047,
  "status": "passed"
});
formatter.after({
  "duration": 531935571,
  "status": "passed"
});
formatter.before({
  "duration": 2934825521,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 122,
      "value": "#EDIT"
    }
  ],
  "line": 123,
  "name": "Access Admin Edit Page",
  "description": "",
  "id": "manage-users;access-admin-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 124,
  "name": "I access the \"details\" page of the Cucumber \"admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I press the \"Editar\" button - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "I should be redirected to the \"edit\" page of the \"amdin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "the editable field \"name\" should show \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the editable field \"email\" should show \"admin@mail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the field \"password\" should be empty",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "the field \"password_confirmation\" should be empty",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "the \"save\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the \"cancel\" button should be present",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 45
    }
  ],
  "location": "US3StepDefs.iAccessThePageOfTheCucumber(String,String)"
});
formatter.result({
  "duration": 287428711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 205237195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 31
    },
    {
      "val": "amdin",
      "offset": 50
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfThe(String,String)"
});
formatter.result({
  "duration": 114142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 20
    },
    {
      "val": "Admin",
      "offset": 39
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 35738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 20
    },
    {
      "val": "admin@mail.com",
      "offset": 40
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 12038540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 11
    }
  ],
  "location": "US3StepDefs.theFieldShouldBeEmpty(String)"
});
formatter.result({
  "duration": 10925563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 11
    }
  ],
  "location": "US3StepDefs.theFieldShouldBeEmpty(String)"
});
formatter.result({
  "duration": 12194255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 74393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 72935,
  "status": "passed"
});
formatter.after({
  "duration": 538554726,
  "status": "passed"
});
formatter.before({
  "duration": 3108735600,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "Edit Admin User Successfully Without Password",
  "description": "",
  "id": "manage-users;edit-admin-user-successfully-without-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 135,
  "name": "I access the \"edit\" page of the Cucumber \"admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "I edit the \"name\" field with \"Cucumber\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "I edit the \"email\" field with \"cucumber@gmail.com\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I press the \"Guardar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I should be redirected to the \"details\" page of the \"cucumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "the field \"utilizador\" should show \"cucumber\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the field \"name\" should show the new \"name\"",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the field \"email\" should show the new \"email\"",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the field \"função\" should show \"Administador\"",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "should be present a \"Foi atualizado.\" log at the beggining of the logs section - USfour",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iAccessThePageOfTheCucumber(String,String)"
});
formatter.result({
  "duration": 498864230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 73603864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "cucumber@gmail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 81374287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 428094229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "cucumber",
      "offset": 53
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfThe(String,String)"
});
formatter.result({
  "duration": 25145567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utilizador",
      "offset": 11
    },
    {
      "val": "cucumber",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 4701712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 11
    },
    {
      "val": "name",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 5912786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 11
    },
    {
      "val": "email",
      "offset": 39
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 6455053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "função",
      "offset": 11
    },
    {
      "val": "Administador",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5111602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizado.",
      "offset": 21
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSfour(String)"
});
formatter.result({
  "duration": 35710105,
  "status": "passed"
});
formatter.after({
  "duration": 532340357,
  "status": "passed"
});
formatter.before({
  "duration": 4703093473,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "Edit Admin User Successfully With Password",
  "description": "",
  "id": "manage-users;edit-admin-user-successfully-with-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 147,
  "name": "I access the \"edit\" page of the Cucumber \"admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "I edit the \"name\" field with \"Clemens Mann\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "I edit the \"email\" field with \"nella.kunze@example.org\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I fill the \"password\" field with \"123123\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I fill the \"password_confirmation\" field with \"123123\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I press the \"Guardar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I should be redirected to the \"details\" page of the \"cucumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "the field \"Utilizador\" should show \"teresa.olson\"",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the field \"name\" should show the new \"name\"",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "the field \"email\" should show the new \"email\"",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the field \"função\" should show \"Administador\"",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "should be present a \"Foi atualizado.\" log at the beggining of the logs section - USfour",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iAccessThePageOfTheCucumber(String,String)"
});
formatter.result({
  "duration": 172104225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Clemens Mann",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 76566091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "nella.kunze@example.org",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 88023345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 62517482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 57629423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 533775704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "cucumber",
      "offset": 53
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfThe(String,String)"
});
formatter.result({
  "duration": 32323400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Utilizador",
      "offset": 11
    },
    {
      "val": "teresa.olson",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 51418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 11
    },
    {
      "val": "name",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 7362720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 11
    },
    {
      "val": "email",
      "offset": 39
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 5902575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "função",
      "offset": 11
    },
    {
      "val": "Administador",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5681219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizado.",
      "offset": 21
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSfour(String)"
});
formatter.result({
  "duration": 32896663,
  "status": "passed"
});
formatter.after({
  "duration": 538680538,
  "status": "passed"
});
formatter.before({
  "duration": 2935826180,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "Access Healthcare Professional Edit Page",
  "description": "",
  "id": "manage-users;access-healthcare-professional-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 161,
  "name": "I access the \"details\" page of the Cucumber \"healthcare professional\"",
  "keyword": "Given "
});
formatter.step({
  "line": 162,
  "name": "I press the \"Editar\" button - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 163,
  "name": "I should be redirected to the \"edit\" page of the \"alexandra.teixeira\"",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "the editable field \"name\" should show \"Alexandra Teixeira\"",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "the editable field \"email\" should show \"maxxabersi@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "the editable field \"job\" should show \"Enfermeira\"",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "the editable field \"facility\" should show \"Leiria\"",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "the field \"password\" should be empty",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "the field \"password_confirmation\" should be empty",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the \"Guardar\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "the \"Cancelar\" button should be present",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "healthcare professional",
      "offset": 45
    }
  ],
  "location": "US3StepDefs.iAccessThePageOfTheCucumber(String,String)"
});
formatter.result({
  "duration": 316871570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 170090508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 31
    },
    {
      "val": "alexandra.teixeira",
      "offset": 50
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfThe(String,String)"
});
formatter.result({
  "duration": 76581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 20
    },
    {
      "val": "Alexandra Teixeira",
      "offset": 39
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 56524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 20
    },
    {
      "val": "maxxabersi@gmail.com",
      "offset": 40
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 12271930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 20
    },
    {
      "val": "Enfermeira",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 10139695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 20
    },
    {
      "val": "Leiria",
      "offset": 43
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 9978874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 11
    }
  ],
  "location": "US3StepDefs.theFieldShouldBeEmpty(String)"
});
formatter.result({
  "duration": 9803467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 11
    }
  ],
  "location": "US3StepDefs.theFieldShouldBeEmpty(String)"
});
formatter.result({
  "duration": 11909446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 31362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancelar",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 18598,
  "status": "passed"
});
formatter.after({
  "duration": 528253117,
  "status": "passed"
});
formatter.before({
  "duration": 3072784082,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "Edit Healthcare Professional User Successfully Without Password",
  "description": "",
  "id": "manage-users;edit-healthcare-professional-user-successfully-without-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 174,
  "name": "I access the \"edit\" page of the Cucumber \"healthcare professional\"",
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "I edit the \"name\" field with \"Ana Margarida Carvalho\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "I edit the \"email\" field with \"amargarida.carvalho@live.com.pt\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I edit the \"job\" field with \"Enfermeira\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I edit the \"facility\" field with \"Leiria\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I press the \"Guardar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I should be redirected to the \"details\" page of the \"ana.margarida.carvalho\"",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "the field \"utilizador\" should show \"ana.margarida.carvalho\"",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "the field \"name\" should show the new \"name\"",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "the field \"email\" should show the new \"email\"",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "the field \"função\" should show \"Profissional de Saúde\"",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the field \"job\" should show the new \"job\"",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the field \"facility\" should show the new \"facility\"",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "should be present a \"Foi atualizado.\" log at the beggining of the logs section - USfour",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "healthcare professional",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iAccessThePageOfTheCucumber(String,String)"
});
formatter.result({
  "duration": 270684813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Ana Margarida Carvalho",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 90389334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "amargarida.carvalho@live.com.pt",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 99590364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 12
    },
    {
      "val": "Enfermeira",
      "offset": 29
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 72815079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 12
    },
    {
      "val": "Leiria",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 77661930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 463224507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "ana.margarida.carvalho",
      "offset": 53
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfThe(String,String)"
});
formatter.result({
  "duration": 25562752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utilizador",
      "offset": 11
    },
    {
      "val": "ana.margarida.carvalho",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 7251131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 11
    },
    {
      "val": "name",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 6212911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 11
    },
    {
      "val": "email",
      "offset": 39
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 6772681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "função",
      "offset": 11
    },
    {
      "val": "Profissional de Saúde",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5473721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 11
    },
    {
      "val": "job",
      "offset": 37
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 5763635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 11
    },
    {
      "val": "facility",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 7345216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizado.",
      "offset": 21
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSfour(String)"
});
formatter.result({
  "duration": 34601138,
  "status": "passed"
});
formatter.after({
  "duration": 535030175,
  "status": "passed"
});
formatter.before({
  "duration": 2953750520,
  "status": "passed"
});
formatter.scenario({
  "line": 189,
  "name": "Edit Healthcare Professional User Successfully With Password",
  "description": "",
  "id": "manage-users;edit-healthcare-professional-user-successfully-with-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 190,
  "name": "I access the \"edit\" page of the Cucumber \"healthcare professional\"",
  "keyword": "Given "
});
formatter.step({
  "line": 191,
  "name": "I edit the \"name\" field with \"Ana Margarida Carvalho\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 192,
  "name": "I edit the \"email\" field with \"amargarida.carvalho@live.com.pt\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "I edit the \"job\" field with \"Enfermeira\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "I edit the \"facility\" field with \"Leiria\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "I fill the \"password\" field with \"123123\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "I fill the \"password_confirmation\" field with \"123123\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "I press the \"Guardar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "I should be redirected to the \"details\" page of the \"ana.margarida.carvalho\"",
  "keyword": "Then "
});
formatter.step({
  "line": 199,
  "name": "the field \"utilizador\" should show \"ana.margarida.carvalho\"",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "the field \"name\" should show the new \"name\"",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "the field \"email\" should show the new \"email\"",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "the field \"função\" should show \"Profissional de Saúde\"",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "the field \"job\" should show the new \"job\"",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "the field \"facility\" should show the new \"facility\"",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "should be present a \"Foi atualizado.\" log at the beggining of the logs section - USfour",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "healthcare professional",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iAccessThePageOfTheCucumber(String,String)"
});
formatter.result({
  "duration": 273922004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Ana Margarida Carvalho",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 88605361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "amargarida.carvalho@live.com.pt",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 96752490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 12
    },
    {
      "val": "Enfermeira",
      "offset": 29
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 73312491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 12
    },
    {
      "val": "Leiria",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 67821630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 59693099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 70439973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 511835601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "ana.margarida.carvalho",
      "offset": 53
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfThe(String,String)"
});
formatter.result({
  "duration": 25900074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utilizador",
      "offset": 11
    },
    {
      "val": "ana.margarida.carvalho",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5794268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 11
    },
    {
      "val": "name",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 6564818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 11
    },
    {
      "val": "email",
      "offset": 39
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 5280810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "função",
      "offset": 11
    },
    {
      "val": "Profissional de Saúde",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5185631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 11
    },
    {
      "val": "job",
      "offset": 37
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 6944077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 11
    },
    {
      "val": "facility",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 4662327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizado.",
      "offset": 21
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSfour(String)"
});
formatter.result({
  "duration": 36557602,
  "status": "passed"
});
formatter.after({
  "duration": 529893775,
  "status": "passed"
});
formatter.before({
  "duration": 2902469666,
  "status": "passed"
});
formatter.scenario({
  "line": 207,
  "name": "Access Caregiver Edit Page",
  "description": "",
  "id": "manage-users;access-caregiver-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 208,
  "name": "I access the \"details\" page of the Cucumber \"caregiver\"",
  "keyword": "Given "
});
formatter.step({
  "line": 209,
  "name": "I press the \"Editar\" button - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 210,
  "name": "I should be redirected to the \"edit\" page of the \"ana.roque.cuidador\"",
  "keyword": "Then "
});
formatter.step({
  "line": 211,
  "name": "the editable field \"name\" should show \"Ana Luisa Roque\"",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "the editable field \"email\" should show \"roque.ana2@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "the editable field \"gender\" should show \"Feminino\"",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "the editable field \"birthDate\" should show \"26-07-1992\"",
  "keyword": "And "
});
formatter.step({
  "line": 215,
  "name": "the editable field \"location\" should show \"Leiria\"",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "the editable field \"experienceNumber\" should show \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "the editable field \"experiencePeriod\" should show \"Ano/s\"",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "the field \"password\" should be empty",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "the field \"password_confirmation\" should be empty",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "the \"Guardar\" button should be present",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "the \"Cancelar\" button should be present",
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
      "offset": 45
    }
  ],
  "location": "US3StepDefs.iAccessThePageOfTheCucumber(String,String)"
});
formatter.result({
  "duration": 309174081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 419072618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 31
    },
    {
      "val": "ana.roque.cuidador",
      "offset": 50
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfThe(String,String)"
});
formatter.result({
  "duration": 140763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 20
    },
    {
      "val": "Ana Luisa Roque",
      "offset": 39
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 89709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 20
    },
    {
      "val": "roque.ana2@gmail.com",
      "offset": 40
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 14873497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 20
    },
    {
      "val": "Feminino",
      "offset": 41
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 15330066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 20
    },
    {
      "val": "26-07-1992",
      "offset": 44
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 9536528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 20
    },
    {
      "val": "Leiria",
      "offset": 43
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 10505825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experienceNumber",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 51
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 11694655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experiencePeriod",
      "offset": 20
    },
    {
      "val": "Ano/s",
      "offset": 51
    }
  ],
  "location": "US3StepDefs.theEditableFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 11197243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 11
    }
  ],
  "location": "US3StepDefs.theFieldShouldBeEmpty(String)"
});
formatter.result({
  "duration": 10016436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 11
    }
  ],
  "location": "US3StepDefs.theFieldShouldBeEmpty(String)"
});
formatter.result({
  "duration": 15539752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 53972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancelar",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theButtonShouldBePresent(String)"
});
formatter.result({
  "duration": 34279,
  "status": "passed"
});
formatter.after({
  "duration": 548571891,
  "status": "passed"
});
formatter.before({
  "duration": 4415798961,
  "status": "passed"
});
formatter.scenario({
  "line": 223,
  "name": "Edit Caregiver User Successfully Without Password",
  "description": "",
  "id": "manage-users;edit-caregiver-user-successfully-without-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 224,
  "name": "I access the \"edit\" page of the Cucumber \"caregiver\"",
  "keyword": "Given "
});
formatter.step({
  "line": 225,
  "name": "I edit the \"name\" field with \"Ana Margarida Carvalho\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 226,
  "name": "I edit the \"email\" field with \"amargarida.carvalho@live.com.pt\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "I fill the \"gender\" field with \"Masculino\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I fill the \"birthDate\" field with \"26-07-1991\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "I edit the \"location\" field with \"Leiria\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "I fill the \"experienceNumber\" field with \"2\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "I fill the \"experiencePeriod\" field with \"Mês/Meses\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "I press the \"Guardar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "I should be redirected to the \"details\" page of the \"ana.margarida.carvalho.cuidador\"",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "the field \"utilizador\" should show \"ana.margarida.carvalho.cuidador\"",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "the field \"name\" should show the new \"name\"",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "the field \"email\" should show the new \"email\"",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "the field \"função\" should show \"Cuidador\"",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "the field \"birthDate\" should show the new \"birthDate\"",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "the field \"location\" should show the new \"location\"",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "the field \"gender\" should show the new \"gender\"",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "the field \"experienceTime\" should show the new \"experienceTime\"",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "the field \"Nº Profissionais de Saúde\" should show \"1/2\"",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "the field \"Criador\" should show \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "should be present a \"Foi atualizado.\" log at the beggining of the logs section - USfour",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "caregiver",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iAccessThePageOfTheCucumber(String,String)"
});
formatter.result({
  "duration": 315838090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Ana Margarida Carvalho",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 92933648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "amargarida.carvalho@live.com.pt",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 99757019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 12
    },
    {
      "val": "Masculino",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 56419807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 12
    },
    {
      "val": "26-07-1991",
      "offset": 35
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 69697866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 12
    },
    {
      "val": "Leiria",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 70390742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experienceNumber",
      "offset": 12
    },
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 40810767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experiencePeriod",
      "offset": 12
    },
    {
      "val": "Mês/Meses",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 40869844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 443489207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "ana.margarida.carvalho.cuidador",
      "offset": 53
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfThe(String,String)"
});
formatter.result({
  "duration": 24824292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utilizador",
      "offset": 11
    },
    {
      "val": "ana.margarida.carvalho.cuidador",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 8175938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 11
    },
    {
      "val": "name",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 8995356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 11
    },
    {
      "val": "email",
      "offset": 39
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 10068584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "função",
      "offset": 11
    },
    {
      "val": "Cuidador",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 7886388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 11
    },
    {
      "val": "birthDate",
      "offset": 43
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 10003672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 11
    },
    {
      "val": "location",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 8866626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 11
    },
    {
      "val": "gender",
      "offset": 40
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 9829724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experienceTime",
      "offset": 11
    },
    {
      "val": "experienceTime",
      "offset": 48
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 10218099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nº Profissionais de Saúde",
      "offset": 11
    },
    {
      "val": "1/2",
      "offset": 51
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 63817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criador",
      "offset": 11
    },
    {
      "val": "admin",
      "offset": 33
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 49595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizado.",
      "offset": 21
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSfour(String)"
});
formatter.result({
  "duration": 46014267,
  "status": "passed"
});
formatter.after({
  "duration": 531172678,
  "status": "passed"
});
formatter.before({
  "duration": 2947925255,
  "status": "passed"
});
formatter.scenario({
  "line": 246,
  "name": "Edit Caregiver User Successfully With Password",
  "description": "",
  "id": "manage-users;edit-caregiver-user-successfully-with-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 247,
  "name": "I access the \"edit\" page of the Cucumber \"caregiver\"",
  "keyword": "Given "
});
formatter.step({
  "line": 248,
  "name": "I edit the \"name\" field with \"Ana Margarida Carvalho\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 249,
  "name": "I edit the \"email\" field with \"amargarida.carvalho@live.com.pt\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I fill the \"gender\" field with \"Masculino\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I fill the \"birthDate\" field with \"26-07-1991\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I edit the \"location\" field with \"Leiria\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I fill the \"experienceNumber\" field with \"2\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I fill the \"experiencePeriod\" field with \"Mês/Meses\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I fill the \"password\" field with \"123123\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I fill the \"password_confirmation\" field with \"123123\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I press the \"Guardar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I should be redirected to the \"details\" page of the \"ana.margarida.carvalho.cuidador\"",
  "keyword": "Then "
});
formatter.step({
  "line": 259,
  "name": "the field \"utilizador\" should show \"ana.margarida.carvalho.cuidador\"",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "the field \"name\" should show the new \"name\"",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "the field \"email\" should show the new \"email\"",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "the field \"função\" should show \"Cuidador\"",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "the field \"birthDate\" should show the new \"birthDate\"",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "the field \"location\" should show the new \"location\"",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "the field \"gender\" should show the new \"gender\"",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "the field \"experienceTime\" should show the new \"experienceTime\"",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "the field \"Nº Profissionais de Saúde\" should show \"1/2\"",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "the field \"Criador\" should show \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "should be present a \"Foi atualizado.\" log at the beggining of the logs section - USfour",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "caregiver",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iAccessThePageOfTheCucumber(String,String)"
});
formatter.result({
  "duration": 428414776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Ana Margarida Carvalho",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 93783698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "amargarida.carvalho@live.com.pt",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 97174779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 12
    },
    {
      "val": "Masculino",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 41994126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 12
    },
    {
      "val": "26-07-1991",
      "offset": 35
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 64778081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 12
    },
    {
      "val": "Leiria",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iEditTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 70997556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experienceNumber",
      "offset": 12
    },
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 42719823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experiencePeriod",
      "offset": 12
    },
    {
      "val": "Mês/Meses",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 42671686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 60857132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 60506318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 496750229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "ana.margarida.carvalho.cuidador",
      "offset": 53
    }
  ],
  "location": "US3StepDefs.iShouldBeRedirectedToThePageOfThe(String,String)"
});
formatter.result({
  "duration": 22040753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utilizador",
      "offset": 11
    },
    {
      "val": "ana.margarida.carvalho.cuidador",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 28542119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 11
    },
    {
      "val": "name",
      "offset": 38
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 5633812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 11
    },
    {
      "val": "email",
      "offset": 39
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 5945242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "função",
      "offset": 11
    },
    {
      "val": "Cuidador",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5879965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 11
    },
    {
      "val": "birthDate",
      "offset": 43
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 5218087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 11
    },
    {
      "val": "location",
      "offset": 42
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 6757730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 11
    },
    {
      "val": "gender",
      "offset": 40
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 5563430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experienceTime",
      "offset": 11
    },
    {
      "val": "experienceTime",
      "offset": 48
    }
  ],
  "location": "US3StepDefs.theFieldShouldShowTheNew(String,String)"
});
formatter.result({
  "duration": 6898493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nº Profissionais de Saúde",
      "offset": 11
    },
    {
      "val": "1/2",
      "offset": 51
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 50689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criador",
      "offset": 11
    },
    {
      "val": "admin",
      "offset": 33
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 20057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizado.",
      "offset": 21
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSfour(String)"
});
formatter.result({
  "duration": 37037875,
  "status": "passed"
});
formatter.after({
  "duration": 531685771,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 271,
      "value": "#ERRORS"
    }
  ],
  "line": 272,
  "name": "Username field empty",
  "description": "",
  "id": "manage-users;username-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 273,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "the \"username\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "the \"O username tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 277,
  "name": "",
  "description": "",
  "id": "manage-users;username-field-empty;",
  "rows": [
    {
      "cells": [
        "page"
      ],
      "line": 278,
      "id": "manage-users;username-field-empty;;1"
    },
    {
      "cells": [
        "new admin"
      ],
      "line": 279,
      "id": "manage-users;username-field-empty;;2"
    },
    {
      "cells": [
        "new healthcare professional"
      ],
      "line": 280,
      "id": "manage-users;username-field-empty;;3"
    },
    {
      "cells": [
        "new caregiver"
      ],
      "line": 281,
      "id": "manage-users;username-field-empty;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3373478817,
  "status": "passed"
});
formatter.scenario({
  "line": 279,
  "name": "Username field empty",
  "description": "",
  "id": "manage-users;username-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 273,
  "name": "I access the \"new admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "the \"username\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "the \"O username tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 262841820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 31744666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 302272671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O username tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 27033837,
  "status": "passed"
});
formatter.after({
  "duration": 530963357,
  "status": "passed"
});
formatter.before({
  "duration": 2913850702,
  "status": "passed"
});
formatter.scenario({
  "line": 280,
  "name": "Username field empty",
  "description": "",
  "id": "manage-users;username-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 273,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "the \"username\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "the \"O username tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 144512440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 30240395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 336456989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O username tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 27555682,
  "status": "passed"
});
formatter.after({
  "duration": 530676360,
  "status": "passed"
});
formatter.before({
  "duration": 2943321640,
  "status": "passed"
});
formatter.scenario({
  "line": 281,
  "name": "Username field empty",
  "description": "",
  "id": "manage-users;username-field-empty;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 273,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "the \"username\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "the \"O username tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 375518426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 74389366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 428751733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O username tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 54880163,
  "status": "passed"
});
formatter.after({
  "duration": 533650258,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 283,
  "name": "Username field min length",
  "description": "",
  "id": "manage-users;username-field-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 284,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 285,
  "name": "I fill the \"username\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 286,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "the \"O username tem que ter pelo menos 4 letras ou dígitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 288,
  "name": "",
  "description": "",
  "id": "manage-users;username-field-min-length;",
  "rows": [
    {
      "cells": [
        "page"
      ],
      "line": 289,
      "id": "manage-users;username-field-min-length;;1"
    },
    {
      "cells": [
        "new admin"
      ],
      "line": 290,
      "id": "manage-users;username-field-min-length;;2"
    },
    {
      "cells": [
        "new healthcare professional"
      ],
      "line": 291,
      "id": "manage-users;username-field-min-length;;3"
    },
    {
      "cells": [
        "new caregiver"
      ],
      "line": 292,
      "id": "manage-users;username-field-min-length;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4584792901,
  "status": "passed"
});
formatter.scenario({
  "line": 290,
  "name": "Username field min length",
  "description": "",
  "id": "manage-users;username-field-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 284,
  "name": "I access the \"new admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 285,
  "name": "I fill the \"username\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 286,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "the \"O username tem que ter pelo menos 4 letras ou dígitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 152070989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 55517245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 311772366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O username tem que ter pelo menos 4 letras ou dígitos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 25924871,
  "status": "passed"
});
formatter.after({
  "duration": 537945360,
  "status": "passed"
});
formatter.before({
  "duration": 2935213896,
  "status": "passed"
});
formatter.scenario({
  "line": 291,
  "name": "Username field min length",
  "description": "",
  "id": "manage-users;username-field-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 284,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 285,
  "name": "I fill the \"username\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 286,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "the \"O username tem que ter pelo menos 4 letras ou dígitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 149131370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 71877143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 321199493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O username tem que ter pelo menos 4 letras ou dígitos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 28341186,
  "status": "passed"
});
formatter.after({
  "duration": 530454640,
  "status": "passed"
});
formatter.before({
  "duration": 3086174824,
  "status": "passed"
});
formatter.scenario({
  "line": 292,
  "name": "Username field min length",
  "description": "",
  "id": "manage-users;username-field-min-length;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 284,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 285,
  "name": "I fill the \"username\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 286,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "the \"O username tem que ter pelo menos 4 letras ou dígitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 381569423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 86691199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 441954669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O username tem que ter pelo menos 4 letras ou dígitos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 66099286,
  "status": "passed"
});
formatter.after({
  "duration": 532760459,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 294,
  "name": "Username field already in use",
  "description": "",
  "id": "manage-users;username-field-already-in-use",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 295,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 296,
  "name": "I fill the \"username\" field with \"admin\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 297,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "the \"Username já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 299,
  "name": "",
  "description": "",
  "id": "manage-users;username-field-already-in-use;",
  "rows": [
    {
      "cells": [
        "page"
      ],
      "line": 300,
      "id": "manage-users;username-field-already-in-use;;1"
    },
    {
      "cells": [
        "new admin"
      ],
      "line": 301,
      "id": "manage-users;username-field-already-in-use;;2"
    },
    {
      "cells": [
        "new healthcare professional"
      ],
      "line": 302,
      "id": "manage-users;username-field-already-in-use;;3"
    },
    {
      "cells": [
        "new caregiver"
      ],
      "line": 303,
      "id": "manage-users;username-field-already-in-use;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2891768741,
  "status": "passed"
});
formatter.scenario({
  "line": 301,
  "name": "Username field already in use",
  "description": "",
  "id": "manage-users;username-field-already-in-use;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 295,
  "name": "I access the \"new admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 296,
  "name": "I fill the \"username\" field with \"admin\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 297,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "the \"Username já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 137409365,
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
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 65312690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 310967900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 25087220,
  "status": "passed"
});
formatter.after({
  "duration": 533656821,
  "status": "passed"
});
formatter.before({
  "duration": 2927276089,
  "status": "passed"
});
formatter.scenario({
  "line": 302,
  "name": "Username field already in use",
  "description": "",
  "id": "manage-users;username-field-already-in-use;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 295,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 296,
  "name": "I fill the \"username\" field with \"admin\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 297,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "the \"Username já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 124470816,
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
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 73192514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 320782673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 27988547,
  "status": "passed"
});
formatter.after({
  "duration": 548359652,
  "status": "passed"
});
formatter.before({
  "duration": 4428157318,
  "status": "passed"
});
formatter.scenario({
  "line": 303,
  "name": "Username field already in use",
  "description": "",
  "id": "manage-users;username-field-already-in-use;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 295,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 296,
  "name": "I fill the \"username\" field with \"admin\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 297,
  "name": "I press the \"Criar\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "the \"Username já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 258721760,
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
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 137768202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 431166588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 66959182,
  "status": "passed"
});
formatter.after({
  "duration": 531686501,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 305,
  "name": "Name field empty",
  "description": "",
  "id": "manage-users;name-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 306,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 307,
  "name": "the \"name\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 308,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "the \"O nome tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 310,
  "name": "",
  "description": "",
  "id": "manage-users;name-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 311,
      "id": "manage-users;name-field-empty;;1"
    },
    {
      "cells": [
        "new admin",
        "new admin"
      ],
      "line": 312,
      "id": "manage-users;name-field-empty;;2"
    },
    {
      "cells": [
        "new healthcare professional",
        "new healthcare professional"
      ],
      "line": 313,
      "id": "manage-users;name-field-empty;;3"
    },
    {
      "cells": [
        "new caregiver",
        "new caregiver"
      ],
      "line": 314,
      "id": "manage-users;name-field-empty;;4"
    },
    {
      "cells": [
        "edit admin",
        "edit admin"
      ],
      "line": 315,
      "id": "manage-users;name-field-empty;;5"
    },
    {
      "cells": [
        "edit healthcare professional",
        "edit healthcare professional"
      ],
      "line": 316,
      "id": "manage-users;name-field-empty;;6"
    },
    {
      "cells": [
        "edit caregiver",
        "edit caregiver"
      ],
      "line": 317,
      "id": "manage-users;name-field-empty;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2872725953,
  "status": "passed"
});
formatter.scenario({
  "line": 312,
  "name": "Name field empty",
  "description": "",
  "id": "manage-users;name-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 306,
  "name": "I access the \"new admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 307,
  "name": "the \"name\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 308,
  "name": "I press the \"new admin\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "the \"O nome tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 238630177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 34910744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 335764843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 26700892,
  "status": "passed"
});
formatter.after({
  "duration": 530800349,
  "status": "passed"
});
formatter.before({
  "duration": 3098694366,
  "status": "passed"
});
formatter.scenario({
  "line": 313,
  "name": "Name field empty",
  "description": "",
  "id": "manage-users;name-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 306,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 307,
  "name": "the \"name\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 308,
  "name": "I press the \"new healthcare professional\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "the \"O nome tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 124201323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 29564294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 330511382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 28264969,
  "status": "passed"
});
formatter.after({
  "duration": 532123012,
  "status": "passed"
});
formatter.before({
  "duration": 2895810396,
  "status": "passed"
});
formatter.scenario({
  "line": 314,
  "name": "Name field empty",
  "description": "",
  "id": "manage-users;name-field-empty;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 306,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 307,
  "name": "the \"name\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 308,
  "name": "I press the \"new caregiver\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "the \"O nome tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 372535048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 67041962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 433637604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 49092825,
  "status": "passed"
});
formatter.after({
  "duration": 544232299,
  "status": "passed"
});
formatter.before({
  "duration": 3105032724,
  "status": "passed"
});
formatter.scenario({
  "line": 315,
  "name": "Name field empty",
  "description": "",
  "id": "manage-users;name-field-empty;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 306,
  "name": "I access the \"edit admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 307,
  "name": "the \"name\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 308,
  "name": "I press the \"edit admin\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "the \"O nome tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 123965016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 29345491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit admin",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 290610836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 25923412,
  "status": "passed"
});
formatter.after({
  "duration": 527535079,
  "status": "passed"
});
formatter.before({
  "duration": 4392172251,
  "status": "passed"
});
formatter.scenario({
  "line": 316,
  "name": "Name field empty",
  "description": "",
  "id": "manage-users;name-field-empty;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 306,
  "name": "I access the \"edit healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 307,
  "name": "the \"name\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 308,
  "name": "I press the \"edit healthcare professional\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "the \"O nome tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 148919131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 30645181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 316537530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 25021579,
  "status": "passed"
});
formatter.after({
  "duration": 529851109,
  "status": "passed"
});
formatter.before({
  "duration": 2937187499,
  "status": "passed"
});
formatter.scenario({
  "line": 317,
  "name": "Name field empty",
  "description": "",
  "id": "manage-users;name-field-empty;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 306,
  "name": "I access the \"edit caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 307,
  "name": "the \"name\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 308,
  "name": "I press the \"edit caregiver\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "the \"O nome tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 376445786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 61409244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 411855037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 50274725,
  "status": "passed"
});
formatter.after({
  "duration": 530650833,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 319,
  "name": "Name field min length",
  "description": "",
  "id": "manage-users;name-field-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 320,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 321,
  "name": "I fill the \"name\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 322,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "the \"O nome tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 324,
  "name": "",
  "description": "",
  "id": "manage-users;name-field-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 325,
      "id": "manage-users;name-field-min-length;;1"
    },
    {
      "cells": [
        "new admin",
        "Criar"
      ],
      "line": 326,
      "id": "manage-users;name-field-min-length;;2"
    },
    {
      "cells": [
        "new healthcare professional",
        "Criar"
      ],
      "line": 327,
      "id": "manage-users;name-field-min-length;;3"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 328,
      "id": "manage-users;name-field-min-length;;4"
    },
    {
      "cells": [
        "edit admin",
        "Guardar"
      ],
      "line": 329,
      "id": "manage-users;name-field-min-length;;5"
    },
    {
      "cells": [
        "edit healthcare professional",
        "Guardar"
      ],
      "line": 330,
      "id": "manage-users;name-field-min-length;;6"
    },
    {
      "cells": [
        "edit caregiver",
        "Guardar"
      ],
      "line": 331,
      "id": "manage-users;name-field-min-length;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2952734545,
  "status": "passed"
});
formatter.scenario({
  "line": 326,
  "name": "Name field min length",
  "description": "",
  "id": "manage-users;name-field-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 320,
  "name": "I access the \"new admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 321,
  "name": "I fill the \"name\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 322,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "the \"O nome tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 233363225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 59852461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 326968962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 30156886,
  "status": "passed"
});
formatter.after({
  "duration": 531205864,
  "status": "passed"
});
formatter.before({
  "duration": 3226437380,
  "status": "passed"
});
formatter.scenario({
  "line": 327,
  "name": "Name field min length",
  "description": "",
  "id": "manage-users;name-field-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 320,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 321,
  "name": "I fill the \"name\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 322,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "the \"O nome tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 135898166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 57401503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 311701985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 34733150,
  "status": "passed"
});
formatter.after({
  "duration": 544139307,
  "status": "passed"
});
formatter.before({
  "duration": 3284817663,
  "status": "passed"
});
formatter.scenario({
  "line": 328,
  "name": "Name field min length",
  "description": "",
  "id": "manage-users;name-field-min-length;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 320,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 321,
  "name": "I fill the \"name\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 322,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "the \"O nome tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 377832632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 86736783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 422853169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 62467522,
  "status": "passed"
});
formatter.after({
  "duration": 534286610,
  "status": "passed"
});
formatter.before({
  "duration": 4785666435,
  "status": "passed"
});
formatter.scenario({
  "line": 329,
  "name": "Name field min length",
  "description": "",
  "id": "manage-users;name-field-min-length;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 320,
  "name": "I access the \"edit admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 321,
  "name": "I fill the \"name\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 322,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "the \"O nome tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 143470208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 59295972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 348800395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 39212776,
  "status": "passed"
});
formatter.after({
  "duration": 528607578,
  "status": "passed"
});
formatter.before({
  "duration": 3169645608,
  "status": "passed"
});
formatter.scenario({
  "line": 330,
  "name": "Name field min length",
  "description": "",
  "id": "manage-users;name-field-min-length;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 320,
  "name": "I access the \"edit healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 321,
  "name": "I fill the \"name\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 322,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "the \"O nome tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 166310322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 58157468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 307138119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 24649614,
  "status": "passed"
});
formatter.after({
  "duration": 536482297,
  "status": "passed"
});
formatter.before({
  "duration": 3128847969,
  "status": "passed"
});
formatter.scenario({
  "line": 331,
  "name": "Name field min length",
  "description": "",
  "id": "manage-users;name-field-min-length;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 320,
  "name": "I access the \"edit caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 321,
  "name": "I fill the \"name\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 322,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "the \"O nome tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 481587182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 30
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 65765612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 418283468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 65460017,
  "status": "passed"
});
formatter.after({
  "duration": 528910985,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 333,
  "name": "Email field already in use",
  "description": "",
  "id": "manage-users;email-field-already-in-use",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 334,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 335,
  "name": "I fill the \"email\" field with \"caregiver@mail.com\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "the \"Email já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 338,
  "name": "",
  "description": "",
  "id": "manage-users;email-field-already-in-use;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 339,
      "id": "manage-users;email-field-already-in-use;;1"
    },
    {
      "cells": [
        "new admin",
        "Criar"
      ],
      "line": 340,
      "id": "manage-users;email-field-already-in-use;;2"
    },
    {
      "cells": [
        "new healthcare professional",
        "Criar"
      ],
      "line": 341,
      "id": "manage-users;email-field-already-in-use;;3"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 342,
      "id": "manage-users;email-field-already-in-use;;4"
    },
    {
      "cells": [
        "edit admin",
        "Guardar"
      ],
      "line": 343,
      "id": "manage-users;email-field-already-in-use;;5"
    },
    {
      "cells": [
        "edit healthcare professional",
        "Guardar"
      ],
      "line": 344,
      "id": "manage-users;email-field-already-in-use;;6"
    },
    {
      "cells": [
        "edit caregiver",
        "Guardar"
      ],
      "line": 345,
      "id": "manage-users;email-field-already-in-use;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3061409244,
  "status": "passed"
});
formatter.scenario({
  "line": 340,
  "name": "Email field already in use",
  "description": "",
  "id": "manage-users;email-field-already-in-use;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 334,
  "name": "I access the \"new admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 335,
  "name": "I fill the \"email\" field with \"caregiver@mail.com\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "the \"Email já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 143997523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "caregiver@mail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 80908966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 283835967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 32250830,
  "status": "passed"
});
formatter.after({
  "duration": 531598250,
  "status": "passed"
});
formatter.before({
  "duration": 2894318890,
  "status": "passed"
});
formatter.scenario({
  "line": 341,
  "name": "Email field already in use",
  "description": "",
  "id": "manage-users;email-field-already-in-use;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 334,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 335,
  "name": "I fill the \"email\" field with \"caregiver@mail.com\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "the \"Email já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 141792354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "caregiver@mail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 77940904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 323152674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 30292179,
  "status": "passed"
});
formatter.after({
  "duration": 535885694,
  "status": "passed"
});
formatter.before({
  "duration": 4290311076,
  "status": "passed"
});
formatter.scenario({
  "line": 342,
  "name": "Email field already in use",
  "description": "",
  "id": "manage-users;email-field-already-in-use;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 334,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 335,
  "name": "I fill the \"email\" field with \"caregiver@mail.com\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "the \"Email já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 253525554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "caregiver@mail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 105207767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 421701171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 33960046,
  "status": "passed"
});
formatter.after({
  "duration": 540984898,
  "status": "passed"
});
formatter.before({
  "duration": 3563404910,
  "status": "passed"
});
formatter.scenario({
  "line": 343,
  "name": "Email field already in use",
  "description": "",
  "id": "manage-users;email-field-already-in-use;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 334,
  "name": "I access the \"edit admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 335,
  "name": "I fill the \"email\" field with \"caregiver@mail.com\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "the \"Email já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 147344479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "caregiver@mail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 73610063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 328384253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 25359995,
  "status": "passed"
});
formatter.after({
  "duration": 529818653,
  "status": "passed"
});
formatter.before({
  "duration": 2946113202,
  "status": "passed"
});
formatter.scenario({
  "line": 344,
  "name": "Email field already in use",
  "description": "",
  "id": "manage-users;email-field-already-in-use;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 334,
  "name": "I access the \"edit healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 335,
  "name": "I fill the \"email\" field with \"caregiver@mail.com\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "the \"Email já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 170940922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "caregiver@mail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 73975829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 316337326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 25353066,
  "status": "passed"
});
formatter.after({
  "duration": 528471920,
  "status": "passed"
});
formatter.before({
  "duration": 3268200670,
  "status": "passed"
});
formatter.scenario({
  "line": 345,
  "name": "Email field already in use",
  "description": "",
  "id": "manage-users;email-field-already-in-use;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 334,
  "name": "I access the \"edit caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 335,
  "name": "I fill the \"email\" field with \"caregiver@mail.com\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "the \"Email já existente. Escolha outro.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 470632081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "caregiver@mail.com",
      "offset": 31
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 109882856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 448743761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 60587639,
  "status": "passed"
});
formatter.after({
  "duration": 540006119,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 347,
  "name": "Email field empty",
  "description": "",
  "id": "manage-users;email-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 348,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 349,
  "name": "the \"email\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "the \"O email tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 352,
  "name": "",
  "description": "",
  "id": "manage-users;email-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 353,
      "id": "manage-users;email-field-empty;;1"
    },
    {
      "cells": [
        "new admin",
        "Criar"
      ],
      "line": 354,
      "id": "manage-users;email-field-empty;;2"
    },
    {
      "cells": [
        "new healthcare professional",
        "Criar"
      ],
      "line": 355,
      "id": "manage-users;email-field-empty;;3"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 356,
      "id": "manage-users;email-field-empty;;4"
    },
    {
      "cells": [
        "edit admin",
        "Guardar"
      ],
      "line": 357,
      "id": "manage-users;email-field-empty;;5"
    },
    {
      "cells": [
        "edit healthcare professional",
        "Guardar"
      ],
      "line": 358,
      "id": "manage-users;email-field-empty;;6"
    },
    {
      "cells": [
        "edit caregiver",
        "Guardar"
      ],
      "line": 359,
      "id": "manage-users;email-field-empty;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3119915703,
  "status": "passed"
});
formatter.scenario({
  "line": 354,
  "name": "Email field empty",
  "description": "",
  "id": "manage-users;email-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 348,
  "name": "I access the \"new admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 349,
  "name": "the \"email\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "the \"O email tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 122977850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 29557730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 312697173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 26920425,
  "status": "passed"
});
formatter.after({
  "duration": 527521221,
  "status": "passed"
});
formatter.before({
  "duration": 4413205417,
  "status": "passed"
});
formatter.scenario({
  "line": 355,
  "name": "Email field empty",
  "description": "",
  "id": "manage-users;email-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 348,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 349,
  "name": "the \"email\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "the \"O email tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 145465691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 30601056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 304784164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 28161402,
  "status": "passed"
});
formatter.after({
  "duration": 527931841,
  "status": "passed"
});
formatter.before({
  "duration": 3503392722,
  "status": "passed"
});
formatter.scenario({
  "line": 356,
  "name": "Email field empty",
  "description": "",
  "id": "manage-users;email-field-empty;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 348,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 349,
  "name": "the \"email\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "the \"O email tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 399086060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 62901845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 412077852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 38369655,
  "status": "passed"
});
formatter.after({
  "duration": 538031058,
  "status": "passed"
});
formatter.before({
  "duration": 3051975918,
  "status": "passed"
});
formatter.scenario({
  "line": 357,
  "name": "Email field empty",
  "description": "",
  "id": "manage-users;email-field-empty;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 348,
  "name": "I access the \"edit admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 349,
  "name": "the \"email\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "the \"O email tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 132678116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 30323905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 305670316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 24263791,
  "status": "passed"
});
formatter.after({
  "duration": 530326275,
  "status": "passed"
});
formatter.before({
  "duration": 2896807409,
  "status": "passed"
});
formatter.scenario({
  "line": 358,
  "name": "Email field empty",
  "description": "",
  "id": "manage-users;email-field-empty;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 348,
  "name": "I access the \"edit healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 349,
  "name": "the \"email\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "the \"O email tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 161182309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 40649582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 304098581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 26554659,
  "status": "passed"
});
formatter.after({
  "duration": 529419702,
  "status": "passed"
});
formatter.before({
  "duration": 3043831707,
  "status": "passed"
});
formatter.scenario({
  "line": 359,
  "name": "Email field empty",
  "description": "",
  "id": "manage-users;email-field-empty;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 348,
  "name": "I access the \"edit caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 349,
  "name": "the \"email\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "the \"O email tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 359991438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 59841521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 432574950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 71202136,
  "status": "passed"
});
formatter.after({
  "duration": 530281057,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 361,
  "name": "Gender field empty",
  "description": "",
  "id": "manage-users;gender-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 362,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 363,
  "name": "the \"gender\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 364,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "the \"O género tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 366,
  "name": "",
  "description": "",
  "id": "manage-users;gender-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 367,
      "id": "manage-users;gender-field-empty;;1"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 368,
      "id": "manage-users;gender-field-empty;;2"
    },
    {
      "cells": [
        "edit caregiver",
        "Guardar"
      ],
      "line": 369,
      "id": "manage-users;gender-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4398355258,
  "status": "passed"
});
formatter.scenario({
  "line": 368,
  "name": "Gender field empty",
  "description": "",
  "id": "manage-users;gender-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 362,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 363,
  "name": "the \"gender\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 364,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "the \"O género tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 261441846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 78739899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 409574745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O género tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 31053248,
  "status": "passed"
});
formatter.after({
  "duration": 532285656,
  "status": "passed"
});
formatter.before({
  "duration": 2936338544,
  "status": "passed"
});
formatter.scenario({
  "line": 369,
  "name": "Gender field empty",
  "description": "",
  "id": "manage-users;gender-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 362,
  "name": "I access the \"edit caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 363,
  "name": "the \"gender\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 364,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "the \"O género tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 358254141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 104863881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 408723967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O género tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 58138140,
  "status": "passed"
});
formatter.after({
  "duration": 532822817,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 371,
  "name": "Birth Date field empty",
  "description": "",
  "id": "manage-users;birth-date-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 372,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 373,
  "name": "the \"birthDate\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 374,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "the \"A data de nascimento tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 376,
  "name": "",
  "description": "",
  "id": "manage-users;birth-date-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 377,
      "id": "manage-users;birth-date-field-empty;;1"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 378,
      "id": "manage-users;birth-date-field-empty;;2"
    },
    {
      "cells": [
        "edit caregiver",
        "Guardar"
      ],
      "line": 379,
      "id": "manage-users;birth-date-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2874662724,
  "status": "passed"
});
formatter.scenario({
  "line": 378,
  "name": "Birth Date field empty",
  "description": "",
  "id": "manage-users;birth-date-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 372,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 373,
  "name": "the \"birthDate\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 374,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "the \"A data de nascimento tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 333812755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 41281923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 393513878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A data de nascimento tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 75573091,
  "status": "passed"
});
formatter.after({
  "duration": 530281786,
  "status": "passed"
});
formatter.before({
  "duration": 3135789859,
  "status": "passed"
});
formatter.scenario({
  "line": 379,
  "name": "Birth Date field empty",
  "description": "",
  "id": "manage-users;birth-date-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 372,
  "name": "I access the \"edit caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 373,
  "name": "the \"birthDate\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 374,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "the \"A data de nascimento tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 438977490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 62008035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 401718989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A data de nascimento tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 62400422,
  "status": "passed"
});
formatter.after({
  "duration": 529580887,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 381,
  "name": "Job field empty",
  "description": "",
  "id": "manage-users;job-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 382,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 383,
  "name": "the \"job\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 384,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "the \"A profissão tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 386,
  "name": "",
  "description": "",
  "id": "manage-users;job-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 387,
      "id": "manage-users;job-field-empty;;1"
    },
    {
      "cells": [
        "new healthcare professional",
        "Criar"
      ],
      "line": 388,
      "id": "manage-users;job-field-empty;;2"
    },
    {
      "cells": [
        "edit healthcare professional",
        "Guardar"
      ],
      "line": 389,
      "id": "manage-users;job-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2902477688,
  "status": "passed"
});
formatter.scenario({
  "line": 388,
  "name": "Job field empty",
  "description": "",
  "id": "manage-users;job-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 382,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 383,
  "name": "the \"job\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 384,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "the \"A profissão tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 148236831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 31286638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 348582685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A profissão tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 27168766,
  "status": "passed"
});
formatter.after({
  "duration": 528101778,
  "status": "passed"
});
formatter.before({
  "duration": 4378071857,
  "status": "passed"
});
formatter.scenario({
  "line": 389,
  "name": "Job field empty",
  "description": "",
  "id": "manage-users;job-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 382,
  "name": "I access the \"edit healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 383,
  "name": "the \"job\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 384,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "the \"A profissão tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 142864124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 30015758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 302941478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A profissão tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 23308717,
  "status": "passed"
});
formatter.after({
  "duration": 527173325,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 391,
  "name": "Job field min length",
  "description": "",
  "id": "manage-users;job-field-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 392,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 393,
  "name": "I fill the \"job\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 394,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "the \"A profissão tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 396,
  "name": "",
  "description": "",
  "id": "manage-users;job-field-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 397,
      "id": "manage-users;job-field-min-length;;1"
    },
    {
      "cells": [
        "new healthcare professional",
        "Criar"
      ],
      "line": 398,
      "id": "manage-users;job-field-min-length;;2"
    },
    {
      "cells": [
        "edit healthcare professional",
        "Guardar"
      ],
      "line": 399,
      "id": "manage-users;job-field-min-length;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3375266073,
  "status": "passed"
});
formatter.scenario({
  "line": 398,
  "name": "Job field min length",
  "description": "",
  "id": "manage-users;job-field-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 392,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 393,
  "name": "I fill the \"job\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 394,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "the \"A profissão tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 242251366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 29
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 53539631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 299803479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A profissão tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 34716739,
  "status": "passed"
});
formatter.after({
  "duration": 528840968,
  "status": "passed"
});
formatter.before({
  "duration": 3102303521,
  "status": "passed"
});
formatter.scenario({
  "line": 399,
  "name": "Job field min length",
  "description": "",
  "id": "manage-users;job-field-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 392,
  "name": "I access the \"edit healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 393,
  "name": "I fill the \"job\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 394,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "the \"A profissão tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 158369232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 29
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 54839320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 332676438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A profissão tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 23998311,
  "status": "passed"
});
formatter.after({
  "duration": 529947747,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 401,
  "name": "Facility field empty",
  "description": "",
  "id": "manage-users;facility-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 402,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 403,
  "name": "the \"facility\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 404,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "the \"O local de trabalho tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 406,
  "name": "",
  "description": "",
  "id": "manage-users;facility-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 407,
      "id": "manage-users;facility-field-empty;;1"
    },
    {
      "cells": [
        "new healthcare professional",
        "Criar"
      ],
      "line": 408,
      "id": "manage-users;facility-field-empty;;2"
    },
    {
      "cells": [
        "edit healthcare professional",
        "Guardar"
      ],
      "line": 409,
      "id": "manage-users;facility-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3261586621,
  "status": "passed"
});
formatter.scenario({
  "line": 408,
  "name": "Facility field empty",
  "description": "",
  "id": "manage-users;facility-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 402,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 403,
  "name": "the \"facility\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 404,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "the \"O local de trabalho tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 215253266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 27625335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 348013433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O local de trabalho tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 25936176,
  "status": "passed"
});
formatter.after({
  "duration": 532917267,
  "status": "passed"
});
formatter.before({
  "duration": 3480873155,
  "status": "passed"
});
formatter.scenario({
  "line": 409,
  "name": "Facility field empty",
  "description": "",
  "id": "manage-users;facility-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 402,
  "name": "I access the \"edit healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 403,
  "name": "the \"facility\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 404,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "the \"O local de trabalho tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 152409404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 32204881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 321287743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O local de trabalho tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 25157967,
  "status": "passed"
});
formatter.after({
  "duration": 528440193,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 411,
  "name": "Facility field min length",
  "description": "",
  "id": "manage-users;facility-field-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 412,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 413,
  "name": "I fill the \"facility\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 414,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "the \"O local de trabalho tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 416,
  "name": "",
  "description": "",
  "id": "manage-users;facility-field-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 417,
      "id": "manage-users;facility-field-min-length;;1"
    },
    {
      "cells": [
        "new healthcare professional",
        "Criar"
      ],
      "line": 418,
      "id": "manage-users;facility-field-min-length;;2"
    },
    {
      "cells": [
        "edit healthcare professional",
        "Guardar"
      ],
      "line": 419,
      "id": "manage-users;facility-field-min-length;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4369482746,
  "status": "passed"
});
formatter.scenario({
  "line": 418,
  "name": "Facility field min length",
  "description": "",
  "id": "manage-users;facility-field-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 412,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 413,
  "name": "I fill the \"facility\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 414,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "the \"O local de trabalho tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 166787312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 59043984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 333132642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O local de trabalho tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 27166578,
  "status": "passed"
});
formatter.after({
  "duration": 528796478,
  "status": "passed"
});
formatter.before({
  "duration": 2867538864,
  "status": "passed"
});
formatter.scenario({
  "line": 419,
  "name": "Facility field min length",
  "description": "",
  "id": "manage-users;facility-field-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 412,
  "name": "I access the \"edit healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 413,
  "name": "I fill the \"facility\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 414,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "the \"O local de trabalho tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 524271633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facility",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 72149918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 341538688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O local de trabalho tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 24811529,
  "status": "passed"
});
formatter.after({
  "duration": 531761259,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 421,
  "name": "Location field empty",
  "description": "",
  "id": "manage-users;location-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 422,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 423,
  "name": "the \"location\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 424,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "the \"A localização tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 426,
  "name": "",
  "description": "",
  "id": "manage-users;location-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 427,
      "id": "manage-users;location-field-empty;;1"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 428,
      "id": "manage-users;location-field-empty;;2"
    },
    {
      "cells": [
        "edit caregiver",
        "Guardar"
      ],
      "line": 429,
      "id": "manage-users;location-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3182608592,
  "status": "passed"
});
formatter.scenario({
  "line": 428,
  "name": "Location field empty",
  "description": "",
  "id": "manage-users;location-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 422,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 423,
  "name": "the \"location\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 424,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "the \"A localização tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 436431352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 81023108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 430946326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A localização tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 58611119,
  "status": "passed"
});
formatter.after({
  "duration": 530764611,
  "status": "passed"
});
formatter.before({
  "duration": 3127947595,
  "status": "passed"
});
formatter.scenario({
  "line": 429,
  "name": "Location field empty",
  "description": "",
  "id": "manage-users;location-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 422,
  "name": "I access the \"edit caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 423,
  "name": "the \"location\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 424,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "the \"A localização tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 266457175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 58952816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 502264428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A localização tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 61288173,
  "status": "passed"
});
formatter.after({
  "duration": 528993765,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 431,
  "name": "Location field min length",
  "description": "",
  "id": "manage-users;location-field-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 432,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 433,
  "name": "I fill the \"location\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 434,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "the \"A localização tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 436,
  "name": "",
  "description": "",
  "id": "manage-users;location-field-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 437,
      "id": "manage-users;location-field-min-length;;1"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 438,
      "id": "manage-users;location-field-min-length;;2"
    },
    {
      "cells": [
        "edit caregiver",
        "Guardar"
      ],
      "line": 439,
      "id": "manage-users;location-field-min-length;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2922218093,
  "status": "passed"
});
formatter.scenario({
  "line": 438,
  "name": "Location field min length",
  "description": "",
  "id": "manage-users;location-field-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 432,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 433,
  "name": "I fill the \"location\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 434,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "the \"A localização tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 359372955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 80287930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 408663796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A localização tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 49363046,
  "status": "passed"
});
formatter.after({
  "duration": 532564265,
  "status": "passed"
});
formatter.before({
  "duration": 4306659670,
  "status": "passed"
});
formatter.scenario({
  "line": 439,
  "name": "Location field min length",
  "description": "",
  "id": "manage-users;location-field-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 432,
  "name": "I access the \"edit caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 433,
  "name": "I fill the \"location\" field with \"non\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 434,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "the \"A localização tem que ter pelo menos 4 letras.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 255222736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 87787767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 420414245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A localização tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 24688270,
  "status": "passed"
});
formatter.after({
  "duration": 533909174,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 441,
  "name": "Experience Period field empty",
  "description": "",
  "id": "manage-users;experience-period-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 442,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 443,
  "name": "the \"experiencePeriod\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 444,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "the \"O tempo de experiência como cuidador tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 446,
  "name": "",
  "description": "",
  "id": "manage-users;experience-period-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 447,
      "id": "manage-users;experience-period-field-empty;;1"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 448,
      "id": "manage-users;experience-period-field-empty;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2885838451,
  "status": "passed"
});
formatter.scenario({
  "line": 448,
  "name": "Experience Period field empty",
  "description": "",
  "id": "manage-users;experience-period-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 442,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 443,
  "name": "the \"experiencePeriod\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 444,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "the \"O tempo de experiência como cuidador tem que ser preenchido.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 471013529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "experiencePeriod",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 72451866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 464055958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tempo de experiência como cuidador tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 47409865,
  "status": "passed"
});
formatter.after({
  "duration": 534158974,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 450,
  "name": "Password field empty",
  "description": "",
  "id": "manage-users;password-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 451,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 452,
  "name": "the \"password\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 453,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "the \"A password tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 455,
  "name": "",
  "description": "",
  "id": "manage-users;password-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 456,
      "id": "manage-users;password-field-empty;;1"
    },
    {
      "cells": [
        "new admin",
        "Criar"
      ],
      "line": 457,
      "id": "manage-users;password-field-empty;;2"
    },
    {
      "cells": [
        "new healthcare professional",
        "Criar"
      ],
      "line": 458,
      "id": "manage-users;password-field-empty;;3"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 459,
      "id": "manage-users;password-field-empty;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3000633070,
  "status": "passed"
});
formatter.scenario({
  "line": 457,
  "name": "Password field empty",
  "description": "",
  "id": "manage-users;password-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 451,
  "name": "I access the \"new admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 452,
  "name": "the \"password\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 453,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "the \"A password tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 240912657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 30222161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 326712233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A password tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 25846467,
  "status": "passed"
});
formatter.after({
  "duration": 530423643,
  "status": "passed"
});
formatter.before({
  "duration": 3286571733,
  "status": "passed"
});
formatter.scenario({
  "line": 458,
  "name": "Password field empty",
  "description": "",
  "id": "manage-users;password-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 451,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 452,
  "name": "the \"password\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 453,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "the \"A password tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 264296496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 30441330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 298741919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A password tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 28074975,
  "status": "passed"
});
formatter.after({
  "duration": 542009626,
  "status": "passed"
});
formatter.before({
  "duration": 3501973056,
  "status": "passed"
});
formatter.scenario({
  "line": 459,
  "name": "Password field empty",
  "description": "",
  "id": "manage-users;password-field-empty;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 451,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 452,
  "name": "the \"password\" field is empty - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 453,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "the \"A password tem que ser preenchida.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 376400567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theFieldIsEmptyUSthree(String)"
});
formatter.result({
  "duration": 76757544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 426943326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A password tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 74546540,
  "status": "passed"
});
formatter.after({
  "duration": 539245049,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 461,
  "name": "Password field min length",
  "description": "",
  "id": "manage-users;password-field-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 462,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 463,
  "name": "I fill the \"password\" field with \"123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 464,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "the \"A password tem que ter pelo menos 6 letras ou digitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 466,
  "name": "",
  "description": "",
  "id": "manage-users;password-field-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 467,
      "id": "manage-users;password-field-min-length;;1"
    },
    {
      "cells": [
        "new admin",
        "Criar"
      ],
      "line": 468,
      "id": "manage-users;password-field-min-length;;2"
    },
    {
      "cells": [
        "new healthcare professional",
        "Criar"
      ],
      "line": 469,
      "id": "manage-users;password-field-min-length;;3"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 470,
      "id": "manage-users;password-field-min-length;;4"
    },
    {
      "cells": [
        "edit admin",
        "Guardar"
      ],
      "line": 471,
      "id": "manage-users;password-field-min-length;;5"
    },
    {
      "cells": [
        "edit healthcare professional",
        "Guardar"
      ],
      "line": 472,
      "id": "manage-users;password-field-min-length;;6"
    },
    {
      "cells": [
        "edit caregiver",
        "Guardar"
      ],
      "line": 473,
      "id": "manage-users;password-field-min-length;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2871832508,
  "status": "passed"
});
formatter.scenario({
  "line": 468,
  "name": "Password field min length",
  "description": "",
  "id": "manage-users;password-field-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 462,
  "name": "I access the \"new admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 463,
  "name": "I fill the \"password\" field with \"123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 464,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "the \"A password tem que ter pelo menos 6 letras ou digitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 225844060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 58403256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 324817400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A password tem que ter pelo menos 6 letras ou digitos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 29249947,
  "status": "passed"
});
formatter.after({
  "duration": 534950311,
  "status": "passed"
});
formatter.before({
  "duration": 3212526981,
  "status": "passed"
});
formatter.scenario({
  "line": 469,
  "name": "Password field min length",
  "description": "",
  "id": "manage-users;password-field-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 462,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 463,
  "name": "I fill the \"password\" field with \"123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 464,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "the \"A password tem que ter pelo menos 6 letras ou digitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 249604605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 55543865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 331586799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A password tem que ter pelo menos 6 letras ou digitos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 29898698,
  "status": "passed"
});
formatter.after({
  "duration": 530356543,
  "status": "passed"
});
formatter.before({
  "duration": 3391669004,
  "status": "passed"
});
formatter.scenario({
  "line": 470,
  "name": "Password field min length",
  "description": "",
  "id": "manage-users;password-field-min-length;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 462,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 463,
  "name": "I fill the \"password\" field with \"123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 464,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "the \"A password tem que ter pelo menos 6 letras ou digitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 343522502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 85809423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 429029248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A password tem que ter pelo menos 6 letras ou digitos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 56682006,
  "status": "passed"
});
formatter.after({
  "duration": 531969121,
  "status": "passed"
});
formatter.before({
  "duration": 4462067768,
  "status": "passed"
});
formatter.scenario({
  "line": 471,
  "name": "Password field min length",
  "description": "",
  "id": "manage-users;password-field-min-length;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 462,
  "name": "I access the \"edit admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 463,
  "name": "I fill the \"password\" field with \"123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 464,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "the \"A password tem que ter pelo menos 6 letras ou digitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 146734384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 56762234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 315786671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A password tem que ter pelo menos 6 letras ou digitos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 26863536,
  "status": "passed"
});
formatter.after({
  "duration": 529733684,
  "status": "passed"
});
formatter.before({
  "duration": 3166225354,
  "status": "passed"
});
formatter.scenario({
  "line": 472,
  "name": "Password field min length",
  "description": "",
  "id": "manage-users;password-field-min-length;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 462,
  "name": "I access the \"edit healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 463,
  "name": "I fill the \"password\" field with \"123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 464,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "the \"A password tem que ter pelo menos 6 letras ou digitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 221396160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 59437465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 311005097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A password tem que ter pelo menos 6 letras ou digitos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 25765145,
  "status": "passed"
});
formatter.after({
  "duration": 530581546,
  "status": "passed"
});
formatter.before({
  "duration": 3234767574,
  "status": "passed"
});
formatter.scenario({
  "line": 473,
  "name": "Password field min length",
  "description": "",
  "id": "manage-users;password-field-min-length;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 462,
  "name": "I access the \"edit caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 463,
  "name": "I fill the \"password\" field with \"123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 464,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "the \"A password tem que ter pelo menos 6 letras ou digitos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 438104466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 96757230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 504484550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A password tem que ter pelo menos 6 letras ou digitos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 58843415,
  "status": "passed"
});
formatter.after({
  "duration": 539298291,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 475,
  "name": "Password confirmation field does not match password field",
  "description": "",
  "id": "manage-users;password-confirmation-field-does-not-match-password-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 476,
  "name": "I access the \"\u003cpage\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 477,
  "name": "I fill the \"password\" field with \"123123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 478,
  "name": "I fill the \"password_confirmation\" field with \"123456\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I press the \"\u003cbutton\u003e\" button - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "the \"As passwords têm que ser iguais nos dois campos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.examples({
  "line": 481,
  "name": "",
  "description": "",
  "id": "manage-users;password-confirmation-field-does-not-match-password-field;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 482,
      "id": "manage-users;password-confirmation-field-does-not-match-password-field;;1"
    },
    {
      "cells": [
        "new admin",
        "Criar"
      ],
      "line": 483,
      "id": "manage-users;password-confirmation-field-does-not-match-password-field;;2"
    },
    {
      "cells": [
        "new healthcare professional",
        "Criar"
      ],
      "line": 484,
      "id": "manage-users;password-confirmation-field-does-not-match-password-field;;3"
    },
    {
      "cells": [
        "new caregiver",
        "Criar"
      ],
      "line": 485,
      "id": "manage-users;password-confirmation-field-does-not-match-password-field;;4"
    },
    {
      "cells": [
        "edit admin",
        "Guardar"
      ],
      "line": 486,
      "id": "manage-users;password-confirmation-field-does-not-match-password-field;;5"
    },
    {
      "cells": [
        "edit healthcare professional",
        "Guardar"
      ],
      "line": 487,
      "id": "manage-users;password-confirmation-field-does-not-match-password-field;;6"
    },
    {
      "cells": [
        "edit caregiver",
        "Guardar"
      ],
      "line": 488,
      "id": "manage-users;password-confirmation-field-does-not-match-password-field;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2884841439,
  "status": "passed"
});
formatter.scenario({
  "line": 483,
  "name": "Password confirmation field does not match password field",
  "description": "",
  "id": "manage-users;password-confirmation-field-does-not-match-password-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 476,
  "name": "I access the \"new admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 477,
  "name": "I fill the \"password\" field with \"123123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 478,
  "name": "I fill the \"password_confirmation\" field with \"123456\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "the \"As passwords têm que ser iguais nos dois campos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 161740986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 71504085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 59946546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 312371887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "As passwords têm que ser iguais nos dois campos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 26985337,
  "status": "passed"
});
formatter.after({
  "duration": 529952486,
  "status": "passed"
});
formatter.before({
  "duration": 3001722344,
  "status": "passed"
});
formatter.scenario({
  "line": 484,
  "name": "Password confirmation field does not match password field",
  "description": "",
  "id": "manage-users;password-confirmation-field-does-not-match-password-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 476,
  "name": "I access the \"new healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 477,
  "name": "I fill the \"password\" field with \"123123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 478,
  "name": "I fill the \"password_confirmation\" field with \"123456\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "the \"As passwords têm que ser iguais nos dois campos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 171806653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 56395374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 58752976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 324051954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "As passwords têm que ser iguais nos dois campos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 28287579,
  "status": "passed"
});
formatter.after({
  "duration": 531730261,
  "status": "passed"
});
formatter.before({
  "duration": 4619127100,
  "status": "passed"
});
formatter.scenario({
  "line": 485,
  "name": "Password confirmation field does not match password field",
  "description": "",
  "id": "manage-users;password-confirmation-field-does-not-match-password-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 476,
  "name": "I access the \"new caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 477,
  "name": "I fill the \"password\" field with \"123123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 478,
  "name": "I fill the \"password_confirmation\" field with \"123456\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I press the \"Criar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "the \"As passwords têm que ser iguais nos dois campos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 232009563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 90224867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 56319887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Criar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 423265248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "As passwords têm que ser iguais nos dois campos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 59447675,
  "status": "passed"
});
formatter.after({
  "duration": 528734849,
  "status": "passed"
});
formatter.before({
  "duration": 2914326600,
  "status": "passed"
});
formatter.scenario({
  "line": 486,
  "name": "Password confirmation field does not match password field",
  "description": "",
  "id": "manage-users;password-confirmation-field-does-not-match-password-field;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 476,
  "name": "I access the \"edit admin\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 477,
  "name": "I fill the \"password\" field with \"123123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 478,
  "name": "I fill the \"password_confirmation\" field with \"123456\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "the \"As passwords têm que ser iguais nos dois campos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit admin",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 147221586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 57537161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 70984427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 300178725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "As passwords têm que ser iguais nos dois campos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 23941057,
  "status": "passed"
});
formatter.after({
  "duration": 529494459,
  "status": "passed"
});
formatter.before({
  "duration": 2896245086,
  "status": "passed"
});
formatter.scenario({
  "line": 487,
  "name": "Password confirmation field does not match password field",
  "description": "",
  "id": "manage-users;password-confirmation-field-does-not-match-password-field;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 476,
  "name": "I access the \"edit healthcare professional\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 477,
  "name": "I fill the \"password\" field with \"123123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 478,
  "name": "I fill the \"password_confirmation\" field with \"123456\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "the \"As passwords têm que ser iguais nos dois campos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit healthcare professional",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 147741972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 57166290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 69289069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 398393913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "As passwords têm que ser iguais nos dois campos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 22903931,
  "status": "passed"
});
formatter.after({
  "duration": 528509117,
  "status": "passed"
});
formatter.before({
  "duration": 3060362637,
  "status": "passed"
});
formatter.scenario({
  "line": 488,
  "name": "Password confirmation field does not match password field",
  "description": "",
  "id": "manage-users;password-confirmation-field-does-not-match-password-field;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 476,
  "name": "I access the \"edit caregiver\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 477,
  "name": "I fill the \"password\" field with \"123123\" - USthree",
  "keyword": "When "
});
formatter.step({
  "line": 478,
  "name": "I fill the \"password_confirmation\" field with \"123456\" - USthree",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I press the \"Guardar\" button - USthree",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "the \"As passwords têm que ser iguais nos dois campos.\" error message should be shown - USthree",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit caregiver",
      "offset": 14
    }
  ],
  "location": "US3StepDefs.iAccessThePage(String)"
});
formatter.result({
  "duration": 364292374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 34
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 86578516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password_confirmation",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 47
    }
  ],
  "location": "US3StepDefs.iFillTheFieldWithUSthree(String,String)"
});
formatter.result({
  "duration": 57345708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 13
    }
  ],
  "location": "US3StepDefs.iPressTheButtonUSthree(String)"
});
formatter.result({
  "duration": 421124626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "As passwords têm que ser iguais nos dois campos.",
      "offset": 5
    }
  ],
  "location": "US3StepDefs.theErrorMessageShouldBeShownUSthree(String)"
});
formatter.result({
  "duration": 43946578,
  "status": "passed"
});
formatter.after({
  "duration": 544211512,
  "status": "passed"
});
});