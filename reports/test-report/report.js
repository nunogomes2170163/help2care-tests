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
  "duration": 4002136253,
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
  "duration": 182368439,
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
  "duration": 356479596,
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
  "duration": 41501941,
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
  "duration": 220687153,
  "status": "passed"
});
formatter.after({
  "duration": 536232602,
  "status": "passed"
});
formatter.before({
  "duration": 2890861484,
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
  "duration": 240605941,
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
  "duration": 178345371,
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
  "duration": 25113550,
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
  "duration": 210936899,
  "status": "passed"
});
formatter.after({
  "duration": 527793347,
  "status": "passed"
});
formatter.before({
  "duration": 2986233606,
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
  "duration": 232439825,
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
  "duration": 268815562,
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
  "duration": 56437476,
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
  "duration": 310506403,
  "status": "passed"
});
formatter.after({
  "duration": 529552164,
  "status": "passed"
});
formatter.before({
  "duration": 2994197693,
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
  "duration": 141606420,
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
  "duration": 67890022,
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
  "duration": 81016416,
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
  "duration": 86306723,
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
  "duration": 60833241,
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
  "duration": 61346335,
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
  "duration": 497157558,
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
  "duration": 130411698,
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
  "duration": 183741797,
  "status": "passed"
});
formatter.after({
  "duration": 540804505,
  "status": "passed"
});
formatter.before({
  "duration": 4307163083,
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
  "duration": 139657609,
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
  "duration": 69603619,
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
  "duration": 71356965,
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
  "duration": 83786469,
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
  "duration": 67572027,
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
  "duration": 63266702,
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
  "duration": 60896329,
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
  "duration": 61709184,
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
  "duration": 481320552,
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
  "duration": 128879707,
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
  "duration": 173417913,
  "status": "passed"
});
formatter.after({
  "duration": 532108519,
  "status": "passed"
});
formatter.before({
  "duration": 3012529789,
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
  "duration": 354778397,
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
  "duration": 79473850,
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
  "duration": 69700622,
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
  "duration": 81735550,
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
  "duration": 79461816,
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
  "duration": 66902488,
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
  "duration": 63406736,
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
  "duration": 79891765,
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
  "duration": 75329710,
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
  "duration": 81999573,
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
  "duration": 59408465,
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
  "duration": 546799359,
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
  "duration": 132257305,
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
  "duration": 169290182,
  "status": "passed"
});
formatter.after({
  "duration": 536585606,
  "status": "passed"
});
formatter.before({
  "duration": 3017011982,
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
  "duration": 112647031,
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
  "duration": 531038569,
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
  "duration": 54191822,
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
  "duration": 11770905,
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
  "duration": 5270250,
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
  "duration": 6501020,
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
  "duration": 5825282,
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
  "duration": 4856711,
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
  "duration": 56524,
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
  "duration": 24798,
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
  "duration": 85334,
  "status": "passed"
});
formatter.after({
  "duration": 533032964,
  "status": "passed"
});
formatter.before({
  "duration": 2999994895,
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
  "name": "the field \"created_at\" should show \"2018-06-13 14:34:58\"",
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
  "duration": 114723478,
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
  "duration": 491206465,
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
  "duration": 35213525,
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
  "duration": 10531747,
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
  "duration": 5544119,
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
  "duration": 6497009,
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
  "duration": 5679048,
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
  "duration": 5184917,
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
  "duration": 5870136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "created_at",
      "offset": 11
    },
    {
      "val": "2018-06-13 14:34:58",
      "offset": 36
    }
  ],
  "location": "US3StepDefs.theFieldShouldShow(String,String)"
});
formatter.result({
  "duration": 5251287,
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
  "duration": 38656,
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
  "duration": 22245,
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
  "duration": 19692,
  "status": "passed"
});
formatter.after({
  "duration": 530151686,
  "status": "passed"
});
formatter.before({
  "duration": 3156082467,
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
  "duration": 110929788,
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
  "duration": 452803877,
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
  "duration": 50963374,
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
  "duration": 19744109,
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
  "duration": 10081377,
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
  "duration": 9959940,
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
  "duration": 6751915,
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
  "duration": 6813544,
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
  "duration": 90074,
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
  "duration": 7028701,
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
  "duration": 6540040,
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
  "duration": 6390160,
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
  "duration": 6963790,
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
  "duration": 6488986,
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
  "duration": 42666,
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
  "duration": 28444,
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
  "duration": 25527,
  "status": "passed"
});
formatter.after({
  "duration": 532391506,
  "status": "passed"
});
formatter.before({
  "duration": 4393960656,
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
  "duration": 115164367,
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
  "duration": 573007292,
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
  "duration": 138173755,
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
  "duration": 174596171,
  "status": "passed"
});
formatter.after({
  "duration": 528143068,
  "status": "passed"
});
formatter.before({
  "duration": 2969239129,
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
  "duration": 110080465,
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
  "duration": 181571265,
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
  "duration": 532204064,
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
  "duration": 137661390,
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
  "duration": 158352555,
  "status": "passed"
});
formatter.after({
  "duration": 531427310,
  "status": "passed"
});
formatter.before({
  "duration": 2872409046,
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
  "duration": 542195730,
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
  "duration": 173516739,
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
  "duration": 63818,
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
  "duration": 26622,
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
  "duration": 9310094,
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
  "duration": 10793947,
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
  "duration": 11741002,
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
  "duration": 37926,
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
  "duration": 55430,
  "status": "passed"
});
formatter.after({
  "duration": 528684243,
  "status": "passed"
});
formatter.before({
  "duration": 3069974492,
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
  "name": "should be present a log at the \"Registos\" section",
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
  "duration": 140959855,
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
  "duration": 68651823,
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
  "duration": 76458372,
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
  "duration": 471208908,
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
  "duration": 21684533,
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
  "duration": 6048096,
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
  "duration": 5794649,
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
  "duration": 6007618,
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
  "duration": 6258513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheSection(String)"
});
formatter.result({
  "duration": 40479,
  "status": "passed"
});
formatter.after({
  "duration": 528682420,
  "status": "passed"
});
formatter.before({
  "duration": 2965458932,
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
  "name": "should be present a log at the \"Registos\" section",
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
  "duration": 180215412,
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
  "duration": 89352104,
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
  "duration": 100489937,
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
  "duration": 59830755,
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
  "duration": 58480008,
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
  "duration": 621490891,
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
  "duration": 57210217,
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
  "duration": 52513,
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
  "duration": 6796406,
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
  "duration": 6324883,
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
  "duration": 5617419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheSection(String)"
});
formatter.result({
  "duration": 76946,
  "status": "passed"
});
formatter.after({
  "duration": 529250579,
  "status": "passed"
});
formatter.before({
  "duration": 3005518956,
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
  "duration": 316119445,
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
  "duration": 184731154,
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
  "duration": 46314,
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
  "duration": 23704,
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
  "duration": 10706791,
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
  "duration": 11800444,
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
  "duration": 15307501,
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
  "duration": 10827132,
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
  "duration": 12605276,
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
  "duration": 19692,
  "status": "passed"
});
formatter.after({
  "duration": 529386602,
  "status": "passed"
});
formatter.before({
  "duration": 3008222276,
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
  "name": "should be present a log at the \"Registos\" section",
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
  "duration": 186533367,
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
  "duration": 80425281,
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
  "duration": 94088473,
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
  "duration": 80172563,
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
  "duration": 67296335,
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
  "duration": 539882977,
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
  "duration": 48708968,
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
  "duration": 6606045,
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
  "duration": 7488189,
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
  "duration": 5359959,
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
  "duration": 5618147,
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
  "duration": 6118843,
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
  "duration": 5525156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheSection(String)"
});
formatter.result({
  "duration": 28445,
  "status": "passed"
});
formatter.after({
  "duration": 539377905,
  "status": "passed"
});
formatter.before({
  "duration": 2864596298,
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
  "name": "should be present a log at the \"Registos\" section",
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
  "duration": 296133193,
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
  "duration": 81845317,
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
  "duration": 93497339,
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
  "duration": 70191107,
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
  "duration": 65840926,
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
  "duration": 67319310,
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
  "duration": 57503414,
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
  "duration": 519102103,
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
  "duration": 22810277,
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
  "duration": 7020679,
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
  "duration": 6148747,
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
  "duration": 6036427,
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
  "duration": 5536096,
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
  "duration": 6102798,
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
  "duration": 6166251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheSection(String)"
});
formatter.result({
  "duration": 27715,
  "status": "passed"
});
formatter.after({
  "duration": 529193690,
  "status": "passed"
});
formatter.before({
  "duration": 4393178433,
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
  "duration": 552818646,
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
  "duration": 287445231,
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
  "duration": 139305,
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
  "duration": 88251,
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
  "duration": 25334177,
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
  "duration": 23608910,
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
  "duration": 21001500,
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
  "duration": 12776673,
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
  "duration": 11199099,
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
  "duration": 11382529,
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
  "duration": 11190712,
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
  "duration": 10448967,
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
  "duration": 30997,
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
  "duration": 16775,
  "status": "passed"
});
formatter.after({
  "duration": 528815890,
  "status": "passed"
});
formatter.before({
  "duration": 2921600110,
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
  "name": "should be present a log at the \"Registos\" section",
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
  "duration": 399941287,
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
  "duration": 84259450,
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
  "duration": 89818156,
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
  "duration": 75851921,
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
  "duration": 66413098,
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
  "duration": 66677485,
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
  "duration": 83857581,
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
  "duration": 40411205,
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
  "duration": 558796726,
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
  "duration": 68953407,
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
  "duration": 6854023,
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
  "duration": 7084132,
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
  "duration": 6604587,
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
  "duration": 5884723,
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
  "duration": 5770216,
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
  "duration": 5506922,
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
  "duration": 5658991,
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
  "duration": 5410648,
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
  "duration": 36468,
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
  "duration": 29903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheSection(String)"
});
formatter.result({
  "duration": 24068,
  "status": "passed"
});
formatter.after({
  "duration": 530215138,
  "status": "passed"
});
formatter.before({
  "duration": 2830945396,
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
  "name": "should be present a log at the \"Registos\" section",
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
  "duration": 539566076,
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
  "duration": 82976167,
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
  "duration": 91288152,
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
  "duration": 41461462,
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
  "duration": 66837212,
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
  "duration": 70143335,
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
  "duration": 42665976,
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
  "duration": 40601564,
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
  "duration": 72546528,
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
  "duration": 55462706,
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
  "duration": 558553124,
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
  "duration": 25534018,
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
  "duration": 5703481,
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
  "duration": 5141521,
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
  "duration": 5815435,
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
  "duration": 5980997,
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
  "duration": 5462433,
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
  "duration": 7079027,
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
  "duration": 5478477,
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
  "duration": 6218034,
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
  "duration": 70382,
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
  "duration": 23704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 32
    }
  ],
  "location": "US3StepDefs.shouldBePresentALogAtTheSection(String)"
});
formatter.result({
  "duration": 18963,
  "status": "passed"
});
formatter.after({
  "duration": 534465399,
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
  "name": "I access the \u003cpage\u003e page",
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
  "duration": 2993750604,
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
  "name": "I access the new admin page",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 538198918,
  "status": "passed"
});
formatter.before({
  "duration": 2977142315,
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
  "name": "I access the new healthcare professional page",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 532956383,
  "status": "passed"
});
