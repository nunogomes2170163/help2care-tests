$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US9.feature");
formatter.feature({
  "line": 1,
  "name": "Manage Patients",
  "description": "As an healthcare professional\r\nI want to manage patients\r\nSo that I associate them to their caregivers",
  "id": "manage-patients",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5284825164,
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
  "name": "Access Patient Create Page",
  "description": "",
  "id": "manage-patients;access-patient-create-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I access the patients dashboard",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"new patient\" button - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"new patient\" page - USnine",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the \"Novo Utente\" text should be shown - USnine",
  "keyword": "And "
});
formatter.match({
  "location": "US9StepDefs.iAccessThePatientsDashboard()"
});
formatter.result({
  "duration": 431432748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new patient",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 322888887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new patient",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageUSnine(String)"
});
formatter.result({
  "duration": 69401804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Novo Utente",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theTextShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 16787306,
  "status": "passed"
});
formatter.after({
  "duration": 536344478,
  "status": "passed"
});
formatter.before({
  "duration": 3004247334,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create New Patient Successfully",
  "description": "",
  "id": "manage-patients;create-new-patient-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I access the \"new patient\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I fill the \"name\" field with \"Cucumber\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I fill the \"email\" field with \"cucumber@mail.com\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I fill the \"gender\" field with \"Masculino\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I fill the \"birthDate\" field with \"12-12-1994\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I fill the \"location\" field with \"Leiria\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I fill the \"healthResource\" field with \"IWillDie\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I fill the \"healthCenter\" field with \"Beach\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I fill the \"phoneContact\" field with \"919191919\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I press the \"create\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be redirected to the \"patients\" page - USnine",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the \"Cucumber\" patient should be present in the \"patients\" table",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 399857268,
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
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 101764611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "cucumber@mail.com",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 79832149,
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
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 84879572,
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
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 69067399,
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
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 61253939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthResource",
      "offset": 12
    },
    {
      "val": "IWillDie",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 70367090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthCenter",
      "offset": 12
    },
    {
      "val": "Beach",
      "offset": 38
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 58525099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phoneContact",
      "offset": 12
    },
    {
      "val": "919191919",
      "offset": 38
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 68418648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 425884630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patients",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageUSnine(String)"
});
formatter.result({
  "duration": 63699428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 5
    },
    {
      "val": "patients",
      "offset": 49
    }
  ],
  "location": "US9StepDefs.thePatientShouldBePresentInTheTable(String,String)"
});
formatter.result({
  "duration": 161973764,
  "status": "passed"
});
formatter.after({
  "duration": 532904163,
  "status": "passed"
});
formatter.before({
  "duration": 3003074913,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 27,
      "value": "#DETAILS"
    }
  ],
  "line": 28,
  "name": "Access Patient Details",
  "description": "",
  "id": "manage-patients;access-patient-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I access the \"patients\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I press the details button of the \"Alberto Seixas\" patient",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should be redirected to the \"details\" page of the \"Alberto Seixas\" patient",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the field \"name\" should show \"Alberto Seixas\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the field \"email\" should show \"alberto.seixas@mail.com\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the field \"birthDate\" should show \"25-07-2018\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the field \"location\" should show \"Leiria\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the field \"healthResource\" should show \"Não tem\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the field \"healthCenter\" should show \"Não tem\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the field \"phoneContact\" should show \"Não tem\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the field \"gender\" should show \"Masculino\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the field \"caregiver\" should show \"pedrosousacuidador2\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the field \"caregiverKinshipDegree\" should show \"Nenhum\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the field \"caregiverAlreadyTreatingPatient\" should show \"Sim\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the field \"patientAlreadyDependent\" should show \"Sim\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the \"edit\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the \"needs\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the \"back\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the \"answerQuiz\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the \"newEvaluation\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the \"provideQuiz\" button should be present - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "patients",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 254935196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alberto Seixas",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.iPressTheButtonOfThePatient(String)"
});
formatter.result({
  "duration": 382462418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Alberto Seixas",
      "offset": 53
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageOfPatient(String,String)"
});
formatter.result({
  "duration": 45972728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 11
    },
    {
      "val": "Alberto Seixas",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 15349041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 11
    },
    {
      "val": "alberto.seixas@mail.com",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 26043408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 11
    },
    {
      "val": "25-07-2018",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 27593264,
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
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 22471447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthResource",
      "offset": 11
    },
    {
      "val": "Não tem",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 24825404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthCenter",
      "offset": 11
    },
    {
      "val": "Não tem",
      "offset": 38
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 26542644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phoneContact",
      "offset": 11
    },
    {
      "val": "Não tem",
      "offset": 38
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 22091824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 11
    },
    {
      "val": "Masculino",
      "offset": 32
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 41357076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "caregiver",
      "offset": 11
    },
    {
      "val": "pedrosousacuidador2",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 21711835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "caregiverKinshipDegree",
      "offset": 11
    },
    {
      "val": "Nenhum",
      "offset": 48
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 20836259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "caregiverAlreadyTreatingPatient",
      "offset": 11
    },
    {
      "val": "Sim",
      "offset": 57
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 21684850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patientAlreadyDependent",
      "offset": 11
    },
    {
      "val": "Sim",
      "offset": 49
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 22643208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 14349110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "needs",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 11006162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 10966778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "answerQuiz",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 11351507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newEvaluation",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 10959120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "provideQuiz",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 11649444,
  "status": "passed"
});
formatter.after({
  "duration": 542251069,
  "status": "passed"
});
formatter.before({
  "duration": 2999871271,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 51,
      "value": "#EDIT"
    }
  ],
  "line": 52,
  "name": "Access Patient Edit Page",
  "description": "",
  "id": "manage-patients;access-patient-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "I access the details page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I press the \"edit\" button - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I should be redirected to the \"edit\" page of the \"Alberto Seixas\" patient",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the field \"name edit\" should show \"Alberto Seixas\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the field \"email edit\" should show \"alberto.seixas@mail.com\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the field \"birthDate edit\" should show \"25-07-2018\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the field \"location edit\" should show \"Leiria\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the field \"healthResource\" should be empty - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the field \"healthCenter\" should be empty - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the field \"phoneContact\" should be empty - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the field \"gender edit\" should show \"male\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the \"save\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the \"cancel\" button should be present - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Alberto Seixas",
      "offset": 34
    }
  ],
  "location": "US9StepDefs.iAccessTheDetailsPageOfThePatient(String)"
});
formatter.result({
  "duration": 302565357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 408598089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 31
    },
    {
      "val": "Alberto Seixas",
      "offset": 50
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageOfPatient(String,String)"
});
formatter.result({
  "duration": 73833297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name edit",
      "offset": 11
    },
    {
      "val": "Alberto Seixas",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 12329556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email edit",
      "offset": 11
    },
    {
      "val": "alberto.seixas@mail.com",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 18910426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate edit",
      "offset": 11
    },
    {
      "val": "25-07-2018",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 19180648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location edit",
      "offset": 11
    },
    {
      "val": "Leiria",
      "offset": 39
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 19727291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthResource",
      "offset": 11
    }
  ],
  "location": "US9StepDefs.theFieldShouldBeEmptyUSnine(String)"
});
formatter.result({
  "duration": 23815264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthCenter",
      "offset": 11
    }
  ],
  "location": "US9StepDefs.theFieldShouldBeEmptyUSnine(String)"
});
formatter.result({
  "duration": 23508209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phoneContact",
      "offset": 11
    }
  ],
  "location": "US9StepDefs.theFieldShouldBeEmptyUSnine(String)"
});
formatter.result({
  "duration": 24287878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender edit",
      "offset": 11
    },
    {
      "val": "male",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 19492078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 12001717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 11726754,
  "status": "passed"
});
formatter.after({
  "duration": 533050032,
  "status": "passed"
});
formatter.before({
  "duration": 2979640733,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Edit Patient Successfully",
  "description": "",
  "id": "manage-patients;edit-patient-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "I access the \"edit\" page of the \"Aglae Bernhard\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I fill the \"name\" field with \"Aglae Bernhard\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I fill the \"email\" field with \"schmidt.ignacio@example.com\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I fill the \"gender\" field with \"Masculino\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I fill the \"birthDate\" field with \"09-08-2018\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I fill the \"location\" field with \"Lisboa\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I fill the \"healthResource\" field with \"Cucumber\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I fill the \"healthCenter\" field with \"Cucumber\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I fill the \"phoneContact\" field with \"123456789\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I press the \"save\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I should be redirected to the \"details\" page of the \"Aglae Bernhard\" patient",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "the field \"name edit succ\" should show \"Aglae Bernhard\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the field \"email edit succ\" should show \"schmidt.ignacio@example.com\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the field \"birthDate\" should show \"09-08-2018\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the field \"location\" should show \"Lisboa\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the field \"healthResource\" should show \"Cucumber\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the field \"healthCenter\" should show \"Cucumber\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the field \"phoneContact\" should show \"123456789\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the field \"gender\" should show \"Masculino\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the field \"Data da última atualização\" should different from the previous - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "should be present a \"Foi atualizado.\" log at the beggining of the logs section - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "Aglae Bernhard",
      "offset": 33
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfThePatient(String,String)"
});
formatter.result({
  "duration": 820165335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Aglae Bernhard",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 101480896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "schmidt.ignacio@example.com",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 91670128,
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
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 46046391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 12
    },
    {
      "val": "09-08-2018",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 67120780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 12
    },
    {
      "val": "Lisboa",
      "offset": 34
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 61110623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthResource",
      "offset": 12
    },
    {
      "val": "Cucumber",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 60731364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthCenter",
      "offset": 12
    },
    {
      "val": "Cucumber",
      "offset": 38
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 68064186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phoneContact",
      "offset": 12
    },
    {
      "val": "123456789",
      "offset": 38
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 62867612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 431345227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Aglae Bernhard",
      "offset": 53
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageOfPatient(String,String)"
});
formatter.result({
  "duration": 41306751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name edit succ",
      "offset": 11
    },
    {
      "val": "Aglae Bernhard",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 20029604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email edit succ",
      "offset": 11
    },
    {
      "val": "schmidt.ignacio@example.com",
      "offset": 41
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 50367389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 11
    },
    {
      "val": "09-08-2018",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 23309098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "location",
      "offset": 11
    },
    {
      "val": "Lisboa",
      "offset": 34
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 19753183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthResource",
      "offset": 11
    },
    {
      "val": "Cucumber",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 26243613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "healthCenter",
      "offset": 11
    },
    {
      "val": "Cucumber",
      "offset": 38
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 21415357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phoneContact",
      "offset": 11
    },
    {
      "val": "123456789",
      "offset": 38
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 22720153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 11
    },
    {
      "val": "Masculino",
      "offset": 32
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 21634525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da última atualização",
      "offset": 11
    }
  ],
  "location": "US9StepDefs.theFieldShouldDifferentFromThePreviousUSnine(String)"
});
formatter.result({
  "duration": 22065203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizado.",
      "offset": 21
    }
  ],
  "location": "US9StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSnine(String)"
});
formatter.result({
  "duration": 34976412,
  "status": "passed"
});
formatter.after({
  "duration": 534033552,
  "status": "passed"
});
formatter.before({
  "duration": 3907689143,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 90,
      "value": "#NEEDS"
    }
  ],
  "line": 91,
  "name": "Access Patient Needs Association Page",
  "description": "",
  "id": "manage-patients;access-patient-needs-association-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 92,
  "name": "I access the \"details\" page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "I press the \"needs\" button - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "I should be redirected to the \"patient needs\" page - USnine",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "the \"my needs\" table should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the \"other needs\" table should be present - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "Alberto Seixas",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfThePatient(String,String)"
});
formatter.result({
  "duration": 491900090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "needs",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 250299487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patient needs",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageUSnine(String)"
});
formatter.result({
  "duration": 77935490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my needs",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theTableShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 12931630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "other needs",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theTableShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 29973842,
  "status": "passed"
});
formatter.after({
  "duration": 535086360,
  "status": "passed"
});
formatter.before({
  "duration": 2998817005,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Associate Need to Patient",
  "description": "",
  "id": "manage-patients;associate-need-to-patient",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 99,
  "name": "I access the \"patient needs\" page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "the my needs table have 1 entry",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I press \"add\" button of the \"first\" entry in the \"other needs\" table",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "the my needs table should have 2 entries",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "each my needs table entry should have the diassociate button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "patient needs",
      "offset": 14
    },
    {
      "val": "Alberto Seixas",
      "offset": 42
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfThePatient(String,String)"
});
formatter.result({
  "duration": 291955228,
  "status": "passed"
});
formatter.match({
  "location": "US9StepDefs.theMyNeedsTableHaveEntry()"
});
formatter.result({
  "duration": 13208781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add",
      "offset": 9
    },
    {
      "val": "first",
      "offset": 29
    },
    {
      "val": "other needs",
      "offset": 50
    }
  ],
  "location": "US9StepDefs.iPressButtonOfTheEntryInTheTable(String,String,String)"
});
formatter.result({
  "duration": 819959660,
  "status": "passed"
});
formatter.match({
  "location": "US9StepDefs.theMyNeedsTableShouldHaveEntries()"
});
formatter.result({
  "duration": 33515535,
  "status": "passed"
});
formatter.match({
  "location": "US9StepDefs.eachMyNeedsTableEntryShouldHaveTheDiassociateButton()"
});
formatter.result({
  "duration": 20607245,
  "status": "passed"
});
formatter.after({
  "duration": 532736779,
  "status": "passed"
});
formatter.before({
  "duration": 3001675667,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "Diassociate Need from Patient",
  "description": "",
  "id": "manage-patients;diassociate-need-from-patient",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 106,
  "name": "I access the \"patient needs\" page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "the my needs table have 2 entries",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I press \"diassociate\" button of the \"second\" entry in the \"my needs\" table",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "the my needs table should have 1 entry",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "each my needs table entry should have the diassociate button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "patient needs",
      "offset": 14
    },
    {
      "val": "Alberto Seixas",
      "offset": 42
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfThePatient(String,String)"
});
formatter.result({
  "duration": 312396912,
  "status": "passed"
});
formatter.match({
  "location": "US9StepDefs.theMyNeedsTableHaveEntries()"
});
formatter.result({
  "duration": 11613706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diassociate",
      "offset": 9
    },
    {
      "val": "second",
      "offset": 37
    },
    {
      "val": "my needs",
      "offset": 59
    }
  ],
  "location": "US9StepDefs.iPressButtonOfTheEntryInTheTable(String,String,String)"
});
formatter.result({
  "duration": 522587596,
  "status": "passed"
});
formatter.match({
  "location": "US9StepDefs.theMyNeedsTableShouldHaveEntry()"
});
formatter.result({
  "duration": 31757088,
  "status": "passed"
});
formatter.match({
  "location": "US9StepDefs.eachMyNeedsTableEntryShouldHaveTheDiassociateButton()"
});
formatter.result({
  "duration": 19511041,
  "status": "passed"
});
formatter.after({
  "duration": 535992569,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 112,
      "value": "#EVALUATIONS"
    }
  ],
  "line": 113,
  "name": "Access any evaluation on the evaluations page of patients",
  "description": "",
  "id": "manage-patients;access-any-evaluation-on-the-evaluations-page-of-patients",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "I access the details page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "I should be redirected to the \"\u003cpage\u003e\" page of the \"Alberto Seixas\" patient",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "the \"\u003ctext\u003e\" text should be shown - USnine",
  "keyword": "And "
});
formatter.examples({
  "line": 118,
  "name": "",
  "description": "",
  "id": "manage-patients;access-any-evaluation-on-the-evaluations-page-of-patients;",
  "rows": [
    {
      "cells": [
        "button",
        "page",
        "text"
      ],
      "line": 119,
      "id": "manage-patients;access-any-evaluation-on-the-evaluations-page-of-patients;;1"
    },
    {
      "cells": [
        "answerQuiz",
        "answer quiz",
        "Avaliação de Questionário para: Alberto Seixas"
      ],
      "line": 120,
      "id": "manage-patients;access-any-evaluation-on-the-evaluations-page-of-patients;;2"
    },
    {
      "cells": [
        "newEvaluation",
        "new evaluation",
        "Nova Avaliação"
      ],
      "line": 121,
      "id": "manage-patients;access-any-evaluation-on-the-evaluations-page-of-patients;;3"
    },
    {
      "cells": [
        "provideQuiz",
        "provide quiz",
        "Disponibilizar Questionário para o Utente: Alberto Seixas"
      ],
      "line": 122,
      "id": "manage-patients;access-any-evaluation-on-the-evaluations-page-of-patients;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3024782009,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Access any evaluation on the evaluations page of patients",
  "description": "",
  "id": "manage-patients;access-any-evaluation-on-the-evaluations-page-of-patients;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "I access the details page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "I press the \"answerQuiz\" button - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "I should be redirected to the \"answer quiz\" page of the \"Alberto Seixas\" patient",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "the \"Avaliação de Questionário para: Alberto Seixas\" text should be shown - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Alberto Seixas",
      "offset": 34
    }
  ],
  "location": "US9StepDefs.iAccessTheDetailsPageOfThePatient(String)"
});
formatter.result({
  "duration": 318334865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "answerQuiz",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 222217563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "answer quiz",
      "offset": 31
    },
    {
      "val": "Alberto Seixas",
      "offset": 57
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageOfPatient(String,String)"
});
formatter.result({
  "duration": 22238057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Avaliação de Questionário para: Alberto Seixas",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theTextShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 15568573,
  "status": "passed"
});
formatter.after({
  "duration": 538865090,
  "status": "passed"
});
formatter.before({
  "duration": 2980023638,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Access any evaluation on the evaluations page of patients",
  "description": "",
  "id": "manage-patients;access-any-evaluation-on-the-evaluations-page-of-patients;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "I access the details page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "I press the \"newEvaluation\" button - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "I should be redirected to the \"new evaluation\" page of the \"Alberto Seixas\" patient",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "the \"Nova Avaliação\" text should be shown - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Alberto Seixas",
      "offset": 34
    }
  ],
  "location": "US9StepDefs.iAccessTheDetailsPageOfThePatient(String)"
});
formatter.result({
  "duration": 275978952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newEvaluation",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 150969061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new evaluation",
      "offset": 31
    },
    {
      "val": "Alberto Seixas",
      "offset": 60
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageOfPatient(String,String)"
});
formatter.result({
  "duration": 24014739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nova Avaliação",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theTextShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 34828719,
  "status": "passed"
});
formatter.after({
  "duration": 531978625,
  "status": "passed"
});
formatter.before({
  "duration": 3988882977,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "Access any evaluation on the evaluations page of patients",
  "description": "",
  "id": "manage-patients;access-any-evaluation-on-the-evaluations-page-of-patients;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "I access the details page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "I press the \"provideQuiz\" button - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "I should be redirected to the \"provide quiz\" page of the \"Alberto Seixas\" patient",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "the \"Disponibilizar Questionário para o Utente: Alberto Seixas\" text should be shown - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Alberto Seixas",
      "offset": 34
    }
  ],
  "location": "US9StepDefs.iAccessTheDetailsPageOfThePatient(String)"
});
formatter.result({
  "duration": 265637952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "provideQuiz",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 209067129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "provide quiz",
      "offset": 31
    },
    {
      "val": "Alberto Seixas",
      "offset": 58
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageOfPatient(String,String)"
});
formatter.result({
  "duration": 23981918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disponibilizar Questionário para o Utente: Alberto Seixas",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theTextShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 12812383,
  "status": "passed"
});
formatter.after({
  "duration": 532365543,
  "status": "passed"
});
formatter.before({
  "duration": 2974076933,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 124,
      "value": "# Issue with PhantomJS that cant find the radio buttons to answer the questions."
    },
    {
      "line": 125,
      "value": "# Therefore, this test will be performed manually."
    },
    {
      "line": 126,
      "value": "#Scenario: Answer quiz on evaluations page of patients successfully"
    },
    {
      "line": 127,
      "value": "#  Given I access the \"answer quiz\" page on the details page of the \"Alberto Seixas\" patient"
    },
    {
      "line": 128,
      "value": "#  When I fill the \"description\" field with \"Cucumber Answer Quiz Patient\" - USnine"
    },
    {
      "line": 129,
      "value": "#  And I fill the \"type\" field with \"Através do site\" - USnine"
    },
    {
      "line": 130,
      "value": "#  And I fill the \"quiz\" field with \"Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout\" - USnine"
    },
    {
      "line": 131,
      "value": "#  And I answer all the questions of the selected quiz"
    },
    {
      "line": 132,
      "value": "#  And I press the \"save\" button - USnine"
    },
    {
      "line": 133,
      "value": "#  Then I should be redirected to the \"details\" page of the \"Alberto Seixas\" patient"
    },
    {
      "line": 134,
      "value": "#  And there should be an entry on the evaluations table that contains the text \"Cucumber Answer Quiz Patient\""
    }
  ],
  "line": 136,
  "name": "Create new evaluation on evaluations page of patients successfully",
  "description": "",
  "id": "manage-patients;create-new-evaluation-on-evaluations-page-of-patients-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 137,
  "name": "I access the \"new evaluation\" page on the details page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "I fill the \"description\" field with \"Cucumber New Evaluation Patient\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 139,
  "name": "I fill the \"type\" field with \"Através do site\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I fill the \"model\" field with \"Model 1\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I fill the \"path\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I press the \"save\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I should be redirected to the \"details\" page of the \"Alberto Seixas\" patient",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "there should be an entry on the evaluations table that contains the text \"Cucumber New Evaluation Patient\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "new evaluation",
      "offset": 14
    },
    {
      "val": "Alberto Seixas",
      "offset": 63
    }
  ],
  "location": "US9StepDefs.iAccessThePageOnTheDetailsPageOfThePatient(String,String)"
});
formatter.result({
  "duration": 216450641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber New Evaluation Patient",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 95902145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Através do site",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 71274394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 12
    },
    {
      "val": "Model 1",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 63797525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "path",
      "offset": 12
    },
    {
      "val": "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 45293708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 540495538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Alberto Seixas",
      "offset": 53
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageOfPatient(String,String)"
});
formatter.result({
  "duration": 45670415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber New Evaluation Patient",
      "offset": 74
    }
  ],
  "location": "US9StepDefs.thereShouldBeAnEntryOnTheEvaluationsTableThatContainsTheText(String)"
});
formatter.result({
  "duration": 243607028,
  "status": "passed"
});
formatter.after({
  "duration": 546853592,
  "status": "passed"
});
formatter.before({
  "duration": 2983271042,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "Provide quiz on evaluations page of patients successfully",
  "description": "",
  "id": "manage-patients;provide-quiz-on-evaluations-page-of-patients-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 147,
  "name": "I access the \"provide quiz\" page on the details page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "I fill the \"description\" field with \"Cucumber Provide Quiz Patient\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "I fill the \"type\" field with \"Através da app\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I fill the \"quiz\" field with \"Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I press the \"save\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I should be redirected to the \"details\" page of the \"Alberto Seixas\" patient",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "there should be an entry on the evaluations table that contains the text \"Cucumber Provide Quiz Patient\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "provide quiz",
      "offset": 14
    },
    {
      "val": "Alberto Seixas",
      "offset": 61
    }
  ],
  "location": "US9StepDefs.iAccessThePageOnTheDetailsPageOfThePatient(String,String)"
});
formatter.result({
  "duration": 240078463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Provide Quiz Patient",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 90851075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Através da app",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 67610535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quiz",
      "offset": 12
    },
    {
      "val": "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 158462704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 400831306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Alberto Seixas",
      "offset": 53
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToThePageOfPatient(String,String)"
});
formatter.result({
  "duration": 46465399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber Provide Quiz Patient",
      "offset": 74
    }
  ],
  "location": "US9StepDefs.thereShouldBeAnEntryOnTheEvaluationsTableThatContainsTheText(String)"
});
formatter.result({
  "duration": 230126566,
  "status": "passed"
});
formatter.after({
  "duration": 530832462,
  "status": "passed"
});
formatter.before({
  "duration": 3060116163,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 155,
      "value": "#DETAILS"
    }
  ],
  "line": 156,
  "name": "Access Answer Quiz Details",
  "description": "",
  "id": "manage-patients;access-answer-quiz-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 157,
  "name": "I access the \"details\" page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 158,
  "name": "I press the details button of the \"Cucumber Answer Quiz Patient\" evaluation",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Answer Quiz Patient\" evaluation",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "the field \"description\" should show \"Cucumber Answer Quiz Patient\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "the field \"type\" should show \"Através do site\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "the field \"model\" should show \"Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "the field \"questioned\" should show \"pedrosousacuidador2\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the \"edit\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "the \"back\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "the \"Respostas\" section should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "every entry on the answers section should have a pair question-answer",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "Alberto Seixas",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfThePatient(String,String)"
});
formatter.result({
  "duration": 270076374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber Answer Quiz Patient",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.iPressTheDetailsButtonOfTheEvaluation(String)"
});
formatter.result({
  "duration": 406031162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Cucumber Answer Quiz Patient",
      "offset": 53
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToTheDetailsPageOfEvaluation(String,String)"
});
formatter.result({
  "duration": 24653644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber Answer Quiz Patient",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 12818947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Através do site",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 24058864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 11
    },
    {
      "val": "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 20658663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "questioned",
      "offset": 11
    },
    {
      "val": "pedrosousacuidador2",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 21690685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 11389068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 11120670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Respostas",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theAnswersSectionShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 23886374,
  "status": "passed"
});
formatter.match({
  "location": "US9StepDefs.everyEntryOnTheAnswersSectionShouldHaveAPairQuestionAnswer()"
});
formatter.result({
  "duration": 207212408,
  "status": "passed"
});
formatter.after({
  "duration": 530065922,
  "status": "passed"
});
formatter.before({
  "duration": 2958647665,
  "status": "passed"
});
formatter.scenario({
  "line": 169,
  "name": "Access New Evaluation Details",
  "description": "",
  "id": "manage-patients;access-new-evaluation-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 170,
  "name": "I access the \"details\" page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 171,
  "name": "I press the details button of the \"Cucumber New Evaluation Patient\" evaluation",
  "keyword": "When "
});
formatter.step({
  "line": 172,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber New Evaluation Patient\" evaluation",
  "keyword": "Then "
});
formatter.step({
  "line": 173,
  "name": "the field \"description\" should show \"Cucumber New Evaluation Patient\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "the field \"type\" should show \"Através do site\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "the field \"model\" should show \"Model 1\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the field \"file\" should show \"Cucumber New Evaluation Patient.pdf\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "the field \"file\" must be clickable - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "the \"edit\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "the \"back\" button should be present - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "Alberto Seixas",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfThePatient(String,String)"
});
formatter.result({
  "duration": 290379846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber New Evaluation Patient",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.iPressTheDetailsButtonOfTheEvaluation(String)"
});
formatter.result({
  "duration": 414439403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Cucumber New Evaluation Patient",
      "offset": 53
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToTheDetailsPageOfEvaluation(String,String)"
});
formatter.result({
  "duration": 25148503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber New Evaluation Patient",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 13944324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Através do site",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 23711331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 11
    },
    {
      "val": "Model 1",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 20433661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file",
      "offset": 11
    },
    {
      "val": "Cucumber New Evaluation Patient.pdf",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 21654947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "file",
      "offset": 11
    }
  ],
  "location": "US9StepDefs.theFieldMustBeClickableUSnine(String)"
});
formatter.result({
  "duration": 32572130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 11625375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "back",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 12624212,
  "status": "passed"
});
formatter.after({
  "duration": 532704687,
  "status": "passed"
});
formatter.before({
  "duration": 3986669783,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "Access Provide Quiz Details",
  "description": "",
  "id": "manage-patients;access-provide-quiz-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 182,
  "name": "I access the \"details\" page of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 183,
  "name": "I press the details button of the \"Cucumber Provide Quiz Patient\" evaluation",
  "keyword": "When "
});
formatter.step({
  "line": 184,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Provide Quiz Patient\" evaluation",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "the field \"description\" should show \"Cucumber Provide Quiz Patient\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the field \"type\" should show \"Através da app\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "the field \"model\" should show \"Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "the field \"answerDate\" should show \"À espera de resposta\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "the \"edit\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "the \"back\" button should be present - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "Alberto Seixas",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfThePatient(String,String)"
});
formatter.result({
  "duration": 269365263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber Provide Quiz Patient",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.iPressTheDetailsButtonOfTheEvaluation(String)"
});
formatter.result({
  "duration": 438565366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Cucumber Provide Quiz Patient",
      "offset": 53
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToTheDetailsPageOfEvaluation(String,String)"
});
formatter.result({
  "duration": 24346226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 11
    },
    {
      "val": "Cucumber Provide Quiz Patient",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 13055983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 11
    },
    {
      "val": "Através da app",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 23414853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 11
    },
    {
      "val": "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 3156515355,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text (\u0027Modelo: Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout\u0027) to be present in element [[PhantomJSDriver: phantomjs on XP (ea6e43b0-b694-11e8-817a-4f0d9f1d8f07)] -\u003e tag name: h4] (tried for 3 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-Q6CVLT7G\u0027, ip: \u0027192.168.56.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities {acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: phantomjs, cssSelectorsEnabled: true, databaseEnabled: false, driverName: ghostdriver, driverVersion: 1.2.0, handlesAlerts: false, javascriptEnabled: true, locationContextEnabled: false, nativeEvents: true, platform: XP, platformName: XP, proxy: Proxy(direct), rotatable: false, takesScreenshot: true, version: 2.1.1, webStorageEnabled: false}\nSession ID: ea6e43b0-b694-11e8-817a-4f0d9f1d8f07\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat US9StepDefs.theFieldShouldShowUSnine(US9StepDefs.java:309)\r\n\tat ✽.And the field \"model\" should show \"Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout\" - USnine(US9.feature:187)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "answerDate",
      "offset": 11
    },
    {
      "val": "À espera de resposta",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
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
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
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
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 553704684,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 192,
      "value": "#EDITS"
    }
  ],
  "line": 193,
  "name": "Access edit page of the evaluations of patients",
  "description": "",
  "id": "manage-patients;access-edit-page-of-the-evaluations-of-patients",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 194,
  "name": "I access the \"details\" page of the \"\u003cevalName\u003e\" evaluation of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 195,
  "name": "I press the \"edit\" button - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "I should be redirected to the \"edit\" page of the \"\u003cevalName\u003e\" evaluation",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "the field \"description edit\" should show \"\u003cevalName\u003e\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "the field \"type edit\" should show \"\u003cevalType\u003e\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "the field \"model edit\" should show \"\u003cevalModel\u003e\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "the \"save\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "the \"cancel\" button should be present - USnine",
  "keyword": "And "
});
formatter.examples({
  "line": 202,
  "name": "",
  "description": "",
  "id": "manage-patients;access-edit-page-of-the-evaluations-of-patients;",
  "rows": [
    {
      "cells": [
        "evalName",
        "evalType",
        "evalModel"
      ],
      "line": 203,
      "id": "manage-patients;access-edit-page-of-the-evaluations-of-patients;;1"
    },
    {
      "cells": [
        "Cucumber Answer Quiz Patient",
        "Através do site",
        "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
      ],
      "line": 204,
      "id": "manage-patients;access-edit-page-of-the-evaluations-of-patients;;2"
    },
    {
      "cells": [
        "Cucumber New Evaluation Patient",
        "Através do site",
        "Model 1"
      ],
      "line": 205,
      "id": "manage-patients;access-edit-page-of-the-evaluations-of-patients;;3"
    },
    {
      "cells": [
        "Cucumber Provide Quiz Patient",
        "Através da app",
        "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Mobilidade"
      ],
      "line": 206,
      "id": "manage-patients;access-edit-page-of-the-evaluations-of-patients;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3084150229,
  "status": "passed"
});
formatter.scenario({
  "line": 204,
  "name": "Access edit page of the evaluations of patients",
  "description": "",
  "id": "manage-patients;access-edit-page-of-the-evaluations-of-patients;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 194,
  "name": "I access the \"details\" page of the \"Cucumber Answer Quiz Patient\" evaluation of the \"Alberto Seixas\" patient",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 195,
  "name": "I press the \"edit\" button - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "I should be redirected to the \"edit\" page of the \"Cucumber Answer Quiz Patient\" evaluation",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "the field \"description edit\" should show \"Cucumber Answer Quiz Patient\" - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "the field \"type edit\" should show \"Através do site\" - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "the field \"model edit\" should show \"Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout\" - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "the \"save\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "the \"cancel\" button should be present - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "Cucumber Answer Quiz Patient",
      "offset": 36
    },
    {
      "val": "Alberto Seixas",
      "offset": 85
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfTheEvaluationOfThePatient(String,String,String)"
});
formatter.result({
  "duration": 741413344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 174419652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 31
    },
    {
      "val": "Cucumber Answer Quiz Patient",
      "offset": 50
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToTheDetailsPageOfEvaluation(String,String)"
});
formatter.result({
  "duration": 44730655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description edit",
      "offset": 11
    },
    {
      "val": "Cucumber Answer Quiz Patient",
      "offset": 42
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 10607211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type edit",
      "offset": 11
    },
    {
      "val": "Através do site",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 20533945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model edit",
      "offset": 11
    },
    {
      "val": "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 18831657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 12092884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 9479646,
  "status": "passed"
});
formatter.after({
  "duration": 531409008,
  "status": "passed"
});
formatter.before({
  "duration": 2989326419,
  "status": "passed"
});
formatter.scenario({
  "line": 205,
  "name": "Access edit page of the evaluations of patients",
  "description": "",
  "id": "manage-patients;access-edit-page-of-the-evaluations-of-patients;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 194,
  "name": "I access the \"details\" page of the \"Cucumber New Evaluation Patient\" evaluation of the \"Alberto Seixas\" patient",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 195,
  "name": "I press the \"edit\" button - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "I should be redirected to the \"edit\" page of the \"Cucumber New Evaluation Patient\" evaluation",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "the field \"description edit\" should show \"Cucumber New Evaluation Patient\" - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "the field \"type edit\" should show \"Através do site\" - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "the field \"model edit\" should show \"Model 1\" - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "the \"save\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "the \"cancel\" button should be present - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "Cucumber New Evaluation Patient",
      "offset": 36
    },
    {
      "val": "Alberto Seixas",
      "offset": 88
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfTheEvaluationOfThePatient(String,String,String)"
});
formatter.result({
  "duration": 726066492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 189168807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 31
    },
    {
      "val": "Cucumber New Evaluation Patient",
      "offset": 50
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToTheDetailsPageOfEvaluation(String,String)"
});
formatter.result({
  "duration": 45863690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description edit",
      "offset": 11
    },
    {
      "val": "Cucumber New Evaluation Patient",
      "offset": 42
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 11657467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type edit",
      "offset": 11
    },
    {
      "val": "Através do site",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 18475372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model edit",
      "offset": 11
    },
    {
      "val": "Model 1",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 19670403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 10428887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 12946218,
  "status": "passed"
});
formatter.after({
  "duration": 529868634,
  "status": "passed"
});
formatter.before({
  "duration": 3165821783,
  "status": "passed"
});
formatter.scenario({
  "line": 206,
  "name": "Access edit page of the evaluations of patients",
  "description": "",
  "id": "manage-patients;access-edit-page-of-the-evaluations-of-patients;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 194,
  "name": "I access the \"details\" page of the \"Cucumber Provide Quiz Patient\" evaluation of the \"Alberto Seixas\" patient",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 195,
  "name": "I press the \"edit\" button - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "I should be redirected to the \"edit\" page of the \"Cucumber Provide Quiz Patient\" evaluation",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "the field \"description edit\" should show \"Cucumber Provide Quiz Patient\" - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "the field \"type edit\" should show \"Através da app\" - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "the field \"model edit\" should show \"Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Mobilidade\" - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "the \"save\" button should be present - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "the \"cancel\" button should be present - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "Cucumber Provide Quiz Patient",
      "offset": 36
    },
    {
      "val": "Alberto Seixas",
      "offset": 86
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfTheEvaluationOfThePatient(String,String,String)"
});
formatter.result({
  "duration": 763283083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 220357371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 31
    },
    {
      "val": "Cucumber Provide Quiz Patient",
      "offset": 50
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToTheDetailsPageOfEvaluation(String,String)"
});
formatter.result({
  "duration": 58557555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description edit",
      "offset": 11
    },
    {
      "val": "Cucumber Provide Quiz Patient",
      "offset": 42
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 11406207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type edit",
      "offset": 11
    },
    {
      "val": "Através da app",
      "offset": 35
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 17510085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model edit",
      "offset": 11
    },
    {
      "val": "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Mobilidade",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 23016996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 11856577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theButtonShouldBePresentUSnine(String)"
});
formatter.result({
  "duration": 10524066,
  "status": "passed"
});
formatter.after({
  "duration": 532148563,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 208,
  "name": "Edit evaluations of patients",
  "description": "",
  "id": "manage-patients;edit-evaluations-of-patients",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 209,
  "name": "I access the \"edit\" page of the \"\u003cevalName\u003e\" evaluation of the \"Alberto Seixas\" patient",
  "keyword": "Given "
});
formatter.step({
  "line": 210,
  "name": "I fill the \"description\" field with \"\u003cevalName\u003e\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "I fill the \"type edit succ\" field with \"\u003cevalTypeEdit\u003e\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "I fill the \"model edit succ\" field with \"\u003cevalModelEdit\u003e\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "I press the \"save\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "I should be redirected to the \"details\" page of the \"\u003cevalName\u003e\" evaluation",
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "the field \"description edit succ\" should show \"\u003cevalName\u003e\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "the field \"type edit succ\" should show \"\u003cevalTypeEdit\u003e\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "the field \"model edit succ\" should show \"\u003cevalModelEdit\u003e\" - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "the field \"Data da última atualização \u003cevalName\u003e\" should different from the previous - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "should be present a \"Foi atualizada.\" log at the beggining of the logs section - USnine",
  "keyword": "And "
});
formatter.examples({
  "line": 220,
  "name": "",
  "description": "",
  "id": "manage-patients;edit-evaluations-of-patients;",
  "rows": [
    {
      "cells": [
        "evalName",
        "evalTypeEdit",
        "evalModelEdit"
      ],
      "line": 221,
      "id": "manage-patients;edit-evaluations-of-patients;;1"
    },
    {
      "cells": [
        "Test Answer Quiz Patient",
        "Através do site",
        "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação"
      ],
      "line": 222,
      "id": "manage-patients;edit-evaluations-of-patients;;2"
    },
    {
      "cells": [
        "Test New Evaluation Patient",
        "Através do site",
        "Model 1"
      ],
      "line": 223,
      "id": "manage-patients;edit-evaluations-of-patients;;3"
    },
    {
      "cells": [
        "Test Provide Quiz Patient",
        "Através da app",
        "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação"
      ],
      "line": 224,
      "id": "manage-patients;edit-evaluations-of-patients;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2980202327,
  "status": "passed"
});
formatter.scenario({
  "line": 222,
  "name": "Edit evaluations of patients",
  "description": "",
  "id": "manage-patients;edit-evaluations-of-patients;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 209,
  "name": "I access the \"edit\" page of the \"Test Answer Quiz Patient\" evaluation of the \"Alberto Seixas\" patient",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 210,
  "name": "I fill the \"description\" field with \"Test Answer Quiz Patient\" - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "I fill the \"type edit succ\" field with \"Através do site\" - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "I fill the \"model edit succ\" field with \"Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação\" - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "I press the \"save\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "I should be redirected to the \"details\" page of the \"Test Answer Quiz Patient\" evaluation",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "the field \"description edit succ\" should show \"Test Answer Quiz Patient\" - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "the field \"type edit succ\" should show \"Através do site\" - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "the field \"model edit succ\" should show \"Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação\" - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "the field \"Data da última atualização Test Answer Quiz Patient\" should different from the previous - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "should be present a \"Foi atualizada.\" log at the beggining of the logs section - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "Test Answer Quiz Patient",
      "offset": 33
    },
    {
      "val": "Alberto Seixas",
      "offset": 78
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfTheEvaluationOfThePatient(String,String,String)"
});
formatter.result({
  "duration": 489769313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Test Answer Quiz Patient",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 76532962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type edit succ",
      "offset": 12
    },
    {
      "val": "Através do site",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 76716757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model edit succ",
      "offset": 12
    },
    {
      "val": "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação",
      "offset": 41
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 185860504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 406523834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Test Answer Quiz Patient",
      "offset": 53
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToTheDetailsPageOfEvaluation(String,String)"
});
formatter.result({
  "duration": 24173370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description edit succ",
      "offset": 11
    },
    {
      "val": "Test Answer Quiz Patient",
      "offset": 47
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 12749659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type edit succ",
      "offset": 11
    },
    {
      "val": "Através do site",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 20033615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model edit succ",
      "offset": 11
    },
    {
      "val": "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação",
      "offset": 41
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 20664498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da última atualização Test Answer Quiz Patient",
      "offset": 11
    }
  ],
  "location": "US9StepDefs.theFieldShouldDifferentFromThePreviousUSnine(String)"
});
formatter.result({
  "duration": 19170802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizada.",
      "offset": 21
    }
  ],
  "location": "US9StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSnine(String)"
});
formatter.result({
  "duration": 34261290,
  "status": "passed"
});
formatter.after({
  "duration": 529757774,
  "status": "passed"
});
formatter.before({
  "duration": 3933508279,
  "status": "passed"
});
formatter.scenario({
  "line": 223,
  "name": "Edit evaluations of patients",
  "description": "",
  "id": "manage-patients;edit-evaluations-of-patients;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 209,
  "name": "I access the \"edit\" page of the \"Test New Evaluation Patient\" evaluation of the \"Alberto Seixas\" patient",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 210,
  "name": "I fill the \"description\" field with \"Test New Evaluation Patient\" - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "I fill the \"type edit succ\" field with \"Através do site\" - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "I fill the \"model edit succ\" field with \"Model 1\" - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "I press the \"save\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "I should be redirected to the \"details\" page of the \"Test New Evaluation Patient\" evaluation",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "the field \"description edit succ\" should show \"Test New Evaluation Patient\" - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "the field \"type edit succ\" should show \"Através do site\" - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "the field \"model edit succ\" should show \"Model 1\" - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "the field \"Data da última atualização Test New Evaluation Patient\" should different from the previous - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "should be present a \"Foi atualizada.\" log at the beggining of the logs section - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "Test New Evaluation Patient",
      "offset": 33
    },
    {
      "val": "Alberto Seixas",
      "offset": 81
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfTheEvaluationOfThePatient(String,String,String)"
});
formatter.result({
  "duration": 527845070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Test New Evaluation Patient",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 101776645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type edit succ",
      "offset": 12
    },
    {
      "val": "Através do site",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 75246035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model edit succ",
      "offset": 12
    },
    {
      "val": "Model 1",
      "offset": 41
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 69154191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 383544764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Test New Evaluation Patient",
      "offset": 53
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToTheDetailsPageOfEvaluation(String,String)"
});
formatter.result({
  "duration": 25090520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description edit succ",
      "offset": 11
    },
    {
      "val": "Test New Evaluation Patient",
      "offset": 47
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 14014341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type edit succ",
      "offset": 11
    },
    {
      "val": "Através do site",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 19089115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model edit succ",
      "offset": 11
    },
    {
      "val": "Model 1",
      "offset": 41
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 20302014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da última atualização Test New Evaluation Patient",
      "offset": 11
    }
  ],
  "location": "US9StepDefs.theFieldShouldDifferentFromThePreviousUSnine(String)"
});
formatter.result({
  "duration": 21637442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizada.",
      "offset": 21
    }
  ],
  "location": "US9StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSnine(String)"
});
formatter.result({
  "duration": 37305571,
  "status": "passed"
});
formatter.after({
  "duration": 532065053,
  "status": "passed"
});
formatter.before({
  "duration": 2957363291,
  "status": "passed"
});
formatter.scenario({
  "line": 224,
  "name": "Edit evaluations of patients",
  "description": "",
  "id": "manage-patients;edit-evaluations-of-patients;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 209,
  "name": "I access the \"edit\" page of the \"Test Provide Quiz Patient\" evaluation of the \"Alberto Seixas\" patient",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 210,
  "name": "I fill the \"description\" field with \"Test Provide Quiz Patient\" - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "I fill the \"type edit succ\" field with \"Através da app\" - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "I fill the \"model edit succ\" field with \"Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação\" - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "I press the \"save\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "I should be redirected to the \"details\" page of the \"Test Provide Quiz Patient\" evaluation",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "the field \"description edit succ\" should show \"Test Provide Quiz Patient\" - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "the field \"type edit succ\" should show \"Através da app\" - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "the field \"model edit succ\" should show \"Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação\" - USnine",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "the field \"Data da última atualização Test Provide Quiz Patient\" should different from the previous - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "should be present a \"Foi atualizada.\" log at the beggining of the logs section - USnine",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "Test Provide Quiz Patient",
      "offset": 33
    },
    {
      "val": "Alberto Seixas",
      "offset": 79
    }
  ],
  "location": "US9StepDefs.iAccessThePageOfTheEvaluationOfThePatient(String,String,String)"
});
formatter.result({
  "duration": 485486970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Test Provide Quiz Patient",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 82072693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type edit succ",
      "offset": 12
    },
    {
      "val": "Através da app",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 76974945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model edit succ",
      "offset": 12
    },
    {
      "val": "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação",
      "offset": 41
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 162489776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 390196380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Test Provide Quiz Patient",
      "offset": 53
    }
  ],
  "location": "US9StepDefs.iShouldBeRedirectedToTheDetailsPageOfEvaluation(String,String)"
});
formatter.result({
  "duration": 24213484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description edit succ",
      "offset": 11
    },
    {
      "val": "Test Provide Quiz Patient",
      "offset": 47
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 13245248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type edit succ",
      "offset": 11
    },
    {
      "val": "Através da app",
      "offset": 40
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 21564508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model edit succ",
      "offset": 11
    },
    {
      "val": "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação",
      "offset": 41
    }
  ],
  "location": "US9StepDefs.theFieldShouldShowUSnine(String,String)"
});
formatter.result({
  "duration": 20465387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data da última atualização Test Provide Quiz Patient",
      "offset": 11
    }
  ],
  "location": "US9StepDefs.theFieldShouldDifferentFromThePreviousUSnine(String)"
});
formatter.result({
  "duration": 20683461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foi atualizada.",
      "offset": 21
    }
  ],
  "location": "US9StepDefs.shouldBePresentALogAtTheBegginingOfTheLogsSectionUSnine(String)"
});
formatter.result({
  "duration": 36702403,
  "status": "passed"
});
formatter.after({
  "duration": 531074969,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 226,
      "value": "#ERRORS"
    }
  ],
  "line": 227,
  "name": "Name field empty",
  "description": "",
  "id": "manage-patients;name-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 228,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 229,
  "name": "the \"name\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "the \"O nome tem que ser preenchido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 232,
  "name": "",
  "description": "",
  "id": "manage-patients;name-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 233,
      "id": "manage-patients;name-field-empty;;1"
    },
    {
      "cells": [
        "new patient",
        "save"
      ],
      "line": 234,
      "id": "manage-patients;name-field-empty;;2"
    },
    {
      "cells": [
        "edit patient",
        "save"
      ],
      "line": 235,
      "id": "manage-patients;name-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2967771392,
  "status": "passed"
});
formatter.scenario({
  "line": 234,
  "name": "Name field empty",
  "description": "",
  "id": "manage-patients;name-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 228,
  "name": "I access the \"new patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 229,
  "name": "the \"name\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "the \"O nome tem que ser preenchido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 425287298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 59169839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 379211733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 61020185,
  "status": "passed"
});
formatter.after({
  "duration": 533196630,
  "status": "passed"
});
formatter.before({
  "duration": 2941012132,
  "status": "passed"
});
formatter.scenario({
  "line": 235,
  "name": "Name field empty",
  "description": "",
  "id": "manage-patients;name-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 228,
  "name": "I access the \"edit patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 229,
  "name": "the \"name\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "the \"O nome tem que ser preenchido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 425876243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 60415558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 428077037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 84385077,
  "status": "passed"
});
formatter.after({
  "duration": 534097734,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 237,
  "name": "Name field min length",
  "description": "",
  "id": "manage-patients;name-field-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 238,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 239,
  "name": "I fill the \"name error\" field with \"non\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "the \"O nome tem que ter pelo menos 4 letras.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 242,
  "name": "",
  "description": "",
  "id": "manage-patients;name-field-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 243,
      "id": "manage-patients;name-field-min-length;;1"
    },
    {
      "cells": [
        "new patient",
        "save"
      ],
      "line": 244,
      "id": "manage-patients;name-field-min-length;;2"
    },
    {
      "cells": [
        "edit patient",
        "save"
      ],
      "line": 245,
      "id": "manage-patients;name-field-min-length;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2998540948,
  "status": "passed"
});
formatter.scenario({
  "line": 244,
  "name": "Name field min length",
  "description": "",
  "id": "manage-patients;name-field-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 238,
  "name": "I access the \"new patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 239,
  "name": "I fill the \"name error\" field with \"non\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "the \"O nome tem que ter pelo menos 4 letras.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 430379940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name error",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 91449137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 383548046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 36683805,
  "status": "passed"
});
formatter.after({
  "duration": 534168116,
  "status": "passed"
});
formatter.before({
  "duration": 4383416764,
  "status": "passed"
});
formatter.scenario({
  "line": 245,
  "name": "Name field min length",
  "description": "",
  "id": "manage-patients;name-field-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 238,
  "name": "I access the \"edit patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 239,
  "name": "I fill the \"name error\" field with \"non\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "the \"O nome tem que ter pelo menos 4 letras.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 418427454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name error",
      "offset": 12
    },
    {
      "val": "non",
      "offset": 36
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 91382037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 429106141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O nome tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 56804941,
  "status": "passed"
});
formatter.after({
  "duration": 532282033,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 247,
  "name": "Email field invalid",
  "description": "",
  "id": "manage-patients;email-field-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 248,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 249,
  "name": "I fill the \"email\" field with \"zecoroados@mail\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 250,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "the \"O email tem que ser válido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 252,
  "name": "",
  "description": "",
  "id": "manage-patients;email-field-invalid;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 253,
      "id": "manage-patients;email-field-invalid;;1"
    },
    {
      "cells": [
        "new patient",
        "save"
      ],
      "line": 254,
      "id": "manage-patients;email-field-invalid;;2"
    },
    {
      "cells": [
        "edit patient",
        "save"
      ],
      "line": 255,
      "id": "manage-patients;email-field-invalid;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2968349032,
  "status": "passed"
});
formatter.scenario({
  "line": 254,
  "name": "Email field invalid",
  "description": "",
  "id": "manage-patients;email-field-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 248,
  "name": "I access the \"new patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 249,
  "name": "I fill the \"email\" field with \"zecoroados@mail\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 250,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "the \"O email tem que ser válido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 440464213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "zecoroados@mail",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 118015120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 420758438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email tem que ser válido.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 73119268,
  "status": "passed"
});
formatter.after({
  "duration": 532390341,
  "status": "passed"
});
formatter.before({
  "duration": 2960726295,
  "status": "passed"
});
formatter.scenario({
  "line": 255,
  "name": "Email field invalid",
  "description": "",
  "id": "manage-patients;email-field-invalid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 248,
  "name": "I access the \"edit patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 249,
  "name": "I fill the \"email\" field with \"zecoroados@mail\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 250,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "the \"O email tem que ser válido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 826800175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "zecoroados@mail",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 81405708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 431492190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email tem que ser válido.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 57611961,
  "status": "passed"
});
formatter.after({
  "duration": 530975414,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 257,
  "name": "Email field already in use",
  "description": "",
  "id": "manage-patients;email-field-already-in-use",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 258,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 259,
  "name": "I fill the \"email error\" field with \"ambro@gmail.com\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 260,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "the \"Email já existente. Escolha outro.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 262,
  "name": "",
  "description": "",
  "id": "manage-patients;email-field-already-in-use;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 263,
      "id": "manage-patients;email-field-already-in-use;;1"
    },
    {
      "cells": [
        "new patient",
        "save"
      ],
      "line": 264,
      "id": "manage-patients;email-field-already-in-use;;2"
    },
    {
      "cells": [
        "edit patient",
        "save"
      ],
      "line": 265,
      "id": "manage-patients;email-field-already-in-use;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3090303703,
  "status": "passed"
});
formatter.scenario({
  "line": 264,
  "name": "Email field already in use",
  "description": "",
  "id": "manage-patients;email-field-already-in-use;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 258,
  "name": "I access the \"new patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 259,
  "name": "I fill the \"email error\" field with \"ambro@gmail.com\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 260,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "the \"Email já existente. Escolha outro.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 432308691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email error",
      "offset": 12
    },
    {
      "val": "ambro@gmail.com",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 112475389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 424858808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 57416861,
  "status": "passed"
});
formatter.after({
  "duration": 542819227,
  "status": "passed"
});
formatter.before({
  "duration": 2975462322,
  "status": "passed"
});
formatter.scenario({
  "line": 265,
  "name": "Email field already in use",
  "description": "",
  "id": "manage-patients;email-field-already-in-use;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 258,
  "name": "I access the \"edit patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 259,
  "name": "I fill the \"email error\" field with \"ambro@gmail.com\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 260,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "the \"Email já existente. Escolha outro.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 328997141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email error",
      "offset": 12
    },
    {
      "val": "ambro@gmail.com",
      "offset": 37
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 78810703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 420072489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email já existente. Escolha outro.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 55124169,
  "status": "passed"
});
formatter.after({
  "duration": 532035150,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 267,
  "name": "Email field empty",
  "description": "",
  "id": "manage-patients;email-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 268,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 269,
  "name": "the \"email\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 270,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "the \"O email tem que ser preenchido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 272,
  "name": "",
  "description": "",
  "id": "manage-patients;email-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 273,
      "id": "manage-patients;email-field-empty;;1"
    },
    {
      "cells": [
        "new patient",
        "save"
      ],
      "line": 274,
      "id": "manage-patients;email-field-empty;;2"
    },
    {
      "cells": [
        "edit patient",
        "save"
      ],
      "line": 275,
      "id": "manage-patients;email-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3943585986,
  "status": "passed"
});
formatter.scenario({
  "line": 274,
  "name": "Email field empty",
  "description": "",
  "id": "manage-patients;email-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 268,
  "name": "I access the \"new patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 269,
  "name": "the \"email\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 270,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "the \"O email tem que ser preenchido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 412407451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 58027322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 433654695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 65634013,
  "status": "passed"
});
formatter.after({
  "duration": 538871654,
  "status": "passed"
});
formatter.before({
  "duration": 3039467346,
  "status": "passed"
});
formatter.scenario({
  "line": 275,
  "name": "Email field empty",
  "description": "",
  "id": "manage-patients;email-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 268,
  "name": "I access the \"edit patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 269,
  "name": "the \"email\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 270,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "the \"O email tem que ser preenchido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 416785701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 59677098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 440380338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O email tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 58510147,
  "status": "passed"
});
formatter.after({
  "duration": 537951222,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 277,
  "name": "Gender field empty",
  "description": "",
  "id": "manage-patients;gender-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 278,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 279,
  "name": "the \"gender\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 280,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "the \"O género tem que ser preenchido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 282,
  "name": "",
  "description": "",
  "id": "manage-patients;gender-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 283,
      "id": "manage-patients;gender-field-empty;;1"
    },
    {
      "cells": [
        "new patient",
        "save"
      ],
      "line": 284,
      "id": "manage-patients;gender-field-empty;;2"
    },
    {
      "cells": [
        "edit patient",
        "save"
      ],
      "line": 285,
      "id": "manage-patients;gender-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6288402230,
  "status": "passed"
});
formatter.scenario({
  "line": 284,
  "name": "Gender field empty",
  "description": "",
  "id": "manage-patients;gender-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 278,
  "name": "I access the \"new patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 279,
  "name": "the \"gender\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 280,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "the \"O género tem que ser preenchido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 414103905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 47088623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 419553926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O género tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 59607080,
  "status": "passed"
});
formatter.after({
  "duration": 531221203,
  "status": "passed"
});
formatter.before({
  "duration": 3158271251,
  "status": "passed"
});
formatter.scenario({
  "line": 285,
  "name": "Gender field empty",
  "description": "",
  "id": "manage-patients;gender-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 278,
  "name": "I access the \"edit patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 279,
  "name": "the \"gender\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 280,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "the \"O género tem que ser preenchido.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 414034616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gender",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 144910402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 409058669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O género tem que ser preenchido.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 57574765,
  "status": "passed"
});
formatter.after({
  "duration": 533248049,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 287,
  "name": "Birth Date field empty",
  "description": "",
  "id": "manage-patients;birth-date-field-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 288,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 289,
  "name": "the \"birthDate\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 290,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "the \"A data de nascimento tem que ser preenchida.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 292,
  "name": "",
  "description": "",
  "id": "manage-patients;birth-date-field-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 293,
      "id": "manage-patients;birth-date-field-empty;;1"
    },
    {
      "cells": [
        "new patient",
        "save"
      ],
      "line": 294,
      "id": "manage-patients;birth-date-field-empty;;2"
    },
    {
      "cells": [
        "edit patient",
        "save"
      ],
      "line": 295,
      "id": "manage-patients;birth-date-field-empty;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2969623925,
  "status": "passed"
});
formatter.scenario({
  "line": 294,
  "name": "Birth Date field empty",
  "description": "",
  "id": "manage-patients;birth-date-field-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 288,
  "name": "I access the \"new patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 289,
  "name": "the \"birthDate\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 290,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "the \"A data de nascimento tem que ser preenchida.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 425332152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 60000197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 427394372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A data de nascimento tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 67862158,
  "status": "passed"
});
formatter.after({
  "duration": 530570628,
  "status": "passed"
});
formatter.before({
  "duration": 3905675425,
  "status": "passed"
});
formatter.scenario({
  "line": 295,
  "name": "Birth Date field empty",
  "description": "",
  "id": "manage-patients;birth-date-field-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 288,
  "name": "I access the \"edit patient\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 289,
  "name": "the \"birthDate\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 290,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "the \"A data de nascimento tem que ser preenchida.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit patient",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 411460398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "birthDate",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 90554597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 422403108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A data de nascimento tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 63292090,
  "status": "passed"
});
formatter.after({
  "duration": 531314922,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 297,
  "name": "Evaluation description empty",
  "description": "",
  "id": "manage-patients;evaluation-description-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 298,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 299,
  "name": "the \"description\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 300,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 302,
  "name": "",
  "description": "",
  "id": "manage-patients;evaluation-description-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 303,
      "id": "manage-patients;evaluation-description-empty;;1"
    },
    {
      "cells": [
        "answer quiz",
        "save"
      ],
      "line": 304,
      "id": "manage-patients;evaluation-description-empty;;2"
    },
    {
      "cells": [
        "new evaluation",
        "save"
      ],
      "line": 305,
      "id": "manage-patients;evaluation-description-empty;;3"
    },
    {
      "cells": [
        "provide quiz",
        "save"
      ],
      "line": 306,
      "id": "manage-patients;evaluation-description-empty;;4"
    },
    {
      "cells": [
        "edit answer quiz",
        "save"
      ],
      "line": 307,
      "id": "manage-patients;evaluation-description-empty;;5"
    },
    {
      "cells": [
        "edit evaluation",
        "save"
      ],
      "line": 308,
      "id": "manage-patients;evaluation-description-empty;;6"
    },
    {
      "cells": [
        "edit provide quiz",
        "save"
      ],
      "line": 309,
      "id": "manage-patients;evaluation-description-empty;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3099830756,
  "status": "passed"
});
formatter.scenario({
  "line": 304,
  "name": "Evaluation description empty",
  "description": "",
  "id": "manage-patients;evaluation-description-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 298,
  "name": "I access the \"answer quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 299,
  "name": "the \"description\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 300,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "answer quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 266261176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 29219335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 328391786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 26778222,
  "status": "passed"
});
formatter.after({
  "duration": 532341839,
  "status": "passed"
});
formatter.before({
  "duration": 2986074639,
  "status": "passed"
});
formatter.scenario({
  "line": 305,
  "name": "Evaluation description empty",
  "description": "",
  "id": "manage-patients;evaluation-description-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 298,
  "name": "I access the \"new evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 299,
  "name": "the \"description\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 300,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 207497582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 30471619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 325981305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 26906222,
  "status": "passed"
});
formatter.after({
  "duration": 542625951,
  "status": "passed"
});
formatter.before({
  "duration": 2910793960,
  "status": "passed"
});
formatter.scenario({
  "line": 306,
  "name": "Evaluation description empty",
  "description": "",
  "id": "manage-patients;evaluation-description-empty;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 298,
  "name": "I access the \"provide quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 299,
  "name": "the \"description\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 300,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "provide quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 199962731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 29479712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 293389118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 26010588,
  "status": "passed"
});
formatter.after({
  "duration": 529996998,
  "status": "passed"
});
formatter.before({
  "duration": 2968971162,
  "status": "passed"
});
formatter.scenario({
  "line": 307,
  "name": "Evaluation description empty",
  "description": "",
  "id": "manage-patients;evaluation-description-empty;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 298,
  "name": "I access the \"edit answer quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 299,
  "name": "the \"description\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 300,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit answer quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 215165902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 31370171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 357694996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 26509824,
  "status": "passed"
});
formatter.after({
  "duration": 532475309,
  "status": "passed"
});
formatter.before({
  "duration": 3862590170,
  "status": "passed"
});
formatter.scenario({
  "line": 308,
  "name": "Evaluation description empty",
  "description": "",
  "id": "manage-patients;evaluation-description-empty;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 298,
  "name": "I access the \"edit evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 299,
  "name": "the \"description\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 300,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 220295377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 29047575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 286035510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 24888127,
  "status": "passed"
});
formatter.after({
  "duration": 531566546,
  "status": "passed"
});
formatter.before({
  "duration": 3050584004,
  "status": "passed"
});
formatter.scenario({
  "line": 309,
  "name": "Evaluation description empty",
  "description": "",
  "id": "manage-patients;evaluation-description-empty;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 298,
  "name": "I access the \"edit provide quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 299,
  "name": "the \"description\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 300,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "the \"A descrição tem que ser preenchida.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit provide quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 218047904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 31283015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 333213843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ser preenchida.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 24440675,
  "status": "passed"
});
formatter.after({
  "duration": 545877001,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 311,
  "name": "Evaluation description min length",
  "description": "",
  "id": "manage-patients;evaluation-description-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 312,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 313,
  "name": "I fill the \"description error\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 314,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "the \"A descrição tem que ter pelo menos 4 letras.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 316,
  "name": "",
  "description": "",
  "id": "manage-patients;evaluation-description-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 317,
      "id": "manage-patients;evaluation-description-min-length;;1"
    },
    {
      "cells": [
        "answer quiz",
        "save"
      ],
      "line": 318,
      "id": "manage-patients;evaluation-description-min-length;;2"
    },
    {
      "cells": [
        "new evaluation",
        "save"
      ],
      "line": 319,
      "id": "manage-patients;evaluation-description-min-length;;3"
    },
    {
      "cells": [
        "provide quiz",
        "save"
      ],
      "line": 320,
      "id": "manage-patients;evaluation-description-min-length;;4"
    },
    {
      "cells": [
        "edit answer quiz",
        "save"
      ],
      "line": 321,
      "id": "manage-patients;evaluation-description-min-length;;5"
    },
    {
      "cells": [
        "edit evaluation",
        "save"
      ],
      "line": 322,
      "id": "manage-patients;evaluation-description-min-length;;6"
    },
    {
      "cells": [
        "edit provide quiz",
        "save"
      ],
      "line": 323,
      "id": "manage-patients;evaluation-description-min-length;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2952230898,
  "status": "passed"
});
formatter.scenario({
  "line": 318,
  "name": "Evaluation description min length",
  "description": "",
  "id": "manage-patients;evaluation-description-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 312,
  "name": "I access the \"answer quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 313,
  "name": "I fill the \"description error\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 314,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "the \"A descrição tem que ter pelo menos 4 letras.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "answer quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 254327288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description error",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 43
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 53017824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 281493885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 26902576,
  "status": "passed"
});
formatter.after({
  "duration": 552467352,
  "status": "passed"
});
formatter.before({
  "duration": 2980160755,
  "status": "passed"
});
formatter.scenario({
  "line": 319,
  "name": "Evaluation description min length",
  "description": "",
  "id": "manage-patients;evaluation-description-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 312,
  "name": "I access the \"new evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 313,
  "name": "I fill the \"description error\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 314,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "the \"A descrição tem que ter pelo menos 4 letras.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 198165263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description error",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 43
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 54629309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 313141207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 26468981,
  "status": "passed"
});
formatter.after({
  "duration": 529341684,
  "status": "passed"
});
formatter.before({
  "duration": 3423409237,
  "status": "passed"
});
formatter.scenario({
  "line": 320,
  "name": "Evaluation description min length",
  "description": "",
  "id": "manage-patients;evaluation-description-min-length;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 312,
  "name": "I access the \"provide quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 313,
  "name": "I fill the \"description error\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 314,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "the \"A descrição tem que ter pelo menos 4 letras.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "provide quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 206981935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description error",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 43
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 55163188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 317556654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 26667362,
  "status": "passed"
});
formatter.after({
  "duration": 529858058,
  "status": "passed"
});
formatter.before({
  "duration": 4929809412,
  "status": "passed"
});
formatter.scenario({
  "line": 321,
  "name": "Evaluation description min length",
  "description": "",
  "id": "manage-patients;evaluation-description-min-length;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 312,
  "name": "I access the \"edit answer quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 313,
  "name": "I fill the \"description error\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 314,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "the \"A descrição tem que ter pelo menos 4 letras.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit answer quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 213817709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description error",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 43
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 55409707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 328849814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 24301006,
  "status": "passed"
});
formatter.after({
  "duration": 533247319,
  "status": "passed"
});
formatter.before({
  "duration": 2924276244,
  "status": "passed"
});
formatter.scenario({
  "line": 322,
  "name": "Evaluation description min length",
  "description": "",
  "id": "manage-patients;evaluation-description-min-length;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 312,
  "name": "I access the \"edit evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 313,
  "name": "I fill the \"description error\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 314,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "the \"A descrição tem que ter pelo menos 4 letras.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 222361608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description error",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 43
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 52873050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 316905715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 24808629,
  "status": "passed"
});
formatter.after({
  "duration": 546072101,
  "status": "passed"
});
formatter.before({
  "duration": 2987097908,
  "status": "passed"
});
formatter.scenario({
  "line": 323,
  "name": "Evaluation description min length",
  "description": "",
  "id": "manage-patients;evaluation-description-min-length;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 312,
  "name": "I access the \"edit provide quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 313,
  "name": "I fill the \"description error\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 314,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "the \"A descrição tem que ter pelo menos 4 letras.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit provide quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 242244978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description error",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 43
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 54902448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 304905821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A descrição tem que ter pelo menos 4 letras.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 25799443,
  "status": "passed"
});
formatter.after({
  "duration": 532513235,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 325,
  "name": "Evaluation type empty",
  "description": "",
  "id": "manage-patients;evaluation-type-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 326,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 327,
  "name": "the \"type\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 328,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "the \"O tipo de avaliação tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 330,
  "name": "",
  "description": "",
  "id": "manage-patients;evaluation-type-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 331,
      "id": "manage-patients;evaluation-type-empty;;1"
    },
    {
      "cells": [
        "answer quiz",
        "save"
      ],
      "line": 332,
      "id": "manage-patients;evaluation-type-empty;;2"
    },
    {
      "cells": [
        "new evaluation",
        "save"
      ],
      "line": 333,
      "id": "manage-patients;evaluation-type-empty;;3"
    },
    {
      "cells": [
        "provide quiz",
        "save"
      ],
      "line": 334,
      "id": "manage-patients;evaluation-type-empty;;4"
    },
    {
      "cells": [
        "edit answer quiz",
        "save"
      ],
      "line": 335,
      "id": "manage-patients;evaluation-type-empty;;5"
    },
    {
      "cells": [
        "edit evaluation",
        "save"
      ],
      "line": 336,
      "id": "manage-patients;evaluation-type-empty;;6"
    },
    {
      "cells": [
        "edit provide quiz",
        "save"
      ],
      "line": 337,
      "id": "manage-patients;evaluation-type-empty;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2972631010,
  "status": "passed"
});
formatter.scenario({
  "line": 332,
  "name": "Evaluation type empty",
  "description": "",
  "id": "manage-patients;evaluation-type-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 326,
  "name": "I access the \"answer quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 327,
  "name": "the \"type\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 328,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "the \"O tipo de avaliação tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "answer quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 245022685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 31462068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 296584374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ser preenchido",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 32894864,
  "status": "passed"
});
formatter.after({
  "duration": 548829020,
  "status": "passed"
});
formatter.before({
  "duration": 2945570531,
  "status": "passed"
});
formatter.scenario({
  "line": 333,
  "name": "Evaluation type empty",
  "description": "",
  "id": "manage-patients;evaluation-type-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 326,
  "name": "I access the \"new evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 327,
  "name": "the \"type\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 328,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "the \"O tipo de avaliação tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 196506735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 32889029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 302936958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ser preenchido",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 27500637,
  "status": "passed"
});
formatter.after({
  "duration": 532275833,
  "status": "passed"
});
formatter.before({
  "duration": 4329411773,
  "status": "passed"
});
formatter.scenario({
  "line": 334,
  "name": "Evaluation type empty",
  "description": "",
  "id": "manage-patients;evaluation-type-empty;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 326,
  "name": "I access the \"provide quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 327,
  "name": "the \"type\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 328,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "the \"O tipo de avaliação tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "provide quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 198823860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 29019861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 297094185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ser preenchido",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 26683408,
  "status": "passed"
});
formatter.after({
  "duration": 532896141,
  "status": "passed"
});
formatter.before({
  "duration": 3823623519,
  "status": "passed"
});
formatter.scenario({
  "line": 335,
  "name": "Evaluation type empty",
  "description": "",
  "id": "manage-patients;evaluation-type-empty;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 326,
  "name": "I access the \"edit answer quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 327,
  "name": "the \"type\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 328,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "the \"O tipo de avaliação tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit answer quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 224765890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 30009945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 286038427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ser preenchido",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 24922042,
  "status": "passed"
});
formatter.after({
  "duration": 529183051,
  "status": "passed"
});
formatter.before({
  "duration": 4255625885,
  "status": "passed"
});
formatter.scenario({
  "line": 336,
  "name": "Evaluation type empty",
  "description": "",
  "id": "manage-patients;evaluation-type-empty;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 326,
  "name": "I access the \"edit evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 327,
  "name": "the \"type\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 328,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "the \"O tipo de avaliação tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 332154106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 30872029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 395603370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ser preenchido",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 26408080,
  "status": "passed"
});
formatter.after({
  "duration": 532089122,
  "status": "passed"
});
formatter.before({
  "duration": 3143456455,
  "status": "passed"
});
formatter.scenario({
  "line": 337,
  "name": "Evaluation type empty",
  "description": "",
  "id": "manage-patients;evaluation-type-empty;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 326,
  "name": "I access the \"edit provide quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 327,
  "name": "the \"type\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 328,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "the \"O tipo de avaliação tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit provide quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 283092243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 30486206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 322255817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ser preenchido",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 23218660,
  "status": "passed"
});
formatter.after({
  "duration": 530356565,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 339,
  "name": "Evaluation type min length",
  "description": "",
  "id": "manage-patients;evaluation-type-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 340,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I fill the \"type\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "the \"O tipo de avaliação tem que ter pelo menos 4 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 344,
  "name": "",
  "description": "",
  "id": "manage-patients;evaluation-type-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 345,
      "id": "manage-patients;evaluation-type-min-length;;1"
    },
    {
      "cells": [
        "answer quiz",
        "save"
      ],
      "line": 346,
      "id": "manage-patients;evaluation-type-min-length;;2"
    },
    {
      "cells": [
        "new evaluation",
        "save"
      ],
      "line": 347,
      "id": "manage-patients;evaluation-type-min-length;;3"
    },
    {
      "cells": [
        "provide quiz",
        "save"
      ],
      "line": 348,
      "id": "manage-patients;evaluation-type-min-length;;4"
    },
    {
      "cells": [
        "edit answer quiz",
        "save"
      ],
      "line": 349,
      "id": "manage-patients;evaluation-type-min-length;;5"
    },
    {
      "cells": [
        "edit evaluation",
        "save"
      ],
      "line": 350,
      "id": "manage-patients;evaluation-type-min-length;;6"
    },
    {
      "cells": [
        "edit provide quiz",
        "save"
      ],
      "line": 351,
      "id": "manage-patients;evaluation-type-min-length;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3597967464,
  "status": "passed"
});
formatter.scenario({
  "line": 346,
  "name": "Evaluation type min length",
  "description": "",
  "id": "manage-patients;evaluation-type-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 340,
  "name": "I access the \"answer quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I fill the \"type\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "the \"O tipo de avaliação tem que ter pelo menos 4 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "answer quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 283841279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 58049203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 331967759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ter pelo menos 4 letras",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 27040057,
  "status": "passed"
});
formatter.after({
  "duration": 532402010,
  "status": "passed"
});
formatter.before({
  "duration": 4408084266,
  "status": "passed"
});
formatter.scenario({
  "line": 347,
  "name": "Evaluation type min length",
  "description": "",
  "id": "manage-patients;evaluation-type-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 340,
  "name": "I access the \"new evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I fill the \"type\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "the \"O tipo de avaliação tem que ter pelo menos 4 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 219208290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 65537010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 336833211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ter pelo menos 4 letras",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 30190822,
  "status": "passed"
});
formatter.after({
  "duration": 548401261,
  "status": "passed"
});
formatter.before({
  "duration": 3102390023,
  "status": "passed"
});
formatter.scenario({
  "line": 348,
  "name": "Evaluation type min length",
  "description": "",
  "id": "manage-patients;evaluation-type-min-length;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 340,
  "name": "I access the \"provide quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I fill the \"type\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "the \"O tipo de avaliação tem que ter pelo menos 4 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "provide quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 215279680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 58887948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 381408516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ter pelo menos 4 letras",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 30590502,
  "status": "passed"
});
formatter.after({
  "duration": 538754959,
  "status": "passed"
});
formatter.before({
  "duration": 3012720121,
  "status": "passed"
});
formatter.scenario({
  "line": 349,
  "name": "Evaluation type min length",
  "description": "",
  "id": "manage-patients;evaluation-type-min-length;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 340,
  "name": "I access the \"edit answer quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I fill the \"type\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "the \"O tipo de avaliação tem que ter pelo menos 4 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit answer quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 261323518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 55331302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 321743453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ter pelo menos 4 letras",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 24207650,
  "status": "passed"
});
formatter.after({
  "duration": 530807299,
  "status": "passed"
});
formatter.before({
  "duration": 3069418942,
  "status": "passed"
});
formatter.scenario({
  "line": 350,
  "name": "Evaluation type min length",
  "description": "",
  "id": "manage-patients;evaluation-type-min-length;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 340,
  "name": "I access the \"edit evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I fill the \"type\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "the \"O tipo de avaliação tem que ter pelo menos 4 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 220947775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 59403958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 334024143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ter pelo menos 4 letras",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 24440675,
  "status": "passed"
});
formatter.after({
  "duration": 535771578,
  "status": "passed"
});
formatter.before({
  "duration": 3037931347,
  "status": "passed"
});
formatter.scenario({
  "line": 351,
  "name": "Evaluation type min length",
  "description": "",
  "id": "manage-patients;evaluation-type-min-length;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 340,
  "name": "I access the \"edit provide quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 341,
  "name": "I fill the \"type\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "the \"O tipo de avaliação tem que ter pelo menos 4 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit provide quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 268941515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 30
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 59162181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 321607794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O tipo de avaliação tem que ter pelo menos 4 letras",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 24529655,
  "status": "passed"
});
formatter.after({
  "duration": 531535914,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 353,
  "name": "Evaluation model empty",
  "description": "",
  "id": "manage-patients;evaluation-model-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 354,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 355,
  "name": "the \"model\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 356,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "the \"O modelo tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 358,
  "name": "",
  "description": "",
  "id": "manage-patients;evaluation-model-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 359,
      "id": "manage-patients;evaluation-model-empty;;1"
    },
    {
      "cells": [
        "new evaluation",
        "save"
      ],
      "line": 360,
      "id": "manage-patients;evaluation-model-empty;;2"
    },
    {
      "cells": [
        "edit answer quiz",
        "save"
      ],
      "line": 361,
      "id": "manage-patients;evaluation-model-empty;;3"
    },
    {
      "cells": [
        "edit evaluation",
        "save"
      ],
      "line": 362,
      "id": "manage-patients;evaluation-model-empty;;4"
    },
    {
      "cells": [
        "edit provide quiz",
        "save"
      ],
      "line": 363,
      "id": "manage-patients;evaluation-model-empty;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3908732105,
  "status": "passed"
});
formatter.scenario({
  "line": 360,
  "name": "Evaluation model empty",
  "description": "",
  "id": "manage-patients;evaluation-model-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 354,
  "name": "I access the \"new evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 355,
  "name": "the \"model\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 356,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "the \"O modelo tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 234227666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 30707926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 337682532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O modelo tem que ser preenchido",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 26953994,
  "status": "passed"
});
formatter.after({
  "duration": 529875198,
  "status": "passed"
});
formatter.before({
  "duration": 3668485893,
  "status": "passed"
});
formatter.scenario({
  "line": 361,
  "name": "Evaluation model empty",
  "description": "",
  "id": "manage-patients;evaluation-model-empty;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 354,
  "name": "I access the \"edit answer quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 355,
  "name": "the \"model\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 356,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "the \"O modelo tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit answer quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 277054370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 31995947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 283848572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O modelo tem que ser preenchido",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 25281244,
  "status": "passed"
});
formatter.after({
  "duration": 532333451,
  "status": "passed"
});
formatter.before({
  "duration": 2984904771,
  "status": "passed"
});
formatter.scenario({
  "line": 362,
  "name": "Evaluation model empty",
  "description": "",
  "id": "manage-patients;evaluation-model-empty;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 354,
  "name": "I access the \"edit evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 355,
  "name": "the \"model\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 356,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "the \"O modelo tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 235715164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 30574092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 312953766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O modelo tem que ser preenchido",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 27210358,
  "status": "passed"
});
formatter.after({
  "duration": 530584486,
  "status": "passed"
});
formatter.before({
  "duration": 3042169199,
  "status": "passed"
});
formatter.scenario({
  "line": 363,
  "name": "Evaluation model empty",
  "description": "",
  "id": "manage-patients;evaluation-model-empty;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 354,
  "name": "I access the \"edit provide quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 355,
  "name": "the \"model\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 356,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "the \"O modelo tem que ser preenchido\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit provide quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 279769717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 33848117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 332581867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O modelo tem que ser preenchido",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 29053775,
  "status": "passed"
});
formatter.after({
  "duration": 543575922,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 365,
  "name": "Evaluation model min length",
  "description": "",
  "id": "manage-patients;evaluation-model-min-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 366,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 367,
  "name": "I fill the \"model\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 368,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "the \"O modelo tem que ter pelo menos 3 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 370,
  "name": "",
  "description": "",
  "id": "manage-patients;evaluation-model-min-length;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 371,
      "id": "manage-patients;evaluation-model-min-length;;1"
    },
    {
      "cells": [
        "new evaluation",
        "save"
      ],
      "line": 372,
      "id": "manage-patients;evaluation-model-min-length;;2"
    },
    {
      "cells": [
        "edit answer quiz",
        "save"
      ],
      "line": 373,
      "id": "manage-patients;evaluation-model-min-length;;3"
    },
    {
      "cells": [
        "edit evaluation",
        "save"
      ],
      "line": 374,
      "id": "manage-patients;evaluation-model-min-length;;4"
    },
    {
      "cells": [
        "edit provide quiz",
        "save"
      ],
      "line": 375,
      "id": "manage-patients;evaluation-model-min-length;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4167785906,
  "status": "passed"
});
formatter.scenario({
  "line": 372,
  "name": "Evaluation model min length",
  "description": "",
  "id": "manage-patients;evaluation-model-min-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 366,
  "name": "I access the \"new evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 367,
  "name": "I fill the \"model\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 368,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "the \"O modelo tem que ter pelo menos 3 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 350148476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 69686977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 295603041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O modelo tem que ter pelo menos 3 letras",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 30085431,
  "status": "passed"
});
formatter.after({
  "duration": 541803251,
  "status": "passed"
});
formatter.before({
  "duration": 4291054854,
  "status": "passed"
});
formatter.scenario({
  "line": 373,
  "name": "Evaluation model min length",
  "description": "",
  "id": "manage-patients;evaluation-model-min-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 366,
  "name": "I access the \"edit answer quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 367,
  "name": "I fill the \"model\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 368,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "the \"O modelo tem que ter pelo menos 3 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit answer quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 233284990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 58431743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 338753573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O modelo tem que ter pelo menos 3 letras",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 25928172,
  "status": "passed"
});
formatter.after({
  "duration": 540533829,
  "status": "passed"
});
formatter.before({
  "duration": 3003787847,
  "status": "passed"
});
formatter.scenario({
  "line": 374,
  "name": "Evaluation model min length",
  "description": "",
  "id": "manage-patients;evaluation-model-min-length;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 366,
  "name": "I access the \"edit evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 367,
  "name": "I fill the \"model\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 368,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "the \"O modelo tem que ter pelo menos 3 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 277609400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 58465293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 354256140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O modelo tem que ter pelo menos 3 letras",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 25197005,
  "status": "passed"
});
formatter.after({
  "duration": 535702290,
  "status": "passed"
});
formatter.before({
  "duration": 3643822403,
  "status": "passed"
});
formatter.scenario({
  "line": 375,
  "name": "Evaluation model min length",
  "description": "",
  "id": "manage-patients;evaluation-model-min-length;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 366,
  "name": "I access the \"edit provide quiz\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 367,
  "name": "I fill the \"model\" field with \"12\" - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 368,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "the \"O modelo tem que ter pelo menos 3 letras\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edit provide quiz",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 261527369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 31
    }
  ],
  "location": "US9StepDefs.iFillTheFieldWithUSnine(String,String)"
});
formatter.result({
  "duration": 55746663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 329588274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O modelo tem que ter pelo menos 3 letras",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 28503120,
  "status": "passed"
});
formatter.after({
  "duration": 531207710,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 377,
  "name": "Evaluation file empty",
  "description": "",
  "id": "manage-patients;evaluation-file-empty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 378,
  "name": "I access the \"\u003cpage\u003e\" page - USnine",
  "keyword": "Given "
});
formatter.step({
  "line": 379,
  "name": "the \"path\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 380,
  "name": "I press the \"\u003cbutton\u003e\" button - USnine",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "the \"Introduza um ficheiro de avaliação.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.examples({
  "line": 382,
  "name": "",
  "description": "",
  "id": "manage-patients;evaluation-file-empty;",
  "rows": [
    {
      "cells": [
        "page",
        "button"
      ],
      "line": 383,
      "id": "manage-patients;evaluation-file-empty;;1"
    },
    {
      "cells": [
        "new evaluation",
        "save"
      ],
      "line": 384,
      "id": "manage-patients;evaluation-file-empty;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3739872241,
  "status": "passed"
});
formatter.scenario({
  "line": 384,
  "name": "Evaluation file empty",
  "description": "",
  "id": "manage-patients;evaluation-file-empty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 378,
  "name": "I access the \"new evaluation\" page - USnine",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 379,
  "name": "the \"path\" field is empty - USnine",
  "keyword": "When "
});
formatter.step({
  "line": 380,
  "name": "I press the \"save\" button - USnine",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "the \"Introduza um ficheiro de avaliação.\" error message should be shown - USnine",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new evaluation",
      "offset": 14
    }
  ],
  "location": "US9StepDefs.iAccessThePageUSnine(String)"
});
formatter.result({
  "duration": 198252055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "path",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theFieldIsEmptyUSnine(String)"
});
formatter.result({
  "duration": 58618820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US9StepDefs.iPressTheButtonUSnine(String)"
});
formatter.result({
  "duration": 359312681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Introduza um ficheiro de avaliação.",
      "offset": 5
    }
  ],
  "location": "US9StepDefs.theErrorMessageShouldBeShownUSnine(String)"
});
formatter.result({
  "duration": 27123201,
  "status": "passed"
});
formatter.after({
  "duration": 530902844,
  "status": "passed"
});
});