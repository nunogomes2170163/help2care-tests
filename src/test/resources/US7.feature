Feature: Manage Quizs
  As an admin
  I want to manage all the quizs
  So that I can evaluate the caregivers, patients and materials

  #CREATE
  Scenario: Access New Quizs Page
    Given I access the "quizs" dashboard
    When I press the "Nova Questionário" button
    Then I should be redirected to the "new quiz" page
    And the "Nova Questionário" text should be shown

  Scenario: Create New Quiz Successfully
    Given I access the "new quiz" page
    When I fill the "name" field with "Cucumber"
    And I press the "Criar" button
    Then I should be redirected to the "questions associate" page
    And the "other questions" table should be present
    And the "quiz questions" table should be present

  Scenario: Associating Questions to the new Quiz - part 1(add questions)
    Given I access the "questions associate" page
    And the "other questions" table have more than 2 entries
    When I press "Adicionar" button of the first row of the "other questions" table twice
    Then the "quiz questions" table should have 2 entries
    And the first entry of the "quiz questions" table should contain the text of the first row added
    And the first entry of the "quiz questions" table should display "down" button
    And the first entry of the "quiz questions" table should display "remove" button
    And the second entry of the "quiz questions" table should contain the text of the second row added
    And the second entry of the "quiz questions" table should display "up" button
    And the second entry of the "quiz questions" table should display "remove" button

  Scenario: Associating Questions to the new Quiz - part 2(arrow down)
    Given I access the "questions associate" page
    And the "quiz questions" table have 2 entries
    When I press the "down" button of the first entry of the "quiz questions" table
    Then the first entry of the "quiz questions" table should be the second entry
    And the second entry of the "quiz questions" table should be the first entry

  Scenario: Associating Questions to the new Quiz - part 3(arrow up)
    Given I access the "questions associate" page
    And the "quiz questions" table have 2 entries
    When I press the "up" button of the second entry of the "quiz questions" table
    Then the second entry of the "quiz questions" table should be the first entry
    Then the first entry of the "quiz questions" table should be the second entry

  Scenario: Associating Questions to the new Quiz - part 4(remove)
    Given I access the "questions associate" page
    And the "quiz questions" table have 2 entries
    When I press the "remove" button of the first entry of the "quiz questions" table
    Then the "quiz questions" table should 1 entry
    And the first entry of the "quiz questions" table should contain the text of the previous second entry

  Scenario: Associating Questions to the new Quiz - part 5(save)
    Given I access the "questions associate" page
    When I press the "Concluído" button
    Then I should be redirected to the "details" page of the quiz
    And the field "Questionário" should show "Cucumber"
    And a table with the title "Questões Associadas" should be displayed
    And the "Questões Associadas" table should have at least 1 entry
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present
    And the first entry of the "Registos" table should contain the text "Foi criado."

  #DETAILS
  Scenario: Access Quiz Details Page
    Given I access the "quizs" page
    When I press the "Detalhes" button of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    Then I should be redirected to the "details" page of "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    And the field "Questionário" should show "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se"
    And the "Alimenta-se?" question should be present in the "quiz questions" table
    And the "Prepara adequadamente os alimentos para ingestão?" question should be present in the "quiz questions" table
    And the "Abre recipientes?" question should be present in the "quiz questions" table
    And the "Pega no copo ou chávena?" question should be present in the "quiz questions" table
    And the "Leva os alimentos à boca com os utensílios?" question should be present in the "quiz questions" table
    And the "Ingere os alimentos com segurança (sem tosse e/ou engasgo)?" question should be present in the "quiz questions" table
    And the "Editar" button should be present
    And the "Questões" button should be present
    And the "Bloquear" button should be present
    And the "Voltar Atrás" button should be present

  #EDIT
  Scenario: Access Edit Quiz Page
    Given I access the "details" page of the "quiz"
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the quiz
    And the field "name" should show "Avaliação das necessidades do utente dependente - Autocuidado: Alternância de posição"
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Quiz Successfully
    Given I access the "edit quiz" page of the quiz
    When I fill the "name" field with "Avaliação das necessidades do utente dependente - Autocuidado: Alternância de posição"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "quiz"
    And the field "Questionário" should show the new need
    And the "Move o corpo, virando-o de um lado para o outro?" question should be present in the "quiz questions" table
    And the "Alterna a posição de deitado para sentado?" question should be present in the "quiz questions" table
    And should be present a log at the "Registos" section

  #QUESTIONS
  Scenario: Access Quiz Questions Page
    Given I access the "details" page of the "quiz"
    When I press the "Questões" button
    Then I should be redirected to the "questions associate" page of the quiz
    And the "other questions" table should be present
    And the "quiz questions" table should be present
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  #BLOCK AND UNBLOCK
  Scenario: Block Quiz
    Given I access the "quizs" page
    When I press the "Bloquear" button of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    Then I should be redirected to the "quizs" page
    And the "Desbloquear" button should be present in the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz options

  Scenario: Unblock Question
    Given I access the "quizs" page
    And the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" user is blocked
    When I press the "Desbloquear" button of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    Then I should be redirected to the "quizs" page
    And the "Bloquear" button should be present in the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz options

  #ERRORS
  Scenario: Quiz name field empty
    Given I access the <page> page
    When the "name" field is empty
    And I press the <button> button
    Then the "O nome tem que ser preenchido." error message should be shown
    Examples:
      | page      | button  |
      | new quiz  | Criar   |
      | edit quiz | Guardar |

  Scenario: Quiz name field min length
    Given I access the <page> page
    When I fill the "description" field with "12"
    And I press the <button> button
    Then the "O nome tem que ter pelo menos 4 letras." error message should be shown
    Examples:
      | page      | button  |
      | new quiz  | Criar   |
      | edit quiz | Guardar |

    #ERRORS
    Scenario: Material name field empty
      Given I access the <page> page
      When the "name" field is empty
      And I press the <button> button
      Then the "O nome tem que ser preenchido." error message should be shown
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

    Scenario: Material name field min length
      Given I access the <page> page
      When I fill the "name" field with "12"
      And I press the <button> button
      Then the "O nome tem que ser preenchido." error message should be shown
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

    Scenario: Material name field unique
        Given I access the <page> page
        When I fill the "name" field with "Alimentação por PEG"
        And I press the <button> button
        Then the "Esse nome já existe. Escolha outro." error message should be shown
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

    Scenario: Material description field empty
      Given I access the <page> page
      When the "description" field is empty
      And I press the <button> button
      Then the "A descrição tem que ser preenchida." error message should be shown
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

    Scenario: Material description field min length
      Given I access the <page> page
      When I fill the "description" field with "12"
      And I press the <button> button
      Then the "Esse nome já existe. Escolha outro." error message should be shown
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

    Scenario: Material Text body description empty
      Given I access the <page> page
      When the "body" field is empty
      And I press the <button> button
      Then the "O campo texto não pode ser vazio." error message should be shown
      Examples:
        | page      | button  |
        | new text  | Criar   |
        | edit text | Guardar |

    Scenario: Material Item List marker empty
      Given I access the <page> page
      When the "listItemMarker" field is empty
      And I press the <button> button
      Then the "O campo marcador do item de lista não pode ser vazio." error message should be shown
      Examples:
        | page          | button  |
        | new itemList  | Criar   |
        | edit itemList | Guardar |

    Scenario: Material Item List marker regex
      Given I access the <page> page
      When I fill the "listItemMarker" field with "asdasd"
      And I press the <button> button
      Then the "O campo marcador do item de lista só pode conter números (1, 2, ..., x), astericos (*) ou hífens (-)." error message should be shown
      Examples:
        | page          | button  |
        | new itemList  | Criar   |
        | edit itemList | Guardar |

    Scenario: Material Image file empty
      Given I access the <page> page
      When the "pathImage" field is empty
      And I press the <button> button
      Then the "Introduza uma imagem com um dos seguintes formatos: jpeg, png, jpg, gif, svg." error message should be shown
      Examples:
        | page       | button  |
        | new image  | Criar   |
        | edit image | Guardar |

    Scenario: Material Image Mime regex
      Given I access the <page> page
      When I fill the "pathImage" field with "video"
      And I press the <button> button
      Then the "A imagem tem que estar num dos seguintes formatos: jpeg, png, jpg, gif, svg." error message should be shown
      Examples:
        | page       | button  |
        | new image  | Criar   |
        | edit image | Guardar |

    Scenario: Material Video file empty
      Given I access the <page> page
      When the "pathVideo" field is empty
      And I press the <button> button
      Then the "Introduza um video em formato mp4." error message should be shown
      Examples:
        | page       | button  |
        | new video  | Criar   |
        | edit video | Guardar |

    Scenario: Material Video Mime regex
      Given I access the <page> page
      When I fill the "pathVideo" field with "image"
      And I press the <button> button
      Then the "O video tem que ser em formato mp4." error message should be shown
      Examples:
        | page       | button  |
        | new video  | Criar   |
        | edit video | Guardar |

    Scenario: Material Audio Guide file empty
      Given I access the <page> page
      When the "pathAudioGuide" field is empty
      And I press the <button> button
      Then the "Introduza um guia de áudio em formato mp3." error message should be shown
      Examples:
        | page            | button  |
        | new audioGuide  | Criar   |
        | edit audioGuide | Guardar |

    Scenario: Material Audio Guide Mime regex
      Given I access the <page> page
      When I fill the "pathAudioGuide" field with "image"
      And I press the <button> button
      Then the "O áudio-guia tem que ser em formato mp3." error message should be shown
      Examples:
        | page            | button  |
        | new audioGuide  | Criar   |
        | edit audioGuide | Guardar |

    Scenario: Material Emergency Contact Number number empty
      Given I access the <page> page
      When the "number" field is empty
      And I press the <button> button
      Then the "Introduza um número de contacto." error message should be shown
      Examples:
        | page                  | button  |
        | new emergencyContact  | Criar   |
        | edit emergencyContact | Guardar |

    Scenario: Material Annex File file empty
      Given I access the <page> page
      When the "pathAnnex" field is empty
      And I press the <button> button
      Then the "Introduza um anexo." error message should be shown
      Examples:
        | page           | button  |
        | new annexFile  | Criar   |
        | edit annexFile | Guardar |

    Scenario: Material Annex Link link empty
      Given I access the <page> page
      When the "url" field is empty
      And I press the <button> button
      Then the "Introduza um url." error message should be shown
      Examples:
        | page           | button  |
        | new annexLink  | Criar   |
        | edit annexLink | Guardar |

    Scenario: Material Annex Link link rexeg
      Given I access the <page> page
      When I fill the "url" field with "asdasd"
      And I press the <button> button
      Then the "Introduza um url válido." error message should be shown
      Examples:
        | page           | button  |
        | new annexLink  | Criar   |
        | edit annexLink | Guardar |

    Scenario: Material Annex Link link rexeg
      Given I access the <page> page
      When I fill the "selectType" field with "Escolha um Tipo"
      And I press the <button> button
      Then the "Escolha um tipo de anexo." error message should be shown
      Examples:
        | page       | button  |
        | new annex  | Criar   |
        | edit annex | Guardar |


