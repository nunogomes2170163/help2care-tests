Feature: Manage Patients
  As an healthcare professional
  I want to manage patients
  So that I associate them to their caregivers

  #CREATE
  Scenario: Access Patient Create Page
    Given I access the "patients" page
    When I press the "Novo Utente" button
    Then I should be redirected to the "new patient" page
    And the "Novo Utente" text should be shown

  Scenario: Create New Patient Successfully
    Given I access the "new patient" page
    And I fill the "name" field with "Cucumber"
    And I fill the "email" field with "cucumber@gmail.com"
    And I fill the "gender" field with "male"
    And I fill the "birthDate" field with "12-12-1994"
    And I fill the "location" field with "Leiria"
    And I fill the "healthResource" field with "IWillDie"
    And I fill the "healthCenter" field with "Beach"
    And I fill the "phoneContact" field with "91919191"
    And I press the "Criar" button
    Then I should be redirected to the "patients" page
    And the "Cucumber" patient should be present in the "patients" table

  #DETAILS
  Scenario: Access Patient Details
    Given I access the "patients" page
    When I press the "Detalhes" button of the "Alberto Seixas" patient
    Then I should be redirected to the "details" page of "Alberto Seixas" patient
    And the field "Utente" should show "Alberto Seixas"
    And the field "Email" should show "alberto.seixas@mail.com"
    And the field "Data de Nascimento" should show "25-07-2018"
    And the field "Localização" should show "Leiria"
    And the field "Recurso de Saúde" should show "Não tem"
    And the field "Centro de Saúde" should show "Não tem"
    And the field "Contacto telefónico" should show "Não tem"
    And the field "Género" should show "Masculino"
    And the field "Cuidador" should show "pedrosousacuidador2"
    And the field "Grau de parentesco do cuidador" should show "Nenhum"
    And the field "O cuidador já cuidava do utente" should show "Sim"
    And the field "O utente já se encontrava dependente" should show "Sim"
    And the field "Cuidador" should show "pedrosousacuidador2"
    And the "Editar" button should be present
    And the "Necessidades" button should be present
    And the "Voltar Atrás" button should be present
    And the "Responder a Questinário" button should be present
    And the "Nova Avaliação" button should be present
    And the "Disponibilizar Questinário" button should be present

  #EDIT
  Scenario: Access Patient Edit Page
    Given I access the "details" page of the "patient" patient
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the patient
    And the field "name" should show "Aglae Bernhard"
    And the field "email" should show "schmidt.ignacio@example.com"
    And the field "birthDate" should show "09-08-2018"
    And the field "location" should show "Leiria"
    And the field "healthResource" should be empty
    And the field "healthCenter" should be empty
    And the field "phoneContact" should be empty
    And the field "gender" should show "Feminino"
    And the "Guardar" button should be present
    And the "Cancelar" button should be present


  Scenario: Edit Patient Successfully
    Given I access the "edit" page of the "patient"
    When I fill the "name" field with "Aglae Bernhard"
    And I fill the "email" field with "schmidt.ignacio@example.com"
    And I fill the "gender" field with "Feminino"
    And I fill the "birthDate" field with "09-08-2018"
    And I fill the "location" field with "Leiria"
    And I fill the "healthResource" field with "Cucumber"
    And I fill the "healthCenter" field with "Cucumber"
    And I fill the "phoneContact" field with "123456789"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "patient"
    And the field "Utilizador" should show "ana.margarida.carvalho"
    And the field "name" should show the new name
    And the field "email" should show the new email
    And the field "birthDate" should show the new birthDate
    And the field "location" should show the new location
    And the field "healthResource" should the new healthResource
    And the field "healthCenter" should the new healthCenter
    And the field "phoneContact" should the new phoneContact
    And the field "gender" should show "Feminino"
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  #NEEDS
  Scenario: Access Patient Needs Association Page
    Given I access the "details" page of the "patient"
    When I press the "Necessidades" button
    Then I should be redirected to the "patient needs" page
    And should be present the "my needs" table
    And should be present the "other needs" table

  Scenario: Associate Need to Patient
    Given I access the "patient needs" page
    And I have one need in the "my needs" table
    When I press the "Associar" button of the first entry in the "other needs" table
    Then I should be in the same page
    And I should have one more entry in the "my needs" table

  Scenario: Desassociate Need from Patient
    Given I access the "patient needs" page
    And I have two needs in the "my needs" table
    When I press the "Desassociar" button of the last entry in the "my needs" table
    Then I should be in the same page
    And I should have only one entry in the "my needs" table

  #EVALUATIONS
  Scenario Outline: Access any evaluation on the evaluations page of patients
    Given I access the "details" page of the "Aglae Bernhard" patient
    When I press the <button> button
    Then I should be redirected to the <page> page
    And the <text> text should be shown
    Examples:
      | button                      | page            | text                                                    |
      | Responder a Questionario    | answer quiz     | Avaliacao de Questionario para: Aglae Bernhard               |
      | Nova Avaliacao              | new evaluation  | Nova Avaliacao                                          |
      | Disponibilizar Questionario | provide quiz    | Disponibilizar Questionario para o Utente: Aglae Bernhard  |

  Scenario: Answer quiz on evaluations page of patients successfully
    Given I access the "answer quiz" page on the details page of the "Aglae Bernhard" patient
    When I fill the "description" field with "Cucumber Answer Quiz Patient"
    And I fill the "type" field with "Através do site"
    And I fill the "quiz" field with "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And I answer all the questions of the selected quiz
    And I press the "Submeter Avaliação" button
    Then I should be redirected to the "details" page of the "Aglae Bernhard" patient
    And there should be an entry on the "Avaliações" table that contains the text "Cucumber Answer Quiz Patient"

  Scenario: Create new evaluation on evaluations page of patients successfully
    Given I access the "new evaluation" page on the details page of the "Aglae Bernhard" patient
    When I fill the "description" field with "Cucumber New Evaluation Patient"
    And I fill the "type" field with "Através do site"
    And I fill the "model" field with "Model 1"
    And I fill the "path" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf"
    And I press the "Submeter Avaliação" button
    Then I should be redirected to the "details" page of the "Aglae Bernhard" patient
    And there should be an entry on the "Avaliações" table that contains the text "Cucumber New Evaluation Patient"

  Scenario: Provide quiz on evaluations page of patients successfully
    Given I access the "provide quiz" page on the details page of the "Aglae Bernhard" patient
    When I fill the "description" field with "Cucumber Provide Quiz Patient"
    And I fill the "type" field with "Através da app"
    And I fill the "quiz" field with "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And I press the "Submeter Avaliação" button
    Then I should be redirected to the "details" page of the "Aglae Bernhard" patient
    And there should be an entry on the "Avaliações" table that contains the text "Cucumber Provide Quiz Patient"

  #DETAILS
  Scenario: Access Answer Quiz Details
    Given I access the "details" page of the "Aglae Bernhard" patient
    When I press the "Detalhes" button of the "Cucumber Answer Quiz Patient" evaluation
    Then I should be redirected to the "details" page of "Cucumber Answer Quiz Patient" evaluation
    And the field "Avalição" should show "Cucumber Answer Quiz Patient"
    And the field "Tipo de Avaliação" should show "Através do site"
    And the field "Modelo" should show "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And the field "Questionado" should show "Sem cuidador"
    And the "Editar" button should be present
    And the "Voltar Atrás" button should be present
    And the "Respostas" section should be displayed
    And every entry on the "Respostas" section should have a pair question-answer

  Scenario: Access New Evaluation Details
    Given I access the "details" page of the "Aglae Bernhard" patient
    When I press the "Detalhes" button of the "Cucumber New Evaluation Patient" evaluation
    Then I should be redirected to the "details" page of "Cucumber New Evaluation Patient" evaluation
    And the field "Avalição" should show "Cucumber New Evaluation Patient"
    And the field "Tipo de Avaliação" should show "Através do site"
    And the field "Modelo" should show "Model 1"
    And the field "Ficheiro" should show "Cucumber New Evaluation Patient.pdf"
    And the field "Ficheiro" must be clickable
    And the "Editar" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Provide Quiz Details
    Given I access the "details" page of the "Aglae Bernhard" patient
    When I press the "Detalhes" button of the "Cucumber Provide Quiz Patient" evaluation
    Then I should be redirected to the "details" page of "Cucumber Provide Quiz Patient" evaluation
    And the field "Avalição" should show "Cucumber Provide Quiz Patient"
    And the field "Tipo de Avaliação" should show "Através da app"
    And the field "Modelo" should show "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And the field "Data da resposta" should show "À espera de resposta"
    And the "Editar" button should be present
    And the "Voltar Atrás" button should be present

  #EDITS
  Scenario Outline: Access edit page of the evaluations of patients
    Given I access the "details" page of the <evalName> evaluation of the "Aglae Bernhard" patient
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the evaluation
    And the field "description" should show <evalName>
    And the field "type" should show <evalType>
    And the field "model" should show <evalModel>
    And the "Guardar" button should be present
    And the "Cancelar" button should be present
    Examples:
      | evalName                          | evalType        | evalModel                                                                                 |
      | Cucumber Answer Quiz Patient      | Atraves do site | Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout  |
      | Cucumber New Evaluation Patient   | Atraves do site | Model 1                                                                                   |
      | Cucumber Provide Quiz Patient     | Atraves da app  | Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout  |

  Scenario Outline: Edit evaluations of patients
    Given I access the "edit" page of the <evalName> evaluation of the "Aglae Bernhard" patient
    When I fill the "description" field with <evalNameEdit>
    And I fill the "type" field with <evalTypeEdit>
    And I fill the "model" field with <evalModelEdit>
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the <evalNameEdit> evaluation
    And the field "Avaliação" should show <evalNameEdit>
    And the field "Tipo de Avaliação" should show <evalTypeEdit>
    And the field "Modelo" should show <evalModelEdit>
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizada."
    Examples:
      | evalName                        | evalNameEdit                          | evalTypeEdit          | evalModelEdit                                                                                 |
      | Cucumber Answer Quiz Patient    | Cucumber Answer Quiz Patient Edit     | Atraves do site Edit  | Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout Edit |
      | Cucumber New Evaluation Patient | Cucumber New Evaluation Patient Edit  | Atraves do site Edit  | Model 1 Edit                                                                                  |
      | Cucumber Provide Quiz Patient   | Cucumber Provide Quiz Patient Edit    | Atraves da app Edit   | Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout Edit |



  #ERRORS
  Scenario Outline: Name field empty
    Given I access the <page> page
    When the "name" field is empty
    And I press the <button> button
    Then the "O nome tem que ser preenchido." error message should be shown
    Examples:
      | page                            | button  |
      | new patient                     | Criar   |
      | edit patient                    | Guardar |

  Scenario Outline: Name field min length
    Given I access the <page> page
    When I fill the "username" field with "non"
    And I press the <button> button
    Then the "O nome tem que ter pelo menos 4 letras." error message should be shown
    Examples:
      | page                            | button  |
      | new patient                     | Criar   |
      | edit patient                    | Guardar |

  Scenario Outline: Email field already in use
    Given I access the <page> page
    When I fill the "email" field with "zecoroados@gmail.com"
    And I press the <button> button
    Then the "Email já existente. Escolha outro." error message should be shown
    Examples:
      | page                            | button  |
      | new patient                     | Criar   |
      | edit patient                    | Guardar |

  Scenario Outline: Email field empty
    Given I access the <page> page
    When the "email" field is empty
    And I press the <button> button
    Then the "O email tem que ser preenchido." error message should be shown
    Examples:
      | page                            | button  |
      | new patient                     | Criar   |
      | edit patient                    | Guardar |

  Scenario Outline: Gender field empty
    Given I access the <page> page
    When the "gender" field is empty
    And I press the <button> button
    Then the "O género tem que ser preenchido." error message should be shown
    Examples:
      | page                          | button  |
      | new patient                   | Criar   |
      | edit patient                  | Guardar |

  Scenario Outline: Birth Date field empty
    Given I access the <page> page
    When the "birthDate" field is empty
    And I press the <button> button
    Then the "A data de nascimento tem que ser preenchida." error message should be shown
    Examples:
      | page                          | button  |
      | new patient                   | Criar   |
      | edit patient                  | Guardar |

  Scenario Outline: Evaluation description empty
    Given I access the <page> page
    When the "description" is empty
    And I press the <button> button
    Then the "A descrição tem que ser preenchida." error message should be shown
    Examples:
      | page               | button             |
      | answer quiz        | Submeter Avaliacao |
      | new evaluation     | Submeter Avaliacao |
      | provide quizs      | Submeter Avaliacao |
      | edit answer quiz   | Guardar            |
      | edit evaluation    | Guardar            |
      | edit provide quizs | Guardar            |

  Scenario Outline: Evaluation description min length
    Given I access the <page> page
    When I fill the "description" field with "12"
    And I press the <button> button
    Then the "A descrição tem que ter pelo menos 4 letras." error message should be shown
    Examples:
      | page               | button             |
      | answer quiz        | Submeter Avaliacao |
      | new evaluation     | Submeter Avaliacao |
      | provide quizs      | Submeter Avaliacao |
      | edit answer quiz   | Guardar            |
      | edit evaluation    | Guardar            |
      | edit provide quizs | Guardar            |

  Scenario Outline: Evaluation type empty
    Given I access the <page> page
    When the "type" is empty
    And I press the <button> button
    Then the "O tipo de avaliação tem que ser preenchido" error message should be shown
    Examples:
      | page               | button             |
      | answer quiz        | Submeter Avaliacao |
      | new evaluation     | Submeter Avaliacao |
      | provide quizs      | Submeter Avaliacao |
      | edit answer quiz   | Guardar            |
      | edit evaluation    | Guardar            |
      | edit provide quizs | Guardar            |

  Scenario Outline: Evaluation type min length
    Given I access the <page> page
    When I fill the "type" field with "12"
    And I press the <button> button
    Then the "O tipo de avaliação tem que ter pelo menos 4 letras" error message should be shown
    Examples:
      | page               | button             |
      | answer quiz        | Submeter Avaliacao |
      | new evaluation     | Submeter Avaliacao |
      | provide quizs      | Submeter Avaliacao |
      | edit answer quiz   | Guardar            |
      | edit evaluation    | Guardar            |
      | edit provide quizs | Guardar            |

  Scenario Outline: Evaluation model empty
    Given I access the <page> page
    When the "model" is empty
    And I press the <button> button
    Then the "O modelo tem que ser preenchido" error message should be shown
    Examples:
      | page               | button            |
      | new evaluation     | Submeter Avalicao |
      | edit answer quiz   | Guardar            |
      | edit evaluation    | Guardar            |
      | edit provide quizs | Guardar            |

  Scenario Outline: Evaluation model min length
    Given I access the <page> page
    When I fill the "type" field with "12"
    And I press the <button> button
    Then the "O modelo tem que ter pelo menos 3 letras" error message should be shown
    Examples:
      | page               | button            |
      | new evaluation     | Submeter Avalicao |
      | edit answer quiz   | Guardar            |
      | edit evaluation    | Guardar            |
      | edit provide quizs | Guardar            |

  Scenario Outline: Evaluation file empty
    Given I access the <page> page
    When the "path" is empty
    And I press the <button> button
    Then the "Introduza um ficheiro de avaliação." error message should be shown
    Examples:
      | page               | button             |
      | new evaluation     | Submeter Avaliacao |
