$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US5.feature");
formatter.feature({
  "line": 1,
  "name": "Manage Materials",
  "description": "As an admin\r\nI want to managing all the training materials\r\nSo that them can be used/viewed on the Mobile app",
  "id": "manage-materials",
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
  "name": "Access New Text Material Page",
  "description": "",
  "id": "manage-materials;access-new-text-material-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"\u003cpage\u003e\" button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"\u003cpage\u003e\" page - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"\u003cpage\u003e\" text should be shown",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "manage-materials;access-new-text-material-page;",
  "rows": [
    {
      "cells": [
        "page"
      ],
      "line": 13,
      "id": "manage-materials;access-new-text-material-page;;1"
    },
    {
      "cells": [
        "new text"
      ],
      "line": 14,
      "id": "manage-materials;access-new-text-material-page;;2"
    },
    {
      "cells": [
        "new image"
      ],
      "line": 15,
      "id": "manage-materials;access-new-text-material-page;;3"
    },
    {
      "cells": [
        "new video"
      ],
      "line": 16,
      "id": "manage-materials;access-new-text-material-page;;4"
    },
    {
      "cells": [
        "new audioGuide"
      ],
      "line": 17,
      "id": "manage-materials;access-new-text-material-page;;5"
    },
    {
      "cells": [
        "new listItem"
      ],
      "line": 18,
      "id": "manage-materials;access-new-text-material-page;;6"
    },
    {
      "cells": [
        "new emergencyContact"
      ],
      "line": 19,
      "id": "manage-materials;access-new-text-material-page;;7"
    },
    {
      "cells": [
        "new annex"
      ],
      "line": 20,
      "id": "manage-materials;access-new-text-material-page;;8"
    },
    {
      "cells": [
        "new composite"
      ],
      "line": 21,
      "id": "manage-materials;access-new-text-material-page;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5151309266,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Access New Text Material Page",
  "description": "",
  "id": "manage-materials;access-new-text-material-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new text\" button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new text\" page - USfive",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"new text\" text should be shown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 654599161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new text",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 266850705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new text",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageUSfive(String)"
});
formatter.result({
  "duration": 174313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new text",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "duration": 46057432,
  "status": "passed"
});
formatter.after({
  "duration": 533843632,
  "status": "passed"
});
formatter.before({
  "duration": 3063123750,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Access New Text Material Page",
  "description": "",
  "id": "manage-materials;access-new-text-material-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new image\" button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new image\" page - USfive",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"new image\" text should be shown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 472930528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new image",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 284734618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new image",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageUSfive(String)"
});
formatter.result({
  "duration": 129823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new image",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "duration": 56503117,
  "status": "passed"
});
formatter.after({
  "duration": 532100132,
  "status": "passed"
});
formatter.before({
  "duration": 3153691673,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Access New Text Material Page",
  "description": "",
  "id": "manage-materials;access-new-text-material-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new video\" button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new video\" page - USfive",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"new video\" text should be shown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 637448239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new video",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 289866658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new video",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageUSfive(String)"
});
formatter.result({
  "duration": 184524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new video",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "duration": 48024112,
  "status": "passed"
});
formatter.after({
  "duration": 547787621,
  "status": "passed"
});
formatter.before({
  "duration": 3071374105,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Access New Text Material Page",
  "description": "",
  "id": "manage-materials;access-new-text-material-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new audioGuide\" button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new audioGuide\" page - USfive",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"new audioGuide\" text should be shown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 482979084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new audioGuide",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 257874287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new audioGuide",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageUSfive(String)"
});
formatter.result({
  "duration": 142222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new audioGuide",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "duration": 57597500,
  "status": "passed"
});
formatter.after({
  "duration": 531282171,
  "status": "passed"
});
formatter.before({
  "duration": 3164181483,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Access New Text Material Page",
  "description": "",
  "id": "manage-materials;access-new-text-material-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new listItem\" button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new listItem\" page - USfive",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"new listItem\" text should be shown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 482723449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new listItem",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 251385665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new listItem",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageUSfive(String)"
});
formatter.result({
  "duration": 140399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new listItem",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "duration": 48524808,
  "status": "passed"
});
formatter.after({
  "duration": 533440668,
  "status": "passed"
});
formatter.before({
  "duration": 4393822080,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Access New Text Material Page",
  "description": "",
  "id": "manage-materials;access-new-text-material-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new emergencyContact\" button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new emergencyContact\" page - USfive",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"new emergencyContact\" text should be shown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 619388918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new emergencyContact",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 264498202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new emergencyContact",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageUSfive(String)"
});
formatter.result({
  "duration": 130188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new emergencyContact",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "duration": 44467094,
  "status": "passed"
});
formatter.after({
  "duration": 540046350,
  "status": "passed"
});
formatter.before({
  "duration": 3527632527,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Access New Text Material Page",
  "description": "",
  "id": "manage-materials;access-new-text-material-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new annex\" button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new annex\" page - USfive",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"new annex\" text should be shown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 479136164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new annex",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 266009040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new annex",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageUSfive(String)"
});
formatter.result({
  "duration": 45948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new annex",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "duration": 18992883,
  "status": "passed"
});
formatter.after({
  "duration": 528763742,
  "status": "passed"
});
formatter.before({
  "duration": 3353706624,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Access New Text Material Page",
  "description": "",
  "id": "manage-materials;access-new-text-material-page;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new composite\" button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new composite\" page - USfive",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"new composite\" text should be shown",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 473862266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new composite",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButton(String)"
});
formatter.result({
  "duration": 253820950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new composite",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageUSfive(String)"
});
formatter.result({
  "duration": 154622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new composite",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "duration": 49454359,
  "status": "passed"
});
formatter.after({
  "duration": 533172269,
  "status": "passed"
});
formatter.before({
  "duration": 3427934658,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Create New Text Successfully",
  "description": "",
  "id": "manage-materials;create-new-text-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I access the \"new text\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I fill the \"name\" field with \"Cucumber Text\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I fill the \"description\" field with \"Cucumber Text Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I fill the \"body\" field with \"Cucumber Text Very Detailed Text\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I press the \"create\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should be redirected to the \"details\" page of the \"Text\" material - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "the field \"material\" should show \"Cucumber Text\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the field \"type\" should show \"Texto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the field \"description\" should show \"Cucumber Text Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the field \"text\" should show \"Cucumber Text Very Detailed Text\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the \"edit\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the \"block\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the \"delete\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the \"back\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the first entry of the \"Registos\" table should contain the text \"Foi criado.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new text",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 335863554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Text",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 93747869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Text Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 84946493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "body",
      "offset": 12
    },
    {
      "val": "Cucumber Text Very Detailed Text",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 75716263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "duration": 560940272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Text",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageOfTheMaterialUSfive(String,String)"
});
formatter.result({
  "duration": 54993372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 11
    },
    {
      "val": "Cucumber Text",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 12868570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Texto",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 12675658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber Text Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 13049448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 11
    },
    {
      "val": "Cucumber Text Very Detailed Text",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 32502548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 45949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 54701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 42302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 30632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 24
    },
    {
      "val": "Foi criado.",
      "offset": 65
    }
  ],
  "location": "US5StepDefs.theFirstEntryOfTheTableShouldContainTheText(String,String)"
});
formatter.result({
  "duration": 35374,
  "status": "passed"
});
formatter.after({
  "duration": 532352121,
  "status": "passed"
});
formatter.before({
  "duration": 2993437715,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Create New Image Successfully",
  "description": "",
  "id": "manage-materials;create-new-image-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I access the \"new image\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I fill the \"name\" field with \"Cucumber Image\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I fill the \"description\" field with \"Cucumber Image Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I fill the \"pathImage\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I press the \"create\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I should be redirected to the \"details\" page of the \"Image\" material - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "the field \"material\" should show \"Cucumber Image\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the field \"type\" should show \"Imagem\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the field \"description\" should show \"Cucumber Image Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the field \"file\" should show a \"image\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the \"edit\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the \"block\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the \"delete\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the \"back\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the first entry of the \"Registos\" table should contain the text \"Foi criado.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new image",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 391175286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Image",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 93933852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Image Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 91654648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pathImage",
      "offset": 12
    },
    {
      "val": "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 48385503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "duration": 698082733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Image",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageOfTheMaterialUSfive(String,String)"
});
formatter.result({
  "duration": 59147359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 11
    },
    {
      "val": "Cucumber Image",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 16324208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Imagem",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 10773525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber Image Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 7034901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file",
      "offset": 11
    },
    {
      "val": "image",
      "offset": 32
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowA(String,String)"
});
formatter.result({
  "duration": 92627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 23340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 20058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 33186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 36103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 24
    },
    {
      "val": "Foi criado.",
      "offset": 65
    }
  ],
  "location": "US5StepDefs.theFirstEntryOfTheTableShouldContainTheText(String,String)"
});
formatter.result({
  "duration": 30268,
  "status": "passed"
});
formatter.after({
  "duration": 543376906,
  "status": "passed"
});
formatter.before({
  "duration": 3810091588,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Create New Video Successfully",
  "description": "",
  "id": "manage-materials;create-new-video-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "I access the \"new video\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I fill the \"name\" field with \"Cucumber Video\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I fill the \"description\" field with \"Cucumber Video Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I fill the \"pathVideo\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp4\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I press the \"create\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I should be redirected to the \"details\" page of the \"Video\" material - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "the field \"material\" should show \"Cucumber Video\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the field \"type\" should show \"Video\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the field \"drescription\" should show \"Cucumber Video Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the field \"file\" should show a \"video\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the \"edit\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the \"block\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the \"delete\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the \"back\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the first entry of the \"Registos\" table should contain the text \"Foi criado.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new video",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 291846465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Video",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 78237245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Video Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 99130073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pathVideo",
      "offset": 12
    },
    {
      "val": "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp4",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 49629401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "duration": 1410075177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Video",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageOfTheMaterialUSfive(String,String)"
});
formatter.result({
  "duration": 62407532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 11
    },
    {
      "val": "Cucumber Video",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 15157256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Video",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 10056579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drescription",
      "offset": 11
    },
    {
      "val": "Cucumber Video Description",
      "offset": 38
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 44855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file",
      "offset": 11
    },
    {
      "val": "video",
      "offset": 32
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowA(String,String)"
});
formatter.result({
  "duration": 29903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 19692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 20057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 18963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 20786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 24
    },
    {
      "val": "Foi criado.",
      "offset": 65
    }
  ],
  "location": "US5StepDefs.theFirstEntryOfTheTableShouldContainTheText(String,String)"
});
formatter.result({
  "duration": 50689,
  "status": "passed"
});
formatter.after({
  "duration": 533156589,
  "status": "passed"
});
formatter.before({
  "duration": 2894713158,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Create New Audio Guide Successfully",
  "description": "",
  "id": "manage-materials;create-new-audio-guide-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 76,
  "name": "I access the \"new audioGuide\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I fill the \"name\" field with \"Cucumber Audio Guide\"",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I fill the \"description\" field with \"Cucumber Audio Guide Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I fill the \"pathAudioGuide\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp3\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I press the \"create\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I should be redirected to the \"details\" page of the \"Audio Guide\" material - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "the field \"material\" should show \"Cucumber Audio Guide\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the field \"type\" should show \"Áudio-guia\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the field \"description\" should show \"Cucumber Audio Guide Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the field \"file\" should show a \"sound\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the \"edit\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the \"block\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the \"delete\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the \"back\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the first entry of the \"Registos\" table should contain the text \"Foi criado.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new audioGuide",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 447842140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Audio Guide",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 94206992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Audio Guide Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 90408925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pathAudioGuide",
      "offset": 12
    },
    {
      "val": "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp3",
      "offset": 40
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 48131326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "duration": 739186452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Audio Guide",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageOfTheMaterialUSfive(String,String)"
});
formatter.result({
  "duration": 53896801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 11
    },
    {
      "val": "Cucumber Audio Guide",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 22443052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Áudio-guia",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 11947042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber Audio Guide Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 6501749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file",
      "offset": 11
    },
    {
      "val": "sound",
      "offset": 32
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowA(String,String)"
});
formatter.result({
  "duration": 68558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 38290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 37561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 47407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 369778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 24
    },
    {
      "val": "Foi criado.",
      "offset": 65
    }
  ],
  "location": "US5StepDefs.theFirstEntryOfTheTableShouldContainTheText(String,String)"
});
formatter.result({
  "duration": 83875,
  "status": "passed"
});
formatter.after({
  "duration": 532783164,
  "status": "passed"
});
formatter.before({
  "duration": 3170212805,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Create New List Item Successfully",
  "description": "",
  "id": "manage-materials;create-new-list-item-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 93,
  "name": "I access the \"new listItem\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 94,
  "name": "I fill the \"name\" field with \"Cucumber List Item\"",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "I fill the \"listItemMarker\" field with \"*\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I fill the \"description\" field with \"Cucumber List Item Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I fill the \"listItemDetailedDescription\" field with \"Cucumber List Item Very Detailed Text\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I press the \"create\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I should be redirected to the \"details\" page of the \"List Item\" material - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "the field \"material\" should show \"Cucumber List Item\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the field \"type\" should show \"Item de Lista\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the field \"listItemMarker\" should show \"*\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the field \"description\" should show \"Cucumber List Item Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the field \"listItemDetailedDescription\" should show \"Cucumber List Item Very Detailed Text\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the \"edit\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the \"block\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the \"delete\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the \"back\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the first entry of the \"Registos\" table should contain the text \"Foi criado.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new listItem",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 289721883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber List Item",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 92613007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "listItemMarker",
      "offset": 12
    },
    {
      "val": "*",
      "offset": 40
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 59958391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber List Item Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 90350942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "listItemDetailedDescription",
      "offset": 12
    },
    {
      "val": "Cucumber List Item Very Detailed Text",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 81278981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "duration": 638463123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "List Item",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageOfTheMaterialUSfive(String,String)"
});
formatter.result({
  "duration": 49316148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 11
    },
    {
      "val": "Cucumber List Item",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 14567580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Item de Lista",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 10176921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "listItemMarker",
      "offset": 11
    },
    {
      "val": "*",
      "offset": 40
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 6123584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber List Item Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 5938330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "listItemDetailedDescription",
      "offset": 11
    },
    {
      "val": "Cucumber List Item Very Detailed Text",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 23200841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 87157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 32821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 49231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 58348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 24
    },
    {
      "val": "Foi criado.",
      "offset": 65
    }
  ],
  "location": "US5StepDefs.theFirstEntryOfTheTableShouldContainTheText(String,String)"
});
formatter.result({
  "duration": 57618,
  "status": "passed"
});
formatter.after({
  "duration": 530022956,
  "status": "passed"
});
formatter.before({
  "duration": 3033281490,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Create New Emergency Contact Successfully",
  "description": "",
  "id": "manage-materials;create-new-emergency-contact-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 112,
  "name": "I access the \"new emergencyContact\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "I fill the \"name\" field with \"Cucumber Emergency Contact\"",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "I fill the \"description\" field with \"Cucumber Emergency Contact Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I fill the \"number\" field with \"999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I press the \"create\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I should be redirected to the \"details\" page of the \"Emergency Contact\" material - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "the field \"material\" should show \"Cucumber Emergency Contact\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "the field \"type\" should show \"Contacto de Emergência\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "the field \"description\" should show \"Cucumber Emergency Contact Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "the field \"number\" should show \"999999999\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the \"edit\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the \"block\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the \"delete\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the \"back\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the first entry of the \"Registos\" table should contain the text \"Foi criado.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new emergencyContact",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 299579715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Emergency Contact",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 97662265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Emergency Contact Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 107914309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 12
    },
    {
      "val": "999999999",
      "offset": 32
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 62052342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "duration": 577782316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Emergency Contact",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageOfTheMaterialUSfive(String,String)"
});
formatter.result({
  "duration": 50055704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 11
    },
    {
      "val": "Cucumber Emergency Contact",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 14579249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Contacto de Emergência",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 11214415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber Emergency Contact Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 6536759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 11
    },
    {
      "val": "999999999",
      "offset": 32
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 6670593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 28080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 19328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 16410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "duration": 16045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 24
    },
    {
      "val": "Foi criado.",
      "offset": 65
    }
  ],
  "location": "US5StepDefs.theFirstEntryOfTheTableShouldContainTheText(String,String)"
});
formatter.result({
  "duration": 24433,
  "status": "passed"
});
formatter.after({
  "duration": 533057762,
  "status": "passed"
});
formatter.before({
  "duration": 3056581157,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "Create New Annex Link Successfully",
  "description": "",
  "id": "manage-materials;create-new-annex-link-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 129,
  "name": "I access the \"new annex\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "I fill the \"name\" field with \"Cucumber Annex Link\"",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I fill the \"description\" field with \"Cucumber Annex Link Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I fill the \"selectType\" field with \"Link (Website, Video externo)\"",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I fill the \"url\" field with \"https://www.youtube.com/watch?v\u003dFTQbiNvZqaY\"",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I press the \"create\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I should be redirected to the \"details\" page of the \"Annex Link\" material - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "the field \"material\" should show \"Cucumber Annex Link\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the field \"type\" should show \"Anexo\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the field \"description\" should show \"Cucumber Annex Link Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the field \"url\" should show \"https://www.youtube.com/watch?v\u003dFTQbiNvZqaY\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the field \"URL\" must be clickable",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the \"edit\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the \"block\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the \"delete\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the \"back\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the first entry of the \"Registos\" table should contain the text \"Foi criado.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new annex",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 249158608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Annex Link",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 86503281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Annex Link Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 89989917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectType",
      "offset": 12
    },
    {
      "val": "Link (Website, Video externo)",
      "offset": 36
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 17088198,
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"button\"\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-HLMLFPV4\u0027, ip: \u0027192.168.56.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:47)\r\n\tat US5StepDefs.iFillTheFieldWith(US5StepDefs.java:154)\r\n\tat ✽.And I fill the \"selectType\" field with \"Link (Website, Video externo)\"(US5.feature:132)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 12
    },
    {
      "val": "https://www.youtube.com/watch?v\u003dFTQbiNvZqaY",
      "offset": 29
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Annex Link",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageOfTheMaterialUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 11
    },
    {
      "val": "Cucumber Annex Link",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Anexo",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber Annex Link Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 11
    },
    {
      "val": "https://www.youtube.com/watch?v\u003dFTQbiNvZqaY",
      "offset": 29
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 11
    }
  ],
  "location": "US5StepDefs.theFieldMustBeClickable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 24
    },
    {
      "val": "Foi criado.",
      "offset": 65
    }
  ],
  "location": "US5StepDefs.theFirstEntryOfTheTableShouldContainTheText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 529977372,
  "status": "passed"
});
formatter.before({
  "duration": 3161807099,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "Create New Annex File Successfully",
  "description": "",
  "id": "manage-materials;create-new-annex-file-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 148,
  "name": "I access the \"new annex\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 149,
  "name": "I fill the \"name\" field with \"Cucumber Annex File\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "I fill the \"description\" field with \"Cucumber Annex File Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I fill the \"selectType\" field with \"Ficheiro (PDF, docx, ...)\"",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I fill the \"pathAnnex\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf\"",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I press the \"create\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I should be redirected to the \"details\" page of the \"Annex File\" material - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "the field \"material\" should show \"Cucumber Annex File\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "the field \"type\" should show \"Anexo\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the field \"description\" should show \"Cucumber Annex File Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the field \"file\" should show \"Cucumber Annex File.pdf\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "the field \"Ficheiro\" must be clickable",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "the \"edit\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "the \"block\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "the \"delete\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "the \"back\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the first entry of the \"Registos\" table should contain the text \"Foi criado.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new annex",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 285558414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Annex File",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 119444895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Annex File Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 102999615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectType",
      "offset": 12
    },
    {
      "val": "Ficheiro (PDF, docx, ...)",
      "offset": 36
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 15303125,
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"button\"\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-HLMLFPV4\u0027, ip: \u0027192.168.56.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:47)\r\n\tat US5StepDefs.iFillTheFieldWith(US5StepDefs.java:154)\r\n\tat ✽.And I fill the \"selectType\" field with \"Ficheiro (PDF, docx, ...)\"(US5.feature:151)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "pathAnnex",
      "offset": 12
    },
    {
      "val": "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Annex File",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageOfTheMaterialUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 11
    },
    {
      "val": "Cucumber Annex File",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Anexo",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber Annex File Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "file",
      "offset": 11
    },
    {
      "val": "Cucumber Annex File.pdf",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ficheiro",
      "offset": 11
    }
  ],
  "location": "US5StepDefs.theFieldMustBeClickable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "block",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 24
    },
    {
      "val": "Foi criado.",
      "offset": 65
    }
  ],
  "location": "US5StepDefs.theFirstEntryOfTheTableShouldContainTheText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 545329728,
  "status": "passed"
});
formatter.before({
  "duration": 4087627932,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "Create New Composite Successfully - part 1(create)",
  "description": "",
  "id": "manage-materials;create-new-composite-successfully---part-1(create)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 167,
  "name": "I access the \"new composite\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 168,
  "name": "I fill the \"name\" field with \"Cucumber Composite\"",
  "keyword": "When "
});
formatter.step({
  "line": 169,
  "name": "I fill the \"description\" field with \"Cucumber Composite Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "I press the \"Adicionar Materiais\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I should be redirected to the \"add materials\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "a table with the title \"Outros Materiais\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "the \"Outros Materiais\" table should have more than 1 entry",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "a table with the title \"Outros Materiais\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "the \"Materiais Associados ao Material Cucumber Composite\" text should be shown",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the \"Não existem materiais neste Material Composto.\" text should be shown",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new composite",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 65277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Composite",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "duration": 394569659,
  "error_message": "org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with id \u0027inputName\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"34\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:28042\",\"User-Agent\":\"okhttp/3.9.1\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"id\\\",\\\"value\\\":\\\"inputName\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/668df0e0-a6e5-11e8-a823-1f4a1e7b0998/element\"}}\nCommand duration or timeout: 0 milliseconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat US5StepDefs.iFillTheFieldWith(US5StepDefs.java:136)\r\n\tat ✽.When I fill the \"name\" field with \"Cucumber Composite\"(US5.feature:168)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:140)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat US5StepDefs.iFillTheFieldWith(US5StepDefs.java:136)\r\n\tat sun.reflect.GeneratedMethodAccessor10.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with id \u0027inputName\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"34\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:28042\",\"User-Agent\":\"okhttp/3.9.1\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"id\\\",\\\"value\\\":\\\"inputName\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/668df0e0-a6e5-11e8-a823-1f4a1e7b0998/element\"}}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-HLMLFPV4\u0027, ip: \u0027192.168.56.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Composite Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWith(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Materiais",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "arguments": [
    {
      "val": "Materiais Associados ao Material Cucumber Composite",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Não existem materiais neste Material Composto.",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theTextShouldBeShown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 533299175,
  "status": "passed"
});
formatter.before({
  "duration": 3030770353,
  "status": "passed"
});
formatter.scenario({
  "line": 178,
  "name": "Create New Composite Successfully - part 2(add materials)",
  "description": "",
  "id": "manage-materials;create-new-composite-successfully---part-2(add-materials)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 179,
  "name": "I access the \"composite add materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 180,
  "name": "the \"Outros Materiais\" table have more than 2 entries",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "I press the \"Adicionar\" button of the first row of the \"Outros Materiais\" table twice",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "the \"Materiais Associados ao Material Cucumber Composite\" table should have 2 entries",
  "keyword": "Then "
});
formatter.step({
  "line": 183,
  "name": "the first entry of the \"Materiais Associados ao Material Cucumber Composite\" table should contain the text of the first row added",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "the first entry of the \"Materiais Associados ao Material Cucumber Composite\" table should display \"down\" button",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the first entry of the \"Materiais Associados ao Material Cucumber Composite\" table should display \"remove\" button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the second entry of the \"Materiais Associados ao Material Cucumber Composite\" table should contain the text of the second row added",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "the second entry of the \"Materiais Associados ao Material Cucumber Composite\" table should display \"up\" button",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "the second entry of the \"Materiais Associados ao Material Cucumber Composite\" table should display \"remove\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "composite add materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 52878,
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
formatter.after({
  "duration": 532583324,
  "status": "passed"
});
formatter.before({
  "duration": 3209362607,
  "status": "passed"
});
formatter.scenario({
  "line": 190,
  "name": "Create New Composite Successfully - part 3(arrow down)",
  "description": "",
  "id": "manage-materials;create-new-composite-successfully---part-3(arrow-down)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 191,
  "name": "I access the \"composite add materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 192,
  "name": "the \"Materiais Associados ao Material Cucumber Composite\" table have 2 entries",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "I press the \"down\" button of the first entry of the \"Materiais Associados ao Material Cucumber Composite\" table",
  "keyword": "When "
});
formatter.step({
  "line": 194,
  "name": "the first entry of the \"Materiais Associados ao Material Cucumber Composite\" table should be the second entry",
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "the second entry of the \"Materiais Associados ao Material Cucumber Composite\" table should be the first entry",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "composite add materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 38291,
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
formatter.after({
  "duration": 535250904,
  "status": "passed"
});
formatter.before({
  "duration": 3492703082,
  "status": "passed"
});
formatter.scenario({
  "line": 197,
  "name": "Create New Composite Successfully - part 4(arrow up)",
  "description": "",
  "id": "manage-materials;create-new-composite-successfully---part-4(arrow-up)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 198,
  "name": "I access the \"composite add materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 199,
  "name": "the \"Materiais Associados ao Material Cucumber Composite\" table have 2 entries",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "I press the \"up\" button of the second entry of the \"Materiais Associados ao Material Cucumber Composite\" table",
  "keyword": "When "
});
formatter.step({
  "line": 201,
  "name": "the second entry of the \"Materiais Associados ao Material Cucumber Composite\" table should be the first entry",
  "keyword": "Then "
});
formatter.step({
  "line": 202,
  "name": "the first entry of the \"Materiais Associados ao Material Cucumber Composite\" table should be the second entry",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "composite add materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 54336,
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
formatter.after({
  "duration": 531064826,
  "status": "passed"
});
formatter.before({
  "duration": 3318339937,
  "status": "passed"
});
formatter.scenario({
  "line": 204,
  "name": "Create New Composite Successfully - part 5(remove)",
  "description": "",
  "id": "manage-materials;create-new-composite-successfully---part-5(remove)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 205,
  "name": "I access the \"composite add materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "the \"Materiais Associados ao Material Cucumber Composite\" table have 2 entries",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "I press the \"remove\" button of the first entry of the \"Materiais Associados ao Material Cucumber Composite\" table",
  "keyword": "When "
});
formatter.step({
  "line": 208,
  "name": "the \"Materiais Associados ao Material Cucumber Composite\" table should 1 entry",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "the first entry of the \"Materiais Associados ao Material Cucumber Composite\" table should contain the text of the previous second entry",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "composite add materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 36832,
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
formatter.after({
  "duration": 530457281,
  "status": "passed"
});
formatter.before({
  "duration": 4226239659,
  "status": "passed"
});
formatter.scenario({
  "line": 211,
  "name": "Create New Composite Successfully - part 6(conclude)",
  "description": "",
  "id": "manage-materials;create-new-composite-successfully---part-6(conclude)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 212,
  "name": "I access the \"composite add materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 213,
  "name": "I press the \"Concluído\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "I should be redirected to the \"details\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "the field \"Material\" should show \"Cucumber Composite\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "the field \"Tipo\" should show \"Composto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "the field \"Descrição\" should show \"Cucumber Composite Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "a table with the title \"Materiais Associados\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "the \"Materiais Associados\" table should have at least 1 entry",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "the \"Editar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "the \"Bloquear\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "the \"Apagar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "the \"Voltar Atrás\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "the first entry of the \"Registos\" table should contain the text \"Foi criado.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "composite add materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 37196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Concluído",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "duration": 150975,
  "error_message": "java.lang.NullPointerException\r\n\tat US5StepDefs.iPressTheButtonUSfive(US5StepDefs.java:186)\r\n\tat ✽.When I press the \"Concluído\" button - USfive(US5.feature:213)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Composite",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tipo",
      "offset": 11
    },
    {
      "val": "Composto",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição",
      "offset": 11
    },
    {
      "val": "Cucumber Composite Description",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
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
      "val": "Editar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apagar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Voltar Atrás",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Registos",
      "offset": 24
    },
    {
      "val": "Foi criado.",
      "offset": 65
    }
  ],
  "location": "US5StepDefs.theFirstEntryOfTheTableShouldContainTheText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 533530378,
  "status": "passed"
});
formatter.before({
  "duration": 3094723004,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 226,
      "value": "#DETAILS"
    }
  ],
  "line": 227,
  "name": "Access Text Material Details",
  "description": "",
  "id": "manage-materials;access-text-material-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 228,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 229,
  "name": "I press the \"Detalhes\" button of the \"Curativos - 1\" material",
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "I should be redirected to the \"details\" page of \"Curativos - 1\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 231,
  "name": "the field \"Material\" should show \"Curativos - 1\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "the field \"Tipo\" should show \"Texto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "the field \"Descrição\" should show \"Precauções\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 234,
  "name": "the field \"Texto\" should show \"Antes de fazer um curativo em feridas simples, como em um pequeno corte no dedo, é importante lavar as mãos e, se possível, calçar umas luvas limpas, para evitar contaminar a ferida.\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "the field \"Criador\" should show \"healthcarePro\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "the field \"Data da criação\" should show \"2018-04-16 09:43:08\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "the \"Editar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "the \"Bloquear\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "the \"Apagar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "the \"Voltar Atrás\" button should be present - USfive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 490175535,
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
formatter.match({
  "arguments": [
    {
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Curativos - 1",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tipo",
      "offset": 11
    },
    {
      "val": "Texto",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição",
      "offset": 11
    },
    {
      "val": "Precauções",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Texto",
      "offset": 11
    },
    {
      "val": "Antes de fazer um curativo em feridas simples, como em um pequeno corte no dedo, é importante lavar as mãos e, se possível, calçar umas luvas limpas, para evitar contaminar a ferida.",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Criador",
      "offset": 11
    },
    {
      "val": "healthcarePro",
      "offset": 33
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para o site público",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 61
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para a aplicação móvel",
      "offset": 11
    },
    {
      "val": "Está disponível",
      "offset": 64
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da criação",
      "offset": 11
    },
    {
      "val": "2018-04-16 09:43:08",
      "offset": 41
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apagar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Voltar Atrás",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 537927967,
  "status": "passed"
});
formatter.before({
  "duration": 3288028707,
  "status": "passed"
});
formatter.scenario({
  "line": 244,
  "name": "Access Image Material Details",
  "description": "",
  "id": "manage-materials;access-image-material-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 245,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 246,
  "name": "I press the \"Detalhes\" button of the \"Curativos - 2\" material",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "I should be redirected to the \"details\" page of \"Curativos - 2\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 248,
  "name": "the field \"Material\" should show \"Curativos - 2\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "the field \"Tipo\" should show \"Imagem\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "the field \"Descrição\" should show \"Demonstração\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "the field \"Ficheiro\" should show an image",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "the field \"Criador\" should show \"healthcarePro\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "the field \"Data da criação\" should show \"2018-04-16 09:51:37\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "the \"Editar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "the \"Bloquear\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "the \"Apagar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "the \"Voltar Atrás\" button should be present - USfive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 484248874,
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
formatter.match({
  "arguments": [
    {
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Curativos - 2",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tipo",
      "offset": 11
    },
    {
      "val": "Imagem",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição",
      "offset": 11
    },
    {
      "val": "Demonstração",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ficheiro",
      "offset": 11
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowAnImage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Criador",
      "offset": 11
    },
    {
      "val": "healthcarePro",
      "offset": 33
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para o site público",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 61
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para a aplicação móvel",
      "offset": 11
    },
    {
      "val": "Está disponível",
      "offset": 64
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da criação",
      "offset": 11
    },
    {
      "val": "2018-04-16 09:51:37",
      "offset": 41
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apagar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Voltar Atrás",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 532570195,
  "status": "passed"
});
formatter.before({
  "duration": 3024989561,
  "status": "passed"
});
formatter.scenario({
  "line": 261,
  "name": "Access Video Material Details",
  "description": "",
  "id": "manage-materials;access-video-material-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 262,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 263,
  "name": "I press the \"Detalhes\" button of the \"Administrar comprimidos por sonda\" material",
  "keyword": "When "
});
formatter.step({
  "line": 264,
  "name": "I should be redirected to the \"details\" page of \"Administrar comprimidos por sonda\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 265,
  "name": "the field \"Material\" should show \"Administrar comprimidos por sonda\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "the field \"Tipo\" should show \"Video\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "the field \"Descrição\" should show \"Preparação dos comprimidos para administrar por sonda\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "the field \"Ficheiro\" should show a video",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "the field \"Criador\" should show \"admin\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "the field \"Data da criação\" should show \"2018-06-14 22:29:08\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "the \"Editar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "the \"Bloquear\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "the \"Apagar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "the \"Voltar Atrás\" button should be present - USfive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 482369352,
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
formatter.match({
  "arguments": [
    {
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Administrar comprimidos por sonda",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tipo",
      "offset": 11
    },
    {
      "val": "Video",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição",
      "offset": 11
    },
    {
      "val": "Preparação dos comprimidos para administrar por sonda",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para o site público",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 61
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para a aplicação móvel",
      "offset": 11
    },
    {
      "val": "Está disponível",
      "offset": 64
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da criação",
      "offset": 11
    },
    {
      "val": "2018-06-14 22:29:08",
      "offset": 41
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apagar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Voltar Atrás",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 536840512,
  "status": "passed"
});
formatter.before({
  "duration": 2976648913,
  "status": "passed"
});
formatter.scenario({
  "line": 278,
  "name": "Access Audio Guide Material Details",
  "description": "",
  "id": "manage-materials;access-audio-guide-material-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 279,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 280,
  "name": "I press the \"Detalhes\" button of the \"teste audio\" material",
  "keyword": "When "
});
formatter.step({
  "line": 281,
  "name": "I should be redirected to the \"details\" page of \"teste audio\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 282,
  "name": "the field \"Material\" should show \"teste audio\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "the field \"Tipo\" should show \"Áudio-guia\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "the field \"Descrição\" should show \"teste audio\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "the field \"Ficheiro\" should show a sound",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "the field \"Criador\" should show \"admin\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "the field \"Data da criação\" should show \"2018-08-08 10:51:55\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "the \"Editar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "the \"Bloquear\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "the \"Apagar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "the \"Voltar Atrás\" button should be present - USfive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 621936156,
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
formatter.match({
  "arguments": [
    {
      "val": "Material",
      "offset": 11
    },
    {
      "val": "teste audio",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tipo",
      "offset": 11
    },
    {
      "val": "Áudio-guia",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição",
      "offset": 11
    },
    {
      "val": "teste audio",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para o site público",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 61
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para a aplicação móvel",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 64
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da criação",
      "offset": 11
    },
    {
      "val": "2018-08-08 10:51:55",
      "offset": 41
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apagar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Voltar Atrás",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 531589225,
  "status": "passed"
});
formatter.before({
  "duration": 4441815924,
  "status": "passed"
});
formatter.scenario({
  "line": 295,
  "name": "Access List Item Material Details",
  "description": "",
  "id": "manage-materials;access-list-item-material-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 296,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 297,
  "name": "I press the \"Detalhes\" button of the \"Colar o adesivo na coxa\" material",
  "keyword": "When "
});
formatter.step({
  "line": 298,
  "name": "I should be redirected to the \"details\" page of \"Colar o adesivo na coxa\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 299,
  "name": "the field \"Material\" should show \"Colar o adesivo na coxa\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "the field \"Tipo\" should show \"Item de Lista\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "the field \"Marcador do Item de Lista\" should show \"2\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "the field \"Descrição\" should show \"Colar o adesivo na coxa\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "the field \"Descrição detalhada\" should show \"Cole o adesivo na coxa para maior segurança da álgália\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "the field \"Criador\" should show \"admin\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "the field \"Data da criação\" should show \"2018-06-15 23:12:19\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "the \"Editar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "the \"Bloquear\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "the \"Apagar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "the \"Voltar Atrás\" button should be present - USfive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 501086178,
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
formatter.match({
  "arguments": [
    {
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Colar o adesivo na coxa",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tipo",
      "offset": 11
    },
    {
      "val": "Item de Lista",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Marcador do Item de Lista",
      "offset": 11
    },
    {
      "val": "2",
      "offset": 51
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição",
      "offset": 11
    },
    {
      "val": "Colar o adesivo na coxa",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição detalhada",
      "offset": 11
    },
    {
      "val": "Cole o adesivo na coxa para maior segurança da álgália",
      "offset": 45
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para o site público",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 61
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para a aplicação móvel",
      "offset": 11
    },
    {
      "val": "Está disponível",
      "offset": 64
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da criação",
      "offset": 11
    },
    {
      "val": "2018-06-15 23:12:19",
      "offset": 41
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apagar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Voltar Atrás",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 532716064,
  "status": "passed"
});
formatter.before({
  "duration": 3085306790,
  "status": "passed"
});
formatter.scenario({
  "line": 313,
  "name": "Access Emergency Contact Material Details",
  "description": "",
  "id": "manage-materials;access-emergency-contact-material-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 314,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 315,
  "name": "I press the \"Detalhes\" button of the \"teste contacto\" material",
  "keyword": "When "
});
formatter.step({
  "line": 316,
  "name": "I should be redirected to the \"details\" page of \"teste contacto\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 317,
  "name": "the field \"Material\" should show \"teste contacto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "the field \"Tipo\" should show \"Contacto de Emergência\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "the field \"Descrição\" should show \"teste contacto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "the field \"Número\" should show \"919191912\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "the field \"Criador\" should show \"admin\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "the field \"Data da criação\" should show \"2018-08-08 10:52:17\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "the \"Editar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "the \"Bloquear\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "the \"Apagar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "the \"Voltar Atrás\" button should be present - USfive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 498685172,
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
formatter.match({
  "arguments": [
    {
      "val": "Material",
      "offset": 11
    },
    {
      "val": "teste contacto",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tipo",
      "offset": 11
    },
    {
      "val": "Contacto de Emergência",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição",
      "offset": 11
    },
    {
      "val": "teste contacto",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Número",
      "offset": 11
    },
    {
      "val": "919191912",
      "offset": 32
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para o site público",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 61
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para a aplicação móvel",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 64
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da criação",
      "offset": 11
    },
    {
      "val": "2018-08-08 10:52:17",
      "offset": 41
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apagar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Voltar Atrás",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 532652246,
  "status": "passed"
});
formatter.before({
  "duration": 3586194221,
  "status": "passed"
});
formatter.scenario({
  "line": 330,
  "name": "Access Annex Link Material Details",
  "description": "",
  "id": "manage-materials;access-annex-link-material-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 331,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 332,
  "name": "I press the \"Detalhes\" button of the \"Curativos - 3\" material",
  "keyword": "When "
});
formatter.step({
  "line": 333,
  "name": "I should be redirected to the \"details\" page of \"Curativos - 3\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 334,
  "name": "the field \"Material\" should show \"Curativos - 3\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "the field \"Tipo\" should show \"Anexo\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "the field \"Descrição\" should show \"Como mudar um penso\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "the field \"URL\" should show \"https://www.youtube.com/watch?v\u003dRoXmMD1rVP0\u0026t\u003d3s\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "the field \"URL\" must be clickable",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "the field \"Criador\" should show \"healthcarePro\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "the field \"Data da criação\" should show \"2018-04-16 09:54:15\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "the \"Editar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "the \"Bloquear\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "the \"Apagar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "the \"Voltar Atrás\" button should be present - USfive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 680569327,
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
formatter.match({
  "arguments": [
    {
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Curativos - 3",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tipo",
      "offset": 11
    },
    {
      "val": "Anexo",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição",
      "offset": 11
    },
    {
      "val": "Como mudar um penso",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 11
    },
    {
      "val": "https://www.youtube.com/watch?v\u003dRoXmMD1rVP0\u0026t\u003d3s",
      "offset": 29
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 11
    }
  ],
  "location": "US5StepDefs.theFieldMustBeClickable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Criador",
      "offset": 11
    },
    {
      "val": "healthcarePro",
      "offset": 33
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para o site público",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 61
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para a aplicação móvel",
      "offset": 11
    },
    {
      "val": "Está disponível",
      "offset": 64
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da criação",
      "offset": 11
    },
    {
      "val": "2018-04-16 09:54:15",
      "offset": 41
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apagar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Voltar Atrás",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 534439872,
  "status": "passed"
});
formatter.before({
  "duration": 3178123649,
  "status": "passed"
});
formatter.scenario({
  "line": 348,
  "name": "Access Annex File Material Details",
  "description": "",
  "id": "manage-materials;access-annex-file-material-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 349,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 350,
  "name": "I press the \"Detalhes\" button of the \"Cuidar de si\" material",
  "keyword": "When "
});
formatter.step({
  "line": 351,
  "name": "I should be redirected to the \"details\" page of \"Cuidar de si\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 352,
  "name": "the field \"Material\" should show \"Cuidar de si\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "the field \"Tipo\" should show \"Anexo\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "the field \"Descrição\" should show \"Material Texto 2- Sinais de exaustão\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "the field \"Ficheiro\" should show \"Cuidar de si.docx\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "the field \"Ficheiro\" must be clickable",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "the field \"Criador\" should show \"anaqueridopro2\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "the field \"Data da criação\" should show \"2018-04-19 17:21:35\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "the \"Editar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "the \"Bloquear\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "the \"Apagar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "the \"Voltar Atrás\" button should be present - USfive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 494898776,
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
formatter.match({
  "arguments": [
    {
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cuidar de si",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tipo",
      "offset": 11
    },
    {
      "val": "Anexo",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição",
      "offset": 11
    },
    {
      "val": "Material Texto 2- Sinais de exaustão",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ficheiro",
      "offset": 11
    },
    {
      "val": "Cuidar de si.docx",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ficheiro",
      "offset": 11
    }
  ],
  "location": "US5StepDefs.theFieldMustBeClickable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Criador",
      "offset": 11
    },
    {
      "val": "anaqueridopro2",
      "offset": 33
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para o site público",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 61
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para a aplicação móvel",
      "offset": 11
    },
    {
      "val": "Está disponível",
      "offset": 64
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da criação",
      "offset": 11
    },
    {
      "val": "2018-04-19 17:21:35",
      "offset": 41
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apagar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Voltar Atrás",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 531535254,
  "status": "passed"
});
formatter.before({
  "duration": 3073272226,
  "status": "passed"
});
formatter.scenario({
  "line": 366,
  "name": "Access Composite Material Details",
  "description": "",
  "id": "manage-materials;access-composite-material-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 367,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 368,
  "name": "I press the \"Detalhes\" button of the \"Engasgamento\" material",
  "keyword": "When "
});
formatter.step({
  "line": 369,
  "name": "I should be redirected to the \"details\" page of \"Engasgamento\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 370,
  "name": "the field \"Material\" should show \"Engasgamento\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "the field \"Tipo\" should show \"Composto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "the field \"Descrição\" should show \"Engasgamento\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "the field \"Criador\" should show \"admin\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 376,
  "name": "the field \"Data da criação\" should show \"2018-07-09 12:27:46\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 377,
  "name": "the \"Editar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 378,
  "name": "the \"Bloquear\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "the \"Apagar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "the \"Voltar Atrás\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "a table with the title \"Materiais Associados\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "the \"Materiais Associados\" table should display 5 entries",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 486562358,
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
formatter.match({
  "arguments": [
    {
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Engasgamento",
      "offset": 34
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tipo",
      "offset": 11
    },
    {
      "val": "Composto",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Descrição",
      "offset": 11
    },
    {
      "val": "Engasgamento",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para o site público",
      "offset": 11
    },
    {
      "val": "Não está disponível",
      "offset": 61
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilidade para a aplicação móvel",
      "offset": 11
    },
    {
      "val": "Está disponível",
      "offset": 64
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da criação",
      "offset": 11
    },
    {
      "val": "2018-07-09 12:27:46",
      "offset": 41
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloquear",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apagar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Voltar Atrás",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 534200647,
  "status": "passed"
});
formatter.before({
  "duration": 3629442944,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 384,
      "value": "#MATERIAL BLOCK \u0026 UNBLOCK"
    }
  ],
  "line": 385,
  "name": "Block Material on the Materials page",
  "description": "",
  "id": "manage-materials;block-material-on-the-materials-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 386,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 387,
  "name": "the \"Cucumber Text\" material is unblocked",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "I press the \"Bloquear\" button of the \"Cucumber Text\" material",
  "keyword": "When "
});
formatter.step({
  "line": 389,
  "name": "I should be redirected to the \"materials\" page - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 390,
  "name": "the \"Desbloquear\" button should be present in the \"Cucumber Text\" material options",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 483991051,
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
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 532656257,
  "status": "passed"
});
formatter.before({
  "duration": 3438722041,
  "status": "passed"
});
formatter.scenario({
  "line": 392,
  "name": "Unblock Material on the Materials page",
  "description": "",
  "id": "manage-materials;unblock-material-on-the-materials-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 393,
  "name": "I access the \"materials\" page - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 394,
  "name": "the \"Cucumber Text\" material is blocked",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "I press the \"Desbloquear\" button of the \"Cucumber Text\" material",
  "keyword": "When "
});
formatter.step({
  "line": 396,
  "name": "I should be redirected to the \"materials\" page - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 397,
  "name": "the \"Bloquear\" button should be present in the \"Cucumber Text\" material options",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 14
    }
  ],
  "location": "US5StepDefs.iAccessThePageUSfive(String)"
});
formatter.result({
  "duration": 521810892,
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
formatter.match({
  "arguments": [
    {
      "val": "materials",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 536671668,
  "status": "passed"
});
formatter.before({
  "duration": 3188211226,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 399,
      "value": "#NORMAL EDITS"
    }
  ],
  "line": 400,
  "name": "Access Text Material Edit Page",
  "description": "",
  "id": "manage-materials;access-text-material-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 401,
  "name": "I access the \"details\" page of the \"Cucumber Text\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 402,
  "name": "I press the \"Editar\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 403,
  "name": "I should be redirected to the \"edit\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 404,
  "name": "the field \"type\" should show \"Texto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "the field \"name\" should show \"Cucumber Text\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "the field \"description\" should show \"Cucumber Text Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "the field \"body\" should show \"Cucumber Text Very Detailed Text\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "the \"Cancelar\" button should be present - USfive",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Editar",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Texto",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 11
    },
    {
      "val": "Cucumber Text",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber Text Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "body",
      "offset": 11
    },
    {
      "val": "Cucumber Text Very Detailed Text",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.theFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancelar",
      "offset": 5
    }
  ],
  "location": "US5StepDefs.theButtonShouldBePresentUSfive(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 539746954,
  "status": "passed"
});
