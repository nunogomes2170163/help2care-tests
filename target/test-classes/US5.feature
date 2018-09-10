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
    And the first entry of the "Registos" table should contain the text "Foi criado."

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
    And the first entry of the "Registos" table should contain the text "Foi criado."

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
    And the first entry of the "Registos" table should contain the text "Foi criado."

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
    And the first entry of the "Registos" table should contain the text "Foi criado."

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
    And the first entry of the "Registos" table should contain the text "Foi criado."

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
    And the first entry of the "Registos" table should contain the text "Foi criado."

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
    And the first entry of the "Registos" table should contain the text "Foi criado."

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
    And the first entry of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Composite Successfully - part 1(create)
    Given I access the "new composite" page - USfive
    When I fill the "name" field with "Cucumber Composite" - USfive
    And I fill the "description" field with "Cucumber Composite Description" - USfive
    And I press the "Adicionar Materiais" button - USfive
    Then I should be redirected to the "add materials" page of the material
    And a table with the title "Outros Materiais" should be displayed
    And the "Outros Materiais" table should have more than 1 entry
    And a table with the title "Outros Materiais" should be displayed
    And the "Materiais Associados ao Material Cucumber Composite" text should be shown - USfive
    And the "Não existem materiais neste Material Composto." text should be shown - USfive

  Scenario: Create New Composite Successfully - part 2(add materials)
    Given I access the "composite add materials" page - USfive
    And the "Outros Materiais" table have more than 2 entries
    When I press the "Adicionar" button of the first row of the "Outros Materiais" table twice
    Then the "Materiais Associados ao Material Cucumber Composite" table should have 2 entries
    And the first entry of the "Materiais Associados ao Material Cucumber Composite" table should contain the text of the first row added
    And the first entry of the "Materiais Associados ao Material Cucumber Composite" table should display "down" button
    And the first entry of the "Materiais Associados ao Material Cucumber Composite" table should display "remove" button
    And the second entry of the "Materiais Associados ao Material Cucumber Composite" table should contain the text of the second row added
    And the second entry of the "Materiais Associados ao Material Cucumber Composite" table should display "up" button
    And the second entry of the "Materiais Associados ao Material Cucumber Composite" table should display "remove" button

  Scenario: Create New Composite Successfully - part 3(arrow down)
    Given I access the "composite add materials" page - USfive
    And the "Materiais Associados ao Material Cucumber Composite" table have 2 entries
    When I press the "down" button of the first entry of the "Materiais Associados ao Material Cucumber Composite" table
    Then the first entry of the "Materiais Associados ao Material Cucumber Composite" table should be the second entry
    And the second entry of the "Materiais Associados ao Material Cucumber Composite" table should be the first entry

  Scenario: Create New Composite Successfully - part 4(arrow up)
    Given I access the "composite add materials" page - USfive
    And the "Materiais Associados ao Material Cucumber Composite" table have 2 entries
    When I press the "up" button of the second entry of the "Materiais Associados ao Material Cucumber Composite" table
    Then the second entry of the "Materiais Associados ao Material Cucumber Composite" table should be the first entry
    Then the first entry of the "Materiais Associados ao Material Cucumber Composite" table should be the second entry

  Scenario: Create New Composite Successfully - part 5(remove)
    Given I access the "composite add materials" page - USfive
    And the "Materiais Associados ao Material Cucumber Composite" table have 2 entries
    When I press the "remove" button of the first entry of the "Materiais Associados ao Material Cucumber Composite" table
    Then the "Materiais Associados ao Material Cucumber Composite" table should 1 entry
    And the first entry of the "Materiais Associados ao Material Cucumber Composite" table should contain the text of the previous second entry

  Scenario: Create New Composite Successfully - part 6(conclude)
    Given I access the "composite add materials" page - USfive
    When I press the "Concluído" button - USfive
    Then I should be redirected to the "details" page of the material
    And the field "Material" should show "Cucumber Composite" - USfive
    And the field "Tipo" should show "Composto" - USfive
    And the field "Descrição" should show "Cucumber Composite Description" - USfive
    And a table with the title "Materiais Associados" should be displayed
    And the "Materiais Associados" table should have at least 1 entry
    And the "Editar" button should be present - USfive
    And the "Bloquear" button should be present - USfive
    And the "Apagar" button should be present - USfive
    And the "Voltar Atrás" button should be present - USfive
    And the first entry of the "Registos" table should contain the text "Foi criado."

  #DETAILS
  Scenario: Access Text Material Details
    Given I access the "materials" page - USfive
    When I press the "Detalhes" button of the "Curativos - 1" material
    Then I should be redirected to the "details" page of "Curativos - 1" material
    And the field "Material" should show "Curativos - 1" - USfive
    And the field "Tipo" should show "Texto" - USfive
    And the field "Descrição" should show "Precauções" - USfive
    And the field "Texto" should show "Antes de fazer um curativo em feridas simples, como em um pequeno corte no dedo, é importante lavar as mãos e, se possível, calçar umas luvas limpas, para evitar contaminar a ferida." - USfive
    And the field "Criador" should show "healthcarePro" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível" - USfive
    And the field "Data da criação" should show "2018-04-16 09:43:08" - USfive
    And the "Editar" button should be present - USfive
    And the "Bloquear" button should be present - USfive
    And the "Apagar" button should be present - USfive
    And the "Voltar Atrás" button should be present - USfive

  Scenario: Access Image Material Details
    Given I access the "materials" page - USfive
    When I press the "Detalhes" button of the "Curativos - 2" material
    Then I should be redirected to the "details" page of "Curativos - 2" material
    And the field "Material" should show "Curativos - 2" - USfive
    And the field "Tipo" should show "Imagem" - USfive
    And the field "Descrição" should show "Demonstração" - USfive
    And the field "Ficheiro" should show an image
    And the field "Criador" should show "healthcarePro" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível" - USfive
    And the field "Data da criação" should show "2018-04-16 09:51:37" - USfive
    And the "Editar" button should be present - USfive
    And the "Bloquear" button should be present - USfive
    And the "Apagar" button should be present - USfive
    And the "Voltar Atrás" button should be present - USfive

  Scenario: Access Video Material Details
    Given I access the "materials" page - USfive
    When I press the "Detalhes" button of the "Administrar comprimidos por sonda" material
    Then I should be redirected to the "details" page of "Administrar comprimidos por sonda" material
    And the field "Material" should show "Administrar comprimidos por sonda" - USfive
    And the field "Tipo" should show "Video" - USfive
    And the field "Descrição" should show "Preparação dos comprimidos para administrar por sonda" - USfive
    And the field "Ficheiro" should show a video
    And the field "Criador" should show "admin" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível" - USfive
    And the field "Data da criação" should show "2018-06-14 22:29:08" - USfive
    And the "Editar" button should be present - USfive
    And the "Bloquear" button should be present - USfive
    And the "Apagar" button should be present - USfive
    And the "Voltar Atrás" button should be present - USfive

  Scenario: Access Audio Guide Material Details
    Given I access the "materials" page - USfive
    When I press the "Detalhes" button of the "teste audio" material
    Then I should be redirected to the "details" page of "teste audio" material
    And the field "Material" should show "teste audio" - USfive
    And the field "Tipo" should show "Áudio-guia" - USfive
    And the field "Descrição" should show "teste audio" - USfive
    And the field "Ficheiro" should show a sound
    And the field "Criador" should show "admin" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da criação" should show "2018-08-08 10:51:55" - USfive
    And the "Editar" button should be present - USfive
    And the "Bloquear" button should be present - USfive
    And the "Apagar" button should be present - USfive
    And the "Voltar Atrás" button should be present - USfive

  Scenario: Access List Item Material Details
    Given I access the "materials" page - USfive
    When I press the "Detalhes" button of the "Colar o adesivo na coxa" material
    Then I should be redirected to the "details" page of "Colar o adesivo na coxa" material
    And the field "Material" should show "Colar o adesivo na coxa" - USfive
    And the field "Tipo" should show "Item de Lista" - USfive
    And the field "Marcador do Item de Lista" should show "2" - USfive
    And the field "Descrição" should show "Colar o adesivo na coxa" - USfive
    And the field "Descrição detalhada" should show "Cole o adesivo na coxa para maior segurança da álgália" - USfive
    And the field "Criador" should show "admin" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível" - USfive
    And the field "Data da criação" should show "2018-06-15 23:12:19" - USfive
    And the "Editar" button should be present - USfive
    And the "Bloquear" button should be present - USfive
    And the "Apagar" button should be present - USfive
    And the "Voltar Atrás" button should be present - USfive

  Scenario: Access Emergency Contact Material Details
    Given I access the "materials" page - USfive
    When I press the "Detalhes" button of the "teste contacto" material
    Then I should be redirected to the "details" page of "teste contacto" material
    And the field "Material" should show "teste contacto" - USfive
    And the field "Tipo" should show "Contacto de Emergência" - USfive
    And the field "Descrição" should show "teste contacto" - USfive
    And the field "Número" should show "919191912" - USfive
    And the field "Criador" should show "admin" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da criação" should show "2018-08-08 10:52:17" - USfive
    And the "Editar" button should be present - USfive
    And the "Bloquear" button should be present - USfive
    And the "Apagar" button should be present - USfive
    And the "Voltar Atrás" button should be present - USfive

  Scenario: Access Annex Link Material Details
    Given I access the "materials" page - USfive
    When I press the "Detalhes" button of the "Curativos - 3" material
    Then I should be redirected to the "details" page of "Curativos - 3" material
    And the field "Material" should show "Curativos - 3" - USfive
    And the field "Tipo" should show "Anexo" - USfive
    And the field "Descrição" should show "Como mudar um penso" - USfive
    And the field "URL" should show "https://www.youtube.com/watch?v=RoXmMD1rVP0&t=3s" - USfive
    And the field "URL" must be clickable
    And the field "Criador" should show "healthcarePro" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível" - USfive
    And the field "Data da criação" should show "2018-04-16 09:54:15" - USfive
    And the "Editar" button should be present - USfive
    And the "Bloquear" button should be present - USfive
    And the "Apagar" button should be present - USfive
    And the "Voltar Atrás" button should be present - USfive

  Scenario: Access Annex File Material Details
    Given I access the "materials" page - USfive
    When I press the "Detalhes" button of the "Cuidar de si" material
    Then I should be redirected to the "details" page of "Cuidar de si" material
    And the field "Material" should show "Cuidar de si" - USfive
    And the field "Tipo" should show "Anexo" - USfive
    And the field "Descrição" should show "Material Texto 2- Sinais de exaustão" - USfive
    And the field "Ficheiro" should show "Cuidar de si.docx" - USfive
    And the field "Ficheiro" must be clickable
    And the field "Criador" should show "anaqueridopro2" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível" - USfive
    And the field "Data da criação" should show "2018-04-19 17:21:35" - USfive
    And the "Editar" button should be present - USfive
    And the "Bloquear" button should be present - USfive
    And the "Apagar" button should be present - USfive
    And the "Voltar Atrás" button should be present - USfive

  Scenario: Access Composite Material Details
    Given I access the "materials" page - USfive
    When I press the "Detalhes" button of the "Engasgamento" material
    Then I should be redirected to the "details" page of "Engasgamento" material
    And the field "Material" should show "Engasgamento" - USfive
    And the field "Tipo" should show "Composto" - USfive
    And the field "Descrição" should show "Engasgamento" - USfive
    And the field "Criador" should show "admin" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível" - USfive
    And the field "Data da criação" should show "2018-07-09 12:27:46" - USfive
    And the "Editar" button should be present - USfive
    And the "Bloquear" button should be present - USfive
    And the "Apagar" button should be present - USfive
    And the "Voltar Atrás" button should be present - USfive
    And a table with the title "Materiais Associados" should be displayed
    And the "Materiais Associados" table should display 5 entries

  #MATERIAL BLOCK & UNBLOCK
  Scenario: Block Material on the Materials page
    Given I access the "materials" page - USfive
    And the "Cucumber Text" material is unblocked
    When I press the "Bloquear" button of the "Cucumber Text" material
    Then I should be redirected to the "materials" page - USfive
    And the "Desbloquear" button should be present in the "Cucumber Text" material options

  Scenario: Unblock Material on the Materials page
    Given I access the "materials" page - USfive
    And the "Cucumber Text" material is blocked
    When I press the "Desbloquear" button of the "Cucumber Text" material
    Then I should be redirected to the "materials" page - USfive
    And the "Bloquear" button should be present in the "Cucumber Text" material options

  #NORMAL EDITS
  Scenario: Access Text Material Edit Page
    Given I access the "details" page of the "Cucumber Text" material
    When I press the "Editar" button - USfive
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Texto" - USfive
    And the field "name" should show "Cucumber Text" - USfive
    And the field "description" should show "Cucumber Text Description" - USfive
    And the field "body" should show "Cucumber Text Very Detailed Text" - USfive
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Text Material Successfully
    Given I access the "edit" page of the "Cucumber Text" material
    When I fill the "type" field with "Texto" - USfive
    And I fill the "name" field with "Cucumber Text Edit" - USfive
    And I fill the "description" field with "Cucumber Text Description Edit" - USfive
    And I fill the "body" field with "Cucumber Text Very Detailed Text Edit" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Text Edit" material
    And the field "Material" should show "Cucumber Text Edit" - USfive
    And the field "Tipo" should show "Texto" - USfive
    And the field "Descrição" should show "Cucumber Text Description Edit" - USfive
    And the field "Texto" should show "Cucumber Text Very Detailed Text Edit" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Image Material Edit Page
    Given I access the "details" page of the "Cucumber Image" material
    When I press the "Editar" button - USfive
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Imagem" - USfive
    And the field "name" should show "Cucumber Image" - USfive
    And the field "description" should show "Cucumber Image Description" - USfive
    And the field "pathImage" should be empty - USfive
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Image Material Successfully Without New Image
    Given I access the "edit" page of the "Cucumber Image" material
    When I fill the "type" field with "Imagem" - USfive
    And I fill the "name" field with "Cucumber Image Edit" - USfive
    And I fill the "description" field with "Cucumber Image Description Edit" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Image Edit" material
    And the field "Material" should show "Cucumber Image Edit" - USfive
    And the field "Tipo" should show "Imagem" - USfive
    And the field "Descrição" should show "Cucumber Image Description Edit" - USfive
    And the field "Ficheiro" should show the same image
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Image Material Successfully With New Image
    Given I access the "edit" page of the "Cucumber Image Edit" material
    When I fill the "type" field with "Imagem" - USfive
    And I fill the "name" field with "Cucumber Image Edit Edit" - USfive
    And I fill the "description" field with "Cucumber Image Description Edit Edit" - USfive
    And I fill the "pathImage" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.jpg" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Image Edit Edit" material
    And the field "Material" should show "Cucumber Image Edit Edit" - USfive
    And the field "Tipo" should show "Imagem" - USfive
    And the field "Descrição" should show "Cucumber Image Description Edit Edit" - USfive
    And the field "Ficheiro" should show a different image
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Video Material Edit Page
    Given I access the "details" page of the "Cucumber Video" material
    When I press the "Editar" button - USfive
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Video" - USfive
    And the field "name" should show "Cucumber Video" - USfive
    And the field "description" should show "Cucumber Video Description" - USfive
    And the field "pathVideo" should be empty - USfive
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Video Material Successfully Without New Video
    Given I access the "edit" page of the "Cucumber Video" material
    When I fill the "type" field with "Video" - USfive
    And I fill the "name" field with "Cucumber Video Edit" - USfive
    And I fill the "description" field with "Cucumber Video Description Edit" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Video Edit" material
    And the field "Material" should show "Cucumber Video Edit" - USfive
    And the field "Tipo" should show "Video" - USfive
    And the field "Descrição" should show "Cucumber Video Description Edit" - USfive
    And the field "Ficheiro" should show the same video
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Video Material Successfully With New Video
    Given I access the "edit" page of the "Cucumber Video Edit" material
    When I fill the "type" field with "Video" - USfive
    And I fill the "name" field with "Cucumber Video Edit Edit" - USfive
    And I fill the "description" field with "Cucumber Video Description Edit Edit" - USfive
    And I fill the "pathVideo" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.mp4" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Video Edit Edit" material
    And the field "Material" should show "Cucumber Video Edit Edit" - USfive
    And the field "Tipo" should show "Video" - USfive
    And the field "Descrição" should show "Cucumber Video Description Edit Edit" - USfive
    And the field "Ficheiro" should show a different video
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Audio Guide Material Edit Page
    Given I access the "details" page of the "Cucumber Audio Guide" material
    When I press the "Editar" button - USfive
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Áudio-guia" - USfive
    And the field "name" should show "Cucumber Audio Guide" - USfive
    And the field "description" should show "Cucumber Audio Guide Description" - USfive
    And the field "pathAudioGuide" should be empty - USfive
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Audio Guide Material Successfully Without New Audio Guide
    Given I access the "edit" page of the "Cucumber Audio Guide" material
    When I fill the "type" field with "Áudio-guia" - USfive
    And I fill the "name" field with "Cucumber Audio Guide Edit" - USfive
    And I fill the "description" field with "Cucumber Audio Guide Description Edit" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Audio Guide Edit" material
    And the field "Material" should show "Cucumber Audio Guide Edit" - USfive
    And the field "Tipo" should show "Áudio-guia" - USfive
    And the field "Descrição" should show "Cucumber Audio Guide Description Edit" - USfive
    And the field "Ficheiro" should show the same audio guide
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Audio Guide Material Successfully With New Audio Guide
    Given I access the "edit" page of the "Cucumber Audio Guide Edit" material
    When I fill the "type" field with "Áudio-guia" - USfive
    And I fill the "name" field with "Cucumber Audio Guide Edit Edit" - USfive
    And I fill the "description" field with "Cucumber Audio Guide Description Edit Edit" - USfive
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.mp3" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Audio Guide Edit Edit" material
    And the field "Material" should show "Cucumber Audio Guide Edit Edit" - USfive
    And the field "Tipo" should show "Áudio-guia" - USfive
    And the field "Descrição" should show "Cucumber Audio Guide Description Edit Edit" - USfive
    And the field "Ficheiro" should show a different audio guide
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access List Item Material Edit Page
    Given I access the "details" page of the "Cucumber List Item" material
    When I press the "Editar" button - USfive
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Item de Lista" - USfive
    And the field "name" should show "Cucumber List Item" - USfive
    And the field "listItemMarker" should show "*" - USfive
    And the field "description" should show "Cucumber List Item Description" - USfive
    And the field "listItemDetailedDescription" should show "Cucumber List Item Very Detailed Text" - USfive
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit List Item Material Successfully
    Given I access the "edit" page of the "Cucumber List Item" material
    When I fill the "type" field with "Item de Lista" - USfive
    And I fill the "name" field with "Cucumber List Item Edit" - USfive
    And I fill the "listItemMarker" field with "1" - USfive
    And I fill the "description" field with "Cucumber List Item Description Edit" - USfive
    And I fill the "listItemDetailedDescription" field with "Cucumber List Item Very Detailed Text Edit" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber List Item Edit" material
    And the field "Material" should show "Cucumber List Item Edit" - USfive
    And the field "Tipo" should show "Item de Lista" - USfive
    And the field "Marcador do Item de Lista" should show "1" - USfive
    And the field "Descrição" should show "Cucumber List Item Description Edit" - USfive
    And the field "Descrição detalhada" should show "Cucumber List Item Very Detailed Text Edit" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Emergency Contact Material Edit Page
    Given I access the "details" page of the "Cucumber Emergency Contact" material
    When I press the "Editar" button - USfive
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Contacto de Emergência" - USfive
    And the field "name" should show "Cucumber Emergency Contact" - USfive
    And the field "description" should show "Cucumber Emergency Contact Description" - USfive
    And the field "number" should show "999999999" - USfive
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Emergency Contact Material Successfully
    Given I access the "edit" page of the "Cucumber Emergency Contact" material
    When I fill the "type" field with "Contacto de Emergência" - USfive
    And I fill the "name" field with "Cucumber Emergency Contact Edit" - USfive
    And I fill the "description" field with "Cucumber Emergency Contact Description Edit" - USfive
    And I fill the "number" field with "888888888" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Emergency Contact Edit" material
    And the field "Material" should show "Cucumber Emergency Contact Edit" - USfive
    And the field "Tipo" should show "Contacto de Emergência" - USfive
    And the field "Descrição" should show "Cucumber Emergency Contact Description Edit" - USfive
    And the field "Número" should show "888888888" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Annex Link Material Edit Page
    Given I access the "details" page of the "Cucumber Annex Link" material
    When I press the "Editar" button - USfive
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Anexo" - USfive
    And the field "name" should show "Cucumber Annex Link" - USfive
    And the field "description" should show "Cucumber Annex Link Description" - USfive
    And the field "selectType" should show "Link (Website, Video externo)" - USfive
    And the field "url" should show "https://www.youtube.com/watch?v=RoXmMD1rVP0&t=3s" - USfive
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Annex Link Material Successfully
    Given I access the "edit" page of the "Cucumber Annex Link" material
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "name" field with "Cucumber Annex Link Edit" - USfive
    And I fill the "description" field with "Cucumber Annex Link Description Edit" - USfive
    And I fill the "selectType" field with "Link (Website, Video externo)" - USfive
    And I fill the "url" field with "https://www.youtube.com/watch?v=n_GL84Rp0aA" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Annex Link Edit" material
    And the field "Material" should show "Cucumber Annex Link Edit" - USfive
    And the field "Tipo" should show "Anexo" - USfive
    And the field "Descrição" should show "Cucumber Annex Link Description Edit" - USfive
    And the field "URL" should show "https://www.youtube.com/watch?v=n_GL84Rp0aA" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Annex File Material Edit Page
    Given I access the "details" page of the "Cucumber Annex File" material
    When I press the "Editar" button - USfive
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Anexo" - USfive
    And the field "name" should show "Cucumber Annex File" - USfive
    And the field "description" should show "Cucumber Annex File Description" - USfive
    And the field "selectType" should show "Ficheiro (PDF, docx, ...)" - USfive
    And the field "pathAnnex" should be empty - USfive
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Annex File Material Successfully Without New Annex File
    Given I access the "edit" page of the "Cucumber Annex File" material
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "name" field with "Cucumber Annex File Edit" - USfive
    And I fill the "description" field with "Cucumber Annex File Description Edit" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Annex File Edit" material
    And the field "Material" should show "Cucumber Annex File Edit" - USfive
    And the field "Tipo" should show "Anexo" - USfive
    And the field "Descrição" should show "Cucumber Annex File Description Edit" - USfive
    And the field "Ficheiro" should show the same annex file
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Annex File Material Successfully With New Annex File
    Given I access the "edit" page of the "Cucumber Annex File Edit" material
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "name" field with "Cucumber Annex File Edit Edit" - USfive
    And I fill the "description" field with "Cucumber Annex File Description Edit Edit" - USfive
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.docx" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Annex File Edit Edit" material
    And the field "Material" should show "Cucumber Annex File Edit Edit" - USfive
    And the field "Tipo" should show "Anexo" - USfive
    And the field "Descrição" should show "Cucumber Annex File Description Edit Edit" - USfive
    And the field "Ficheiro" should show a different annex file
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Composite Material Edit Page
    Given I access the "details" page of the "Cucumber Composite" material
    When I press the "Editar" button - USfive
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Composto" - USfive
    And the field "name" should show "Cucumber Composite" - USfive
    And the field "description" should show "Cucumber Composite Description" - USfive
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Composite Material Successfully
    Given I access the "edit" page of the "Cucumber Composite" material
    When I fill the "type" field with "Composto" - USfive
    And I fill the "name" field with "Cucumber Composite Edit" - USfive
    And I fill the "description" field with "Cucumber Composite Description Edit" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Composite Edit" material
    And the field "Material" should show "Cucumber Composite Edit" - USfive
    And the field "Tipo" should show "Composto" - USfive
    And the field "Descrição" should show "Cucumber Composite Description Edit" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  #CHANGE TYPE EDITS
  Scenario: Edit Text Material to Image Material - part 1
    Given I access the "edit" page of the "Cucumber Text Edit" material
    When I fill the "type" field with "Imagem" - USfive
    Then the field "type" should be displayed
    And the field "name" should be displayed
    And the field "description" should be displayed
    And the field "pathImage" should be displayed
    And the field "body" should not be displayed
    And the field "listItemMarker" should not be displayed
    And the field "listItemDetailedDescription" should not be displayed
    And the field "pathVideo" should not be displayed
    And the field "pathAudioGuide" should not be displayed
    And the field "selectType" should not be displayed
    And the field "url" should not be displayed
    And the field "pathAnnex" should not be displayed
    And the field "number" should not be displayed
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Text Material to Image Material - part 2
    Given I access the "edit" page of the "Cucumber Text Edit" material
    When I fill the "type" field with "Imagem" - USfive
    And I fill the "name" field with "Cucumber Text Image" - USfive
    And I fill the "description" field with "Cucumber Text Image Description" - USfive
    And I fill the "pathImage" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Text Image" material
    And the field "Material" should show "Cucumber Text Image" - USfive
    And the field "Tipo" should show "Imagem" - USfive
    And the field "Descrição" should show "Cucumber Text Image Description" - USfive
    And the field "Ficheiro" should show an image
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Image Material to Video Material - part 1
    Given I access the "edit" page of the "Cucumber Text Image" material
    When I fill the "type" field with "Video" - USfive
    Then the field "type" should be displayed
    And the field "name" should be displayed
    And the field "description" should be displayed
    And the field "pathVideo" should be displayed
    And the field "body" should not be displayed
    And the field "listItemMarker" should not be displayed
    And the field "listItemDetailedDescription" should not be displayed
    And the field "pathImage" should not be displayed
    And the field "pathAudioGuide" should not be displayed
    And the field "selectType" should not be displayed
    And the field "url" should not be displayed
    And the field "pathAnnex" should not be displayed
    And the field "number" should not be displayed
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Image Material to Video Material - part 2
    Given I access the "edit" page of the "Cucumber Text Image" material
    When I fill the "type" field with "Video" - USfive
    And I fill the "name" field with "Cucumber Image Video" - USfive
    And I fill the "description" field with "Cucumber Image Video Description" - USfive
    And I fill the "pathVideo" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp4" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Image Video" material
    And the field "Material" should show "Cucumber Image Video" - USfive
    And the field "Tipo" should show "Video" - USfive
    And the field "Descrição" should show "Cucumber Image Video Description" - USfive
    And the field "Ficheiro" should show a video
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Video Material to Audio Guide Material - part 1
    Given I access the "edit" page of the "Cucumber Image Video" material
    When I fill the "type" field with "Áudio-guia" - USfive
    Then the field "type" should be displayed
    And the field "name" should be displayed
    And the field "description" should be displayed
    And the field "pathAudioGuide" should be displayed
    And the field "body" should not be displayed
    And the field "listItemMarker" should not be displayed
    And the field "listItemDetailedDescription" should not be displayed
    And the field "pathImage" should not be displayed
    And the field "pathVideo" should not be displayed
    And the field "selectType" should not be displayed
    And the field "url" should not be displayed
    And the field "pathAnnex" should not be displayed
    And the field "number" should not be displayed
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Video Material to Audio Guide Material - part 2
    Given I access the "edit" page of the "Cucumber Image Video" material
    When I fill the "type" field with "Áudio-guia" - USfive
    And I fill the "name" field with "Cucumber Video Audio Guide" - USfive
    And I fill the "description" field with "Cucumber Video Audio Guide Description" - USfive
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp3" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Video Audio Guide" material
    And the field "Material" should show "Cucumber Video Audio Guide" - USfive
    And the field "Tipo" should show "Áudio-guia" - USfive
    And the field "Descrição" should show "Cucumber Video Audio Guide Description" - USfive
    And the field "Ficheiro" should show a audio guide
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Audio Guide Material to List Item Material - part 1
    Given I access the "edit" page of the "Cucumber Video Audio Guide" material
    When I fill the "type" field with "Item de Lista" - USfive
    Then the field "type" should be displayed
    And the field "name" should be displayed
    And the field "description" should be displayed
    And the field "listItemMarker" should be displayed
    And the field "listItemDetailedDescription" should be displayed
    And the field "body" should not be displayed
    And the field "pathAudioGuide" should not be displayed
    And the field "pathImage" should not be displayed
    And the field "pathVideo" should not be displayed
    And the field "selectType" should not be displayed
    And the field "url" should not be displayed
    And the field "pathAnnex" should not be displayed
    And the field "number" should not be displayed
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Audio Guide Material to List Item Material - part 2
    Given I access the "edit" page of the "Cucumber Video Audio Guide" material
    When I fill the "type" field with "Item de Lista" - USfive
    And I fill the "name" field with "Cucumber Audio Guide List Item" - USfive
    And I fill the "listItemMarker" field with "*" - USfive
    And I fill the "description" field with "Cucumber Audio Guide List Item Description" - USfive
    And I fill the "listItemDetailedDescription" field with "Cucumber Audio Guide List Item Very Detailed Description" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Audio Guide List Item" material
    And the field "Material" should show "Cucumber Audio Guide List Item" - USfive
    And the field "Tipo" should show "Item de Lista" - USfive
    And the field "Marcador do Item de Lista" should show "*" - USfive
    And the field "Descrição" should show "Cucumber Audio Guide List Item Description" - USfive
    And the field "Descrição detalhada" should show "Cucumber Audio Guide List Item Very Detailed Description" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit List Item Material to Emergency Contact Material - part 1
    Given I access the "edit" page of the "Cucumber Audio Guide List Item" material
    When I fill the "type" field with "Contacto de Emergência" - USfive
    Then the field "type" should be displayed
    And the field "name" should be displayed
    And the field "description" should be displayed
    And the field "number" should be displayed
    And the field "body" should not be displayed
    And the field "listItemMarker" should not be displayed
    And the field "listItemDetailedDescription" should not be displayed
    And the field "pathImage" should not be displayed
    And the field "pathVideo" should not be displayed
    And the field "selectType" should not be displayed
    And the field "url" should not be displayed
    And the field "pathAnnex" should not be displayed
    And the field "pathAudioGuide" should not be displayed
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit List Item Material to Emergency Contact Material - part 2
    Given I access the "edit" page of the "Cucumber Audio Guide List Item" material
    When I fill the "type" field with "Contacto de Emergência" - USfive
    And I fill the "name" field with "Cucumber List Item Emergency Contact" - USfive
    And I fill the "description" field with "Cucumber List Item Emergency Contact Description" - USfive
    And I fill the "number" field with "999999999" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber List Item Emergency Contact" material
    And the field "Material" should show "Cucumber List Item Emergency Contact" - USfive
    And the field "Tipo" should show "Contacto de Emergência" - USfive
    And the field "Descrição" should show "Cucumber List Item Emergency Contact Description" - USfive
    And the field "Número" should show "999999999" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Emergency Contact Material to Annex Link Material - part 1
    Given I access the "edit" page of the "Cucumber List Item Emergency Contact" material
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "selectType" field with "Link (Website, Video externo)" - USfive
    Then the field "type" should be displayed
    And the field "name" should be displayed
    And the field "description" should be displayed
    And the field "selectType" should be displayed
    And the field "url" should be displayed
    And the field "body" should not be displayed
    And the field "listItemMarker" should not be displayed
    And the field "listItemDetailedDescription" should not be displayed
    And the field "pathImage" should not be displayed
    And the field "pathVideo" should not be displayed
    And the field "number" should not be displayed
    And the field "pathAnnex" should not be displayed
    And the field "pathAudioGuide" should not be displayed
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Emergency Contact Material to Annex Link Material - part 2
    Given I access the "edit" page of the "Cucumber List Item Emergency Contact" material
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "name" field with "Cucumber Emergency Contact Annex Link" - USfive
    And I fill the "description" field with "Cucumber Emergency Contact Annex Link Description" - USfive
    And I fill the "selectType" field with "Link (Website, Video externo)" - USfive
    And I fill the "url" field with "https://www.youtube.com/watch?v=RoXmMD1rVP0&t=3s" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Emergency Contact Annex Link" material
    And the field "Material" should show "Cucumber Emergency Contact Annex Link" - USfive
    And the field "Tipo" should show "Anexo" - USfive
    And the field "Descrição" should show "Cucumber Emergency Contact Annex Link Description" - USfive
    And the field "URL" should show "https://www.youtube.com/watch?v=RoXmMD1rVP0&t=3s" - USfive
    And the field "URL" must be clickable
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Annex Link Material to Annex File Material - part 1
    Given I access the "edit" page of the "Cucumber Emergency Contact Annex Link" material
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "selectType" field with "Ficheiro (PDF, docx, ...)" - USfive
    Then the field "type" should be displayed
    And the field "name" should be displayed
    And the field "description" should be displayed
    And the field "selectType" should be displayed
    And the field "pathAnnex" should be displayed
    And the field "body" should not be displayed
    And the field "listItemMarker" should not be displayed
    And the field "listItemDetailedDescription" should not be displayed
    And the field "pathImage" should not be displayed
    And the field "pathVideo" should not be displayed
    And the field "number" should not be displayed
    And the field "url" should not be displayed
    And the field "pathAudioGuide" should not be displayed
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Annex Link Material to Annex File Material - part 2
    Given I access the "edit" page of the "Cucumber Emergency Contact Annex Link" material
    When I fill the "type" field with "Anexo" - USfive
    And I fill the "name" field with "Cucumber Annex Link Annex File" - USfive
    And I fill the "description" field with "Cucumber Annex Link Annex File Description" - USfive
    And I fill the "selectType" field with "Ficheiro (PDF, docx, ...)" - USfive
    And I fill the "pathAnnex" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Annex Link Annex File" material
    And the field "Material" should show "Cucumber Annex Link Annex File" - USfive
    And the field "Tipo" should show "Anexo" - USfive
    And the field "Descrição" should show "Cucumber Annex Link Annex File Description" - USfive
    And the field "Ficheiro" should show "Cucumber Annex Link Annex File.pdf" - USfive
    And the field "Ficheiro" must be clickable
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Annex File Material to Composite Material - part 1
    Given I access the "edit" page of the "Cucumber Annex Link Annex File" material
    When I fill the "type" field with "Composto" - USfive
    Then the field "type" should be displayed
    And the field "name" should be displayed
    And the field "description" should be displayed
    And the field "body" should not be displayed
    And the field "listItemMarker" should not be displayed
    And the field "listItemDetailedDescription" should not be displayed
    And the field "pathImage" should not be displayed
    And the field "pathVideo" should not be displayed
    And the field "number" should not be displayed
    And the field "selectType" should be not displayed
    And the field "pathAnnex" should be not displayed
    And the field "url" should not be displayed
    And the field "pathAudioGuide" should not be displayed
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Annex File Material to Composite Material - part 2
    Given I access the "edit" page of the "Cucumber Annex Link Annex File" material
    When I fill the "type" field with "Composto" - USfive
    And I fill the "name" field with "Cucumber Annex File Composite" - USfive
    And I fill the "description" field with "Cucumber Annex File Composite Description" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Annex File Composite" material
    And the field "Material" should show "Cucumber Annex File Composite" - USfive
    And the field "Tipo" should show "Composto" - USfive
    And the field "Descrição" should show "Cucumber Annex File Composite Description" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Composite Material to Text Material - part 1
    Given I access the "edit" page of the "Cucumber Annex File Composite" material
    When I fill the "type" field with "Texto" - USfive
    Then the field "type" should be displayed
    And the field "name" should be displayed
    And the field "description" should be displayed
    And the field "body" should be displayed
    And the field "listItemMarker" should not be displayed
    And the field "listItemDetailedDescription" should not be displayed
    And the field "pathImage" should not be displayed
    And the field "pathVideo" should not be displayed
    And the field "number" should not be displayed
    And the field "selectType" should be not displayed
    And the field "pathAnnex" should be not displayed
    And the field "url" should not be displayed
    And the field "pathAudioGuide" should not be displayed
    And the "Guardar" button should be present - USfive
    And the "Cancelar" button should be present - USfive

  Scenario: Edit Composite Material to Text Material - part 2
    Given I access the "edit" page of the "Cucumber Annex File Composite" material
    When I fill the "type" field with "Texto" - USfive
    And I fill the "name" field with "Cucumber Composite Text" - USfive
    And I fill the "description" field with "Cucumber Composite Text Description" - USfive
    And I fill the "body" field with "Cucumber Composite Text Very Detailed Text" - USfive
    And I press the "Guardar" button - USfive
    Then I should be redirected to the "details" page of the "Cucumber Composite Text" material
    And the field "Material" should show "Cucumber Composite Text" - USfive
    And the field "Tipo" should show "Texto" - USfive
    And the field "Descrição" should show "Cucumber Composite Text Description" - USfive
    And the field "Texto" should show "Cucumber Composite Text Very Detailed Text" - USfive
    And the field "Disponibilidade para o site público" should show "Não está disponível" - USfive
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível" - USfive
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  #DELETE
  Scenario: Delete Material
    Given I access the "details" page of the "Cucumber Text" material
    When I press the "Apagar" button - USfive
    And I press the "Sim" button from the modal
    Then I should be redirected to the "materials" page - USfive
    And the "Cucumber Text" material should not be present in the "materials" table

  #ERRORS
  Scenario Outline: Material name field empty
    Given I access the <page> page
    When the "name" field is empty
    And I press the <button> button
    Then the "O nome tem que ser preenchido." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new text              | Criar   |
      | new image             | Criar   |
      | new video             | Criar   |
      | new audioGuide        | Criar   |
      | new listItem          | Criar   |
      | new emergencyContact  | Criar   |
      | new annex             | Criar   |
      | new composite         | Criar   |
      | edit text             | Guardar |
      | edit image            | Guardar |
      | edit video            | Guardar |
      | edit audioGuide       | Guardar |
      | edit listItem         | Guardar |
      | edit emergencyContact | Guardar |
      | edit annex            | Guardar |
      | edit composite        | Guardar |

  Scenario Outline: Material name field min length
    Given I access the <page> page
    When I fill the "name" field with "12" - USfive
    And I press the <button> button
    Then the "O nome tem que ser preenchido." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new text              | Criar   |
      | new image             | Criar   |
      | new video             | Criar   |
      | new audioGuide        | Criar   |
      | new listItem          | Criar   |
      | new emergencyContact  | Criar   |
      | new annex             | Criar   |
      | new composite         | Criar   |
      | edit text             | Guardar |
      | edit image            | Guardar |
      | edit video            | Guardar |
      | edit audioGuide       | Guardar |
      | edit listItem         | Guardar |
      | edit emergencyContact | Guardar |
      | edit annex            | Guardar |
      | edit composite        | Guardar |

  Scenario Outline: Material name field unique
    Given I access the <page> page
    When I fill the "name" field with "Alimentação por PEG" - USfive
    And I press the <button> button
    Then the "Esse nome já existe. Escolha outro." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new text              | Criar   |
      | new image             | Criar   |
      | new video             | Criar   |
      | new audioGuide        | Criar   |
      | new listItem          | Criar   |
      | new emergencyContact  | Criar   |
      | new annex             | Criar   |
      | new composite         | Criar   |
      | edit text             | Guardar |
      | edit image            | Guardar |
      | edit video            | Guardar |
      | edit audioGuide       | Guardar |
      | edit listItem         | Guardar |
      | edit emergencyContact | Guardar |
      | edit annex            | Guardar |
      | edit composite        | Guardar |

  Scenario Outline: Material description field empty
    Given I access the <page> page
    When the "description" field is empty
    And I press the <button> button
    Then the "A descrição tem que ser preenchida." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new text              | Criar   |
      | new image             | Criar   |
      | new video             | Criar   |
      | new audioGuide        | Criar   |
      | new listItem          | Criar   |
      | new emergencyContact  | Criar   |
      | new annex             | Criar   |
      | new composite         | Criar   |
      | edit text             | Guardar |
      | edit image            | Guardar |
      | edit video            | Guardar |
      | edit audioGuide       | Guardar |
      | edit listItem         | Guardar |
      | edit emergencyContact | Guardar |
      | edit annex            | Guardar |
      | edit composite        | Guardar |

  Scenario Outline: Material description field min length
    Given I access the <page> page
    When I fill the "description" field with "12" - USfive
    And I press the <button> button
    Then the "Esse nome já existe. Escolha outro." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new text              | Criar   |
      | new image             | Criar   |
      | new video             | Criar   |
      | new audioGuide        | Criar   |
      | new listItem          | Criar   |
      | new emergencyContact  | Criar   |
      | new annex             | Criar   |
      | new composite         | Criar   |
      | edit text             | Guardar |
      | edit image            | Guardar |
      | edit video            | Guardar |
      | edit audioGuide       | Guardar |
      | edit listItem         | Guardar |
      | edit emergencyContact | Guardar |
      | edit annex            | Guardar |
      | edit composite        | Guardar |

  Scenario Outline: Material Text body description empty
    Given I access the <page> page
    When the "body" field is empty
    And I press the <button> button
    Then the "O campo texto não pode ser vazio." error message should be shown - USfive
    Examples:
      | page      | button  |
      | new text  | Criar   |
      | edit text | Guardar |

  Scenario Outline: Material Item List marker empty
    Given I access the <page> page
    When the "listItemMarker" field is empty
    And I press the <button> button
    Then the "O campo marcador do item de lista não pode ser vazio." error message should be shown - USfive
    Examples:
      | page          | button  |
      | new itemList  | Criar   |
      | edit itemList | Guardar |

  Scenario Outline: Material Item List marker regex
    Given I access the <page> page
    When I fill the "listItemMarker" field with "asdasd" - USfive
    And I press the <button> button
    Then the "O campo marcador do item de lista só pode conter números (1, 2, ..., x), astericos (*) ou hífens (-)." error message should be shown - USfive
    Examples:
      | page          | button  |
      | new itemList  | Criar   |
      | edit itemList | Guardar |

  Scenario Outline: Material Image file empty
    Given I access the <page> page
    When the "pathImage" field is empty
    And I press the <button> button
    Then the "Introduza uma imagem com um dos seguintes formatos: jpeg, png, jpg, gif, svg." error message should be shown - USfive
    Examples:
      | page       | button  |
      | new image  | Criar   |
      | edit image | Guardar |

  Scenario Outline: Material Image Mime regex
    Given I access the <page> page
    When I fill the "pathImage" field with "video" - USfive
    And I press the <button> button
    Then the "A imagem tem que estar num dos seguintes formatos: jpeg, png, jpg, gif, svg." error message should be shown - USfive
    Examples:
      | page       | button  |
      | new image  | Criar   |
      | edit image | Guardar |

  Scenario Outline: Material Video file empty
    Given I access the <page> page
    When the "pathVideo" field is empty
    And I press the <button> button
    Then the "Introduza um video em formato mp4." error message should be shown - USfive
    Examples:
      | page       | button  |
      | new video  | Criar   |
      | edit video | Guardar |

  Scenario Outline: Material Video Mime regex
    Given I access the <page> page
    When I fill the "pathVideo" field with "image" - USfive
    And I press the <button> button
    Then the "O video tem que ser em formato mp4." error message should be shown - USfive
    Examples:
      | page       | button  |
      | new video  | Criar   |
      | edit video | Guardar |

  Scenario Outline: Material Audio Guide file empty
    Given I access the <page> page
    When the "pathAudioGuide" field is empty
    And I press the <button> button
    Then the "Introduza um guia de áudio em formato mp3." error message should be shown - USfive
    Examples:
      | page            | button  |
      | new audioGuide  | Criar   |
      | edit audioGuide | Guardar |

  Scenario Outline: Material Audio Guide Mime regex
    Given I access the <page> page
    When I fill the "pathAudioGuide" field with "image" - USfive
    And I press the <button> button
    Then the "O áudio-guia tem que ser em formato mp3." error message should be shown - USfive
    Examples:
      | page            | button  |
      | new audioGuide  | Criar   |
      | edit audioGuide | Guardar |

  Scenario Outline: Material Emergency Contact Number number empty
    Given I access the <page> page
    When the "number" field is empty
    And I press the <button> button
    Then the "Introduza um número de contacto." error message should be shown - USfive
    Examples:
      | page                  | button  |
      | new emergencyContact  | Criar   |
      | edit emergencyContact | Guardar |

  Scenario Outline: Material Annex File file empty
    Given I access the <page> page
    When the "pathAnnex" field is empty
    And I press the <button> button
    Then the "Introduza um anexo." error message should be shown - USfive
    Examples:
      | page           | button  |
      | new annexFile  | Criar   |
      | edit annexFile | Guardar |

  Scenario Outline: Material Annex Link link empty
    Given I access the <page> page
    When the "url" field is empty
    And I press the <button> button
    Then the "Introduza um url." error message should be shown - USfive
    Examples:
      | page           | button  |
      | new annexLink  | Criar   |
      | edit annexLink | Guardar |

  Scenario Outline: Material Annex Link link rexeg
    Given I access the <page> page
    When I fill the "url" field with "asdasd" - USfive
    And I press the <button> button
    Then the "Introduza um url válido." error message should be shown - USfive
    Examples:
      | page           | button  |
      | new annexLink  | Criar   |
      | edit annexLink | Guardar |

  Scenario Outline: Material Annex Link link rexeg
    Given I access the <page> material button -USfive
    When I fill the "selectType" field with "Escolha um Tipo" - USfive
    And I press the <button> button
    Then the "Escolha um tipo de anexo." error message should be shown - USfive
    Examples:
      | page       | button  |
      | new annex  | Criar   |
      | edit annex | Guardar |