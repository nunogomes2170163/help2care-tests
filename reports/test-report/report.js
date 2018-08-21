$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US4.feature");
formatter.feature({
  "line": 1,
  "name": "Manage Needs",
  "description": "As an admin\r\nI want to manage all the needs\r\nSo that I can use them on patients",
  "id": "manage-needs",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4296374606,
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
  "duration": 519434684,
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
  "duration": 150705004,
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
  "duration": 25752456,
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
  "duration": 34996180,
  "status": "passed"
});
formatter.after({
  "duration": 543437806,
  "status": "passed"
});
formatter.before({
  "duration": 3298812078,
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
  "duration": 148863041,
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
  "duration": 76572879,
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
  "duration": 375701493,
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
  "duration": 64296537,
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
  "duration": 146317991,
  "status": "passed"
});
formatter.after({
  "duration": 528408185,
  "status": "passed"
});
formatter.before({
  "duration": 4718048928,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#DELETE"
    }
  ],
  "line": 21,
  "name": "Delete Need",
  "description": "",
  "id": "manage-needs;delete-need",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I access the \"details\" page of the \"random\" need",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I press the \"delete\" button - USfour",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I press the \"Sim\" button from the modal",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be redirected to the \"needs\" page - USfour",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "the \"random\" need should not be present in the \"needs\" table",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "random",
      "offset": 36
    }
  ],
  "location": "US4StepDefs.iAccessThePageOfTheNeed(String,String)"
});
formatter.result({
  "duration": 937189504,
  "status": "passed"
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
  "duration": 63775420,
  "status": "passed"
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
  "duration": 396550196,
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
  "duration": 72576795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random",
      "offset": 5
    },
    {
      "val": "needs",
      "offset": 48
    }
  ],
  "location": "US4StepDefs.theNeedShouldNotBePresentInTheTable(String,String)"
});
formatter.result({
  "duration": 109756636,
  "status": "passed"
});
formatter.after({
  "duration": 560976739,
  "status": "passed"
});
formatter.before({
  "duration": 3450816047,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 28,
      "value": "#DETAILS"
    }
  ],
  "line": 29,
  "name": "Access Need Details",
  "description": "",
  "id": "manage-needs;access-need-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I access the \"needs\" page - USfour",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I press the \"details\" button of the \"Acamado\" need",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should be redirected to the \"details\" page of \"Acamado\" need",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the field \"need\" should show \"Acamado\" - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the field \"created_by\" should show \"jose.silva\" - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the \"edit\" button should be present - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the \"delete\" button should be present - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 286473378,
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
  "duration": 494074251,
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
  "duration": 29604495,
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
  "duration": 13948002,
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
  "duration": 19119789,
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
  "duration": 60171,
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
  "duration": 40479,
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
  "duration": 24433,
  "status": "passed"
});
formatter.after({
  "duration": 554062180,
  "status": "passed"
});
formatter.before({
  "duration": 4008236862,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 39,
      "value": "#EDIT"
    }
  ],
  "line": 40,
  "name": "Access Edit Need Page",
  "description": "",
  "id": "manage-needs;access-edit-need-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I access the \"details\" page of the \"need\"",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I press the \"edit\" button - USfour",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should be redirected to the \"edit\" page of the need",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "the editable field \"description\" should show \"Alimentaion\" - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the \"save\" button should be present - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 46,
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
  "duration": 206881009,
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
  "duration": 195580897,
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
  "duration": 25900878,
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
  "duration": 24308353,
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
  "duration": 36102,
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
  "duration": 84969,
  "status": "passed"
});
formatter.after({
  "duration": 560075633,
  "status": "passed"
});
formatter.before({
  "duration": 3066500984,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Edit Need Successfully",
  "description": "",
  "id": "manage-needs;edit-need-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "I access the \"edit need\" page of the \"need\"",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I fill the \"description\" field with \"Alimentation\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I press the \"save\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should be redirected to the \"details\" page of the \"need\" - USfour",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "the field \"Necessidade\" should show the new need - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 54,
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
  "duration": 313132046,
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
  "duration": 75411397,
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
  "duration": 377350543,
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
  "duration": 23747121,
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
  "duration": 5680507,
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
  "duration": 38291,
  "status": "passed"
});
formatter.after({
  "duration": 528384846,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 57,
      "value": "#ERRORS"
    }
  ],
  "line": 58,
  "name": "Description field already exists",
  "description": "",
  "id": "manage-needs;description-field-already-exists",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "I access the \"\u003cpage\u003e\" page - USfour",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I fill the \"description\" field with \"Acamado\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I press the \"\u003cbutton\u003e\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the \"Já existe uma necessidade com essa descrição. Escolha outra.\" error message should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "manage-needs;description-field-already-exists;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 64,
      "id": "manage-needs;description-field-already-exists;;1"
    },
    {
      "cells": [
        "new need",
        "create"
      ],
      "line": 65,
      "id": "manage-needs;description-field-already-exists;;2"
    },
    {
      "cells": [
        "edit need",
        "save"
      ],
      "line": 66,
      "id": "manage-needs;description-field-already-exists;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3069635710,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Description field already exists",
  "description": "",
  "id": "manage-needs;description-field-already-exists;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "I access the \"new need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I fill the \"description\" field with \"Acamado\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I press the \"create\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
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
  "duration": 133670048,
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
  "duration": 62314177,
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
  "duration": 297819440,
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
  "duration": 24705481,
  "status": "passed"
});
formatter.after({
  "duration": 531019607,
  "status": "passed"
});
formatter.before({
  "duration": 5042153611,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Description field already exists",
  "description": "",
  "id": "manage-needs;description-field-already-exists;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "I access the \"edit need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I fill the \"description\" field with \"Acamado\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I press the \"save\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
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
  "duration": 156478137,
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
  "duration": 64300548,
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
  "duration": 313613414,
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
  "duration": 33363176,
  "status": "passed"
});
formatter.after({
  "duration": 530255617,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 68,
  "name": "Description field empty",
  "description": "",
  "id": "manage-needs;description-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I access the \"\u003cpage\u003e\" page - USfour",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "the \"description\" field is empty",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I press the \"\u003cbutton\u003e\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 73,
  "name": "",
  "description": "",
  "id": "manage-needs;description-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 74,
      "id": "manage-needs;description-field-empty;;1"
    },
    {
      "cells": [
        "new need",
        "create"
      ],
      "line": 75,
      "id": "manage-needs;description-field-empty;;2"
    },
    {
      "cells": [
        "edit need",
        "save"
      ],
      "line": 76,
      "id": "manage-needs;description-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3205515310,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Description field empty",
  "description": "",
  "id": "manage-needs;description-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I access the \"new need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "the \"description\" field is empty",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I press the \"create\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
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
  "duration": 122603325,
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
  "duration": 31113510,
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
  "duration": 346941946,
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
  "duration": 25807887,
  "status": "passed"
});
formatter.after({
  "duration": 530746102,
  "status": "passed"
});
formatter.before({
  "duration": 3177271774,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Description field empty",
  "description": "",
  "id": "manage-needs;description-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "I access the \"edit need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "the \"description\" field is empty",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I press the \"save\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
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
  "duration": 158026901,
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
  "duration": 29466283,
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
  "duration": 301096388,
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
  "duration": 24997219,
  "status": "passed"
});
formatter.after({
  "duration": 533721102,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 78,
  "name": "Description field min length",
  "description": "",
  "id": "manage-needs;description-field-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "I access the \"\u003cpage\u003e\" page - USfour",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "I fill the \"description\" field with \"12\"",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "I press the \"\u003cbutton\u003e\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the \"A descrição tem que ter pelo menos 5 letras.\" error message should be shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 83,
  "name": "",
  "description": "",
  "id": "manage-needs;description-field-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 84,
      "id": "manage-needs;description-field-min-length;;1"
    },
    {
      "cells": [
        "new need",
        "create"
      ],
      "line": 85,
      "id": "manage-needs;description-field-min-length;;2"
    },
    {
      "cells": [
        "edit need",
        "save"
      ],
      "line": 86,
      "id": "manage-needs;description-field-min-length;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3558091814,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Description field min length",
  "description": "",
  "id": "manage-needs;description-field-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "I access the \"new need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "I fill the \"description\" field with \"12\"",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "I press the \"create\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
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
  "duration": 121402093,
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
  "duration": 58168212,
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
  "duration": 346152795,
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
  "duration": 25203989,
  "status": "passed"
});
formatter.after({
  "duration": 530705259,
  "status": "passed"
});
formatter.before({
  "duration": 3051272252,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Description field min length",
  "description": "",
  "id": "manage-needs;description-field-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "I access the \"edit need\" page - USfour",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "I fill the \"description\" field with \"12\"",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "I press the \"save\" button - USfour",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
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
  "duration": 120271608,
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
  "duration": 67352130,
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
  "duration": 308789524,
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
  "duration": 23845948,
  "status": "passed"
});
formatter.after({
  "duration": 529729394,
  "status": "passed"
});
});