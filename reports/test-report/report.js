$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US4.feature");
formatter.feature({
  "line": 1,
  "name": "Manage Needs",
  "description": "As an admin\r\nI want to manage all the needs\r\nSo that I can use them on patients",
  "id": "manage-needs",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5571906864,
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
  "name": "I access the \"needs\" dashboard - USfour",
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
  "location": "US4StepDefs.iAccessTheDashboardUSfour(String)"
});
formatter.result({
  "duration": 392076707,
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
  "duration": 248348311,
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
  "duration": 25473043,
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
  "duration": 25790308,
  "status": "passed"
});
formatter.after({
  "duration": 530315335,
  "status": "passed"
});
formatter.before({
  "duration": 3797012464,
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
  "name": "I fill the \"description\" field with \"Cucumber\" - USfour",
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
  "duration": 239691007,
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
  "location": "US4StepDefs.iFillTheFieldWithUSfour(String,String)"
});
formatter.result({
  "duration": 79036012,
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
  "duration": 684044486,
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
  "duration": 24556623,
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
  "duration": 144282696,
  "status": "passed"
});
formatter.after({
  "duration": 530735437,
  "status": "passed"
});
formatter.before({
  "duration": 3716579395,
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
  "duration": 1386487020,
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
  "duration": 57292831,
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
  "duration": 708202887,
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
  "duration": 38445871,
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
  "duration": 113586098,
  "status": "passed"
});
formatter.after({
  "duration": 540404705,
  "status": "passed"
});
formatter.before({
  "duration": 3558098938,
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
  "duration": 447164003,
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
  "duration": 356933666,
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
  "duration": 24037330,
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
  "duration": 18632533,
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
  "duration": 26231924,
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
  "duration": 12918493,
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
  "duration": 13081501,
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
  "duration": 11381402,
  "status": "passed"
});
formatter.after({
  "duration": 528366166,
  "status": "passed"
});
formatter.before({
  "duration": 3678968986,
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
  "name": "the editable field \"description\" should show \"Alimentation\" - USfour",
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
  "duration": 266034521,
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
  "duration": 199274814,
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
  "duration": 25357442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 20
    },
    {
      "val": "Alimentation",
      "offset": 46
    }
  ],
  "location": "US4StepDefs.theEditableFieldShouldShowUSfour(String,String)"
});
formatter.result({
  "duration": 20681258,
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
  "duration": 11993686,
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
  "duration": 12581536,
  "status": "passed"
});
formatter.after({
  "duration": 531565065,
  "status": "passed"
});
formatter.before({
  "duration": 4404664077,
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
  "name": "I fill the \"description\" field with \"Alimentation\" - USfour",
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
  "name": "should be present a \"Foi atualizada.\" log at the beggining of the logs section - USfour",
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
  "duration": 157052402,
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
  "location": "US4StepDefs.iFillTheFieldWithUSfour(String,String)"
});
formatter.result({
  "duration": 76517590,
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
  "duration": 382558777,
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
  "duration": 22427670,
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
  "duration": 13760519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizada.",
      "offset": 21
    }
  ],
  "location": "US4StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSfour(String)"
});
formatter.result({
  "duration": 37262147,
  "status": "passed"
});
formatter.after({
  "duration": 531799548,
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
  "name": "I fill the \"description\" field with \"Acamado\" - USfour",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I press the \"\u003cbutton\u003e\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the \"Já existe uma necessidade com essa descrição. Escolha outra.\" error message should be shown - USfour",
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
  "duration": 3648787303,
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
  "name": "I fill the \"description\" field with \"Acamado\" - USfour",
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
  "name": "the \"Já existe uma necessidade com essa descrição. Escolha outra.\" error message should be shown - USfour",
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
  "duration": 218713271,
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
  "location": "US4StepDefs.iFillTheFieldWithUSfour(String,String)"
});
formatter.result({
  "duration": 72844617,
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
  "duration": 287170888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma necessidade com essa descrição. Escolha outra.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShownUSfour(String)"
});
formatter.result({
  "duration": 25921225,
  "status": "passed"
});
formatter.after({
  "duration": 530341591,
  "status": "passed"
});
formatter.before({
  "duration": 4264800836,
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
  "name": "I fill the \"description\" field with \"Acamado\" - USfour",
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
  "name": "the \"Já existe uma necessidade com essa descrição. Escolha outra.\" error message should be shown - USfour",
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
  "duration": 324107384,
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
  "location": "US4StepDefs.iFillTheFieldWithUSfour(String,String)"
});
formatter.result({
  "duration": 59072428,
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
  "duration": 555253769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma necessidade com essa descrição. Escolha outra.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShownUSfour(String)"
});
formatter.result({
  "duration": 24366265,
  "status": "passed"
});
formatter.after({
  "duration": 535891529,
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
  "name": "the \"description\" field is empty - USfour",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I press the \"\u003cbutton\u003e\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown - USfour",
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
  "duration": 4276939297,
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
  "name": "the \"description\" field is empty - USfour",
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
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown - USfour",
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
  "duration": 163281359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theFieldIsEmptyUSfour(String)"
});
formatter.result({
  "duration": 29414049,
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
  "duration": 694232682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShownUSfour(String)"
});
formatter.result({
  "duration": 23617229,
  "status": "passed"
});
formatter.after({
  "duration": 533993414,
  "status": "passed"
});
formatter.before({
  "duration": 4499903180,
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
  "name": "the \"description\" field is empty - USfour",
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
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown - USfour",
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
  "duration": 161747915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theFieldIsEmptyUSfour(String)"
});
formatter.result({
  "duration": 30963174,
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
  "duration": 788312128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShownUSfour(String)"
});
formatter.result({
  "duration": 41861022,
  "status": "passed"
});
formatter.after({
  "duration": 535561866,
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
  "name": "I fill the \"description\" field with \"12\" - USfour",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I press the \"\u003cbutton\u003e\" button - USfour",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the \"A descrição tem que ter pelo menos 5 letras.\" error message should be shown - USfour",
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
  "duration": 5373956903,
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
  "name": "I fill the \"description\" field with \"12\" - USfour",
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
  "name": "the \"A descrição tem que ter pelo menos 5 letras.\" error message should be shown - USfour",
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
  "duration": 146150179,
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
  "location": "US4StepDefs.iFillTheFieldWithUSfour(String,String)"
});
formatter.result({
  "duration": 55912913,
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
  "duration": 595634589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ter pelo menos 5 letras.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShownUSfour(String)"
});
formatter.result({
  "duration": 40628067,
  "status": "passed"
});
formatter.after({
  "duration": 529968897,
  "status": "passed"
});
formatter.before({
  "duration": 4479714958,
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
  "name": "I fill the \"description\" field with \"12\" - USfour",
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
  "name": "the \"A descrição tem que ter pelo menos 5 letras.\" error message should be shown - USfour",
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
  "duration": 234086368,
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
  "location": "US4StepDefs.iFillTheFieldWithUSfour(String,String)"
});
formatter.result({
  "duration": 53630434,
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
  "duration": 473471780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ter pelo menos 5 letras.",
      "offset": 5
    }
  ],
  "location": "US4StepDefs.theErrorMessageShouldBeShownUSfour(String)"
});
formatter.result({
  "duration": 25344679,
  "status": "passed"
});
formatter.after({
  "duration": 535768634,
  "status": "passed"
});
});