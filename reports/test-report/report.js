$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US5.feature");
formatter.feature({
  "line": 1,
  "name": "Manage Materials",
  "description": "As an admin\r\nI want to managing all the training materials\r\nSo that them can be used/viewed on the Mobile app",
  "id": "manage-materials",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4677217103,
  "status": "passed"
});
formatter.before({
  "duration": 4348827015,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#NORMAL EDITS"
    }
  ],
  "line": 7,
  "name": "Access Text Material Edit Page",
  "description": "",
  "id": "manage-materials;access-text-material-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I access the \"details\" page of the \"text\" \"Cucumber Text2263972\" material - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I press the \"edit\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be redirected to the \"edit\" page of the material - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the editable field \"type\" should show \"Texto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the editable field \"name\" should show \"Cucumber Text2263972\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the editable field \"description\" should show \"Cucumber Text Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the editable field \"body\" should show \"Cucumber Text Very Detailed Text\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the \"Cancelar\" button should be present - USfive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 14
    },
    {
      "val": "text",
      "offset": 36
    },
    {
      "val": "Cucumber Text2263972",
      "offset": 43
    }
  ],
  "location": "US5StepDefs.iAccessThePageOfTheMaterialUSfive(String,String,String)"
});
formatter.result({
  "duration": 543033988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "duration": 597451748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 31
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageOfTheMaterialUSfive(String)"
});
formatter.result({
  "duration": 48045852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 20
    },
    {
      "val": "Texto",
      "offset": 39
    }
  ],
  "location": "US5StepDefs.theEditableFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 21594031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 20
    },
    {
      "val": "Cucumber Text2263972",
      "offset": 39
    }
  ],
  "location": "US5StepDefs.theEditableFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 3124940878,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text (\u0027Cucumber Text2263972\u0027) to be the value of element [[PhantomJSDriver: phantomjs on XP (ebca5ea0-bda2-11e8-8fb3-6b68c54e3221)] -\u003e id: inputName] (tried for 3 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-HLMLFPV4\u0027, ip: \u0027192.168.56.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities {acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: phantomjs, cssSelectorsEnabled: true, databaseEnabled: false, driverName: ghostdriver, driverVersion: 1.2.0, handlesAlerts: false, javascriptEnabled: true, locationContextEnabled: false, nativeEvents: true, platform: XP, platformName: XP, proxy: Proxy(direct), rotatable: false, takesScreenshot: true, version: 2.1.1, webStorageEnabled: false}\nSession ID: ebca5ea0-bda2-11e8-8fb3-6b68c54e3221\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat US5StepDefs.theEditableFieldShouldShowUSfive(US5StepDefs.java:406)\r\n\tat ✽.And the editable field \"name\" should show \"Cucumber Text2263972\" - USfive(US5.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 20
    },
    {
      "val": "Cucumber Text Description",
      "offset": 46
    }
  ],
  "location": "US5StepDefs.theEditableFieldShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "body",
      "offset": 20
    },
    {
      "val": "Cucumber Text Very Detailed Text",
      "offset": 39
    }
  ],
  "location": "US5StepDefs.theEditableFieldShouldShowUSfive(String,String)"
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
  "duration": 536115803,
  "status": "passed"
});
formatter.after({
  "duration": 532839227,
  "status": "passed"
});
formatter.before({
  "duration": 3062902940,
  "status": "passed"
});
formatter.before({
  "duration": 4810135538,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Edit Text Material Successfully",
  "description": "",
  "id": "manage-materials;edit-text-material-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I access the \"edit\" page of the \"text\" \"Cucumber Text2263972\" material - USfive",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I fill the \"name\" field with \"Cucumber Text Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I fill the \"description\" field with \"Cucumber Text Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I fill the \"body\" field with \"Cucumber Text Very Detailed Text Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I press the \"save\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be redirected to the \"details\" page of the \"Text Edit\" material - USfive",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the field from details \"material\" should show \"Cucumber Text Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the field from details \"type\" should show \"Texto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the field from details \"description\" should show \"Cucumber Text Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the field from details \"text\" should show \"Cucumber Text Very Detailed Text Edit\" - USfive",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 14
    },
    {
      "val": "text",
      "offset": 33
    },
    {
      "val": "Cucumber Text2263972",
      "offset": 40
    }
  ],
  "location": "US5StepDefs.iAccessThePageOfTheMaterialUSfive(String,String,String)"
});
formatter.result({
  "duration": 278354951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Text Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "duration": 102092377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Text Description Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "duration": 91278768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "body",
      "offset": 12
    },
    {
      "val": "Cucumber Text Very Detailed Text Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "duration": 84662531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 13
    }
  ],
  "location": "US5StepDefs.iPressTheButtonUSfive(String)"
});
formatter.result({
  "duration": 748559638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 31
    },
    {
      "val": "Text Edit",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iShouldBeRedirectedToThePageOfTheMaterialUSfive(String,String)"
});
formatter.result({
  "duration": 66225828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "material",
      "offset": 24
    },
    {
      "val": "Cucumber Text Edit",
      "offset": 47
    }
  ],
  "location": "US5StepDefs.theFieldFromDetailsShouldShowUSfive(String,String)"
});
formatter.result({
  "duration": 17743827,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...: Cucumber Text Edit[]\u003e but was:\u003c...: Cucumber Text Edit[8913770]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat US5StepDefs.theFieldFromDetailsShouldShowUSfive(US5StepDefs.java:316)\r\n\tat ✽.And the field from details \"material\" should show \"Cucumber Text Edit\" - USfive(US5.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 24
    },
    {
      "val": "Texto",
      "offset": 43
    }
  ],
  "location": "US5StepDefs.theFieldFromDetailsShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 24
    },
    {
      "val": "Cucumber Text Description Edit",
      "offset": 50
    }
  ],
  "location": "US5StepDefs.theFieldFromDetailsShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 24
    },
    {
      "val": "Cucumber Text Very Detailed Text Edit",
      "offset": 43
    }
  ],
  "location": "US5StepDefs.theFieldFromDetailsShouldShowUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 533810713,
  "status": "passed"
});
formatter.after({
  "duration": 543047116,
  "status": "passed"
});
formatter.before({
  "duration": 3655612862,
  "status": "passed"
});
formatter.before({
  "duration": 3915451975,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Access Image Material Edit Page",
  "description": "",
  "id": "manage-materials;access-image-material-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I access the \"details\" page of the \"Cucumber Image\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I press the \"Editar\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should be redirected to the \"edit\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "the field \"type\" should show \"Imagem\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the field \"name\" should show \"Cucumber Image\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the field \"description\" should show \"Cucumber Image Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the field \"pathImage\" should be empty - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 39,
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
      "val": "name",
      "offset": 11
    },
    {
      "val": "Cucumber Image",
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
      "val": "Cucumber Image Description",
      "offset": 37
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
  "duration": 530428748,
  "status": "passed"
});
formatter.after({
  "duration": 87959163,
  "status": "passed"
});
formatter.before({
  "duration": 3123711934,
  "status": "passed"
});
formatter.before({
  "duration": 3128099664,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Edit Image Material Successfully Without New Image",
  "description": "",
  "id": "manage-materials;edit-image-material-successfully-without-new-image",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I access the \"edit\" page of the \"Cucumber Image\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I fill the \"type\" field with \"Imagem\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I fill the \"name\" field with \"Cucumber Image Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I fill the \"description\" field with \"Cucumber Image Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Image Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "the field \"Material\" should show \"Cucumber Image Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the field \"Tipo\" should show \"Imagem\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the field \"Descrição\" should show \"Cucumber Image Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the field \"Ficheiro\" should show the same image",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Imagem",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Image Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Image Description Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Image Edit",
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
      "val": "Cucumber Image Description Edit",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 530696052,
  "status": "passed"
});
formatter.after({
  "duration": 81645238,
  "status": "passed"
});
formatter.before({
  "duration": 4573310850,
  "status": "passed"
});
formatter.before({
  "duration": 3202475901,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Edit Image Material Successfully With New Image",
  "description": "",
  "id": "manage-materials;edit-image-material-successfully-with-new-image",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "I access the \"edit\" page of the \"Cucumber Image Edit\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I fill the \"type\" field with \"Imagem\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I fill the \"name\" field with \"Cucumber Image Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I fill the \"description\" field with \"Cucumber Image Description Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I fill the \"pathImage\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.jpg\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Image Edit Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "the field \"Material\" should show \"Cucumber Image Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the field \"Tipo\" should show \"Imagem\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the field \"Descrição\" should show \"Cucumber Image Description Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the field \"Ficheiro\" should show a different image",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Imagem",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Image Edit Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Image Description Edit Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pathImage",
      "offset": 12
    },
    {
      "val": "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.jpg",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Image Edit Edit",
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
      "val": "Cucumber Image Description Edit Edit",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 529976555,
  "status": "passed"
});
formatter.after({
  "duration": 83677188,
  "status": "passed"
});
formatter.before({
  "duration": 3474457487,
  "status": "passed"
});
formatter.before({
  "duration": 3871390161,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Access Video Material Edit Page",
  "description": "",
  "id": "manage-materials;access-video-material-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "I access the \"details\" page of the \"Cucumber Video\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I press the \"Editar\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I should be redirected to the \"edit\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "the field \"type\" should show \"Video\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the field \"name\" should show \"Cucumber Video\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the field \"description\" should show \"Cucumber Video Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the field \"pathVideo\" should be empty - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 83,
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
      "val": "name",
      "offset": 11
    },
    {
      "val": "Cucumber Video",
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
      "val": "Cucumber Video Description",
      "offset": 37
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
  "duration": 539914587,
  "status": "passed"
});
formatter.after({
  "duration": 83957621,
  "status": "passed"
});
formatter.before({
  "duration": 4010013883,
  "status": "passed"
});
formatter.before({
  "duration": 4649791609,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Edit Video Material Successfully Without New Video",
  "description": "",
  "id": "manage-materials;edit-video-material-successfully-without-new-video",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 86,
  "name": "I access the \"edit\" page of the \"Cucumber Video\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I fill the \"type\" field with \"Video\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I fill the \"name\" field with \"Cucumber Video Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I fill the \"description\" field with \"Cucumber Video Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Video Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "the field \"Material\" should show \"Cucumber Video Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the field \"Tipo\" should show \"Video\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the field \"Descrição\" should show \"Cucumber Video Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the field \"Ficheiro\" should show the same video",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Video",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Video Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Video Description Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Video Edit",
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
      "val": "Cucumber Video Description Edit",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 530832805,
  "status": "passed"
});
formatter.after({
  "duration": 84690976,
  "status": "passed"
});
formatter.before({
  "duration": 3051555817,
  "status": "passed"
});
formatter.before({
  "duration": 3862884195,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Edit Video Material Successfully With New Video",
  "description": "",
  "id": "manage-materials;edit-video-material-successfully-with-new-video",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 102,
  "name": "I access the \"edit\" page of the \"Cucumber Video Edit\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "I fill the \"type\" field with \"Video\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I fill the \"name\" field with \"Cucumber Video Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I fill the \"description\" field with \"Cucumber Video Description Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I fill the \"pathVideo\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.mp4\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Video Edit Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "the field \"Material\" should show \"Cucumber Video Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the field \"Tipo\" should show \"Video\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the field \"Descrição\" should show \"Cucumber Video Description Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "the field \"Ficheiro\" should show a different video",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Video",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Video Edit Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Video Description Edit Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pathVideo",
      "offset": 12
    },
    {
      "val": "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.mp4",
      "offset": 35
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Video Edit Edit",
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
      "val": "Cucumber Video Description Edit Edit",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 537878990,
  "status": "passed"
});
formatter.after({
  "duration": 88909497,
  "status": "passed"
});
formatter.before({
  "duration": 3087190800,
  "status": "passed"
});
formatter.before({
  "duration": 3769355402,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Access Audio Guide Material Edit Page",
  "description": "",
  "id": "manage-materials;access-audio-guide-material-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 119,
  "name": "I access the \"details\" page of the \"Cucumber Audio Guide\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "I press the \"Editar\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "I should be redirected to the \"edit\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "the field \"type\" should show \"Áudio-guia\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the field \"name\" should show \"Cucumber Audio Guide\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the field \"description\" should show \"Cucumber Audio Guide Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the field \"pathAudioGuide\" should be empty - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 127,
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
      "val": "name",
      "offset": 11
    },
    {
      "val": "Cucumber Audio Guide",
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
      "val": "Cucumber Audio Guide Description",
      "offset": 37
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
  "duration": 531690147,
  "status": "passed"
});
formatter.after({
  "duration": 527819158,
  "status": "passed"
});
formatter.before({
  "duration": 6790647850,
  "status": "passed"
});
formatter.before({
  "duration": 3885232367,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "Edit Audio Guide Material Successfully Without New Audio Guide",
  "description": "",
  "id": "manage-materials;edit-audio-guide-material-successfully-without-new-audio-guide",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 130,
  "name": "I access the \"edit\" page of the \"Cucumber Audio Guide\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "I fill the \"type\" field with \"Áudio-guia\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "I fill the \"name\" field with \"Cucumber Audio Guide Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I fill the \"description\" field with \"Cucumber Audio Guide Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Audio Guide Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "the field \"Material\" should show \"Cucumber Audio Guide Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the field \"Tipo\" should show \"Áudio-guia\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the field \"Descrição\" should show \"Cucumber Audio Guide Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the field \"Ficheiro\" should show the same audio guide",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Áudio-guia",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Audio Guide Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Audio Guide Description Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Audio Guide Edit",
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
      "val": "Cucumber Audio Guide Description Edit",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 148363737,
  "status": "passed"
});
formatter.after({
  "duration": 528024468,
  "status": "passed"
});
formatter.before({
  "duration": 3203626076,
  "status": "passed"
});
formatter.before({
  "duration": 3037557897,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "Edit Audio Guide Material Successfully With New Audio Guide",
  "description": "",
  "id": "manage-materials;edit-audio-guide-material-successfully-with-new-audio-guide",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 146,
  "name": "I access the \"edit\" page of the \"Cucumber Audio Guide Edit\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 147,
  "name": "I fill the \"type\" field with \"Áudio-guia\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 148,
  "name": "I fill the \"name\" field with \"Cucumber Audio Guide Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I fill the \"description\" field with \"Cucumber Audio Guide Description Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I fill the \"pathAudioGuide\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.mp3\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Audio Guide Edit Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "the field \"Material\" should show \"Cucumber Audio Guide Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the field \"Tipo\" should show \"Áudio-guia\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the field \"Descrição\" should show \"Cucumber Audio Guide Description Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "the field \"Ficheiro\" should show a different audio guide",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Áudio-guia",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Audio Guide Edit Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Audio Guide Description Edit Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pathAudioGuide",
      "offset": 12
    },
    {
      "val": "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.mp3",
      "offset": 40
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Audio Guide Edit Edit",
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
      "val": "Cucumber Audio Guide Description Edit Edit",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 532922373,
  "status": "passed"
});
formatter.after({
  "duration": 535849592,
  "status": "passed"
});
formatter.before({
  "duration": 3345485165,
  "status": "passed"
});
formatter.before({
  "duration": 4267597503,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "Access List Item Material Edit Page",
  "description": "",
  "id": "manage-materials;access-list-item-material-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 163,
  "name": "I access the \"details\" page of the \"Cucumber List Item\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 164,
  "name": "I press the \"Editar\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "I should be redirected to the \"edit\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 166,
  "name": "the field \"type\" should show \"Item de Lista\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "the field \"name\" should show \"Cucumber List Item\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "the field \"listItemMarker\" should show \"*\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "the field \"description\" should show \"Cucumber List Item Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the field \"listItemDetailedDescription\" should show \"Cucumber List Item Very Detailed Text\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 172,
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
      "val": "name",
      "offset": 11
    },
    {
      "val": "Cucumber List Item",
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
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 535817501,
  "status": "passed"
});
formatter.after({
  "duration": 71632449,
  "status": "passed"
});
formatter.before({
  "duration": 2990695039,
  "status": "passed"
});
formatter.before({
  "duration": 3030890969,
  "status": "passed"
});
formatter.scenario({
  "line": 174,
  "name": "Edit List Item Material Successfully",
  "description": "",
  "id": "manage-materials;edit-list-item-material-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 175,
  "name": "I access the \"edit\" page of the \"Cucumber List Item\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 176,
  "name": "I fill the \"type\" field with \"Item de Lista\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "I fill the \"name\" field with \"Cucumber List Item Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I fill the \"listItemMarker\" field with \"1\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I fill the \"description\" field with \"Cucumber List Item Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I fill the \"listItemDetailedDescription\" field with \"Cucumber List Item Very Detailed Text Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber List Item Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 183,
  "name": "the field \"Material\" should show \"Cucumber List Item Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "the field \"Tipo\" should show \"Item de Lista\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the field \"Marcador do Item de Lista\" should show \"1\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the field \"Descrição\" should show \"Cucumber List Item Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "the field \"Descrição detalhada\" should show \"Cucumber List Item Very Detailed Text Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Item de Lista",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber List Item Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "listItemMarker",
      "offset": 12
    },
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber List Item Description Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "listItemDetailedDescription",
      "offset": 12
    },
    {
      "val": "Cucumber List Item Very Detailed Text Edit",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber List Item Edit",
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
      "val": "1",
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
      "val": "Cucumber List Item Description Edit",
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
      "val": "Cucumber List Item Very Detailed Text Edit",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 532287844,
  "status": "passed"
});
formatter.after({
  "duration": 530337580,
  "status": "passed"
});
formatter.before({
  "duration": 2838560598,
  "status": "passed"
});
formatter.before({
  "duration": 2911031062,
  "status": "passed"
});
formatter.scenario({
  "line": 193,
  "name": "Access Emergency Contact Material Edit Page",
  "description": "",
  "id": "manage-materials;access-emergency-contact-material-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 194,
  "name": "I access the \"details\" page of the \"Cucumber Emergency Contact\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 195,
  "name": "I press the \"Editar\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "I should be redirected to the \"edit\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "the field \"type\" should show \"Contacto de Emergência\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "the field \"name\" should show \"Cucumber Emergency Contact\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "the field \"description\" should show \"Cucumber Emergency Contact Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "the field \"number\" should show \"999999999\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 202,
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
      "val": "name",
      "offset": 11
    },
    {
      "val": "Cucumber Emergency Contact",
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
      "val": "Cucumber Emergency Contact Description",
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
  "duration": 536767470,
  "status": "passed"
});
formatter.after({
  "duration": 71492415,
  "status": "passed"
});
formatter.before({
  "duration": 4151185930,
  "status": "passed"
});
formatter.before({
  "duration": 2829625777,
  "status": "passed"
});
formatter.scenario({
  "line": 204,
  "name": "Edit Emergency Contact Material Successfully",
  "description": "",
  "id": "manage-materials;edit-emergency-contact-material-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 205,
  "name": "I access the \"edit\" page of the \"Cucumber Emergency Contact\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "I fill the \"type\" field with \"Contacto de Emergência\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 207,
  "name": "I fill the \"name\" field with \"Cucumber Emergency Contact Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "I fill the \"description\" field with \"Cucumber Emergency Contact Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "I fill the \"number\" field with \"888888888\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Emergency Contact Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 212,
  "name": "the field \"Material\" should show \"Cucumber Emergency Contact Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "the field \"Tipo\" should show \"Contacto de Emergência\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "the field \"Descrição\" should show \"Cucumber Emergency Contact Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 215,
  "name": "the field \"Número\" should show \"888888888\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Contacto de Emergência",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Emergency Contact Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Emergency Contact Description Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "number",
      "offset": 12
    },
    {
      "val": "888888888",
      "offset": 32
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Emergency Contact Edit",
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
      "val": "Cucumber Emergency Contact Description Edit",
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
      "val": "888888888",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 534033527,
  "status": "passed"
});
formatter.after({
  "duration": 529192876,
  "status": "passed"
});
formatter.before({
  "duration": 2931026007,
  "status": "passed"
});
formatter.before({
  "duration": 3041379655,
  "status": "passed"
});
formatter.scenario({
  "line": 221,
  "name": "Access Annex Link Material Edit Page",
  "description": "",
  "id": "manage-materials;access-annex-link-material-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 222,
  "name": "I access the \"details\" page of the \"Cucumber Annex Link\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "I press the \"Editar\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 224,
  "name": "I should be redirected to the \"edit\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 225,
  "name": "the field \"type\" should show \"Anexo\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "the field \"name\" should show \"Cucumber Annex Link\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "the field \"description\" should show \"Cucumber Annex Link Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "the field \"selectType\" should show \"Link (Website, Video externo)\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "the field \"url\" should show \"https://www.youtube.com/watch?v\u003dRoXmMD1rVP0\u0026t\u003d3s\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 231,
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
      "val": "name",
      "offset": 11
    },
    {
      "val": "Cucumber Annex Link",
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
      "val": "selectType",
      "offset": 11
    },
    {
      "val": "Link (Website, Video externo)",
      "offset": 36
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
  "duration": 534267282,
  "status": "passed"
});
formatter.after({
  "duration": 533095956,
  "status": "passed"
});
formatter.before({
  "duration": 2724360029,
  "status": "passed"
});
formatter.before({
  "duration": 4415411679,
  "status": "passed"
});
formatter.scenario({
  "line": 233,
  "name": "Edit Annex Link Material Successfully",
  "description": "",
  "id": "manage-materials;edit-annex-link-material-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 234,
  "name": "I access the \"edit\" page of the \"Cucumber Annex Link\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 235,
  "name": "I fill the \"type\" field with \"Anexo\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "I fill the \"name\" field with \"Cucumber Annex Link Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "I fill the \"description\" field with \"Cucumber Annex Link Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "I fill the \"selectType\" field with \"Link (Website, Video externo)\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I fill the \"url\" field with \"https://www.youtube.com/watch?v\u003dn_GL84Rp0aA\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Annex Link Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 242,
  "name": "the field \"Material\" should show \"Cucumber Annex Link Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "the field \"Tipo\" should show \"Anexo\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "the field \"Descrição\" should show \"Cucumber Annex Link Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "the field \"URL\" should show \"https://www.youtube.com/watch?v\u003dn_GL84Rp0aA\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Anexo",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Annex Link Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Annex Link Description Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 12
    },
    {
      "val": "https://www.youtube.com/watch?v\u003dn_GL84Rp0aA",
      "offset": 29
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Annex Link Edit",
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
      "val": "Cucumber Annex Link Description Edit",
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
      "val": "https://www.youtube.com/watch?v\u003dn_GL84Rp0aA",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 532126660,
  "status": "passed"
});
formatter.after({
  "duration": 82054035,
  "status": "passed"
});
formatter.before({
  "duration": 2855685213,
  "status": "passed"
});
formatter.before({
  "duration": 2962965407,
  "status": "passed"
});
formatter.scenario({
  "line": 251,
  "name": "Access Annex File Material Edit Page",
  "description": "",
  "id": "manage-materials;access-annex-file-material-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 252,
  "name": "I access the \"details\" page of the \"Cucumber Annex File\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 253,
  "name": "I press the \"Editar\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 254,
  "name": "I should be redirected to the \"edit\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 255,
  "name": "the field \"type\" should show \"Anexo\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "the field \"name\" should show \"Cucumber Annex File\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "the field \"description\" should show \"Cucumber Annex File Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "the field \"selectType\" should show \"Ficheiro (PDF, docx, ...)\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "the field \"pathAnnex\" should be empty - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 261,
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
      "val": "name",
      "offset": 11
    },
    {
      "val": "Cucumber Annex File",
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
      "val": "selectType",
      "offset": 11
    },
    {
      "val": "Ficheiro (PDF, docx, ...)",
      "offset": 36
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
  "duration": 529945194,
  "status": "passed"
});
formatter.after({
  "duration": 537724369,
  "status": "passed"
});
formatter.before({
  "duration": 3012645354,
  "status": "passed"
});
formatter.before({
  "duration": 2946241567,
  "status": "passed"
});
formatter.scenario({
  "line": 263,
  "name": "Edit Annex File Material Successfully Without New Annex File",
  "description": "",
  "id": "manage-materials;edit-annex-file-material-successfully-without-new-annex-file",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 264,
  "name": "I access the \"edit\" page of the \"Cucumber Annex File\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 265,
  "name": "I fill the \"type\" field with \"Anexo\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 266,
  "name": "I fill the \"name\" field with \"Cucumber Annex File Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "I fill the \"description\" field with \"Cucumber Annex File Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Annex File Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 270,
  "name": "the field \"Material\" should show \"Cucumber Annex File Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "the field \"Tipo\" should show \"Anexo\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "the field \"Descrição\" should show \"Cucumber Annex File Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "the field \"Ficheiro\" should show the same annex file",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Anexo",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Annex File Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Annex File Description Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Annex File Edit",
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
      "val": "Cucumber Annex File Description Edit",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 534192889,
  "status": "passed"
});
formatter.after({
  "duration": 532695912,
  "status": "passed"
});
formatter.before({
  "duration": 4064744896,
  "status": "passed"
});
formatter.before({
  "duration": 2861430249,
  "status": "passed"
});
formatter.scenario({
  "line": 279,
  "name": "Edit Annex File Material Successfully With New Annex File",
  "description": "",
  "id": "manage-materials;edit-annex-file-material-successfully-with-new-annex-file",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 280,
  "name": "I access the \"edit\" page of the \"Cucumber Annex File Edit\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 281,
  "name": "I fill the \"type\" field with \"Anexo\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 282,
  "name": "I fill the \"name\" field with \"Cucumber Annex File Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I fill the \"description\" field with \"Cucumber Annex File Description Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I fill the \"pathAudioGuide\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.docx\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Annex File Edit Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 287,
  "name": "the field \"Material\" should show \"Cucumber Annex File Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "the field \"Tipo\" should show \"Anexo\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "the field \"Descrição\" should show \"Cucumber Annex File Description Edit Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "the field \"Ficheiro\" should show a different annex file",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Anexo",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Annex File Edit Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Annex File Description Edit Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pathAudioGuide",
      "offset": 12
    },
    {
      "val": "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.docx",
      "offset": 40
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Annex File Edit Edit",
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
      "val": "Cucumber Annex File Description Edit Edit",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 530271575,
  "status": "passed"
});
formatter.after({
  "duration": 537183196,
  "status": "passed"
});
formatter.before({
  "duration": 2864689320,
  "status": "passed"
});
formatter.before({
  "duration": 2975570283,
  "status": "passed"
});
formatter.scenario({
  "line": 296,
  "name": "Access Composite Material Edit Page",
  "description": "",
  "id": "manage-materials;access-composite-material-edit-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 297,
  "name": "I access the \"details\" page of the \"Cucumber Composite\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 298,
  "name": "I press the \"Editar\" button - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 299,
  "name": "I should be redirected to the \"edit\" page of the material",
  "keyword": "Then "
});
formatter.step({
  "line": 300,
  "name": "the field \"type\" should show \"Composto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "the field \"name\" should show \"Cucumber Composite\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "the field \"description\" should show \"Cucumber Composite Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 304,
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
      "val": "name",
      "offset": 11
    },
    {
      "val": "Cucumber Composite",
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
      "val": "Cucumber Composite Description",
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
  "duration": 533524445,
  "status": "passed"
});
formatter.after({
  "duration": 537585794,
  "status": "passed"
});
formatter.before({
  "duration": 2920357539,
  "status": "passed"
});
formatter.before({
  "duration": 4191918658,
  "status": "passed"
});
formatter.scenario({
  "line": 306,
  "name": "Edit Composite Material Successfully",
  "description": "",
  "id": "manage-materials;edit-composite-material-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 307,
  "name": "I access the \"edit\" page of the \"Cucumber Composite\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 308,
  "name": "I fill the \"type\" field with \"Composto\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 309,
  "name": "I fill the \"name\" field with \"Cucumber Composite Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I fill the \"description\" field with \"Cucumber Composite Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Composite Edit\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 313,
  "name": "the field \"Material\" should show \"Cucumber Composite Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "the field \"Tipo\" should show \"Composto\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "the field \"Descrição\" should show \"Cucumber Composite Description Edit\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Composto",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Composite Edit",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Composite Description Edit",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Composite Edit",
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
      "val": "Cucumber Composite Description Edit",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 539975851,
  "status": "passed"
});
formatter.after({
  "duration": 539539704,
  "status": "passed"
});
formatter.before({
  "duration": 3350468402,
  "status": "passed"
});
formatter.before({
  "duration": 3022928364,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 321,
      "value": "#CHANGE TYPE EDITS"
    }
  ],
  "line": 322,
  "name": "Edit Text Material to Image Material - part 1",
  "description": "",
  "id": "manage-materials;edit-text-material-to-image-material---part-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 323,
  "name": "I access the \"edit\" page of the \"Cucumber Text Edit\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 324,
  "name": "I fill the \"type\" field with \"Imagem\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 325,
  "name": "the field \"type\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 326,
  "name": "the field \"name\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "the field \"description\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "the field \"pathImage\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "the field \"body\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 330,
  "name": "the field \"listItemMarker\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 331,
  "name": "the field \"listItemDetailedDescription\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "the field \"pathVideo\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "the field \"pathAudioGuide\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "the field \"selectType\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "the field \"url\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "the field \"pathAnnex\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "the field \"number\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 339,
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
      "val": "type",
      "offset": 12
    },
    {
      "val": "Imagem",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
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
  "duration": 532268881,
  "status": "passed"
});
formatter.after({
  "duration": 81582515,
  "status": "passed"
});
formatter.before({
  "duration": 3315314786,
  "status": "passed"
});
formatter.before({
  "duration": 3047510515,
  "status": "passed"
});
formatter.scenario({
  "line": 341,
  "name": "Edit Text Material to Image Material - part 2",
  "description": "",
  "id": "manage-materials;edit-text-material-to-image-material---part-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 342,
  "name": "I access the \"edit\" page of the \"Cucumber Text Edit\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 343,
  "name": "I fill the \"type\" field with \"Imagem\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 344,
  "name": "I fill the \"name\" field with \"Cucumber Text Image\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I fill the \"description\" field with \"Cucumber Text Image Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "I fill the \"pathImage\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Text Image\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 349,
  "name": "the field \"Material\" should show \"Cucumber Text Image\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "the field \"Tipo\" should show \"Imagem\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "the field \"Descrição\" should show \"Cucumber Text Image Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "the field \"Ficheiro\" should show an image",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Imagem",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Text Image",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Text Image Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Text Image",
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
      "val": "Cucumber Text Image Description",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 534635236,
  "status": "passed"
});
formatter.after({
  "duration": 533769140,
  "status": "passed"
});
formatter.before({
  "duration": 4242863285,
  "status": "passed"
});
formatter.before({
  "duration": 2762322710,
  "status": "passed"
});
formatter.scenario({
  "line": 358,
  "name": "Edit Image Material to Video Material - part 1",
  "description": "",
  "id": "manage-materials;edit-image-material-to-video-material---part-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 359,
  "name": "I access the \"edit\" page of the \"Cucumber Text Image\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 360,
  "name": "I fill the \"type\" field with \"Video\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 361,
  "name": "the field \"type\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 362,
  "name": "the field \"name\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "the field \"description\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "the field \"pathVideo\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "the field \"body\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "the field \"listItemMarker\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "the field \"listItemDetailedDescription\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "the field \"pathImage\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "the field \"pathAudioGuide\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "the field \"selectType\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "the field \"url\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "the field \"pathAnnex\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "the field \"number\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 375,
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
      "val": "type",
      "offset": 12
    },
    {
      "val": "Video",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
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
  "duration": 533381494,
  "status": "passed"
});
formatter.after({
  "duration": 80546847,
  "status": "passed"
});
formatter.before({
  "duration": 2913175696,
  "status": "passed"
});
formatter.before({
  "duration": 2875995235,
  "status": "passed"
});
formatter.scenario({
  "line": 377,
  "name": "Edit Image Material to Video Material - part 2",
  "description": "",
  "id": "manage-materials;edit-image-material-to-video-material---part-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 378,
  "name": "I access the \"edit\" page of the \"Cucumber Text Image\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 379,
  "name": "I fill the \"type\" field with \"Video\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 380,
  "name": "I fill the \"name\" field with \"Cucumber Image Video\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "I fill the \"description\" field with \"Cucumber Image Video Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "I fill the \"pathVideo\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp4\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Image Video\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 385,
  "name": "the field \"Material\" should show \"Cucumber Image Video\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "the field \"Tipo\" should show \"Video\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "the field \"Descrição\" should show \"Cucumber Image Video Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "the field \"Ficheiro\" should show a video",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Video",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Image Video",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Image Video Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Image Video",
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
      "val": "Cucumber Image Video Description",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 531269317,
  "status": "passed"
});
formatter.after({
  "duration": 533721003,
  "status": "passed"
});
formatter.before({
  "duration": 3086075999,
  "status": "passed"
});
formatter.before({
  "duration": 4557187624,
  "status": "passed"
});
formatter.scenario({
  "line": 394,
  "name": "Edit Video Material to Audio Guide Material - part 1",
  "description": "",
  "id": "manage-materials;edit-video-material-to-audio-guide-material---part-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 395,
  "name": "I access the \"edit\" page of the \"Cucumber Image Video\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 396,
  "name": "I fill the \"type\" field with \"Áudio-guia\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 397,
  "name": "the field \"type\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 398,
  "name": "the field \"name\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "the field \"description\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "the field \"pathAudioGuide\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "the field \"body\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "the field \"listItemMarker\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "the field \"listItemDetailedDescription\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 404,
  "name": "the field \"pathImage\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "the field \"pathVideo\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "the field \"selectType\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "the field \"url\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "the field \"pathAnnex\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "the field \"number\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 411,
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
      "val": "type",
      "offset": 12
    },
    {
      "val": "Áudio-guia",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
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
  "duration": 529650174,
  "status": "passed"
});
formatter.after({
  "duration": 74137379,
  "status": "passed"
});
formatter.before({
  "duration": 3134286318,
  "status": "passed"
});
formatter.before({
  "duration": 3317348925,
  "status": "passed"
});
formatter.scenario({
  "line": 413,
  "name": "Edit Video Material to Audio Guide Material - part 2",
  "description": "",
  "id": "manage-materials;edit-video-material-to-audio-guide-material---part-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 414,
  "name": "I access the \"edit\" page of the \"Cucumber Image Video\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 415,
  "name": "I fill the \"type\" field with \"Áudio-guia\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 416,
  "name": "I fill the \"name\" field with \"Cucumber Video Audio Guide\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "I fill the \"description\" field with \"Cucumber Video Audio Guide Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I fill the \"pathAudioGuide\" field with \"/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp3\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Video Audio Guide\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 421,
  "name": "the field \"Material\" should show \"Cucumber Video Audio Guide\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "the field \"Tipo\" should show \"Áudio-guia\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "the field \"Descrição\" should show \"Cucumber Video Audio Guide Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 424,
  "name": "the field \"Ficheiro\" should show a audio guide",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 426,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 427,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Áudio-guia",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Video Audio Guide",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Video Audio Guide Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Video Audio Guide",
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
      "val": "Cucumber Video Audio Guide Description",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 539674268,
  "status": "passed"
});
formatter.after({
  "duration": 536097569,
  "status": "passed"
});
formatter.before({
  "duration": 2877832815,
  "status": "passed"
});
formatter.before({
  "duration": 3001815701,
  "status": "passed"
});
formatter.scenario({
  "line": 430,
  "name": "Edit Audio Guide Material to List Item Material - part 1",
  "description": "",
  "id": "manage-materials;edit-audio-guide-material-to-list-item-material---part-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 431,
  "name": "I access the \"edit\" page of the \"Cucumber Video Audio Guide\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 432,
  "name": "I fill the \"type\" field with \"Item de Lista\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 433,
  "name": "the field \"type\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 434,
  "name": "the field \"name\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "the field \"description\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 436,
  "name": "the field \"listItemMarker\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 437,
  "name": "the field \"listItemDetailedDescription\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 438,
  "name": "the field \"body\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "the field \"pathAudioGuide\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 440,
  "name": "the field \"pathImage\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 441,
  "name": "the field \"pathVideo\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 442,
  "name": "the field \"selectType\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "the field \"url\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "the field \"pathAnnex\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "the field \"number\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 446,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 447,
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
      "val": "type",
      "offset": 12
    },
    {
      "val": "Item de Lista",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
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
  "duration": 530355449,
  "status": "passed"
});
formatter.after({
  "duration": 81877169,
  "status": "passed"
});
formatter.before({
  "duration": 4582321886,
  "status": "passed"
});
formatter.before({
  "duration": 3597964111,
  "status": "passed"
});
formatter.scenario({
  "line": 449,
  "name": "Edit Audio Guide Material to List Item Material - part 2",
  "description": "",
  "id": "manage-materials;edit-audio-guide-material-to-list-item-material---part-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 450,
  "name": "I access the \"edit\" page of the \"Cucumber Video Audio Guide\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 451,
  "name": "I fill the \"type\" field with \"Item de Lista\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 452,
  "name": "I fill the \"name\" field with \"Cucumber Audio Guide List Item\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 453,
  "name": "I fill the \"listItemMarker\" field with \"*\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "I fill the \"description\" field with \"Cucumber Audio Guide List Item Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "I fill the \"listItemDetailedDescription\" field with \"Cucumber Audio Guide List Item Very Detailed Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 456,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber Audio Guide List Item\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 458,
  "name": "the field \"Material\" should show \"Cucumber Audio Guide List Item\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "the field \"Tipo\" should show \"Item de Lista\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "the field \"Marcador do Item de Lista\" should show \"*\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "the field \"Descrição\" should show \"Cucumber Audio Guide List Item Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "the field \"Descrição detalhada\" should show \"Cucumber Audio Guide List Item Very Detailed Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 463,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 464,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 466,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Item de Lista",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber Audio Guide List Item",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber Audio Guide List Item Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "listItemDetailedDescription",
      "offset": 12
    },
    {
      "val": "Cucumber Audio Guide List Item Very Detailed Description",
      "offset": 53
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber Audio Guide List Item",
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
      "val": "*",
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
      "val": "Cucumber Audio Guide List Item Description",
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
      "val": "Cucumber Audio Guide List Item Very Detailed Description",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 532562077,
  "status": "passed"
});
formatter.after({
  "duration": 535676373,
  "status": "passed"
});
formatter.before({
  "duration": 3101996467,
  "status": "passed"
});
formatter.before({
  "duration": 3128521954,
  "status": "passed"
});
formatter.scenario({
  "line": 468,
  "name": "Edit List Item Material to Emergency Contact Material - part 1",
  "description": "",
  "id": "manage-materials;edit-list-item-material-to-emergency-contact-material---part-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 469,
  "name": "I access the \"edit\" page of the \"Cucumber Audio Guide List Item\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 470,
  "name": "I fill the \"type\" field with \"Contacto de Emergência\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 471,
  "name": "the field \"type\" should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 472,
  "name": "the field \"name\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 473,
  "name": "the field \"description\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "the field \"number\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "the field \"body\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 476,
  "name": "the field \"listItemMarker\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "the field \"listItemDetailedDescription\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "the field \"pathImage\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "the field \"pathVideo\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "the field \"selectType\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "the field \"url\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "the field \"pathAnnex\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "the field \"pathAudioGuide\" should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "the \"Guardar\" button should be present - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 485,
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
      "val": "type",
      "offset": 12
    },
    {
      "val": "Contacto de Emergência",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
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
  "duration": 533438748,
  "status": "passed"
});
formatter.after({
  "duration": 531259106,
  "status": "passed"
});
formatter.before({
  "duration": 3116290502,
  "status": "passed"
});
formatter.before({
  "duration": 4468657749,
  "status": "passed"
});
formatter.scenario({
  "line": 487,
  "name": "Edit List Item Material to Emergency Contact Material - part 2",
  "description": "",
  "id": "manage-materials;edit-list-item-material-to-emergency-contact-material---part-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 488,
  "name": "I access the \"edit\" page of the \"Cucumber Audio Guide List Item\" material",
  "keyword": "Given "
});
formatter.step({
  "line": 489,
  "name": "I fill the \"type\" field with \"Contacto de Emergência\" - USfive",
  "keyword": "When "
});
formatter.step({
  "line": 490,
  "name": "I fill the \"name\" field with \"Cucumber List Item Emergency Contact\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 491,
  "name": "I fill the \"description\" field with \"Cucumber List Item Emergency Contact Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 492,
  "name": "I fill the \"number\" field with \"999999999\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 493,
  "name": "I press the \"Guardar\" button - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 494,
  "name": "I should be redirected to the \"details\" page of the \"Cucumber List Item Emergency Contact\" material",
  "keyword": "Then "
});
formatter.step({
  "line": 495,
  "name": "the field \"Material\" should show \"Cucumber List Item Emergency Contact\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 496,
  "name": "the field \"Tipo\" should show \"Contacto de Emergência\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "the field \"Descrição\" should show \"Cucumber List Item Emergency Contact Description\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 498,
  "name": "the field \"Número\" should show \"999999999\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 499,
  "name": "the field \"Disponibilidade para o site público\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 500,
  "name": "the field \"Disponibilidade para a aplicação móvel\" should show \"Não está disponível\" - USfive",
  "keyword": "And "
});
formatter.step({
  "line": 501,
  "name": "the field \"Data da última atualização\" should different from the previous",
  "keyword": "And "
});
formatter.step({
  "line": 502,
  "name": "the last entry on the \"Registos\" table should contain the text \"Foi atualizado.\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "type",
      "offset": 12
    },
    {
      "val": "Contacto de Emergência",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Cucumber List Item Emergency Contact",
      "offset": 30
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 12
    },
    {
      "val": "Cucumber List Item Emergency Contact Description",
      "offset": 37
    }
  ],
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "US5StepDefs.iFillTheFieldWithUSfive(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guardar",
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
      "val": "Material",
      "offset": 11
    },
    {
      "val": "Cucumber List Item Emergency Contact",
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
      "val": "Cucumber List Item Emergency Contact Description",
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
      "val": "999999999",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 537591993,
  "status": "passed"
});
formatter.after({
  "duration": 526570523,
  "status": "passed"
});
formatter.before({
  "duration": 3188167281,
  "status": "passed"
});
