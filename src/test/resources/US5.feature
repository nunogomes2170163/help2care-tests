Feature: Manage Materials
  As an admin
  I want to managing all the training materials
  So that them can be used/viewed on the Mobile app

  #CREATES
  Scenario Outline: Access New Text Material Page
    Given I access the "materials" page - USfive
    When I press the "<page>" material button -USfive
    Then I should be redirected to the "<page>" page - USfive
    And the "<page>" text should be shown - USfive
    Examples:
      | page                  |
      | new text              |
      | new image             |
      | new video             |
      | new audioGuide        |
      | new listItem          |
      | new emergencyContact  |
      | new annex             |
      | new composite         |

  Scenario: Create New Text Successfully
    Given I access the "new text" page - USfive
    When I fill the "name" field with "Cucumber Text" - USfive
    And I fill the "description" field with "Cucumber Text Description" - USfive
    And I fill the "body" field with "Cucumber Text Very Detailed Text" - USfive
    And I press the "create" button - USfive
    Then I should be redirected to the "details" page of the "Text" material - USfive
    And the field "material" should show "Cucumber Text" - USfive
    And the field "type" should show "Texto" - USfive
    And the field "description" should show "Cucumber Text Description" - USfive
    And the field "text" should show "Cucumber Text Very Detailed Text" - USfive
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Create New Image Successfully
    Given I access the "new image" page - USfive
    When I fill the "name" field with "Cucumber Image" - USfive
    And I fill the "description" field with "Cucumber Image Description" - USfive
    And I fill the "pathImage" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg" - USfive
    And I press the "create" button - USfive
    Then I should be redirected to the "details" page of the "Image" material - USfive
    And the field "material" should show "Cucumber Image" - USfive
    And the field "type" should show "Imagem" - USfive
    And the field "description" should show "Cucumber Image Description" - USfive
    And the field "file" should show a "image"
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Create New Video Successfully
    Given I access the "new video" page - USfive
    When I fill the "name" field with "Cucumber Video" - USfive
    And I fill the "description" field with "Cucumber Video Description" - USfive
    And I fill the "pathVideo" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp4" - USfive
    And I press the "create" button - USfive
    Then I should be redirected to the "details" page of the "Video" material - USfive
    And the field "material" should show "Cucumber Video" - USfive
    And the field "type" should show "Video" - USfive
    And the field "drescription" should show "Cucumber Video Description" - USfive
    And the field "file" should show a "video"
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Create New Audio Guide Successfully
    Given I access the "new audioGuide" page - USfive
    When I fill the "name" field with "Cucumber Audio Guide" - USfive
    And I fill the "description" field with "Cucumber Audio Guide Description" - USfive
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp3" - USfive
    And I press the "create" button - USfive
    Then I should be redirected to the "details" page of the "Audio Guide" material - USfive
    And the field "material" should show "Cucumber Audio Guide" - USfive
    And the field "type" should show "Áudio-guia" - USfive
    And the field "description" should show "Cucumber Audio Guide Description" - USfive
    And the field "file" should show a "sound"
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Create New List Item Successfully
    Given I access the "new listItem" page - USfive
    When I fill the "name" field with "Cucumber List Item" - USfive
    And I fill the "listItemMarker" field with "*" - USfive
    And I fill the "description" field with "Cucumber List Item Description" - USfive
    And I fill the "listItemDetailedDescription" field with "Cucumber List Item Very Detailed Text" - USfive
    And I press the "create" button - USfive
    Then I should be redirected to the "details" page of the "List Item" material - USfive
    And the field "material" should show "Cucumber List Item" - USfive
    And the field "type" should show "Item de Lista" - USfive
    And the field "listItemMarker" should show "*" - USfive
    And the field "description" should show "Cucumber List Item Description" - USfive
    And the field "listItemDetailedDescription" should show "Cucumber List Item Very Detailed Text" - USfive
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Create New Emergency Contact Successfully
    Given I access the "new emergencyContact" page - USfive
    When I fill the "name" field with "Cucumber Emergency Contact" - USfive
    And I fill the "description" field with "Cucumber Emergency Contact Description" - USfive
    And I fill the "number" field with "999999999" - USfive
    And I press the "create" button - USfive
    Then I should be redirected to the "details" page of the "Emergency Contact" material - USfive
    And the field "material" should show "Cucumber Emergency Contact" - USfive
    And the field "type" should show "Contacto de Emergência" - USfive
    And the field "description" should show "Cucumber Emergency Contact Description" - USfive
    And the field "number" should show "999999999" - USfive
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Create New Annex Link Successfully
    Given I access the "new annex" page - USfive
    When I fill the "name" field with "Cucumber Annex Link" - USfive
    And I fill the "description" field with "Cucumber Annex Link Description" - USfive
    And I fill the "selectType" field with "Link (Website, Video externo)" - USfive
    And I fill the "url" field with "https://www.youtube.com/watch?v=FTQbiNvZqaY" - USfive
    And I press the "create" button - USfive
    Then I should be redirected to the "details" page of the "Annex Link" material - USfive
    And the field "material" should show "Cucumber Annex Link" - USfive
    And the field "type" should show "Anexo" - USfive
    And the field "description" should show "Cucumber Annex Link Description" - USfive
    And the field "url" should show "https://www.youtube.com/watch?v=FTQbiNvZqaY" - USfive
    And the field "URL" must be clickable
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Create New Annex File Successfully
    Given I access the "new annex" page - USfive
    When I fill the "name" field with "Cucumber Annex File" - USfive
    And I fill the "description" field with "Cucumber Annex File Description" - USfive
    And I fill the "selectType" field with "Ficheiro (PDF, docx, ...)" - USfive
    And I fill the "pathAnnex" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf" - USfive
    And I press the "create" button - USfive
    Then I should be redirected to the "details" page of the "Annex File" material - USfive
    And the field "material" should show "Cucumber Annex File" - USfive
    And the field "type" should show "Anexo" - USfive
    And the field "description" should show "Cucumber Annex File Description" - USfive
    And the field "file" should show "Cucumber Annex File.pdf" - USfive
    And the field "Ficheiro" must be clickable
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Create New Composite Successfully - part 1(create)
    Given I access the "new composite" page - USfive
    When I fill the "name" field with "Cucumber Composite" - USfive
    And I fill the "description" field with "Cucumber Composite Description" - USfive
    And I press the "add materials" button - USfive
    Then I should be redirected to the "add materials" page - USfive
    And the "other materials" table should be present - USfive
    And the "material materials" table should be present - USfive

  Scenario: Create New Composite Successfully - part 2(add materials)
    Given I access the "composite add materials" page - USfive
    And the other materials table have more than 2 entries
    When I press the add button of the first row of the other materials table twice
    Then the material materials table should have 2 entries
    And the "first" entry of the material materials table should contain the text "Adad"
    And the "first" entry of the material materials table should display "down" button
    And the "first" entry of the material materials table should display "remove" button
    And the "second" entry of the material materials table should contain the text "Administrar comprimidos por sonda"
    And the "second" entry of the material materials table should display "up" button
    And the "second" entry of the material materials table should display "remove" button

  Scenario: Create New Composite Successfully - part 3(arrow down)
    Given I access the "composite add materials" page - USfive
    And the material materials table have 2 entries
    When I press the "down" button of the first entry of the material materials table
    Then the new "first" entry of the material materials table should be the "second" entry
    And the new "second" entry of the material materials table should be the "first" entry

  Scenario: Create New Composite Successfully - part 4(arrow up)
    Given I access the "composite add materials" page - USfive
    And the material materials table have 2 entries
    When I press the "up" button of the second entry of the material materials table
    Then the new "second" entry of the material materials table should be the "first" entry
    And the new "first" entry of the material materials table should be the "second" entry

  Scenario: Create New Composite Successfully - part 5(remove)
    Given I access the "composite add materials" page - USfive
    And the material materials table have 2 entries
    When I press the "remove" button of the first entry of the material materials table
    Then the material materials table should have 1 entry
    And the new first entry of the material materials table should contain the text of the previous second entry

  Scenario: Create New Composite Successfully - part 6(conclude)
    Given I access the "composite add materials" page - USfive
    When I press the "conclude" button - USfive
    Then I should be redirected to the details page of the material
    And the field "material composite" should show "Cucumber Composite" - USfive
    And the field "type" should show "Composto" - USfive
    And the field "description" should show "Cucumber Composite Description" - USfive
    And a table with the title "Materiais Associados" should be displayed - USfive
    And the materials associated table should have at least 1 entry
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  #DETAILS
  Scenario: Access Text Material Details
    Given I access the "materials" page - USfive
    When I press the "details" button of the "Alimentação por sonda de gastrostomia" material - USfive
    Then I should be redirected to the "details" page of "Alimentação por sonda de gastrostomia" material - USfive
    And the field from details "material" should show "Alimentação por sonda de gastrostomia" - USfive
    And the field from details "type" should show "Texto" - USfive
    And the field from details "description" should show "Alimentação por sonda de gastrostomia" - USfive
    And the field from details "text" should show "oi :D o nuno é engraçado!" - USfive
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Access Image Material Details
    Given I access the "materials" page - USfive
    When I press the "details" button of the "ELIMINAÇAO VESICAL - 2" material - USfive
    Then I should be redirected to the "details" page of "ELIMINAÇAO VESICAL - 2" material - USfive
    And the field from details "material" should show "ELIMINAÇAO VESICAL - 2" - USfive
    And the field from details "type" should show "Imagem" - USfive
    And the field from details "description" should show "O esquema seguinte apresenta –nos os vários tipos de tratamento" - USfive
    And the field from details "file" should show an image - USfive
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Access Video Material Details
    Given I access the "materials" page - USfive
    When I press the "details" button of the "Administrar comprimidos por sonda" material - USfive
    Then I should be redirected to the "details" page of "Administrar comprimidos por sonda" material - USfive
    And the field from details "material" should show "Administrar comprimidos por sonda" - USfive
    And the field from details "type" should show "Video" - USfive
    And the field from details "description" should show "Administrar comprimidos por sonda" - USfive
    And the field "file" should show a video - USfive
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Access Audio Guide Material Details
    Given I access the "materials" page - USfive
    When I press the "details" button of the "Cucumber Audio Guide1425538" material - USfive
    Then I should be redirected to the "details" page of "Cucumber Audio Guide1425538" material - USfive
    And the field from details "material" should show "Cucumber Audio Guide1425538" - USfive
    And the field from details "type" should show "Áudio-guia" - USfive
    And the field from details "description" should show "Cucumber Audio Guide Description" - USfive
    And the field from details "file" should show a sound - USfive
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Access List Item Material Details
    Given I access the "materials" page - USfive
    When I press the "details" button of the "Cucumber List Item1380840" material - USfive
    Then I should be redirected to the "details" page of "Cucumber List Item1380840" material - USfive
    And the field from details "material" should show "Cucumber List Item1380840" - USfive
    And the field from details "type" should show "Item de Lista" - USfive
    And the field from details "itemMarker" should show "*" - USfive
    And the field from details "description" should show "Cucumber List Item Description" - USfive
    And the field from details "detail_description" should show "Cucumber List Item Very Detailed Text" - USfive
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Access Emergency Contact Material Details
    Given I access the "materials" page - USfive
    When I press the "details" button of the "Cucumber Emergency Contact4030181" material - USfive
    Then I should be redirected to the "details" page of "Cucumber Emergency Contact4030181" material - USfive
    And the field from details "material" should show "Cucumber Emergency Contact4030181" - USfive
    And the field from details "type" should show "Contacto de Emergência" - USfive
    And the field from details "description" should show "Cucumber Emergency Contact Description" - USfive
    And the field from details "number" should show "999999999" - USfive
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Access Annex Link Material Details
    Given I access the "materials" page - USfive
    When I press the "details" button of the "Cucumber Annex Link8490043" material - USfive
    Then I should be redirected to the "details" page of "Cucumber Annex Link8490043" material - USfive
    And the field from details "material" should show "Cucumber Annex Link8490043" - USfive
    And the field from details "type" should show "Anexo" - USfive
    And the field from details "description" should show "Cucumber Annex Link Description" - USfive
    And the field from details "url" should show "https://www.youtube.com/watch?v=FTQbiNvZqaY" - USfive
    And the field "url" must be clickable
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Access Annex File Material Details
    Given I access the "materials" page - USfive
    When I press the "details" button of the "Cucumber Annex File2724209" material - USfive
    Then I should be redirected to the "details" page of "Cucumber Annex File2724209" material - USfive
    And the field from details "material" should show "Cucumber Annex File2724209" - USfive
    And the field from details "type" should show "Anexo" - USfive
    And the field from details "description" should show "Cucumber Annex File Description" - USfive
    And the field from details "file" should show "Cucumber Annex File2724209.pdf" - USfive
    And the field "file" must be clickable
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  Scenario: Access Composite Material Details
    Given I access the "materials" page - USfive
    When I press the details button of the "TRANFERÊNCIAS v2" material
    Then I should be redirected to the "details" page of "TRANFERÊNCIAS v2" material
    And the field "material composite" should show "TRANFERÊNCIAS v2" - USfive
    And the field "type" should show "Composto" - USfive
    And the field "description" should show "TRANFERÊNCIAS" - USfive
    And the "TRANFERÊNCIAS - 1" material should be present in the materials associated table - USfive
    And the "TRANFERÊNCIAS - 2" material should be present in the materials associated table - USfive
    And the "TRANFERÊNCIAS - 3" material should be present in the materials associated table - USfive
    And the "TRANFERÊNCIAS - 4" material should be present in the materials associated table - USfive
    And the "TRANFERÊNCIAS - 5" material should be present in the materials associated table - USfive
    And the "Materiais relacionados" material should be present in the materials associated table - USfive
    And the "Vídeo sobre como levantar uma pessoa do leito para a cadeira" material should be present in the materials associated table - USfive
    And the "edit" button should be present - USfive
    And the "block" button should be present - USfive
    And the "delete" button should be present - USfive
    And the "back" button should be present - USfive

  #MATERIAL BLOCK & UNBLOCK
  Scenario: Block Material on the Materials page
    Given I access the "materials" page - USfive
    And the "Cucumber Text2763101" material is unblocked - USfive
    When I press the "block" button of the "Cucumber Text2763101" material - USfive
    Then I should be redirected to the "materials" page - USfive
    And the "unblock" button should be present in the "Cucumber Text" material options

  Scenario: Unblock Material on the Materials page
    Given I access the "materials" page - USfive
    And the "Cucumber Text2763101" material is blocked
    When I press the "unblock" button of the "Cucumber Text2763101" material - USfive
    Then I should be redirected to the "materials" page - USfive
    And the "block" button should be present in the "Cucumber Text" material options

  #NORMAL EDITS
  Scenario: Access Text Material Edit Page
    Given I access the "details" page of the "Cucumber Text2763101" material - USfive
    When I press the "edit" button - USfive
    Then I should be redirected to the "edit" page of the "Cucumber Text2763101" material - USfive
    And the editable field "type" should show "Texto" - USfive
    And the editable field "name" should show "Cucumber Text2763101" - USfive
    And the editable field "description" should show "Cucumber Text Description" - USfive
    And the editable field "body" should show "Cucumber Text Very Detailed Text" - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Text Material Successfully
    Given I access the "edit" page of the Cucumber Text6474829" material - USfive
    And I fill the "name" field with "Cucumber Text6474829" - USfive
    And I fill the "description edit" field with "Cucumber Text Description" - USfive
    And I fill the "body edit" field with "Cucumber Text Very Detailed Text" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Text6474829" material - USfive
    And the field from details "material edit succ" should show "Cucumber Text6474829" - USfive
    And the field from details "type" should show "Texto" - USfive
    And the field from details "description edit succ" should show "Cucumber Text Description" - USfive
    And the field from details "text edit succ" should show "Cucumber Text Very Detailed Text" - USfive
    And the field "Data da última atualização text" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Access Image Material Edit Page
    Given I access the "details" page of the Cucumber Image2321201" material - USfive
    When I press the "edit" button - USfive
    Then I should be redirected to the "edit" page of the "Cucumber Image2321201" material - USfive
    And the editable field "type" should show "Imagem" - USfive
    And the editable field "name" should show "Cucumber Image2321201" - USfive
    And the editable field "description" should show "Cucumber Image Description" - USfive
    And the editable field "pathImage" should be empty - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Image Material Successfully Without New Image
    Given I access the "edit" page of the "Cucumber Image3305604" material - USfive
    And I fill the "name" field with "Cucumber Image3305604" - USfive
    And I fill the "description edit" field with "Cucumber Image Description" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Image3305604" material - USfive
    And the field from details "material edit succ" should show "Cucumber Image3305604" - USfive
    And the field from details "type" should show "Imagem" - USfive
    And the field from details "description edit succ" should show "Cucumber Image Description" - USfive
    And the field "Data da última atualização image" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Image Material Successfully With New Image
    Given I access the "edit" page of the "Cucumber Image3305604" material - USfive
    And I fill the "name" field with "Cucumber Image3305604" - USfive
    And I fill the "description edit" field with "Cucumber Image Description" - USfive
    And I fill the "pathImage" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Image3305604" material - USfive
    And the field from details "material edit succ" should show "Cucumber Image3305604" - USfive
    And the field from details "type" should show "Imagem" - USfive
    And the field from details "description edit succ" should show "Cucumber Image Description" - USfive
    And the field "Data da última atualização image" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Access Video Material Edit Page
    Given I access the "details" page of the "Cucumber Video5504109" material - USfive
    When I press the "edit" button - USfive
    Then I should be redirected to the "edit" page of the "Cucumber Video5504109" material - USfive
    And the editable field "type" should show "Video" - USfive
    And the editable field "name" should show "Cucumber Video5504109" - USfive
    And the editable field "description" should show "Cucumber Video Description" - USfive
    And the editable field "pathVideo" should be empty - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Video Material Successfully Without New Video
    Given I access the "edit" page of the "Cucumber Video4180925" material - USfive
    And I fill the "name" field with "Cucumber Video4180925" - USfive
    And I fill the "description edit" field with "Cucumber Video Description" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Video4180925" material - USfive
    And the field from details "material edit succ" should show "Cucumber Video4180925" - USfive
    And the field from details "type" should show "Video" - USfive
    And the field from details "description edit succ" should show "Cucumber Video Description" - USfive
    And the field "Data da última atualização video" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Video Material Successfully With New Video
    Given I access the "edit" page of the "Cucumber Video4180925" material - USfive
    And I fill the "name" field with "Cucumber Video4180925" - USfive
    And I fill the "description edit" field with "Cucumber Video Description" - USfive
    And I fill the "pathVideo" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.mp4" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Video4180925" material - USfive
    And the field from details "material edit succ" should show "Cucumber Video4180925" - USfive
    And the field from details "type" should show "Video" - USfive
    And the field from details "description edit succ" should show "Cucumber Video Description" - USfive
    And the field "Data da última atualização video" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Access Audio Guide Material Edit Page
    Given I access the "details" page of the "Cucumber Audio Guide7667109" material - USfive
    When I press the "edit" button - USfive
    Then I should be redirected to the "edit" page of the "Cucumber Audio Guide7667109" material - USfive
    And the editable field "type" should show "Áudio-guia" - USfive
    And the editable field "name" should show "Cucumber Audio Guide7667109" - USfive
    And the editable field "description" should show "Cucumber Audio Guide Description" - USfive
    And the editable field "pathAudioGuide" should be empty - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Audio Guide Material Successfully Without New Audio Guide
    Given I access the "edit" page of the "Cucumber Audio Guide2975340" material - USfive
    And I fill the "name" field with "Cucumber Audio Guide2975340" - USfive
    And I fill the "description edit" field with "Cucumber Audio Guide Description" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Audio Guide2975340" material - USfive
    And the field from details "material edit succ" should show "Cucumber Audio Guide2975340" - USfive
    And the field from details "type" should show "Áudio-guia" - USfive
    And the field from details "description edit succ" should show "Cucumber Audio Guide Description" - USfive
    And the field "Data da última atualização audioGuide" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Audio Guide Material Successfully With New Audio Guide
    Given I access the "edit" page of the "Cucumber Audio Guide2975340" material - USfive
    And I fill the "name" field with "Cucumber Audio Guide2975340" - USfive
    And I fill the "description edit" field with "Cucumber Audio Guide Description" - USfive
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp3" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Audio Guide2975340" material - USfive
    And the field from details "material edit succ" should show "Cucumber Audio Guide2975340" - USfive
    And the field from details "type" should show "Áudio-guia" - USfive
    And the field from details "description edit succ" should show "Cucumber Audio Guide Description" - USfive
    And the field "Data da última atualização audioGuide" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Access List Item Material Edit Page
    Given I access the "details" page of the "Cucumber List Item5479775" material - USfive
    When I press the "edit" button - USfive
    Then I should be redirected to the "edit" page of the "Cucumber List Item5479775" material - USfive
    And the editable field "type" should show "Item de Lista" - USfive
    And the editable field "name" should show "Cucumber List Item5479775" - USfive
    And the editable field "listItemMarker" should show "*" - USfive
    And the editable field "description" should show "Cucumber List Item Description" - USfive
    And the editable field "listItemDetailedDescription" should show "Cucumber List Item Very Detailed Text" - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit List Item Material Successfully
    Given I access the "edit" page of the "Cucumber List Item1693397" material - USfive
    And I fill the "name" field with "Cucumber List Item1693397" - USfive
    And I fill the "listItemMarker edit" field with "*" - USfive
    And I fill the "description edit" field with "Cucumber List Item Description" - USfive
    And I fill the "listItemDetailedDescription edit" field with "Cucumber List Item Very Detailed Text" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber List Item1693397" material - USfive
    And the field from details "material edit succ" should show "Cucumber List Item1693397" - USfive
    And the field from details "type" should show "Item de Lista" - USfive
    And the field from details "itemMarker edit succ" should show "*" - USfive
    And the field from details "description edit succ" should show "Cucumber List Item Description" - USfive
    And the field from details "detail_description edit succ" should show "Cucumber List Item Very Detailed Text" - USfive
    And the field "Data da última atualização listItem" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Access Emergency Contact Material Edit Page
    Given I access the "details" page of the "Cucumber Emergency Contact8683189" material - USfive
    When I press the "edit" button - USfive
    Then I should be redirected to the "edit" page of the "Cucumber Emergency Contact8683189" material - USfive
    And the editable field "type" should show "Contacto de Emergência" - USfive
    And the editable field "name" should show "Cucumber Emergency Contact8683189" - USfive
    And the editable field "description" should show "Cucumber Emergency Contact Description" - USfive
    And the editable field "number" should show "999999999" - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Emergency Contact Material Successfully
    Given I access the "edit" page of the "Cucumber Emergency Contact6953277" material - USfive
    And I fill the "name" field with "Cucumber Emergency Contact6953277" - USfive
    And I fill the "description edit" field with "Cucumber Emergency Contact Description" - USfive
    And I fill the "number edit" field with "999999999" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Emergency Contact6953277" material - USfive
    And the field from details "material edit succ" should show "Cucumber Emergency Contact6953277" - USfive
    And the field from details "type" should show "Contacto de Emergência" - USfive
    And the field from details "description edit succ" should show "Cucumber Emergency Contact Description" - USfive
    And the field from details "number edit succ" should show "999999999" - USfive
    And the field "Data da última atualização emergencyContact" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Access Annex Link Material Edit Page
    Given I access the "details" page of the "Cucumber Annex Link8490043" material - USfive
    When I press the "edit" button - USfive
    Then I should be redirected to the "edit" page of the "Cucumber Annex Link8490043" material - USfive
    And the editable field "type" should show "Anexo" - USfive
    And the editable field "name" should show "Cucumber Annex Link8490043" - USfive
    And the editable field "description" should show "Cucumber Annex Link Description" - USfive
    And the editable field "selectType" should show "Link (Website, Video externo)" - USfive
    And the editable field "url" should show "https://www.youtube.com/watch?v=FTQbiNvZqaY" - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Annex Link Material Successfully
    Given I access the "edit" page of the "Cucumber Annex Link8490043" material - USfive
    And I fill the "name" field with "Cucumber Annex Link8490043" - USfive
    And I fill the "description edit" field with "Cucumber Annex Link Description" - USfive
    And I fill the "selectType" field with "Link (Website, Video externo)" - USfive
    And I fill the "url edit" field with "https://www.youtube.com/watch?v=FTQbiNvZqaY" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Annex Link8490043" material - USfive
    And the field from details "material edit succ" should show "Cucumber Annex Link8490043" - USfive
    And the field from details "type" should show "Anexo" - USfive
    And the field from details "description edit succ" should show "Cucumber Annex Link Description" - USfive
    And the field from details "url edit succ" should show "https://www.youtube.com/watch?v=FTQbiNvZqaY" - USfive
    And the field "Data da última atualização annexLink" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Access Annex File Material Edit Page
    Given I access the "details" page of the "Cucumber Annex File7734991" material - USfive
    When I press the "edit" button - USfive
    Then I should be redirected to the "edit" page of the "Cucumber Annex File7734991" material - USfive
    And the editable field "type" should show "Anexo" - USfive
    And the editable field "name" should show "Cucumber Annex File7734991" - USfive
    And the editable field "description" should show "Cucumber Annex File Description" - USfive
    And the editable field "selectType" should show "Ficheiro (PDF, docx, ...)" - USfive
    And the editable field "pathAnnex" should be empty - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Annex File Material Successfully Without New Annex File
    Given I access the "edit" page of the "Cucumber Annex File6861208" material - USfive
    And I fill the "name" field with "Cucumber Annex File6861208" - USfive
    And I fill the "description edit" field with "Cucumber Annex File Description" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Annex File6861208" material - USfive
    And the field from details "material edit succ" should show "Cucumber Annex File6861208" - USfive
    And the field from details "type" should show "Anexo" - USfive
    And the field from details "description edit succ" should show "Cucumber Annex File Description" - USfive
    And the field "Data da última atualização annexFile" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Annex File Material Successfully With New Annex File
    Given I access the "edit" page of the "Cucumber Annex File6861208" material - USfive
    And I fill the "name" field with "Cucumber Annex File6861208" - USfive
    And I fill the "description edit" field with "Cucumber Annex File Description" - USfive
    And I fill the "pathAnnex" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.docx" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Annex File6861208" material - USfive
    And the field from details "material edit succ" should show "Cucumber Annex File6861208" - USfive
    And the field from details "type" should show "Anexo" - USfive
    And the field from details "description edit succ" should show "Cucumber Annex File Description" - USfive
    And the field "Data da última atualização annexFile" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Access Composite Material Edit Page
    Given I access the "details" page of the "Cucumber Composite7546596" material - USfive
    When I press the "edit" button - USfive
    Then I should be redirected to the "edit" page of the "Cucumber Composite7546596" material - USfive
    And the editable field "type" should show "Composto" - USfive
    And the editable field "name" should show "Cucumber Composite7546596" - USfive
    And the editable field "description" should show "Cucumber Composite Description" - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Composite Material Successfully
    Given I access the "edit" page of the "Cucumber Composite1793334" material - USfive
    And I fill the "name" field with "Cucumber Composite1793334" - USfive
    And I fill the "description edit" field with "Cucumber Composite Description" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Composite1793334" material - USfive
    And the field from details "material edit succ" should show "Cucumber Composite1793334" - USfive
    And the field from details "type" should show "Composto" - USfive
    And the field from details "description edit succ" should show "Cucumber Composite Description" - USfive
    And the field "Data da última atualização composite" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  #CHANGE TYPE EDITS
  Scenario: Edit Text Material to Image Material - part 1
    Given I access the "edit change type" page of the "Cucumber Text6474829" material - USfive
    When I fill the "type" field with "Imagem" - USfive
    Then the field "type" should be displayed - USfive
    And the field "name" should be displayed - USfive
    And the field "description" should be displayed - USfive
    And the field "pathImage" should be displayed - USfive
    And the field "body" should not be displayed - USfive
    And the field "listItemMarker" should not be displayed - USfive
    And the field "listItemDetailedDescription" should not be displayed - USfive
    And the field "pathVideo" should not be displayed - USfive
    And the field "pathAudioGuide" should not be displayed - USfive
    And the field "selectType" should not be displayed - USfive
    And the field "url" should not be displayed - USfive
    And the field "pathAnnex" should not be displayed - USfive
    And the field "number" should not be displayed - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Text Material to Image Material - part 2
    Given I access the "edit change type" page of the "Cucumber Text6474829" material - USfive
    When I fill the "type" field with "Imagem" - USfive
    And I fill the "name change type" field with "Cucumber Text Image" - USfive
    And I fill the "description" field with "Cucumber Text Image Description" - USfive
    And I fill the "pathImage" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details change type" page of the "Cucumber Text Image" material - USfive
    And the field "material change type" should show "Cucumber Text Image" - USfive
    And the field "type" should show "Imagem" - USfive
    And the field "description" should show "Cucumber Text Image Description" - USfive
    And the field "file" should show an image
    And the field "Data da última atualização image" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Image Material to Video Material - part 1
    Given I access the "edit change type" page of the "Cucumber Text Image" material - USfive
    When I fill the "type" field with "Video" - USfive
    Then the field "type" should be displayed - USfive
    And the field "name" should be displayed - USfive
    And the field "description" should be displayed - USfive
    And the field "pathVideo" should be displayed - USfive
    And the field "body" should not be displayed - USfive
    And the field "listItemMarker" should not be displayed - USfive
    And the field "listItemDetailedDescription" should not be displayed - USfive
    And the field "pathImage" should not be displayed - USfive
    And the field "pathAudioGuide" should not be displayed - USfive
    And the field "selectType" should not be displayed - USfive
    And the field "url" should not be displayed - USfive
    And the field "pathAnnex" should not be displayed - USfive
    And the field "number" should not be displayed - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Image Material to Video Material - part 2
    Given I access the "edit change type" page of the "Cucumber Text Image" material - USfive
    When I fill the "type" field with "Video" - USfive
    And I fill the "name change type" field with "Cucumber Image Video" - USfive
    And I fill the "description" field with "Cucumber Image Video Description" - USfive
    And I fill the "pathVideo" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp4" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details change type" page of the "Cucumber Image Video" material - USfive
    And the field "material change type" should show "Cucumber Image Video" - USfive
    And the field "type" should show "Video" - USfive
    And the field "description" should show "Cucumber Image Video Description" - USfive
    And the field "file" should show a video - USfive
    And the field "Data da última atualização video" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Video Material to Audio Guide Material - part 1
    Given I access the "edit change type" page of the "Cucumber Image Video" material - USfive
    When I fill the "type" field with "Áudio-guia" - USfive
    Then the field "type" should be displayed - USfive
    And the field "name" should be displayed - USfive
    And the field "description" should be displayed - USfive
    And the field "pathAudioGuide" should be displayed - USfive
    And the field "body" should not be displayed - USfive
    And the field "listItemMarker" should not be displayed - USfive
    And the field "listItemDetailedDescription" should not be displayed - USfive
    And the field "pathImage" should not be displayed - USfive
    And the field "pathVideo" should not be displayed - USfive
    And the field "selectType" should not be displayed - USfive
    And the field "url" should not be displayed - USfive
    And the field "pathAnnex" should not be displayed - USfive
    And the field "number" should not be displayed - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Video Material to Audio Guide Material - part 2
    Given I access the "edit change type" page of the "Cucumber Image Video" material - USfive
    When I fill the "type" field with "Áudio-guia" - USfive
    And I fill the "name change type" field with "Cucumber Video Audio Guide" - USfive
    And I fill the "description" field with "Cucumber Video Audio Guide Description" - USfive
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp3" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details change type" page of the "Cucumber Video Audio Guide" material - USfive
    And the field "material change type" should show "Cucumber Video Audio Guide" - USfive
    And the field "type" should show "Áudio-guia" - USfive
    And the field "description" should show "Cucumber Video Audio Guide Description" - USfive
    And the field "file" should show a audio guide - USfive
    And the field "Data da última atualização audioGuide" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Audio Guide Material to List Item Material - part 1
    Given I access the "edit change type" page of the "Cucumber Video Audio Guide" material - USfive
    When I fill the "type" field with "Item de Lista" - USfive
    Then the field "type" should be displayed - USfive
    And the field "name" should be displayed - USfive
    And the field "description" should be displayed - USfive
    And the field "listItemMarker" should be displayed - USfive
    And the field "listItemDetailedDescription" should be displayed - USfive
    And the field "body" should not be displayed - USfive
    And the field "pathAudioGuide" should not be displayed - USfive
    And the field "pathImage" should not be displayed - USfive
    And the field "pathVideo" should not be displayed - USfive
    And the field "selectType" should not be displayed - USfive
    And the field "url" should not be displayed - USfive
    And the field "pathAnnex" should not be displayed - USfive
    And the field "number" should not be displayed - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Audio Guide Material to List Item Material - part 2
    Given I access the "edit change type" page of the "Cucumber Video Audio Guide" material - USfive
    When I fill the "type" field with "Item de Lista" - USfive
    And I fill the "name change type" field with "Cucumber Audio Guide List Item" - USfive
    And I fill the "listItemMarker" field with "*" - USfive
    And I fill the "description" field with "Cucumber Audio Guide List Item Description" - USfive
    And I fill the "listItemDetailedDescription" field with "Cucumber Audio Guide List Item Very Detailed Description" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details change type" page of the "Cucumber Audio Guide List Item" material - USfive
    And the field "material change type" should show "Cucumber Audio Guide List Item" - USfive
    And the field "type" should show "Item de Lista" - USfive
    And the field "listItemMarker" should show "*" - USfive
    And the field "description listItem" should show "Cucumber Audio Guide List Item Description" - USfive
    And the field "listItemDetailedDescription" should show "Cucumber Audio Guide List Item Very Detailed Description" - USfive
    And the field "Data da última atualização listItem" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit List Item Material to Emergency Contact Material - part 1
    Given I access the "edit change type" page of the "Cucumber Audio Guide List Item" material - USfive
    When I fill the "type" field with "Contacto de Emergência" - USfive
    Then the field "type" should be displayed - USfive
    And the field "name" should be displayed - USfive
    And the field "description" should be displayed - USfive
    And the field "number" should be displayed - USfive
    And the field "body" should not be displayed - USfive
    And the field "listItemMarker" should not be displayed - USfive
    And the field "listItemDetailedDescription" should not be displayed - USfive
    And the field "pathImage" should not be displayed - USfive
    And the field "pathVideo" should not be displayed - USfive
    And the field "selectType" should not be displayed - USfive
    And the field "url" should not be displayed - USfive
    And the field "pathAnnex" should not be displayed - USfive
    And the field "pathAudioGuide" should not be displayed - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit List Item Material to Emergency Contact Material - part 2
    Given I access the "edit change type" page of the "Cucumber Audio Guide List Item" material - USfive
    When I fill the "type" field with "Contacto de Emergência" - USfive
    And I fill the "name change type" field with "Cucumber List Item Emergency Contact" - USfive
    And I fill the "description" field with "Cucumber List Item Emergency Contact Description" - USfive
    And I fill the "number" field with "999999999" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details change type" page of the "Cucumber List Item Emergency Contact" material - USfive
    And the field "material change type" should show "Cucumber List Item Emergency Contact" - USfive
    And the field "type" should show "Contacto de Emergência" - USfive
    And the field "description" should show "Cucumber List Item Emergency Contact Description" - USfive
    And the field "number" should show "999999999" - USfive
    And the field "Data da última atualização emergencyContact" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Emergency Contact Material to Annex Link Material - part 1
    Given I access the "edit change type" page of the "Cucumber List Item Emergency Contact" material - USfive
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "selectType" field with "Link (Website, Video externo)" - USfive
    Then the field "type" should be displayed - USfive
    And the field "name" should be displayed - USfive
    And the field "description" should be displayed - USfive
    And the field "selectType" should be displayed - USfive
    And the field "url" should be displayed - USfive
    And the field "body" should not be displayed - USfive
    And the field "listItemMarker" should not be displayed - USfive
    And the field "listItemDetailedDescription" should not be displayed - USfive
    And the field "pathImage" should not be displayed - USfive
    And the field "pathVideo" should not be displayed - USfive
    And the field "number" should not be displayed - USfive
    And the field "pathAnnex" should not be displayed - USfive
    And the field "pathAudioGuide" should not be displayed - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Emergency Contact Material to Annex Link Material - part 2
    Given I access the "edit change type" page of the "Cucumber List Item Emergency Contact" material - USfive
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "name change type" field with "Cucumber Emergency Contact Annex Link" - USfive
    And I fill the "description" field with "Cucumber Emergency Contact Annex Link Description" - USfive
    And I fill the "selectType" field with "Link (Website, Video externo)" - USfive
    And I fill the "url" field with "https://www.youtube.com/watch?v=RoXmMD1rVP0&t=3s" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details change type" page of the "Cucumber Emergency Contact Annex Link" material - USfive
    And the field "material change type" should show "Cucumber Emergency Contact Annex Link" - USfive
    And the field "type" should show "Anexo" - USfive
    And the field "description" should show "Cucumber Emergency Contact Annex Link Description" - USfive
    And the field "url" should show "https://www.youtube.com/watch?v=RoXmMD1rVP0&t=3s" - USfive
    And the field "URL" must be clickable
    And the field "Data da última atualização annexLink" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Annex Link Material to Annex File Material - part 1
    Given I access the "edit change type" page of the "Cucumber Emergency Contact Annex Link" material - USfive
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "selectType" field with "Ficheiro (PDF, docx, ...)" - USfive
    Then the field "type" should be displayed - USfive
    And the field "name" should be displayed - USfive
    And the field "description" should be displayed - USfive
    And the field "selectType" should be displayed - USfive
    And the field "pathAnnex" should be displayed - USfive
    And the field "body" should not be displayed - USfive
    And the field "listItemMarker" should not be displayed - USfive
    And the field "listItemDetailedDescription" should not be displayed - USfive
    And the field "pathImage" should not be displayed - USfive
    And the field "pathVideo" should not be displayed - USfive
    And the field "number" should not be displayed - USfive
    And the field "url" should not be displayed - USfive
    And the field "pathAudioGuide" should not be displayed - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Annex Link Material to Annex File Material - part 2
    Given I access the "edit change type" page of the "Cucumber Emergency Contact Annex Link" material - USfive
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "name change type" field with "Cucumber Annex Link Annex File" - USfive
    And I fill the "description" field with "Cucumber Annex Link Annex File Description" - USfive
    And I fill the "selectType" field with "Ficheiro (PDF, docx, ...)" - USfive
    And I fill the "pathAnnex" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details change type" page of the "Cucumber Annex Link Annex File" material - USfive
    And the field "material change type" should show "Cucumber Annex Link Annex File" - USfive
    And the field "type" should show "Anexo" - USfive
    And the field "description" should show "Cucumber Annex Link Annex File Description" - USfive
    And the field "file" should show "Cucumber Annex Link Annex File.pdf" - USfive
    And the field "file" must be clickable
    And the field "Data da última atualização annexFile" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Annex File Material to Composite Material - part 1
    Given I access the "edit change type" page of the "Cucumber Annex Link Annex File" material - USfive
    When I fill the "type" field with "Composto" - USfive
    Then the field "type" should be displayed - USfive
    And the field "name" should be displayed - USfive
    And the field "description" should be displayed - USfive
    And the field "body" should not be displayed - USfive
    And the field "listItemMarker" should not be displayed - USfive
    And the field "listItemDetailedDescription" should not be displayed - USfive
    And the field "pathImage" should not be displayed - USfive
    And the field "pathVideo" should not be displayed - USfive
    And the field "number" should not be displayed - USfive
    And the field "selectType" should not be displayed - USfive
    And the field "pathAnnex" should not be displayed - USfive
    And the field "url" should not be displayed - USfive
    And the field "pathAudioGuide" should not be displayed - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Annex File Material to Composite Material - part 2
    Given I access the "edit change type" page of the "Cucumber Annex Link Annex File" material - USfive
    When I fill the "type" field with "Composto" - USfive
    And I fill the "name change type" field with "Cucumber Annex File Composite" - USfive
    And I fill the "description" field with "Cucumber Annex File Composite Description" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details change type" page of the "Cucumber Annex File Composite" material - USfive
    And the field "material change type" should show "Cucumber Annex File Composite" - USfive
    And the field "type" should show "Composto" - USfive
    And the field "description" should show "Cucumber Annex File Composite Description" - USfive
    And the field "Data da última atualização composite" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  Scenario: Edit Composite Material to Text Material - part 1
    Given I access the "edit change type" page of the "Cucumber Annex File Composite" material - USfive
    When I fill the "type" field with "Texto" - USfive
    Then the field "type" should be displayed - USfive
    And the field "name" should be displayed - USfive
    And the field "description" should be displayed - USfive
    And the field "body" should be displayed - USfive
    And the field "listItemMarker" should not be displayed - USfive
    And the field "listItemDetailedDescription" should not be displayed - USfive
    And the field "pathImage" should not be displayed - USfive
    And the field "pathVideo" should not be displayed - USfive
    And the field "number" should not be displayed - USfive
    And the field "selectType" should not be displayed - USfive
    And the field "pathAnnex" should not be displayed - USfive
    And the field "url" should not be displayed - USfive
    And the field "pathAudioGuide" should not be displayed - USfive
    And the "save" button should be present - USfive
    And the "cancel" button should be present - USfive

  Scenario: Edit Composite Material to Text Material - part 2
    Given I access the "edit change type" page of the "Cucumber Annex File Composite" material - USfive
    When I fill the "type" field with "Texto" - USfive
    And I fill the "name change type" field with "Cucumber Text6474829" - USfive
    And I fill the "description" field with "Cucumber Text Description" - USfive
    And I fill the "body" field with "Cucumber Text Very Detailed Text" - USfive
    And I press the "save" button - USfive
    Then I should be redirected to the "details change type" page of the "Cucumber Text6474829" material - USfive
    And the field "material change type" should show "Cucumber Text6474829" - USfive
    And the field "type" should show "Texto" - USfive
    And the field "description" should show "Cucumber Text Description" - USfive
    And the field "text" should show "Cucumber Text Very Detailed Text" - USfive
    And the field "Data da última atualização text" should different from the previous - USfive
    And should be present a "Foi atualizado." log at the beggining of the logs section - USfive

  #DELETE
  Scenario: Delete Material
    Given I access the "details delete" page of the "Cucumber Text9477400" material - USfive
    When I press the "delete" button - USfive
    And I press the "Sim" button from the delete modal
    Then I should be redirected to the "materials" page - USfive
    And the "Cucumber Text9477400" material should not be present in the "materials" table

  #ERRORS
  Scenario Outline: Material name field empty
    Given I access the "<page>" page - USfive
    When the "name" field is empty - USfive
    And I press the "<button>" button - USfive
    Then the "O nome tem que ser preenchido." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new text              | create  |
      | new image             | create  |
      | new video             | create  |
      | new audioGuide        | create  |
      | new listItem          | create  |
      | new emergencyContact  | create  |
      | new annex             | create  |
      | new composite         | create  |
      | edit text             | save    |
      | edit image            | save    |
      | edit video            | save    |
      | edit audioGuide       | save    |
      | edit listItem         | save    |
      | edit emergencyContact | save    |
      | edit annex            | save    |
      | edit composite        | save    |

  Scenario Outline: Material name field min length
    Given I access the "<page>" page - USfive
    When I fill the "name error" field with "12" - USfive
    And I press the "<button>" button - USfive
    Then the "O nome tem que ser maior que 4 letras." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new text              | create  |
      | new image             | create  |
      | new video             | create  |
      | new audioGuide        | create  |
      | new listItem          | create  |
      | new emergencyContact  | create  |
      | new annex             | create  |
      | new composite         | create  |
      | edit text             | save    |
      | edit image            | save    |
      | edit video            | save    |
      | edit audioGuide       | save    |
      | edit listItem         | save    |
      | edit emergencyContact | save    |
      | edit annex            | save    |
      | edit composite        | save    |

  Scenario Outline: Material name field unique
    Given I access the "<page>" page - USfive
    When I fill the "name error" field with "Alimentação por sonda" - USfive
    And I press the "<button>" button - USfive
    Then the "Esse nome já existe. Escolha outro." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new text              | create  |
      | new image             | create  |
      | new video             | create  |
      | new audioGuide        | create  |
      | new listItem          | create  |
      | new emergencyContact  | create  |
      | new annex             | create  |
      | new composite         | create  |
      | edit text             | save    |
      | edit image            | save    |
      | edit video            | save    |
      | edit audioGuide       | save    |
      | edit listItem         | save    |
      | edit emergencyContact | save    |
      | edit annex            | save    |
      | edit composite        | save    |

  Scenario Outline: Material description field empty
    Given I access the "<page>" page - USfive
    When the "description" field is empty - USfive
    And I press the "<button>" button - USfive
    Then the "A descrição tem que ser preenchida." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new text              | create  |
      | new image             | create  |
      | new video             | create  |
      | new audioGuide        | create  |
      | new listItem          | create  |
      | new emergencyContact  | create  |
      | new annex             | create  |
      | new composite         | create  |
      | edit text             | save    |
      | edit image            | save    |
      | edit video            | save    |
      | edit audioGuide       | save    |
      | edit listItem         | save    |
      | edit emergencyContact | save    |
      | edit annex            | save    |
      | edit composite        | save    |

  Scenario Outline: Material description field min length
    Given I access the "<page>" page - USfive
    When I fill the "description" field with "12" - USfive
    And I press the "<button>" button - USfive
    Then the "A descrição tem que ser maior que 4 letras." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new text              | create  |
      | new image             | create  |
      | new video             | create  |
      | new audioGuide        | create  |
      | new listItem          | create  |
      | new emergencyContact  | create  |
      | new annex             | create  |
      | new composite         | create  |
      | edit text             | save    |
      | edit image            | save    |
      | edit video            | save    |
      | edit audioGuide       | save    |
      | edit listItem         | save    |
      | edit emergencyContact | save    |
      | edit annex            | save    |
      | edit composite        | save    |

  Scenario Outline: Material Text body description empty
    Given I access the "<page>" page - USfive
    When the "body" field is empty - USfive
    And I press the "<button>" button - USfive
    Then the "O campo texto não pode ser vazio." error message should be shown - USfive
    Examples:
      | page      | button  |
      | new text  | create  |
      | edit text | save    |

  Scenario Outline: Material Item List marker empty
    Given I access the "<page>" page - USfive
    When the "listItemMarker" field is empty - USfive
    And I press the "<button>" button - USfive
    Then the "O campo marcador do item de lista não pode ser vazio." error message should be shown - USfive
    Examples:
      | page          | button  |
      | new itemList  | create  |
      | edit itemList | save    |

  Scenario Outline: Material Item List marker regex
    Given I access the "<page>" page - USfive
    When I fill the "listItemMarker" field with "asdasd" - USfive
    And I press the "<button>" button - USfive
    Then the "O campo marcador do item de lista só pode conter números (1, 2, ..., x), astericos (*) ou hífens (-)." error message should be shown - USfive
    Examples:
      | page          | button  |
      | new itemList  | create  |
      | edit itemList | save    |

  Scenario Outline: Material Image file empty
    Given I access the "<page>" page - USfive
    When the "pathImage" field is empty - USfive
    And I press the "<button>" button - USfive
    Then the "Introduza uma imagem com um dos seguintes formatos: jpeg, png, jpg, gif, svg." error message should be shown - USfive
    Examples:
      | page       | button  |
      | new image  | create  |

  Scenario Outline: Material Image Mime regex
    Given I access the "<page>" page - USfive
    When I fill the "pathImage error" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp4" - USfive
    And I press the "<button>" button - USfive
    Then the "A imagem tem que estar num dos seguintes formatos: jpeg, png, jpg, gif, svg." error message should be shown - USfive
    Examples:
      | page       | button  |
      | new image  | create  |
      | edit image | save    |

  Scenario Outline: Material Video file empty
    Given I access the "<page>" page - USfive
    When the "pathVideo" field is empty - USfive
    And I press the "<button>" button - USfive
    Then the "Introduza um video em formato mp4." error message should be shown - USfive
    Examples:
      | page       | button  |
      | new video  | create  |

  Scenario Outline: Material Video Mime regex
    Given I access the "<page>" page - USfive
    When I fill the "pathVideo error" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg" - USfive
    And I press the "<button>" button - USfive
    Then the "O video tem que ser em formato mp4." error message should be shown - USfive
    Examples:
      | page       | button  |
      | new video  | create  |
      | edit video | save    |

  Scenario Outline: Material Audio Guide file empty
    Given I access the "<page>" page - USfive
    When the "pathAudioGuide" field is empty - USfive
    And I press the "<button>" button - USfive
    Then the "Introduza um guia de áudio em formato mp3." error message should be shown - USfive
    Examples:
      | page            | button  |
      | new audioGuide  | create  |

  Scenario Outline: Material Audio Guide Mime regex
    Given I access the "<page>" page - USfive
    When I fill the "pathAudioGuide error" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg" - USfive
    And I press the "<button>" button - USfive
    Then the "O áudio-guia tem que ser em formato mp3." error message should be shown - USfive
    Examples:
      | page            | button  |
      | new audioGuide  | create  |
      | edit audioGuide | save    |

  Scenario Outline: Material Emergency Contact Number number empty
    Given I access the "<page>" page - USfive
    When the "number" field is empty - USfive
    And I press the "<button>" button - USfive
    Then the "Introduza um número de contacto." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new emergencyContact  | create  |
      | edit emergencyContact | save    |

  Scenario Outline: Material Annex File file empty
    Given I access the "<page>" page - USfive
    When the "pathAnnex" field is empty - USfive
    And I press the "<button>" button - USfive
    Then the "Introduza um anexo." error message should be shown - USfive
    Examples:
      | page           | button  |
      | new annexFile  | create  |

  Scenario Outline: Material Annex Link link empty
    Given I access the "<page>" page - USfive
    When the "url" field is empty - USfive
    And I press the "<button>" button - USfive
    Then the "Introduza um url." error message should be shown - USfive
    Examples:
      | page           | button  |
      | new annexLink  | create  |
      | edit annexLink | save    |

  Scenario Outline: Material Annex Link link rexeg
    Given I access the "<page>" page - USfive
    When I fill the "url" field with "http:facebook" - USfive
    And I press the "<button>" button - USfive
    Then the "Introduza um url válido." error message should be shown - USfive
    Examples:
      | page           | button  |
      | new annexLink  | create  |
      | edit annexLink | save    |

  Scenario Outline: Material Annex type choice
    Given I access the "<page>" page - USfive
    When I fill the "selectType" field with "Escolha um Tipo" - USfive
    And I press the "<button>" button - USfive
    Then the "Escolha um tipo de anexo." error message should be shown - USfive
    Examples:
      | page       | button  |
      | new annex  | create  |
      | edit annex | save    |
