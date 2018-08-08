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
    When I fill the "name" field with "Cucumber Text"
    And I fill the "description" field with "Cucumber Text Description"
    And I fill the "body" field with "Cucumber Text Very Detailed Text"
    And I press the "Criar" button
    Then I should be redirected to the "details" page of the material
    And the field "Material" should show "Cucumber Text"
    And the field "Tipo" should show "Texto"
    And the field "Descrição" should show "Cucumber Text Description"
    And the field "Texto" should show "Cucumber Text Very Detailed Text"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first entry of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Image Successfully
    Given I access the "new image" page
    When I fill the "name" field with "Cucumber Image"
    And I fill the "description" field with "Cucumber Image Description"
    And I fill the "pathImage" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg"
    And I press the "Criar" button
    Then I should be redirected to the "details" page of the material
    And the field "Material" should show "Cucumber Image"
    And the field "Tipo" should show "Imagem"
    And the field "Descrição" should show "Cucumber Image Description"
    And the field "Ficheiro" should show an image
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first entry of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Video Successfully
    Given I access the "new video" page
    When I fill the "name" field with "Cucumber Video"
    And I fill the "description" field with "Cucumber Video Description"
    And I fill the "pathVideo" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp4"
    And I press the "Criar" button
    Then I should be redirected to the "details" page of the material
    And the field "Material" should show "Cucumber Video"
    And the field "Tipo" should show "Video"
    And the field "Descrição" should show "Cucumber Video Description"
    And the field "Ficheiro" should show a video
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first entry of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Audio Guide Successfully
    Given I access the "new audioGuide" page
    When I fill the "name" field with "Cucumber Audio Guide"
    And I fill the "description" field with "Cucumber Audio Guide Description"
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp3"
    And I press the "Criar" button
    Then I should be redirected to the "details" page of the material
    And the field "Material" should show "Cucumber Audio Guide"
    And the field "Tipo" should show "Áudio-guia"
    And the field "Descrição" should show "Cucumber Audio Guide Description"
    And the field "Ficheiro" should show a sound
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first entry of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New List Item Successfully
    Given I access the "new listItem" page
    When I fill the "name" field with "Cucumber List Item"
    And I fill the "listItemMarker" field with "*"
    And I fill the "description" field with "Cucumber List Item Description"
    And I fill the "listItemDetailedDescription" field with "Cucumber List Item Very Detailed Text"
    And I press the "Criar" button
    Then I should be redirected to the "details" page of the material
    And the field "Material" should show "Cucumber List Item"
    And the field "Tipo" should show "Item de Lista"
    And the field "Marcador do Item de Lista" should show "*"
    And the field "Descrição" should show "Cucumber List Item Description"
    And the field "Descrição detalhada" should show "Cucumber List Item Very Detailed Text"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first entry of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Emergency Contact Successfully
    Given I access the "new emergencyContact" page
    When I fill the "name" field with "Cucumber Emergency Contact"
    And I fill the "description" field with "Cucumber Emergency Contact Description"
    And I fill the "number" field with "999999999"
    And I press the "Criar" button
    Then I should be redirected to the "details" page of the material
    And the field "Material" should show "Cucumber Emergency Contact"
    And the field "Tipo" should show "Contacto de Emergência"
    And the field "Descrição" should show "Cucumber Emergency Contact Description"
    And the field "Número" should show "999999999"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first entry of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Annex Link Successfully
    Given I access the "new annex" page
    When I fill the "name" field with "Cucumber Annex Link"
    And I fill the "description" field with "Cucumber Annex Link Description"
    And I fill the "selectType" field with "Link (Website, Video externo)"
    And I fill the "url" field with "https://www.youtube.com/watch?v=FTQbiNvZqaY"
    And I press the "Criar" button
    Then I should be redirected to the "details" page of the material
    And the field "Material" should show "Cucumber Annex Link"
    And the field "Tipo" should show "Anexo"
    And the field "Descrição" should show "Cucumber Annex Link Description"
    And the field "URL" should show "https://www.youtube.com/watch?v=FTQbiNvZqaY"
    And the field "URL" must be clickable
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first entry of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Annex File Successfully
    Given I access the "new annex" page
    When I fill the "name" field with "Cucumber Annex File"
    And I fill the "description" field with "Cucumber Annex File Description"
    And I fill the "selectType" field with "Ficheiro (PDF, docx, ...)"
    And I fill the "pathAnnex" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf"
    And I press the "Criar" button
    Then I should be redirected to the "details" page of the material
    And the field "Material" should show "Cucumber Annex File"
    And the field "Tipo" should show "Anexo"
    And the field "Descrição" should show "Cucumber Annex File Description"
    And the field "Ficheiro" should show "Cucumber Annex File.pdf"
    And the field "Ficheiro" must be clickable
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first entry of the "Registos" table should contain the text "Foi criado."

  Scenario: Create New Composite Successfully - part 1(create)
    Given I access the "new composite" page
    When I fill the "name" field with "Cucumber Composite"
    And I fill the "description" field with "Cucumber Composite Description"
    And I press the "Adicionar Materiais" button
    Then I should be redirected to the "add materials" page of the material
    And a table with the title "Outros Materiais" should be displayed
    And the "Outros Materiais" table should have more than 1 entry
    And a table with the title "Outros Materiais" should be displayed
    And the "Materiais Associados ao Material Cucumber Composite" text should be shown
    And the "Não existem materiais neste Material Composto." text should be shown

  Scenario: Create New Composite Successfully - part 2(add materials)
    Given I access the "composite add materials" page
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
    Given I access the "composite add materials" page
    And the "Materiais Associados ao Material Cucumber Composite" table have 2 entries
    When I press the "down" button of the first entry of the "Materiais Associados ao Material Cucumber Composite" table
    Then the first entry of the "Materiais Associados ao Material Cucumber Composite" table should be the second entry
    And the second entry of the "Materiais Associados ao Material Cucumber Composite" table should be the first entry

  Scenario: Create New Composite Successfully - part 4(arrow up)
    Given I access the "composite add materials" page
    And the "Materiais Associados ao Material Cucumber Composite" table have 2 entries
    When I press the "up" button of the second entry of the "Materiais Associados ao Material Cucumber Composite" table
    Then the second entry of the "Materiais Associados ao Material Cucumber Composite" table should be the first entry
    Then the first entry of the "Materiais Associados ao Material Cucumber Composite" table should be the second entry

  Scenario: Create New Composite Successfully - part 5(remove)
    Given I access the "composite add materials" page
    And the "Materiais Associados ao Material Cucumber Composite" table have 2 entries
    When I press the "remove" button of the first entry of the "Materiais Associados ao Material Cucumber Composite" table
    Then the "Materiais Associados ao Material Cucumber Composite" table should 1 entry
    And the first entry of the "Materiais Associados ao Material Cucumber Composite" table should contain the text of the previous second entry

  Scenario: Create New Composite Successfully - part 6(conclude)
    Given I access the "composite add materials" page
    When I press the "Concluído" button
    Then I should be redirected to the "details" page of the material
    And the field "Material" should show "Cucumber Composite"
    And the field "Tipo" should show "Composto"
    And the field "Descrição" should show "Cucumber Composite Description"
    And a table with the title "Materiais Associados" should be displayed
    And the "Materiais Associados" table should have at least 1 entry
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first entry of the "Registos" table should contain the text "Foi criado."

  #DETAILS
  Scenario: Access Text Material Details
    Given I access the "materials" page
    When I press the "Detalhes" button of the "Curativos - 1" material
    Then I should be redirected to the "details" page of "Curativos - 1" material
    And the field "Material" should show "Curativos - 1"
    And the field "Tipo" should show "Texto"
    And the field "Descrição" should show "Precauções"
    And the field "Texto" should show "Antes de fazer um curativo em feridas simples, como em um pequeno corte no dedo, é importante lavar as mãos e, se possível, calçar umas luvas limpas, para evitar contaminar a ferida."
    And the field "Criador" should show "healthcarePro"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível"
    And the field "Data da criação" should show "2018-04-16 09:43:08"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Image Material Details
    Given I access the "materials" page
    When I press the "Detalhes" button of the "Curativos - 2" material
    Then I should be redirected to the "details" page of "Curativos - 2" material
    And the field "Material" should show "Curativos - 2"
    And the field "Tipo" should show "Imagem"
    And the field "Descrição" should show "Demonstração"
    And the field "Ficheiro" should show an image
    And the field "Criador" should show "healthcarePro"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível"
    And the field "Data da criação" should show "2018-04-16 09:51:37"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Video Material Details
    Given I access the "materials" page
    When I press the "Detalhes" button of the "Administrar comprimidos por sonda" material
    Then I should be redirected to the "details" page of "Administrar comprimidos por sonda" material
    And the field "Material" should show "Administrar comprimidos por sonda"
    And the field "Tipo" should show "Video"
    And the field "Descrição" should show "Preparação dos comprimidos para administrar por sonda"
    And the field "Ficheiro" should show a video
    And the field "Criador" should show "admin"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível"
    And the field "Data da criação" should show "2018-06-14 22:29:08"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Audio Guide Material Details
    Given I access the "materials" page
    When I press the "Detalhes" button of the "teste audio" material
    Then I should be redirected to the "details" page of "teste audio" material
    And the field "Material" should show "teste audio"
    And the field "Tipo" should show "Áudio-guia"
    And the field "Descrição" should show "teste audio"
    And the field "Ficheiro" should show a sound
    And the field "Criador" should show "admin"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da criação" should show "2018-08-08 10:51:55"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access List Item Material Details
    Given I access the "materials" page
    When I press the "Detalhes" button of the "Colar o adesivo na coxa" material
    Then I should be redirected to the "details" page of "Colar o adesivo na coxa" material
    And the field "Material" should show "Colar o adesivo na coxa"
    And the field "Tipo" should show "Item de Lista"
    And the field "Marcador do Item de Lista" should show "2"
    And the field "Descrição" should show "Colar o adesivo na coxa"
    And the field "Descrição detalhada" should show "Cole o adesivo na coxa para maior segurança da álgália"
    And the field "Criador" should show "admin"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível"
    And the field "Data da criação" should show "2018-06-15 23:12:19"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Emergency Contact Material Details
    Given I access the "materials" page
    When I press the "Detalhes" button of the "teste contacto" material
    Then I should be redirected to the "details" page of "teste contacto" material
    And the field "Material" should show "teste contacto"
    And the field "Tipo" should show "Contacto de Emergência"
    And the field "Descrição" should show "teste contacto"
    And the field "Número" should show "919191912"
    And the field "Criador" should show "admin"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da criação" should show "2018-08-08 10:52:17"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Annex Link Material Details
    Given I access the "materials" page
    When I press the "Detalhes" button of the "Curativos - 3" material
    Then I should be redirected to the "details" page of "Curativos - 3" material
    And the field "Material" should show "Curativos - 3"
    And the field "Tipo" should show "Anexo"
    And the field "Descrição" should show "Como mudar um penso"
    And the field "URL" should show "https://www.youtube.com/watch?v=RoXmMD1rVP0&t=3s"
    And the field "URL" must be clickable
    And the field "Criador" should show "healthcarePro"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível"
    And the field "Data da criação" should show "2018-04-16 09:54:15"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Annex File Material Details
    Given I access the "materials" page
    When I press the "Detalhes" button of the "Cuidar de si" material
    Then I should be redirected to the "details" page of "Cuidar de si" material
    And the field "Material" should show "Cuidar de si"
    And the field "Tipo" should show "Anexo"
    And the field "Descrição" should show "Material Texto 2- Sinais de exaustão"
    And the field "Ficheiro" should show "Cuidar de si.docx"
    And the field "Ficheiro" must be clickable
    And the field "Criador" should show "anaqueridopro2"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível"
    And the field "Data da criação" should show "2018-04-19 17:21:35"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Composite Material Details
    Given I access the "materials" page
    When I press the "Detalhes" button of the "Engasgamento" material
    Then I should be redirected to the "details" page of "Engasgamento" material
    And the field "Material" should show "Engasgamento"
    And the field "Tipo" should show "Composto"
    And the field "Descrição" should show "Engasgamento"
    And the field "Criador" should show "admin"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Está disponível"
    And the field "Data da criação" should show "2018-07-09 12:27:46"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And a table with the title "Materiais Associados" should be displayed
    And the "Materiais Associados" table should display 5 entries

  #MATERIAL BLOCK & UNBLOCK
  Scenario: Block Material on the Materials page
    Given I access the "materials" page
    And the "Cucumber Text" material is unblocked
    When I press the "Bloquear" button of the "Cucumber Text" material
    Then I should be redirected to the "materials" page
    And the "Desbloquear" button should be present in the "Cucumber Text" material options

  Scenario: Unblock Material on the Materials page
    Given I access the "materials" page
    And the "Cucumber Text" material is blocked
    When I press the "Desbloquear" button of the "Cucumber Text" material
    Then I should be redirected to the "materials" page
    And the "Bloquear" button should be present in the "Cucumber Text" material options

  #NORMAL EDITS
  Scenario: Access Text Material Edit Page
    Given I access the "details" page of the "Cucumber Text" material
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Texto"
    And the field "name" should show "Cucumber Text"
    And the field "description" should show "Cucumber Text Description"
    And the field "body" should show "Cucumber Text Very Detailed Text"
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Text Material Successfully
    Given I access the "edit" page of the "Cucumber Text" material
    When I fill the "type" field with "Texto"
    And I fill the "name" field with "Cucumber Text Edit"
    And I fill the "description" field with "Cucumber Text Description Edit"
    And I fill the "body" field with "Cucumber Text Very Detailed Text Edit"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Text Edit" material
    And the field "Material" should show "Cucumber Text Edit"
    And the field "Tipo" should show "Texto"
    And the field "Descrição" should show "Cucumber Text Description Edit"
    And the field "Texto" should show "Cucumber Text Very Detailed Text Edit"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Image Material Edit Page
    Given I access the "details" page of the "Cucumber Image" material
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Imagem"
    And the field "name" should show "Cucumber Image"
    And the field "description" should show "Cucumber Image Description"
    And the field "pathImage" should be empty
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Image Material Successfully Without New Image
    Given I access the "edit" page of the "Cucumber Image" material
    When I fill the "type" field with "Imagem"
    And I fill the "name" field with "Cucumber Image Edit"
    And I fill the "description" field with "Cucumber Image Description Edit"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Image Edit" material
    And the field "Material" should show "Cucumber Image Edit"
    And the field "Tipo" should show "Imagem"
    And the field "Descrição" should show "Cucumber Image Description Edit"
    And the field "Ficheiro" should show the same image
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Image Material Successfully With New Image
    Given I access the "edit" page of the "Cucumber Image Edit" material
    When I fill the "type" field with "Imagem"
    And I fill the "name" field with "Cucumber Image Edit Edit"
    And I fill the "description" field with "Cucumber Image Description Edit Edit"
    And I fill the "pathImage" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.jpg"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Image Edit Edit" material
    And the field "Material" should show "Cucumber Image Edit Edit"
    And the field "Tipo" should show "Imagem"
    And the field "Descrição" should show "Cucumber Image Description Edit Edit"
    And the field "Ficheiro" should show a different image
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Video Material Edit Page
    Given I access the "details" page of the "Cucumber Video" material
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Video"
    And the field "name" should show "Cucumber Video"
    And the field "description" should show "Cucumber Video Description"
    And the field "pathVideo" should be empty
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Video Material Successfully Without New Video
    Given I access the "edit" page of the "Cucumber Video" material
    When I fill the "type" field with "Video"
    And I fill the "name" field with "Cucumber Video Edit"
    And I fill the "description" field with "Cucumber Video Description Edit"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Video Edit" material
    And the field "Material" should show "Cucumber Video Edit"
    And the field "Tipo" should show "Video"
    And the field "Descrição" should show "Cucumber Video Description Edit"
    And the field "Ficheiro" should show the same video
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Video Material Successfully With New Video
    Given I access the "edit" page of the "Cucumber Video Edit" material
    When I fill the "type" field with "Video"
    And I fill the "name" field with "Cucumber Video Edit Edit"
    And I fill the "description" field with "Cucumber Video Description Edit Edit"
    And I fill the "pathVideo" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.mp4"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Video Edit Edit" material
    And the field "Material" should show "Cucumber Video Edit Edit"
    And the field "Tipo" should show "Video"
    And the field "Descrição" should show "Cucumber Video Description Edit Edit"
    And the field "Ficheiro" should show a different video
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Audio Guide Material Edit Page
    Given I access the "details" page of the "Cucumber Audio Guide" material
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Áudio-guia"
    And the field "name" should show "Cucumber Audio Guide"
    And the field "description" should show "Cucumber Audio Guide Description"
    And the field "pathAudioGuide" should be empty
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Audio Guide Material Successfully Without New Audio Guide
    Given I access the "edit" page of the "Cucumber Audio Guide" material
    When I fill the "type" field with "Áudio-guia"
    And I fill the "name" field with "Cucumber Audio Guide Edit"
    And I fill the "description" field with "Cucumber Audio Guide Description Edit"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Audio Guide Edit" material
    And the field "Material" should show "Cucumber Audio Guide Edit"
    And the field "Tipo" should show "Áudio-guia"
    And the field "Descrição" should show "Cucumber Audio Guide Description Edit"
    And the field "Ficheiro" should show the same audio guide
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Audio Guide Material Successfully With New Audio Guide
    Given I access the "edit" page of the "Cucumber Audio Guide Edit" material
    When I fill the "type" field with "Áudio-guia"
    And I fill the "name" field with "Cucumber Audio Guide Edit Edit"
    And I fill the "description" field with "Cucumber Audio Guide Description Edit Edit"
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.mp3"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Audio Guide Edit Edit" material
    And the field "Material" should show "Cucumber Audio Guide Edit Edit"
    And the field "Tipo" should show "Áudio-guia"
    And the field "Descrição" should show "Cucumber Audio Guide Description Edit Edit"
    And the field "Ficheiro" should show a different audio guide
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access List Item Material Edit Page
    Given I access the "details" page of the "Cucumber List Item" material
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Item de Lista"
    And the field "name" should show "Cucumber List Item"
    And the field "listItemMarker" should show "*"
    And the field "description" should show "Cucumber List Item Description"
    And the field "listItemDetailedDescription" should show "Cucumber List Item Very Detailed Text"
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit List Item Material Successfully
    Given I access the "edit" page of the "Cucumber List Item" material
    When I fill the "type" field with "Item de Lista"
    And I fill the "name" field with "Cucumber List Item Edit"
    And I fill the "listItemMarker" field with "1"
    And I fill the "description" field with "Cucumber List Item Description Edit"
    And I fill the "listItemDetailedDescription" field with "Cucumber List Item Very Detailed Text Edit"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber List Item Edit" material
    And the field "Material" should show "Cucumber List Item Edit"
    And the field "Tipo" should show "Item de Lista"
    And the field "Marcador do Item de Lista" should show "1"
    And the field "Descrição" should show "Cucumber List Item Description Edit"
    And the field "Descrição detalhada" should show "Cucumber List Item Very Detailed Text Edit"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Emergency Contact Material Edit Page
    Given I access the "details" page of the "Cucumber Emergency Contact" material
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Contacto de Emergência"
    And the field "name" should show "Cucumber Emergency Contact"
    And the field "description" should show "Cucumber Emergency Contact Description"
    And the field "number" should show "999999999"
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Emergency Contact Material Successfully
    Given I access the "edit" page of the "Cucumber Emergency Contact" material
    When I fill the "type" field with "Contacto de Emergência"
    And I fill the "name" field with "Cucumber Emergency Contact Edit"
    And I fill the "description" field with "Cucumber Emergency Contact Description Edit"
    And I fill the "number" field with "888888888"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Emergency Contact Edit" material
    And the field "Material" should show "Cucumber Emergency Contact Edit"
    And the field "Tipo" should show "Contacto de Emergência"
    And the field "Descrição" should show "Cucumber Emergency Contact Description Edit"
    And the field "Número" should show "888888888"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Annex Link Material Edit Page
    Given I access the "details" page of the "Cucumber Annex Link" material
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Anexo"
    And the field "name" should show "Cucumber Annex Link"
    And the field "description" should show "Cucumber Annex Link Description"
    And the field "selectType" should show "Link (Website, Video externo)"
    And the field "url" should show "https://www.youtube.com/watch?v=RoXmMD1rVP0&t=3s"
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Annex Link Material Successfully
    Given I access the "edit" page of the "Cucumber Annex Link" material
    When I fill the "type" field with "Anexo"
    And I fill the "name" field with "Cucumber Annex Link Edit"
    And I fill the "description" field with "Cucumber Annex Link Description Edit"
    And I fill the "selectType" field with "Link (Website, Video externo)"
    And I fill the "url" field with "https://www.youtube.com/watch?v=n_GL84Rp0aA"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Annex Link Edit" material
    And the field "Material" should show "Cucumber Annex Link Edit"
    And the field "Tipo" should show "Anexo"
    And the field "Descrição" should show "Cucumber Annex Link Description Edit"
    And the field "URL" should show "https://www.youtube.com/watch?v=n_GL84Rp0aA"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Annex File Material Edit Page
    Given I access the "details" page of the "Cucumber Annex File" material
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Anexo"
    And the field "name" should show "Cucumber Annex File"
    And the field "description" should show "Cucumber Annex File Description"
    And the field "selectType" should show "Ficheiro (PDF, docx, ...)"
    And the field "pathAnnex" should be empty
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Annex File Material Successfully Without New Annex File
    Given I access the "edit" page of the "Cucumber Annex File" material
    When I fill the "type" field with "Anexo"
    And I fill the "name" field with "Cucumber Annex File Edit"
    And I fill the "description" field with "Cucumber Annex File Description Edit"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Annex File Edit" material
    And the field "Material" should show "Cucumber Annex File Edit"
    And the field "Tipo" should show "Anexo"
    And the field "Descrição" should show "Cucumber Annex File Description Edit"
    And the field "Ficheiro" should show the same annex file
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Annex File Material Successfully With New Annex File
    Given I access the "edit" page of the "Cucumber Annex File Edit" material
    When I fill the "type" field with "Anexo"
    And I fill the "name" field with "Cucumber Annex File Edit Edit"
    And I fill the "description" field with "Cucumber Annex File Description Edit Edit"
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.docx"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Annex File Edit Edit" material
    And the field "Material" should show "Cucumber Annex File Edit Edit"
    And the field "Tipo" should show "Anexo"
    And the field "Descrição" should show "Cucumber Annex File Description Edit Edit"
    And the field "Ficheiro" should show a different annex file
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Access Composite Material Edit Page
    Given I access the "details" page of the "Cucumber Composite" material
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the material
    And the field "type" should show "Composto"
    And the field "name" should show "Cucumber Composite"
    And the field "description" should show "Cucumber Composite Description"
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Composite Material Successfully
    Given I access the "edit" page of the "Cucumber Composite" material
    When I fill the "type" field with "Composto"
    And I fill the "name" field with "Cucumber Composite Edit"
    And I fill the "description" field with "Cucumber Composite Description Edit"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Composite Edit" material
    And the field "Material" should show "Cucumber Composite Edit"
    And the field "Tipo" should show "Composto"
    And the field "Descrição" should show "Cucumber Composite Description Edit"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  #CHANGE TYPE EDITS
  Scenario: Edit Text Material to Image Material - part 1
    Given I access the "edit" page of the "Cucumber Text Edit" material
    When I fill the "type" field with "Imagem"
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
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Text Material to Image Material - part 2
    Given I access the "edit" page of the "Cucumber Text Edit" material
    When I fill the "type" field with "Imagem"
    And I fill the "name" field with "Cucumber Text Image"
    And I fill the "description" field with "Cucumber Text Image Description"
    And I fill the "pathImage" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.jpg"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Text Image" material
    And the field "Material" should show "Cucumber Text Image"
    And the field "Tipo" should show "Imagem"
    And the field "Descrição" should show "Cucumber Text Image Description"
    And the field "Ficheiro" should show an image
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Image Material to Video Material - part 1
    Given I access the "edit" page of the "Cucumber Text Image" material
    When I fill the "type" field with "Video"
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
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Image Material to Video Material - part 2
    Given I access the "edit" page of the "Cucumber Text Image" material
    When I fill the "type" field with "Video"
    And I fill the "name" field with "Cucumber Image Video"
    And I fill the "description" field with "Cucumber Image Video Description"
    And I fill the "pathVideo" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp4"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Image Video" material
    And the field "Material" should show "Cucumber Image Video"
    And the field "Tipo" should show "Video"
    And the field "Descrição" should show "Cucumber Image Video Description"
    And the field "Ficheiro" should show a video
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Video Material to Audio Guide Material - part 1
    Given I access the "edit" page of the "Cucumber Image Video" material
    When I fill the "type" field with "Áudio-guia"
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
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Video Material to Audio Guide Material - part 2
    Given I access the "edit" page of the "Cucumber Image Video" material
    When I fill the "type" field with "Áudio-guia"
    And I fill the "name" field with "Cucumber Video Audio Guide"
    And I fill the "description" field with "Cucumber Video Audio Guide Description"
    And I fill the "pathAudioGuide" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.mp3"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Video Audio Guide" material
    And the field "Material" should show "Cucumber Video Audio Guide"
    And the field "Tipo" should show "Áudio-guia"
    And the field "Descrição" should show "Cucumber Video Audio Guide Description"
    And the field "Ficheiro" should show a audio guide
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Audio Guide Material to List Item Material - part 1
    Given I access the "edit" page of the "Cucumber Video Audio Guide" material
    When I fill the "type" field with "Item de Lista"
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
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Audio Guide Material to List Item Material - part 2
    Given I access the "edit" page of the "Cucumber Video Audio Guide" material
    When I fill the "type" field with "Item de Lista"
    And I fill the "name" field with "Cucumber Audio Guide List Item"
    And I fill the "listItemMarker" field with "*"
    And I fill the "description" field with "Cucumber Audio Guide List Item Description"
    And I fill the "listItemDetailedDescription" field with "Cucumber Audio Guide List Item Very Detailed Description"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Audio Guide List Item" material
    And the field "Material" should show "Cucumber Audio Guide List Item"
    And the field "Tipo" should show "Item de Lista"
    And the field "Marcador do Item de Lista" should show "*"
    And the field "Descrição" should show "Cucumber Audio Guide List Item Description"
    And the field "Descrição detalhada" should show "Cucumber Audio Guide List Item Very Detailed Description"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit List Item Material to Emergency Contact Material - part 1
    Given I access the "edit" page of the "Cucumber Audio Guide List Item" material
    When I fill the "type" field with "Contacto de Emergência"
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
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit List Item Material to Emergency Contact Material - part 2
    Given I access the "edit" page of the "Cucumber Audio Guide List Item" material
    When I fill the "type" field with "Contacto de Emergência"
    And I fill the "name" field with "Cucumber List Item Emergency Contact"
    And I fill the "description" field with "Cucumber List Item Emergency Contact Description"
    And I fill the "number" field with "999999999"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber List Item Emergency Contact" material
    And the field "Material" should show "Cucumber List Item Emergency Contact"
    And the field "Tipo" should show "Contacto de Emergência"
    And the field "Descrição" should show "Cucumber List Item Emergency Contact Description"
    And the field "Número" should show "999999999"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Emergency Contact Material to Annex Link Material - part 1
    Given I access the "edit" page of the "Cucumber List Item Emergency Contact" material
    When I fill the "type" field with "Anexo"
    And I fill the "selectType" field with "Link (Website, Video externo)"
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
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Emergency Contact Material to Annex Link Material - part 2
    Given I access the "edit" page of the "Cucumber List Item Emergency Contact" material
    When I fill the "type" field with "Anexo"
    And I fill the "name" field with "Cucumber Emergency Contact Annex Link"
    And I fill the "description" field with "Cucumber Emergency Contact Annex Link Description"
    And I fill the "selectType" field with "Link (Website, Video externo)"
    And I fill the "url" field with "https://www.youtube.com/watch?v=RoXmMD1rVP0&t=3s"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Emergency Contact Annex Link" material
    And the field "Material" should show "Cucumber Emergency Contact Annex Link"
    And the field "Tipo" should show "Anexo"
    And the field "Descrição" should show "Cucumber Emergency Contact Annex Link Description"
    And the field "URL" should show "https://www.youtube.com/watch?v=RoXmMD1rVP0&t=3s"
    And the field "URL" must be clickable
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Annex Link Material to Annex File Material - part 1
    Given I access the "edit" page of the "Cucumber Emergency Contact Annex Link" material
    When I fill the "type" field with "Anexo"
    And I fill the "selectType" field with "Ficheiro (PDF, docx, ...)"
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
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Annex Link Material to Annex File Material - part 2
    Given I access the "edit" page of the "Cucumber Emergency Contact Annex Link" material
    When I fill the "type" field with "Anexo"
    And I fill the "name" field with "Cucumber Annex Link Annex File"
    And I fill the "description" field with "Cucumber Annex Link Annex File Description"
    And I fill the "selectType" field with "Ficheiro (PDF, docx, ...)"
    And I fill the "pathAnnex" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Annex Link Annex File" material
    And the field "Material" should show "Cucumber Annex Link Annex File"
    And the field "Tipo" should show "Anexo"
    And the field "Descrição" should show "Cucumber Annex Link Annex File Description"
    And the field "Ficheiro" should show "Cucumber Annex Link Annex File.pdf"
    And the field "Ficheiro" must be clickable
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Annex File Material to Composite Material - part 1
    Given I access the "edit" page of the "Cucumber Annex Link Annex File" material
    When I fill the "type" field with "Composto"
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
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Annex File Material to Composite Material - part 2
    Given I access the "edit" page of the "Cucumber Annex Link Annex File" material
    When I fill the "type" field with "Composto"
    And I fill the "name" field with "Cucumber Annex File Composite"
    And I fill the "description" field with "Cucumber Annex File Composite Description"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Annex File Composite" material
    And the field "Material" should show "Cucumber Annex File Composite"
    And the field "Tipo" should show "Composto"
    And the field "Descrição" should show "Cucumber Annex File Composite Description"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  Scenario: Edit Composite Material to Text Material - part 1
    Given I access the "edit" page of the "Cucumber Annex File Composite" material
    When I fill the "type" field with "Texto"
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
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Composite Material to Text Material - part 2
    Given I access the "edit" page of the "Cucumber Annex File Composite" material
    When I fill the "type" field with "Texto"
    And I fill the "name" field with "Cucumber Composite Text"
    And I fill the "description" field with "Cucumber Composite Text Description"
    And I fill the "body" field with "Cucumber Composite Text Very Detailed Text"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Composite Text" material
    And the field "Material" should show "Cucumber Composite Text"
    And the field "Tipo" should show "Texto"
    And the field "Descrição" should show "Cucumber Composite Text Description"
    And the field "Texto" should show "Cucumber Composite Text Very Detailed Text"
    And the field "Disponibilidade para o site público" should show "Não está disponível"
    And the field "Disponibilidade para a aplicação móvel" should show "Não está disponível"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizado."

  #DELETE
  Scenario: Delete Material
    Given I access the "details" page of the "Cucumber Text" material
    When I press the "Apagar" button
    And I press the "Sim" button from the modal
    Then I should be redirected to the "materials" page
    And the "Cucumber Text" material should not be present in the "materials" table

  #ERRORS