Feature: Manage Caregivers
  As an healthcare professional
  I want to manage my caregivers
  So that I prepare them for the mobile app

  #CREATE
  Scenario: Access Caregiver Create Page
    Given I access the "caregivers" dashboard - USeight
    When I press the "new caregiver" button - USeight
    Then I should be redirected to the "new caregiver" page - USeight
    And the "Novo Cuidador" text should be shown - USeight

  Scenario: Create New Caregiver Successfully
    Given I access the "new caregiver" page - USeight
    When I fill the "username" field with "cucumber" - USeight
    And I fill the "name" field with "Cucumber" - USeight
    And I fill the "email" field with "cucumber@gmail.com" - USeight
    And I fill the "gender" field with "Masculino" - USeight
    And I fill the "birthDate" field with "12-12-1994" - USeight
    And I fill the "location" field with "Leiria" - USeight
    And I fill the "experienceNumber" field with "7" - USeight
    And I fill the "experiencePeriod" field with "Ano/s" - USeight
    And I fill the "password" field with "cucumber" - USeight
    And I fill the "passwordConfirmation" field with "cucumber" - USeight
    And I press the "create" button - USeight
    Then I should be redirected to the "caregivers" page - USeight
    And the "Cucumber" caregiver should be present in the "caregivers" table
    And the "Cucumber" caregiver should be present in the "my caregivers" table

  #DETAILS
  Scenario: Access Caregiver Details Page of the healthcare profissional
    Given I access the "healthcare professional" dashboard - USeight
    When I press the details button of the "Caregiver" caregiver on the "my caregivers" table
    Then I should be redirected to the "details" page of the "caregiver" caregiver
    And the field "username" should show "caregiver" - USeight
    And the field "name" should show "Caregiver" - USeight
    And the field "email" should show "caregiver@mail.com" - USeight
    And the field "role" should show "Cuidador" - USeight
    And the field "birthDate" should show "02-02-2018" - USeight
    And the field "location" should show "Leiria" - USeight
    And the field "gender" should show "Masculino" - USeight
    And the field "experienceTimeAsCaregiver" should show "0 Ano/s" - USeight
    And the field "nHealthcareProfissionals" should show "2/2" - USeight
    And the "edit" button should be present - USeight
    And the "block" button should be present - USeight
    And the "materials" button should be present - USeight
    And the "patients" button should be present - USeight
    And the "evaluations" button should be present - USeight
    And the "back" button should be present - USeight

  Scenario: Access Caregiver Details Page that does not belong to the healthcare profissional
    Given I access the "caregivers" page - USeight
    When I press the details button of the "Ana Peres" caregiver
    Then I should be redirected to the "details" page of the "ana.peres" caregiver
    And the field "username" should show "ana.peres" - USeight
    And the field "name" should show "Ana Peres" - USeight
    And the field "email" should show "ana.nar.peres@gmail.com" - USeight
    And the field "role" should show "Cuidador" - USeight
    And the field "birthDate" should show "02-02-2018" - USeight
    And the field "location" should show "Leiria" - USeight
    And the field "gender" should show "Feminino" - USeight
    And the field "experienceTimeAsCaregiver" should show "0 Ano/s" - USeight
    And the field "nHealthcareProfissionals" should show "0/2" - USeight
    And the "edit" button should be present - USeight
    And the "block" button should be present - USeight
    And the "back" button should be present - USeight

  #EDIT
  Scenario: Access Caregiver Edit Page
    Given I access the "details" page of the "helena.carvalho" caregiver
    When I press the "edit" button - USeight
    Then I should be redirected to the "edit" page of the "helena.carvalho" caregiver
    And the field "name edit" should show "Helena Carvalho" - USeight
    And the field "email edit" should show "helena.carvalho@mail.com" - USeight
    And the field "gender edit" should show "Feminino" - USeight
    And the field "birthDate edit" should show "02-02-2018" - USeight
    And the field "location edit" should show "Leiria" - USeight
    And the field "experienceNumber edit" should show "0" - USeight
    And the field "experiencePeriod edit" should show "Ano/s" - USeight
    And the field "password" should be empty - USeight
    And the field "passwordConfirmation" should be empty - USeight
    And the "save" button should be present - USeight
    And the "cancel" button should be present - USeight

  Scenario: Edit Caregiver User Successfully Without Password
    Given I access the "edit" page of the "ana.silva" caregiver
    When I fill the "name" field with "Ana Catarina Silva" - USeight
    And I fill the "email" field with "ana.catarina272@hotmail.com" - USeight
    And I fill the "gender" field with "Feminino" - USeight
    And I fill the "birthDate" field with "26-07-1992" - USeight
    And I fill the "location" field with "Lisboa" - USeight
    And I fill the "experienceNumber" field with "1" - USeight
    And I fill the "experiencePeriod" field with "Ano/s" - USeight
    And I press the "save" button - USeight
    Then I should be redirected to the "details" page of the "ana.silva" caregiver
    And the field "username" should show "ana.silva" - USeight
    And the field "name" should show "Ana Catarina Silva" - USeight
    And the field "email edit succ" should show "ana.catarina272@hotmail.com" - USeight
    And the field "role" should show "Cuidador" - USeight
    And the field "birthDate" should show "26-07-1992" - USeight
    And the field "location" should show "Lisboa" - USeight
    And the field "gender" should show "Feminino" - USeight
    And the field "experienceTimeAsCaregiver" should show "1 Ano/s" - USeight
    And the field "nHealthcareProfissionals" should show "0/2" - USeight
    And the field "Data da última atualização" should different from the previous - USeight
    And should be present a "Foi atualizado." log at the beggining of the logs section - USeight

  Scenario: Edit Caregiver User Successfully With Password
    Given I access the "edit" page of the "ana.silva" caregiver
    When I fill the "name" field with "Ana Silva" - USeight
    And I fill the "email" field with "ana.catarina272@hotmail.com" - USeight
    And I fill the "gender" field with "Feminino" - USeight
    And I fill the "birthDate" field with "20-09-1992" - USeight
    And I fill the "location" field with "Leiria" - USeight
    And I fill the "experienceNumber" field with "2" - USeight
    And I fill the "experiencePeriod" field with "Ano/s" - USeight
    And I fill the "password" field with "123123" - USeight
    And I fill the "passwordConfirmation" field with "123123" - USeight
    And I press the "save" button - USeight
    Then I should be redirected to the "details" page of the "ana.silva" caregiver
    And the field "username" should show "ana.silva" - USeight
    And the field "name" should show "Ana Silva" - USeight
    And the field "email edit succ" should show "ana.catarina272@hotmail.com" - USeight
    And the field "role" should show "Cuidador" - USeight
    And the field "birthDate" should show "20-09-1992" - USeight
    And the field "location" should show "Leiria" - USeight
    And the field "gender" should show "Feminino" - USeight
    And the field "experienceTimeAsCaregiver" should show "2 Ano/s" - USeight
    And the field "nHealthcareProfissionals" should show "0/2" - USeight
    And the field "Data da última atualização" should different from the previous - USeight
    And should be present a "Foi atualizado." log at the beggining of the logs section - USeight

  #BLOCK AND UNBLOCK
  Scenario: Block Quiz
    Given I access the "details" page of the "caregiver" caregiver
    When I press the "block" button - USeight
    Then I should be redirected to the "details" page of the "caregiver" caregiver
    And the "unblock" button should be present - USeight

  Scenario: Unblock Quiz
    Given I access the "details" page of the "caregiver" caregiver
    And the caregiver is blocked
    When I press the "unblock" button - USeight
    Then I should be redirected to the "details" page of the "caregiver" caregiver
    And the "block" button should be present - USeight

  #ASSOCIATING and DISASSOCIATING CAREGIVERS
  Scenario: Associating Caregiver to Healthcare Professional
    Given I access the "healthcare professional" dashboard - USeight
    And the "my caregivers" table have 3 entries
    When I press the "associate" button of the "Ana Luisa Roque" caregiver on the "other caregivers" table
    Then the "my caregivers" table should have 4 entries
    And the "Ana Luisa Roque" caregiver should be on the "my caregivers" table

  Scenario: Disassociating Caregiver to Healthcare Professional
    Given I access the "healthcare professional" dashboard - USeight
    And the "my caregivers" table have 4 entries
    When I press the "disassociate" button of the "Ana Luisa Roque" caregiver on the "my caregivers" table
    Then the "my caregivers" table should have 3 entries
    And the "Ana Luisa Roque" caregiver should be on the "other caregivers" table

  #ASSOCIATING and DESASSOCIATING MATERIALS
  Scenario: Access Caregiver Materials Association Page
    Given I access the "details" page of the "caregiver" caregiver
    When I press the "materials" button - USeight
    Then I should be redirected to the "caregiver materials" page of the "Caregiver" caregiver
    And the "my materials" table should be present - USeight
    And the associate materials section should be present
    And the "need" select box should be present
    And the "material" select box should be present
    And the "associateMaterial" button should be present - USeight

  Scenario: Associate Material to Caregiver
    Given I access the "caregiver materials" page of the "Caregiver" caregiver
    And the "my materials" table have 3 entries
    When I fill the "need" field with "Mobilidade" - USeight
    And I fill the "material" field with "Levantar uma pessoa do leito para a cadeira" - USeight
    And I press the "associate" button - USeight
    Then the "my materials" table should have 4 entries
    And the "Levantar uma pessoa do leito para a cadeira" material should be on the "my materials" table

  Scenario: Disassociate Material from Caregiver
    Given I access the "caregiver materials" page of the "Caregiver" caregiver
    And the "my materials" table have 4 entries
    When I press the "diassociate" button of the "Levantar uma pessoa do leito para a cadeira" material on the "my materials" table
    Then the "my materials" table should have 3 entries

  #ASSOCIATING and DESASSOCIATING PATIENTS
  Scenario: Access Caregiver Patients Association Page
    Given I access the "details" page of the "caregiver" caregiver
    When I press the "patients" button - USeight
    Then I should be redirected to the "caregiver patients" page of the "Caregiver" caregiver
    And the "my patients" table should be present - USeight
    And the "other patients" table should be present - USeight

  Scenario: Associate Patient to Caregiver
    Given I access the "caregiver patients" page of the "Helena Carvalho" caregiver
    And the "my patients" table have 2 entries
    When I press the "associate" button of the "Maria João" patient on the "other patients" table
    And I fill the "kinshipDegree" field with "Nenhum" - USeight
    And I fill the "previouslyCared" field with "Não" - USeight
    And I fill the "previouslyDependent" field with "Não" - USeight
    And I press the "associatePatient" button - USeight
    Then the "my patients" table should have 3 entries
    And the "Maria João" patient should be on the "my patients" table

  Scenario: Disassociate Patient from Caregiver
    Given I access the "caregiver patients" page of the "Helena Carvalho" caregiver
    And the "my patients" table have 3 entries
    When I press the "diassociate" button of the "Maria João" patient on the "my patients" table
    Then the "my patients" table should have 2 entries
    And the "Maria João" patient should be on the "other patients" table

  #ANSWER HELP REQUESTS
  Scenario: Access the Help Request Answer Page
    Given I access the "healthcare professional" dashboard - USeight
    And the "help requests" table have at least 1 entry
    When I press the check help request button of the "ELIMINAÇAO VESICAL - 2" material on the help requests table
    Then I should be redirected to the answer help request page of the "ELIMINAÇAO VESICAL - 2" material of the "Caregiver" caregiver
    And the field "messageTitle" should show "Mensagem de ajuda do Cuidador: Caregiver" - USeight
    And the field "material" should show "ELIMINAÇAO VESICAL - 2" - USeight

  Scenario: Answer the Help Request with text
    Given I access the "answer help request" page of the "ELIMINAÇAO VESICAL - 2" material
    When I fill the "message" field with "Cucumber message" - USeight
    And I press the "send" button - USeight
    Then the "Cucumber message" text should be present in the last chat bubble
    And the "message" field should be clear

  # Issue with PhantomJS that cant fill the image field, saying that the field is not interactable.
  # Therefore, this test will be performed manually.
  #Scenario: Answer the Help Request with image
  #  Given I access the "answer help request" page of the "ELIMINAÇAO VESICAL - 2" material
  #  When I fill the "image" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.jpg" - USeight
  #  Then the image should be present in the last chat bubble
  #  And the "message" field should be clear

  # Issue with PhantomJS that cant fill the image field, saying that the field is not interactable.
  # Therefore, this test will be performed manually.
  #Scenario: Answer the Help Request with image and text
  #  Given I access the "answer help request" page of the "ELIMINAÇAO VESICAL - 2" material
  #  When I fill the "message" field with "Cucumber message" - USeight
  #  And I fill the "image" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.jpg" - USeight
  #  Then the image should be present in the last chat bubble
  #  And the "Cucumber message" text should be present in the last chat bubble
  #  And the "message" field should be clear

  #EVALUATION
  # CREATES
  Scenario: Access evaluations page of caregivers
    Given I access the "details" page of the "caregiver" caregiver
    When I press the "evaluations" button - USeight
    Then a table with the title "Avaliações de Caregiver" should be displayed - USeight
    And the "answerQuiz" button should be present - USeight
    And the "newEvaluation" button should be present - USeight
    And the "provideQuiz" button should be present - USeight

  Scenario Outline: Access any evaluation of evaluations page of caregivers
    Given I access the "evaluations" page of the "Caregiver" caregiver
    When I press the "<button>" button - USeight
    Then I should be redirected to the "<page>" page of the "Caregiver" caregiver
    And the "<text>" text should be shown - USeight
    Examples:
      | button        | page            | text                                                    |
      | answerQuiz    | answer quiz     | Avaliação de Questionário para: Caregiver               |
      | newEvaluation | new evaluation  | Nova Avaliação                                          |
      | provideQuiz   | provide quiz    | Disponibilizar Questionário para o Cuidador: Caregiver  |

  # Issue with PhantomJS that cant find the radio buttons to answer the questions.
  # Therefore, this test will be performed manually.
  #Scenario: Answer quiz on evaluations page of caregivers successfully
  #  Given I access the "answer quiz" page on the evaluations page of the "Caregiver" caregiver
  #  When I fill the "description" field with "Cucumber Answer Quiz Caregiver" - USeight
  #  And I fill the "type" field with "Através do site" - USeight
  #  And I fill the "quiz" field with "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout" - USeight
  #  And I answer all the questions of the selected quiz - USeight
  #  And I press the "save" button - USeight
  #  Then I should be redirected to the "evaluations" page of the "Caregiver" caregiver
  #  And there should be an entry on the evaluations table that contains the text "Cucumber Answer Quiz Caregiver" - USeight

  Scenario: Create new evaluation on evaluations page of caregivers successfully
    Given I access the "new evaluation" page on the evaluations page of the "Caregiver" caregiver
    When I fill the "description" field with "Cucumber New Evaluation Caregiver" - USeight
    And I fill the "type" field with "Através do site" - USeight
    And I fill the "model" field with "Model 1" - USeight
    And I fill the "path" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf" - USeight
    And I press the "save" button - USeight
    Then I should be redirected to the "evaluations" page of the "Caregiver" caregiver
    And there should be an entry on the evaluations table that contains the text "Cucumber New Evaluation Caregiver" - USeight

  Scenario: Provide quiz on evaluations page of caregivers successfully
    Given I access the "provide quiz" page on the evaluations page of the "Caregiver" caregiver
    When I fill the "description" field with "Cucumber Provide Quiz Caregiver" - USeight
    And I fill the "type" field with "Através da app" - USeight
    And I fill the "quiz" field with "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout" - USeight
    And I press the "save" button - USeight
    Then I should be redirected to the "evaluations" page of the "Caregiver" caregiver
    And there should be an entry on the evaluations table that contains the text "Cucumber Provide Quiz Caregiver" - USeight

  #DETAILS
  Scenario: Access Answer Quiz Details
    Given I access the "evaluations" page of the "Caregiver" caregiver
    When I press the details button of the "Cucumber Answer Quiz Caregiver" evaluation - USeight
    Then I should be redirected to the "details" page of "Cucumber Answer Quiz Caregiver" evaluation - USeight
    And the field "description" should show "Cucumber Answer Quiz Caregiver" - USeight
    And the field "type" should show "Através do site" - USeight
    And the field "model" should show "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout" - USeight
    And the field "questioned" should show "caregiver" - USeight
    And the "edit" button should be present - USeight
    And the "back" button should be present - USeight
    And the "Respostas" section should be displayed - USeight
    And every entry on the answers section should have a pair question-answer - USeight

  Scenario: Access New Evaluation Details
    Given I access the "evaluations" page of the "Caregiver" caregiver
    When I press the details button of the "Cucumber New Evaluation Caregiver" evaluation - USeight
    Then I should be redirected to the "details" page of "Cucumber New Evaluation Caregiver" evaluation - USeight
    And the field "description" should show "Cucumber New Evaluation Caregiver" - USeight
    And the field "type" should show "Através do site" - USeight
    And the field "model" should show "Model 1" - USeight
    And the field "file" should show "Cucumber New Evaluation Caregiver.pdf" - USeight
    And the field "file" must be clickable - USeight
    And the "edit" button should be present - USeight
    And the "back" button should be present - USeight

  Scenario: Access Provide Quiz Details
    Given I access the "evaluations" page of the "Caregiver" caregiver
    When I press the details button of the "Cucumber Provide Quiz Caregiver" evaluation - USeight
    Then I should be redirected to the "details" page of "Cucumber Provide Quiz Caregiver" evaluation - USeight
    And the field "description" should show "Cucumber Provide Quiz Caregiver" - USeight
    And the field "type" should show "Através da app" - USeight
    And the field "model" should show "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Mobilidade" - USeight
    And the field "answerDate" should show "À espera de resposta" - USeight
    And the "edit" button should be present - USeight
    And the "back" button should be present - USeight

  #EDITS
  Scenario Outline: Access edit page of the evaluations of caregivers
    Given I access the "details" page of the "<evalName>" evaluation of the "Caregiver" caregiver
    When I press the "edit" button - USeight
    Then I should be redirected to the "edit" page of the "<evalName>" evaluation - USeight
    And the field "description edit" should show "<evalName>" - USeight
    And the field "type edit" should show "<evalType>" - USeight
    And the field "model edit" should show "<evalModel>" - USeight
    And the "save" button should be present - USeight
    And the "cancel" button should be present - USeight
    Examples:
      | evalName                          | evalType        | evalModel                                                                                 |
      | Cucumber Answer Quiz Caregiver    | Através do site | Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout  |
      | Cucumber New Evaluation Caregiver | Através do site | Model 1                                                                                   |
      | Cucumber Provide Quiz Caregiver   | Através da app  | Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Mobilidade        |

  Scenario Outline: Edit evaluations of caregivers
    Given I access the "edit" page of the "<evalName>" evaluation of the "Caregiver" caregiver
    When I fill the "description" field with "<evalName>" - USeight
    And I fill the "type edit succ" field with "<evalTypeEdit>" - USeight
    And I fill the "model edit succ" field with "<evalModelEdit>" - USeight
    And I press the "save" button - USeight
    Then I should be redirected to the "details" page of the "<evalName>" evaluation - USeight
    And the field "description edit succ" should show "<evalName>" - USeight
    And the field "type edit succ" should show "<evalTypeEdit>" - USeight
    And the field "model edit succ" should show "<evalModelEdit>" - USeight
    And the field "Data da última atualização <evalName>" should different from the previous - USeight
    And should be present a "Foi atualizada." log at the beggining of the logs section - USeight
    Examples:
      | evalName                      | evalTypeEdit    | evalModelEdit                                                                                    |
      | Test Answer Quiz Caregiver    | Através do site | Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação |
      | Test New Evaluation Caregiver | Através do site | Model 1                                                                                          |
      | Test Provide Quiz Caregiver   | Através da app  | Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação |

  # MATERIAL EVALUATIONS
  # CREATES
  Scenario: Access evaluations page of materials
    Given I access the "caregiver materials" page of the "Helena Carvalho" caregiver
    When I press the evaluations button on the "Engasgamento" material on the materials table
    Then a table with a title that contains "Avaliações do Material Engasgamento" should be displayed
    And the "provideQuiz" button should be present - USeight

  Scenario: Access provide evaluation on the evaluations page of materials
    Given I access the evaluations page of the "Engasgamento" material of the "helena.carvalho" caregiver
    When I press the "provideQuiz" button - USeight
    Then I should be redirected to the "provide quiz" page of the "Engasgamento" material
    And the "Disponibilizar Questionário para o Material: Engasgamento" text should be shown - USeight

  Scenario: Provide quiz on evaluations page of materials successfully
    Given I access the "provide quiz" page on the evaluations page on the "Engasgamento" material of the "helena.carvalho" caregiver
    When I fill the "description" field with "Cucumber Provide Quiz Material" - USeight
    And I fill the "type" field with "Através da app" - USeight
    And I fill the "quiz" field with "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout" - USeight
    And I press the "save" button - USeight
    Then I should be redirected to the "evaluations" page of the "Engasgamento" material
    And there should be an entry on the evaluations table that contains the text "Cucumber Provide Quiz Material" - USeight

  #DETAILS
  Scenario: Access Provide Quiz Details
    Given I access the evaluations page of the "Engasgamento" material of the "helena.carvalho" caregiver
    When I press the details button of the "Cucumber Provide Quiz Material" evaluation - USeight
    Then I should be redirected to the "details" page of "Cucumber Provide Quiz Material" evaluation - USeight
    And the field "description" should show "Cucumber Provide Quiz Material" - USeight
    And the field "type" should show "Através da app" - USeight
    And the field "model" should show "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Mobilidade" - USeight
    And the field "answerDate" should show "À espera de resposta" - USeight
    And the "edit" button should be present - USeight
    And the "back" button should be present - USeight

  #EDITS
  Scenario: Access edit page of the evaluations of materials
    Given I access the "details" page of the "Cucumber Provide Quiz Material" evaluation of the "Engasgamento" material of the "helena.carvalho" caregiver
    When I press the "edit" button - USeight
    Then I should be redirected to the "edit" page of the "Cucumber Provide Quiz Material" evaluation - USeight
    And the field "description edit" should show "Cucumber Provide Quiz Material" - USeight
    And the field "type edit" should show "Através da app" - USeight
    And the field "model edit" should show "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Mobilidade" - USeight
    And the "save" button should be present - USeight
    And the "cancel" button should be present - USeight

  Scenario: Edit evaluations of materials
    Given I access the "edit" page of the "Test Provide Quiz Material" evaluation of the "Engasgamento" material of the "helena.carvalho" caregiver
    When I fill the "description" field with "Test Provide Quiz Material" - USeight
    And I fill the "type edit succ" field with "Através da app" - USeight
    And I fill the "model edit succ" field with "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação" - USeight
    And I press the "save" button - USeight
    Then I should be redirected to the "details" page of the "Test Provide Quiz Material" evaluation - USeight
    And the field "description edit succ" should show "Test Provide Quiz Material" - USeight
    And the field "type edit succ" should show "Através da app" - USeight
    And the field "model edit succ" should show "Questionário Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Alimentação" - USeight
    And the field "Data da última atualização Test Provide Quiz Material" should different from the previous - USeight
    And should be present a "Foi atualizada." log at the beggining of the logs section - USeight

  #ERRORS
  Scenario Outline: Username field empty
    Given I access the "<page>" page - USeight
    When the "username" field is empty - USeight
    And I press the "create" button - USeight
    Then the "O username tem que ser preenchido." error message should be shown - USeight
    Examples:
      | page                          |
      | new caregiver                 |

  Scenario Outline: Username field min length
    Given I access the "<page>" page - USeight
    When I fill the "username error" field with "non" - USeight
    And I press the "create" button - USeight
    Then the "O username tem que ter pelo menos 4 letras ou dígitos." error message should be shown - USeight
    Examples:
      | page                          |
      | new caregiver                 |

  Scenario Outline: Username field already in use
    Given I access the "<page>" page - USeight
    When I fill the "username error" field with "admin" - USeight
    And I press the "create" button - USeight
    Then the "Username já existente. Escolha outro." error message should be shown - USeight
    Examples:
      | page                          |
      | new caregiver                 |

  Scenario Outline: Name field empty
    Given I access the "<page>" page - USeight
    When the "name" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "O nome tem que ser preenchido." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Name field min length
    Given I access the "<page>" page - USeight
    When I fill the "name error" field with "non" - USeight
    And I press the "<button>" button - USeight
    Then the "O nome tem que ter pelo menos 4 letras." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Email field already in use
    Given I access the "<page>" page - USeight
    When I fill the "email error" field with "zecoroados@gmail.com" - USeight
    And I press the "<button>" button - USeight
    Then the "Email já existente. Escolha outro." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Email field empty
    Given I access the "<page>" page - USeight
    When the "email" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "O email tem que ser preenchido." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Gender field empty
    Given I access the "<page>" page - USeight
    When the "gender" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "O género tem que ser preenchido." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Birth Date field empty
    Given I access the "<page>" page - USeight
    When the "birthDate" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "A data de nascimento tem que ser preenchida." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Location field empty
    Given I access the "<page>" page - USeight
    When the "location" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "A localização tem que ser preenchida." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Location field min length
    Given I access the "<page>" page - USeight
    When I fill the "location" field with "non" - USeight
    And I press the "<button>" button - USeight
    Then the "A localização tem que ter pelo menos 4 letras." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Experience Period field empty
    Given I access the "<page>" page - USeight
    When the "experiencePeriod" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "O tempo de experiência como cuidador tem que ser preenchido." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Password field empty
    Given I access the "<page>" page - USeight
    When the "password" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "A password tem que ser preenchida." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |

  Scenario Outline: Password field min length
    Given I access the "<page>" page - USeight
    When I fill the "password" field with "123" - USeight
    And I press the "<button>" button - USeight
    Then the "A password tem que ter pelo menos 6 letras ou digitos." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Password confirmation field does not match password field
    Given I access the "<page>" page - USeight
    When I fill the "password" field with "123123" - USeight
    And I fill the "passwordConfirmation" field with "123456" - USeight
    And I press the "<button>" button - USeight
    Then the "As passwords têm que ser iguais nos dois campos." error message should be shown - USeight
    Examples:
      | page                          | button  |
      | new caregiver                 | create  |
      | edit caregiver                | save    |

  Scenario Outline: Evaluation description empty
    Given I access the "<page>" page - USeight
    When the "description" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "A descrição tem que ser preenchida." error message should be shown - USeight
    Examples:
      | page                        | button |
      | answer quiz                 | save   |
      | new evaluation              | save   |
      | provide quiz                | save   |
      | edit answer quiz            | save   |
      | edit evaluation             | save   |
      | edit provide quiz           | save   |
      | provide quiz material       | save   |
      | edit provide quiz material  | save   |

  Scenario Outline: Evaluation description min length
    Given I access the "<page>" page - USeight
    When I fill the "description error" field with "12" - USeight
    And I press the "<button>" button - USeight
    Then the "A descrição tem que ter pelo menos 4 letras." error message should be shown - USeight
    Examples:
      | page                        | button |
      | answer quiz                 | save   |
      | new evaluation              | save   |
      | provide quiz                | save   |
      | edit answer quiz            | save   |
      | edit evaluation             | save   |
      | edit provide quiz           | save   |
      | provide quiz material       | save   |
      | edit provide quiz material  | save   |

  Scenario Outline: Evaluation type empty
    Given I access the "<page>" page - USeight
    When the "type" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "O tipo de avaliação tem que ser preenchido" error message should be shown - USeight
    Examples:
      | page                        | button |
      | answer quiz                 | save   |
      | new evaluation              | save   |
      | provide quiz                | save   |
      | edit answer quiz            | save   |
      | edit evaluation             | save   |
      | edit provide quiz           | save   |
      | provide quiz material       | save   |
      | edit provide quiz material  | save   |

  Scenario Outline: Evaluation type min length
    Given I access the "<page>" page - USeight
    When I fill the "type" field with "12" - USeight
    And I press the "<button>" button - USeight
    Then the "O tipo de avaliação tem que ter pelo menos 4 letras" error message should be shown - USeight
    Examples:
      | page                        | button |
      | answer quiz                 | save   |
      | new evaluation              | save   |
      | provide quiz                | save   |
      | edit answer quiz            | save   |
      | edit evaluation             | save   |
      | edit provide quiz           | save   |
      | provide quiz material       | save   |
      | edit provide quiz material  | save   |

  Scenario Outline: Evaluation model empty
    Given I access the "<page>" page - USeight
    When the "model" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "O modelo tem que ser preenchido" error message should be shown - USeight
    Examples:
      | page                        | button |
      | new evaluation              | save   |
      | edit answer quiz            | save   |
      | edit evaluation             | save   |
      | edit provide quiz           | save   |
      | edit provide quiz material  | save   |

  Scenario Outline: Evaluation model min length
    Given I access the "<page>" page - USeight
    When I fill the "model" field with "12" - USeight
    And I press the "<button>" button - USeight
    Then the "O modelo tem que ter pelo menos 3 letras" error message should be shown - USeight
    Examples:
      | page                        | button |
      | new evaluation              | save   |
      | edit answer quiz            | save   |
      | edit evaluation             | save   |
      | edit provide quiz           | save   |
      | edit provide quiz material  | save   |

  Scenario Outline: Evaluation file empty
    Given I access the "<page>" page - USeight
    When the "path" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "Introduza um ficheiro de avaliação." error message should be shown - USeight
    Examples:
      | page               | button |
      | new evaluation     | save   |