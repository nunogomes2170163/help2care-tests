Feature: Manage Materials
  As an admin
  I want to managing all the training materials
  So that them can be used/viewed on the Mobile app

  #CREATES
  Scenario Outline: Access New Text Material Page
    Given I access the "materials" page
    When I press the <text> button
    Then I should be redirected to the <page> page
    And the <text> text should be shown
    Examples:
      | text                          | page                  |
      | Novo Texto                    | new text              |
      | Nova Imagem                   | new image             |
      | Novo Video                    | new video             |
      | Novo Audio-guia               | new audioGuide        |
      | Novo Item de Lista            | new listItem          |
      | Novo Contacto de Emergencia   | new emergencyContact  |
      | Novo Anexo                    | new annex             |
      | Novo Composto                 | new composite         |


  Scenario: Create New Text Successfully
    Given I access the "new text" page
    And I fill the "name" field with "Cucumber Text"
    And I fill the "description" field with "Cucumber Text Description"
    And I fill the "body" field with "Cucumber Text Very Detailed Text"
    And I press the "Criar" button
    Then I should be redirected to the details page of the material
    And the field "Material" should show "Cucumber Text"
    And the field "Tipo" should show "Texto"
    And the field "Descrição" should show "Cucumber Text Description"
    And the field "Texto" should show "Cucumber Text Very Detailed Text"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first line of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Image Successfully
    Given I access the "new image" page
    And I fill the "name" field with "Cucumber Image"
    And I fill the "description" field with "Cucumber Image Description"
    And I fill the "pathImage" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg"
    And I press the "Criar" button
    Then I should be redirected to the details page of the material
    And the field "Material" should show "Cucumber Image"
    And the field "Tipo" should show "Imagem"
    And the field "Descrição" should show "Cucumber Image Description"
    And the field "Ficheiro" should show an image
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first line of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Video Successfully
    Given I access the "new video" page
    And I fill the "name" field with "Cucumber Video"
    And I fill the "description" field with "Cucumber Video Description"
    And I fill the "pathVideo" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp4"
    And I press the "Criar" button
    Then I should be redirected to the details page of the material
    And the field "Material" should show "Cucumber Video"
    And the field "Tipo" should show "Video"
    And the field "Descrição" should show "Cucumber Video Description"
    And the field "Ficheiro" should show a video
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first line of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Audio Guide Successfully
    Given I access the "new audioGuide" page
    And I fill the "name" field with "Cucumber Audio Guide"
    And I fill the "description" field with "Cucumber Audio Guide Description"
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp3"
    And I press the "Criar" button
    Then I should be redirected to the details page of the material
    And the field "Material" should show "Cucumber Audio Guide"
    And the field "Tipo" should show "Áudio-guia"
    And the field "Descrição" should show "Cucumber Audio Guide Description"
    And the field "Ficheiro" should show a sound
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first line of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New List Item Successfully
    Given I access the "new listItem" page
    And I fill the "name" field with "Cucumber List Item"
    And I fill the "listItemMarker" field with "*"
    And I fill the "description" field with "Cucumber List Item Description"
    And I fill the "listItemDetailedDescription" field with "Cucumber List Item Very Detailed Text"
    And I press the "Criar" button
    Then I should be redirected to the details page of the material
    And the field "Material" should show "Cucumber List Item"
    And the field "Tipo" should show "Item de Lista"
    And the field "Marcador do Item de Lista" should show "*"
    And the field "Descrição" should show "Cucumber List Item Description"
    And the field "Descrição detalhada" should show "Cucumber List Item Very Detailed Text"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first line of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Emergency Contact Successfully
    Given I access the "new emergencyContact" page
    And I fill the "name" field with "Cucumber Emergency Contact"
    And I fill the "description" field with "Cucumber Emergency Contact Description"
    And I fill the "number" field with "999999999"
    And I press the "Criar" button
    Then I should be redirected to the details page of the material
    And the field "Material" should show "Cucumber Emergency Contact"
    And the field "Tipo" should show "Contacto de Emergência"
    And the field "Descrição" should show "Cucumber Emergency Contact Description"
    And the field "Número" should show "999999999"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first line of the "Registos" table should contain the text "Foi criado."