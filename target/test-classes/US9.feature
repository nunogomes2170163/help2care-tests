Feature: Manage Patients
  As an healthcare professional
  I want to manage patients
  So that I associate them to their caregivers

  #CREATE
  Scenario: Access Patient Create Page
    Given I access the patients dashboard
    When I press the "new patient" button - USnine
    Then I should be redirected to the "new patient" page - USnine
    And the "Novo Utente" text should be shown - USnine

  Scenario: Create New Patient Successfully
    Given I access the "new patient" page - USnine
    When I fill the "name" field with "Cucumber" - USnine
    And I fill the "email" field with "cucumber@mail.com" - USnine
    And I fill the "gender" field with "male" - USnine
    And I fill the "birthDate" field with "12-12-1994" - USnine
    And I fill the "location" field with "Leiria" - USnine
    And I fill the "healthResource" field with "IWillDie" - USnine
    And I fill the "healthCenter" field with "Beach" - USnine
    And I fill the "phoneContact" field with "919191919" - USnine
    And I press the "create" button - USnine
    Then I should be redirected to the "patients" page - USnine
    And the "Cucumber" patient should be present in the "patients" table

  #DETAILS
  Scenario: Access Patient Details
    Given I access the "patients" page - USnine
    When I press the details button of the "Alberto Seixas" patient
    Then I should be redirected to the "details" page of the "Alberto Seixas" patient
    And the field "name" should show "Alberto Seixas" - USnine
    And the field "email" should show "alberto.seixas@mail.com" - USnine
    And the field "birthDate" should show "25-07-2018" - USnine
    And the field "location" should show "Leiria" - USnine
    And the field "healthResource" should show "Não tem" - USnine
    And the field "healthCenter" should show "Não tem" - USnine
    And the field "phoneContact" should show "Não tem" - USnine
    And the field "gender" should show "Masculino" - USnine
    And the field "caregiver" should show "pedrosousacuidador2" - USnine
    And the field "caregiverKinshipDegree" should show "Nenhum" - USnine
    And the field "caregiverAlreadyTreatingPatient" should show "Sim" - USnine
    And the field "patientAlreadyDependent" should show "Sim" - USnine
    And the "edit" button should be present - USnine
    And the "needs" button should be present - USnine
    And the "back" button should be present - USnine
    And the "answerQuiz" button should be present - USnine
    And the "newEvaluation" button should be present - USnine
    And the "provideQuiz" button should be present - USnine

  #EDIT
  Scenario: Access Patient Edit Page
    Given I access the details page of the "Alberto Seixas" patient
    When I press the "edit" button - USnine
    Then I should be redirected to the "edit" page of the "Alberto Seixas" patient
    And the field "name" should show "Alberto Seixas" - USnine
    And the field "email" should show "alberto.seixas@mail.com" - USnine
    And the field "birthDate" should show "25-07-2018" - USnine
    And the field "location" should show "Leiria" - USnine
    And the field "healthResource" should be empty - USnine
    And the field "healthCenter" should be empty - USnine
    And the field "phoneContact" should be empty - USnine
    And the field "gender" should show "Masculino" - USnine
    And the "save" button should be present - USnine
    And the "cancel" button should be present - USnine

  Scenario: Edit Patient Successfully
    Given I access the "edit" page of the "Aglae Bernhard" patient
    When I fill the "name" field with "Aglae Bernhard 123" - USnine
    And I fill the "email" field with "schmidt.ignacio@example.com" - USnine
    And I fill the "gender" field with "Masculino" - USnine
    And I fill the "birthDate" field with "09-08-2018" - USnine
    And I fill the "location" field with "Lisboa" - USnine
    And I fill the "healthResource" field with "Cucumber" - USnine
    And I fill the "healthCenter" field with "Cucumber" - USnine
    And I fill the "phoneContact" field with "123456789" - USnine
    And I press the "save" button - USnine
    Then I should be redirected to the "details" page of the "Aglae Bernhard" patient
    And the field "name" should show "Aglae Bernhard 123" - USnine
    And the field "email" should show "schmidt.ignacio@example.com" - USnine
    And the field "birthDate" should show "09-08-2018" - USnine
    And the field "location" should show "Lisboa" - USnine
    And the field "healthResource" should show "Cucumber" - USnine
    And the field "healthCenter" should show "Cucumber" - USnine
    And the field "phoneContact" should show "123456789" - USnine
    And the field "gender" should show "Feminino" - USnine
    And the field "Data da última atualização" should different from the previous - USnine
    And should be present a "Foi atualizado." log at the beggining of the logs section - USnine

  #NEEDS
  Scenario: Access Patient Needs Association Page
    Given I access the "details" page of the "Alberto Seixas" patient
    When I press the "needs" button - USnine
    Then I should be redirected to the "patient needs" page - USnine
    And the "my needs" table should be present - USnine
    And the "other needs" table should be present - USnine

  Scenario: Associate Need to Patient
    Given I access the "patient needs" page of the "Alberto Seixas" patient
    And the my needs table have 1 entry
    When I press "add" button of the "first" entry in the "other needs" table
    Then the my needs table should have 2 entries
    And each my needs table entry should have the diassociate button

  Scenario: Diassociate Need from Patient
    Given I access the "patient needs" page of the "Alberto Seixas" patient
    And the my needs table have 2 entries
    When I press "diassociate" button of the "second" entry in the "my needs" table
    Then the my needs table should have 1 entry
    And each my needs table entry should have the diassociate button

  #EVALUATIONS
  Scenario Outline: Access any evaluation on the evaluations page of patients
    Given I access the details page of the "Alberto Seixas" patient
    When I press the "<button>" button - USnine
    Then I should be redirected to the "<page>" page of the "Alberto Seixas" patient
    And the "<text>" text should be shown - USnine
    Examples:
      | button        | page            | text                                                       |
      | answerQuiz    | answer quiz     | Avaliacao de Questionario para: Alberto Seixas             |
      | newEvaluation | new evaluation  | Nova Avaliacao                                             |
      | provideQuiz   | provide quiz    | Disponibilizar Questionario para o Utente: Alberto Seixas  |

  Scenario: Answer quiz on evaluations page of patients successfully
    Given I access the "answer quiz" page on the details page of the "Alberto Seixas" patient
    When I fill the "description" field with "Cucumber Answer Quiz Patient" - USnine
    And I fill the "type" field with "Através do site" - USnine
    And I fill the "quiz" field with "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout" - USnine
    And I answer all the questions of the selected quiz
    And I press the "save" button - USnine
    Then I should be redirected to the "details" page of the "Alberto Seixas" patient
    And there should be an entry on the evaluations table that contains the text "Cucumber Answer Quiz Patient"

  Scenario: Create new evaluation on evaluations page of patients successfully
    Given I access the "new evaluation" page on the details page of the "Alberto Seixas" patient
    When I fill the "description" field with "Cucumber New Evaluation Patient" - USnine
    And I fill the "type" field with "Através do site" - USnine
    And I fill the "model" field with "Model 1" - USnine
    And I fill the "path" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf" - USnine
    And I press the "save" button - USnine
    Then I should be redirected to the "details" page of the "Alberto Seixas" patient
    And there should be an entry on the evaluations table that contains the text "Cucumber New Evaluation Patient"

  Scenario: Provide quiz on evaluations page of patients successfully
    Given I access the "provide quiz" page on the details page of the "Alberto Seixas" patient
    When I fill the "description" field with "Cucumber Provide Quiz Patient" - USnine
    And I fill the "type" field with "Através da app" - USnine
    And I fill the "quiz" field with "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout" - USnine
    And I press the "save" button - USnine
    Then I should be redirected to the "details" page of the "Alberto Seixas" patient
    And there should be an entry on the evaluations table that contains the text "Cucumber Provide Quiz Patient"

  #DETAILS
  Scenario: Access Answer Quiz Details
    Given I access the "details" page of the "Alberto Seixas" patient
    When I press the details button of the "Cucumber Answer Quiz Patient" evaluation
    Then I should be redirected to the "details" page of the "Cucumber Answer Quiz Patient" evaluation
    And the field "description" should show "Cucumber Answer Quiz Patient" - USnine
    And the field "type" should show "Através do site" - USnine
    And the field "model" should show "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout" - USnine
    And the field "questioned" should show "pedrosousacuidador2" - USnine
    And the "edit" button should be present - USnine
    And the "back" button should be present - USnine
    And the "Respostas" section should be displayed
    And every entry on the answers section should have a pair question-answer

  Scenario: Access New Evaluation Details
    Given I access the "details" page of the "Alberto Seixas" patient
    When I press the details button of the "Cucumber New Evaluation Patient" evaluation
    Then I should be redirected to the "details" page of the "Cucumber New Evaluation Patient" evaluation
    And the field "description" should show "Cucumber New Evaluation Patient" - USnine
    And the field "type" should show "Através do site" - USnine
    And the field "model" should show "Model 1" - USnine
    And the field "file" should show "Cucumber New Evaluation Patient.pdf" - USnine
    And the field "file" must be clickable - USnine
    And the "edit" button should be present - USnine
    And the "back" button should be present - USnine

  Scenario: Access Provide Quiz Details
    Given I access the "details" page of the "Alberto Seixas" patient
    When I press the details button of the "Cucumber Provide Quiz Patient" evaluation
    Then I should be redirected to the "details" page of the "Cucumber Provide Quiz Patient" evaluation
    And the field "description" should show "Cucumber Provide Quiz Patient" - USnine
    And the field "type" should show "Através da app" - USnine
    And the field "model" should show "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout" - USnine
    And the field "answerDate" should show "À espera de resposta" - USnine
    And the "edit" button should be present - USnine
    And the "back" button should be present - USnine

  #EDITS
  Scenario Outline: Access edit page of the evaluations of patients
    Given I access the "details" page of the "<evalName>" evaluation of the "Alberto Seixas" patient
    When I press the "edit" button - USnine
    Then I should be redirected to the "edit" page of the "<evalName>" evaluation
    And the field "description" should show "<evalName>" - USnine
    And the field "type" should show "<evalType>" - USnine
    And the field "model" should show "<evalModel>" - USnine
    And the "save" button should be present - USnine
    And the "cancel" button should be present - USnine
    Examples:
      | evalName                          | evalType        | evalModel                                                                                 |
      | Cucumber Answer Quiz Patient      | Atraves do site | Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout  |
      | Cucumber New Evaluation Patient   | Atraves do site | Model 1                                                                                   |
      | Cucumber Provide Quiz Patient     | Atraves da app  | Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout  |

  Scenario Outline: Edit evaluations of patients
    Given I access the "edit" page of the "<evalName>" evaluation of the "Alberto Seixas" patient
    When I fill the "description" field with "<evalNameEdit>" - USnine
    And I fill the "type" field with "<evalTypeEdit>" - USnine
    And I fill the "model" field with "<evalModelEdit>" - USnine
    And I press the "save" button - USnine
    Then I should be redirected to the "details" page of the "<evalNameEdit>" evaluation
    And the field "description" should show "<evalNameEdit>" - USnine
    And the field "type" should show "<evalTypeEdit>" - USnine
    And the field "model" should show "<evalModelEdit>" - USnine
    And the field "Data da última atualização" should different from the previous - USnine
    And should be present a "Foi atualizada." log at the beggining of the logs section - USnine
    Examples:
      | evalName                    | evalNameEdit                      | evalTypeEdit          | evalModelEdit                                                                                         |
      | Test Answer Quiz Patient    | Test Answer Quiz Patient Edit     | Atraves do site Edit  | Questionario Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Alimentacao Edit |
      | Test New Evaluation Patient | Test New Evaluation Patient Edit  | Atraves do site Edit  | Model 1 Edit                                                                                          |
      | Test Provide Quiz Patient   | Test Provide Quiz Patient Edit    | Atraves da app Edit   | Questionario Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Alimentacao Edit |

  #ERRORS
  Scenario Outline: Name field empty
    Given I access the "<page>" page - USnine
    When the "name" field is empty - USnine
    And I press the "<button>" button - USnine
    Then the "O nome tem que ser preenchido." error message should be shown - USnine
    Examples:
      | page                            | button  |
      | new patient                     | save  |
      | edit patient                    | save    |

  Scenario Outline: Name field min length
    Given I access the "<page>" page - USnine
    When I fill the "name error" field with "non" - USnine
    And I press the "<button>" button - USnine
    Then the "O nome tem que ter pelo menos 4 letras." error message should be shown - USnine
    Examples:
      | page                            | button  |
      | new patient                     | save  |
      | edit patient                    | save    |

  Scenario Outline: Email field invalid
    Given I access the "<page>" page - USnine
    When I fill the "email" field with "zecoroados@mail" - USnine
    And I press the "<button>" button - USnine
    Then the "O email tem que ser válido." error message should be shown - USnine
    Examples:
      | page                            | button  |
      | new patient                     | save  |
      | edit patient                    | save    |

  Scenario Outline: Email field already in use
    Given I access the "<page>" page - USnine
    When I fill the "email" field with "utente_sandra@mail.tr" - USnine
    And I press the "<button>" button - USnine
    Then the "Email já existente. Escolha outro." error message should be shown - USnine
    Examples:
      | page                            | button  |
      | new patient                     | save  |
      | edit patient                    | save    |

  Scenario Outline: Email field empty
    Given I access the "<page>" page - USnine
    When the "email" field is empty - USnine
    And I press the "<button>" button - USnine
    Then the "O email tem que ser preenchido." error message should be shown - USnine
    Examples:
      | page                            | button  |
      | new patient                     | save  |
      | edit patient                    | save    |

  Scenario Outline: Gender field empty
    Given I access the "<page>" page - USnine
    When the "gender" field is empty - USnine
    And I press the "<button>" button - USnine
    Then the "O género tem que ser preenchido." error message should be shown - USnine
    Examples:
      | page                          | button  |
      | new patient                   | save  |
      | edit patient                  | save    |

  Scenario Outline: Birth Date field empty
    Given I access the "<page>" page - USnine
    When the "birthDate" field is empty - USnine
    And I press the "<button>" button - USnine
    Then the "A data de nascimento tem que ser preenchida." error message should be shown - USnine
    Examples:
      | page                          | button  |
      | new patient                   | save  |
      | edit patient                  | save    |

  Scenario Outline: Evaluation description empty
    Given I access the "<page>" page - USnine
    When the "description" field is empty - USnine
    And I press the "<button>" button - USnine
    Then the "A descrição tem que ser preenchida." error message should be shown - USnine
    Examples:
      | page               | button  |
        | answer quiz        | save    |
        | new evaluation     | save    |
        | provide quiz       | save    |
        | edit answer quiz   | save    |
        | edit evaluation    | save    |
        | edit provide quiz  | save    |

  Scenario Outline: Evaluation description min length
    Given I access the "<page>" page - USnine
    When I fill the "description" field with "12" - USnine
    And I press the "<button>" button - USnine
    Then the "A descrição tem que ter pelo menos 4 letras." error message should be shown - USnine
    Examples:
      | page               | button  |
      | answer quiz        | save    |
      | new evaluation     | save    |
      | provide quiz       | save    |
      | edit answer quiz   | save    |
      | edit evaluation    | save    |
      | edit provide quiz  | save    |

  Scenario Outline: Evaluation type empty
    Given I access the "<page>" page - USnine
    When the "type" field is empty - USnine
    And I press the "<button>" button - USnine
    Then the "O tipo de avaliação tem que ser preenchido" error message should be shown - USnine
    Examples:
      | page               | button  |
      | answer quiz        | save    |
      | new evaluation     | save    |
      | provide quiz       | save    |
      | edit answer quiz   | save    |
      | edit evaluation    | save    |
      | edit provide quiz  | save    |

  Scenario Outline: Evaluation type min length
    Given I access the "<page>" page - USnine
    When I fill the "type" field with "12" - USnine
    And I press the "<button>" button - USnine
    Then the "O tipo de avaliação tem que ter pelo menos 4 letras" error message should be shown - USnine
    Examples:
      | page               | button  |
      | answer quiz        | save    |
      | new evaluation     | save    |
      | provide quiz       | save    |
      | edit answer quiz   | save    |
      | edit evaluation    | save    |
      | edit provide quiz  | save    |

  Scenario Outline: Evaluation model empty
    Given I access the "<page>" page - USnine
    When the "model" field is empty - USnine
    And I press the "<button>" button - USnine
    Then the "O modelo tem que ser preenchido" error message should be shown - USnine
    Examples:
      | page               | button |
      | new evaluation     | save   |
      | edit answer quiz   | save   |
      | edit evaluation    | save   |
      | edit provide quiz  | save   |

  Scenario Outline: Evaluation model min length
    Given I access the "<page>" page - USnine
    When I fill the "model" field with "12" - USnine
    And I press the "<button>" button - USnine
    Then the "O modelo tem que ter pelo menos 3 letras" error message should be shown - USnine
    Examples:
      | page               | button |
      | new evaluation     | save   |
      | edit answer quiz   | save   |
      | edit evaluation    | save   |
      | edit provide quiz  | save   |

  Scenario Outline: Evaluation file empty
    Given I access the "<page>" page - USnine
    When the "path" field is empty - USnine
    And I press the "<button>" button - USnine
    Then the "Introduza um ficheiro de avaliação." error message should be shown - USnine
    Examples:
      | page               | button |
      | new evaluation     | save   |
