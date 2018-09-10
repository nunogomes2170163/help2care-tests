Feature: Manage Caregivers
  As an healthcare professional
  I want to manage my caregivers
  So that I prepare them for the mobile app

  #CREATE
  Scenario: Access Caregiver Create Page
    Given I access the "caregivers" page
    When I press the "Novo Cuidador" button
    Then I should be redirected to the "new caregiver" page
    And the "Novo Cuidador" text should be shown

  Scenario: Create New Caregiver Successfully
    Given I access the "new caregiver" page
    When I fill the "username" field with "cucumber"
    And I fill the "name" field with "Cucumber"
    And I fill the "email" field with "cucumber@gmail.com"
    And I fill the "gender" field with "male"
    And I fill the "birthDate" field with "12-12-1994"
    And I fill the "experienceNumber" field with "7"
    And I fill the "experiencePeriod" field with "years"
    And I fill the "password" field with "cucumber"
    And I fill the "password_confirmation" field with "cucumber"
    And I press the "Criar" button
    Then I should be redirected to the "admin" dashboard
    And the "Cucumber" caregiver should be present in the "caregivers" table
    And the caregiver should be present in the "my caregivers" table

  #DETAILS
  Scenario: Access Caregiver Details Page
    Given I access the "healthcare professional" dashboard
    When I press the "Detalhes" button of the first entry of the "my caregivers" table
    Then I should be redirected to the "details" page of that caregiver
    And the field "Utilizador" should show "dsfghjk"
    And the field "Nome" should show "asdfghj"
    And the field "Função" should show "Cuidador"
    And the field "Email" should show "joao.e.caroc1o@ipleiria.pt"
    And the field "Data de Nascimento" should show "26-07-1992"
    And the field "Localização" should show "Leiria"
    And the field "Género" should show "Masculino"
    And the field "Tempo de experiência como cuidador" should show "0 Mês/Meses"
    And the field "Nº Profissionais de Saúde" should show "1/2"
    And the field "Criador" should show "admin"
    And the field "Data da criação" should show "2018-08-07 11:07:10"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Materiais" button should be present
    And the "Utentes" button should be present
    And the "Avaliações" button should be present
    And the "Voltar Atrás" button should be present

  #EDIT
  Scenario: Access Caregiver Edit Page
    Given I access the "details" page of the "Helena Carvalho" caregiver
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the user
    And the field "name" should show "Helena Carvalho"
    And the field "email" should show "helena.carvalho@mail.com"
    And the field "gender" should show "Feminino"
    And the field "birthDate" should show "26-07-1992"
    And the field "location" should show "Leiria"
    And the field "experienceNumber" should show "0"
    And the field "experiencePeriod" should show "Ano/s"
    And the field "password" should be empty
    And the field "password_confirmation" should be empty
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Caregiver User Successfully Without Password
    Given I access the "edit" page of the "Helena Carvalho"
    When I fill the "name" field with "Helena Carvalho"
    And I fill the "email" field with "helena.carvalho@mail.com"
    And I fill the "gender" field with "Feminino"
    And I fill the "birthDate" field with "26-07-1992"
    And I fill the "location" field with "Leiria"
    And I fill the "experienceNumber" field with "1"
    And I fill the "experiencePeriod" field with "Ano/s"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Helena Carvalho"
    And the field "Utilizador" should show "helena.carvalho"
    And the field "Nome" should show the new name
    And the field "Email" should show the new email
    And the field "Função" should show "Cuidador"
    And the field "Data de Nascimento" should show the new birthDate
    And the field "Localização" should show the new location
    And the field "Género" should show the new gender
    And the field "Tempo de experiência como cuidador" should show the new experienceNumber and experiencePeriod
    And the field "Nº Profissionais de Saúde" should show "1/2"
    And the field "Criador" should show "admin"
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  Scenario: Edit Caregiver User Successfully With Password
    Given I access the "edit" page of the "Helena Carvalho"
    When I fill the "name" field with "Helena Carvalho"
    And I fill the "email" field with "helena.carvalho@mail.com"
    And I fill the "gender" field with "Feminino"
    And I fill the "birthDate" field with "26-07-1992"
    And I fill the "location" field with "Leiria"
    And I fill the "experienceNumber" field with "0"
    And I fill the "experiencePeriod" field with "Ano/s"
    And I fill the "facility" field with "Leiria"
    And I fill the "password_confirmation" field with "123123"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Helena Carvalho"
    And the field "Utilizador" should show "helena.carvalho"
    And the field "Nome" should show the new name
    And the field "Email" should show the new email
    And the field "Função" should show "Cuidador"
    And the field "Data de Nascimento" should show the new birthDate
    And the field "Localização" should show the new location
    And the field "Género" should show the new gender
    And the field "Tempo de experiência como cuidador" should show the new experienceNumber and experiencePeriod
    And the field "Nº Profissionais de Saúde" should show "1/2"
    And the field "Criador" should show "admin"
    And the field "Data da criação" should show "2018-04-14 10:41:04"
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  #ASSOCIATING and DESASSOCIATING CAREGIVERS
  Scenario: Associating Caregiver to Healthcare Professional
    Given I access the "healthcare professional" dashboard
    And the "my caregivers" table have 4 entries
    When I press the "Associar" button from the first entry of the "other caregivers" table
    Then I should have one more caregiver in the "my caregivers" table

  Scenario: Desassociating Caregiver to Healthcare Professional
    Given I access the "healthcare professional" dashboard
    And the "my caregivers" table have 5 entries
    When I press the "Desassociar" button from the first entry of the "my caregivers" table
    Then I should have one less caregiver in the "my caregivers" table

  #ANSWER HELP REQUESTS
  Scenario: Access the Help Request Answer Page
    Given I access the "healthcare professional" dashboard
    And the "help requests" table have atleast one entry
    When I press the "Ver pedido de ajuda" button
    Then I should be redirected to the "answer help request" page
    And the "Mensagem de ajuda do Cuidador: Caregiver" text should be present

  Scenario: Answer the Help Request with text
    Given I access the "answer help request" page
    When I fill the "name" field with "Cucumber message"
    And I press the "send" button
    Then I should be in the same page
    And the "Cucumber message" should be present in the "chat"
    And the "name" field should be clear

  Scenario: Answer the Help Request with image
    Given I access the "answer help request" page
    When I fill the "image" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.jpg"
    And I press the "send" button
    Then I should be in the same page
    And the image should be present in the "chat"
    And the "name" field should be clear

  Scenario: Answer the Help Request with image and text
    Given I access the "answer help request" page
    When I fill the "image" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test_edit.jpg"
    And I fill the "name" field with "Cucumber message"
    And I press the "send" button
    Then I should be in the same page
    And the image should be present in the "chat"
    And the "Cucumber message" should be present in the "chat"
    And the "name" field should be clear

  #ASSOCIATING and DESASSOCIATING MATERIALS
  Scenario: Access Caregiver Materials Association Page
    Given I access the "details" page of my "caregiver"
    When I press the "Materiais" button
    Then I should be redirected to the "caregiver materials" page
    And the "Materiais de Caregiver" table should be present
    And the "Associar Materiais" table should be present

  Scenario: Associate Material to Caregiver
    Given I access the "caregiver materials" page
    And I have one materials in the "Materiais de Caregiver" table
    When I select the "needtest1" need
    And I select the "ELEMINAÇAO VESICAL 7"
    And I press the "Associar" button
    Then I should be in the same page
    And I should have the "ELEMINAÇAO VESICAL 7" in the "Materiais de Caregiver" table

  Scenario: Desassociate Material from Caregiver
    Given I access the "caregiver materials" page
    And I have two materials in the "Materiais de Caregiver" table
    When I press the "Desassociar" button of the last entry in the "Materiais de Caregiver" table
    Then I should be in the same page
    And I should have only one entry in the "Materiais de Caregiver" table

  #ASSOCIATING and DESASSOCIATING PATIENTS
  Scenario: Access Caregiver Patients Association Page
    Given I access the "details" page of my "caregiver"
    When I press the "Utentes" button
    Then I should be redirected to the "caregiver patients" page
    And the "Utentes de Caregiver" table should be present
    And the "Utentes Sem Cuidador" table should be present

  Scenario: Associate Patient to Caregiver
    Given I access the "caregiver patients" page
    And I have two patients in the "Utentes de Caregiver" table
    When I press the "Associar" button of the first entry of the "Utentes Sem Cuidador" table
    Then I should be in the same page
    And I should have three entries in the "Utentes Sem Cuidador" table

  Scenario: Desassociate Patient from Caregiver
    Given I access the "caregiver patients" page
    And I have two patients in the "Utentes de Caregiver" table
    When I press the "Desassociar" button of the last entry in the "Utentes de Caregiver" table
    Then I should be in the same page
    And I should have only two entries in the "Utentes de Caregiver" table

  #EVALUATION
  # CREATES
  Scenario: Access evaluations page of caregivers
    Given I access the "details" page of the "Caregiver" caregiver
    When I press the "Avaliações" button
    Then a table with the title "Avaliações de Caregiver" should be displayed
    And the "Responder a Questionário" button should be present
    And the "Nova Avaliação" button should be present
    And the "Disponibilizar Questionário" button should be present

  Scenario Outline: Access any evaluation of evaluations page of caregivers
    Given I access the "evaluations" page of the "Caregiver" caregiver
    When I press the <button> button
    Then I should be redirected to the <page> page
    And the <text> text should be shown
    Examples:
      | button                      | page            | text                                                    |
      | Responder a Questionario    | answer quiz     | Avaliacao de Questionario para: Caregiver               |
      | Nova Avaliacao              | new evaluation  | Nova Avaliacao                                          |
      | Disponibilizar Questionario | provide quiz    | Disponibilizar Questionario para o Cuidador: Caregiver  |

  Scenario: Answer quiz on evaluations page of caregivers successfully
    Given I access the "answer quiz" page on the evaluations page of the "Caregiver" caregiver
    When I fill the "description" field with "Cucumber Answer Quiz Caregiver"
    And I fill the "type" field with "Através do site"
    And I fill the "quiz" field with "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And I answer all the questions of the selected quiz
    And I press the "Submeter Avaliação" button
    Then I should be redirected to the "evaluations" page of the "Caregiver" caregiver
    And there should be an entry on the "Avaliações de Caregiver" table that contains the text "Cucumber Answer Quiz Caregiver"

  Scenario: Create new evaluation on evaluations page of caregivers successfully
    Given I access the "new evaluation" page on the evaluations page of the "Caregiver" caregiver
    When I fill the "description" field with "Cucumber New Evaluation Caregiver"
    And I fill the "type" field with "Através do site"
    And I fill the "model" field with "Model 1"
    And I fill the "path" field with "/home/zecoroados/apps/jenkins/jenkins_home/workspace/WebApp - Publish website to staging/testFiles/test.pdf"
    And I press the "Submeter Avaliação" button
    Then I should be redirected to the "evaluations" page of the "Caregiver" caregiver
    And there should be an entry on the "Avaliações de Caregiver" table that contains the text "Cucumber New Evaluation Caregiver"

  Scenario: Provide quiz on evaluations page of caregivers successfully
    Given I access the "provide quiz" page on the evaluations page of the "Caregiver" caregiver
    When I fill the "description" field with "Cucumber Provide Quiz Caregiver"
    And I fill the "type" field with "Através da app"
    And I fill the "quiz" field with "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And I press the "Submeter Avaliação" button
    Then I should be redirected to the "evaluations" page of the "Caregiver" caregiver
    And there should be an entry on the "Avaliações de Caregiver" table that contains the text "Cucumber Provide Quiz Caregiver"

  #DETAILS
  Scenario: Access Answer Quiz Details
    Given I access the "evaluations" page of the "Caregiver" caregiver
    When I press the "Detalhes" button of the "Cucumber Answer Quiz Caregiver" evaluation
    Then I should be redirected to the "details" page of "Cucumber Answer Quiz Caregiver" evaluation
    And the field "Avalição" should show "Cucumber Answer Quiz Caregiver"
    And the field "Tipo de Avaliação" should show "Através do site"
    And the field "Modelo" should show "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And the field "Questionado" should show "caregiver"
    And the "Editar" button should be present
    And the "Voltar Atrás" button should be present
    And the "Respostas" section should be displayed
    And every entry on the "Respostas" section should have a pair question-answer

  Scenario: Access New Evaluation Details
    Given I access the "evaluations" page of the "Caregiver" caregiver
    When I press the "Detalhes" button of the "Cucumber New Evaluation Caregiver" evaluation
    Then I should be redirected to the "details" page of "Cucumber New Evaluation Caregiver" evaluation
    And the field "Avalição" should show "Cucumber New Evaluation Caregiver"
    And the field "Tipo de Avaliação" should show "Através do site"
    And the field "Modelo" should show "Model 1"
    And the field "Ficheiro" should show "Cucumber New Evaluation Caregiver.pdf"
    And the field "Ficheiro" must be clickable
    And the "Editar" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Provide Quiz Details
    Given I access the "evaluations" page of the "Caregiver" caregiver
    When I press the "Detalhes" button of the "Cucumber Provide Quiz Caregiver" evaluation
    Then I should be redirected to the "details" page of "Cucumber Provide Quiz Caregiver" evaluation
    And the field "Avalição" should show "Cucumber Provide Quiz Caregiver"
    And the field "Tipo de Avaliação" should show "Através da app"
    And the field "Modelo" should show "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And the field "Data da resposta" should show "À espera de resposta"
    And the "Editar" button should be present
    And the "Voltar Atrás" button should be present

  #EDITS
  Scenario Outline: Access edit page of the evaluations of caregivers
    Given I access the "details" page of the <evalName> evaluation of the "Caregiver" caregiver
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the evaluation
    And the field "description" should show <evalName>
    And the field "type" should show <evalType>
    And the field "model" should show <evalModel>
    And the "Guardar" button should be present
    And the "Cancelar" button should be present
    Examples:
      | evalName                          | evalType        | evalModel                                                                                 |
      | Cucumber Answer Quiz Caregiver    | Atraves do site | Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout  |
      | Cucumber New Evaluation Caregiver | Atraves do site | Model 1                                                                                   |
      | Cucumber Provide Quiz Caregiver   | Atraves da app  | Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout  |

  Scenario Outline: Edit evaluations of caregivers
    Given I access the "edit" page of the <evalName> evaluation of the "Caregiver" caregiver
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
      | evalName                          | evalNameEdit                               | evalTypeEdit          | evalModelEdit                                                                                 |
      | Cucumber Answer Quiz Caregiver    | Cucumber Answer Quiz Caregiver Edit        | Atraves do site Edit  | Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout Edit |
      | Cucumber New Evaluation Caregiver | Cucumber New Evaluation Caregiver Edit     | Atraves do site Edit  | Model 1 Edit                                                                                  |
      | Cucumber Provide Quiz Caregiver   | Cucumber Provide Quiz Caregiver Edit       | Atraves da app Edit   | Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout Edit |

  # CREATES
  Scenario: Access evaluations page of materials
    Given I access the "materials" page of the "Caregiver" caregiver
    When I press the "Avaliações" button on the "Engasgamento" material on the "Materiais de Caregiver" table
    Then a table with a title that contains "Avaliações do Material Engasgamento" should be displayed
    And the "Disponibilizar Questionário" button should be present

  Scenario: Access provide evaluation on the evaluations page of materials
    Given I access the "evaluations" page of the "Engasgamento" material of the "Caregiver" caregiver
    When I press the "Disponibilizar Questionário" button
    Then I should be redirected to the "provide quiz" page
    And the "Disponibilizar Questionário para o Material: Engasgamento" text should be shown

  Scenario: Provide quiz on evaluations page of materials successfully
    Given I access the "provide quiz" page of the "evaluations" page on the "Engasgamento" material of the "Caregiver" caregiver
    When I fill the "description" field with "Cucumber Provide Quiz Material"
    And I fill the "type" field with "Através da app"
    And I fill the "quiz" field with "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And I press the "Submeter Avaliação" button
    Then I should be redirected to the "evaluations" page of the "Engasgamento" material
    And there should be an entry on the "Avaliações" table that contains the text "Cucumber Provide Quiz Material"

  #DETAILS
  Scenario: Access Provide Quiz Details
    Given I access the "evaluations" page of the "Engasgamento" material of the "Caregiver" caregiver
    When I press the "Detalhes" button of the "Cucumber Provide Quiz Material" evaluation
    Then I should be redirected to the "details" page of "Cucumber Provide Quiz Material" evaluation
    And the field "Avalição" should show "Cucumber Provide Quiz Material"
    And the field "Tipo de Avaliação" should show "Através da app"
    And the field "Modelo" should show "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And the field "Data da resposta" should show "À espera de resposta"
    And the "Editar" button should be present
    And the "Voltar Atrás" button should be present

  #EDITS
  Scenario: Access edit page of the evaluations of materials
    Given I access the "details" page of the "Cucumber Provide Quiz Material" evaluation of the "Engasgamento" material of the "Caregiver" caregiver
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the evaluation
    And the field "description" should show "Cucumber Provide Quiz Material"
    And the field "type" should show "Através da app"
    And the field "model" should show "Instrumento de avaliação das capacidades do cuidador informal - Cuidar: Stress e Burnout"
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit evaluations of materials
    Given I access the "edit" page of "Cucumber Provide Quiz Material" evaluation of the "Engasgamento" material of the "Caregiver" caregiver
    When I fill the "description" field with "Cucumber Provide Quiz Material Edit"
    And I fill the "type" field with "Através da app Edit"
    And I fill the "model" field with "Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout Edit"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "Cucumber Provide Quiz Material Edit" evaluation
    And the field "Avaliação" should show "Cucumber Provide Quiz Material Edit"
    And the field "Tipo de Avaliação" should show "Através da app Edit"
    And the field "Modelo" should show "Instrumento de avaliacao das capacidades do cuidador informal - Cuidar: Stress e Burnout Edit"
    And the field "Data da última atualização" should different from the previous
    And the last entry on the "Registos" table should contain the text "Foi atualizada."

  #ERRORS
  Scenario Outline: Username field empty
    Given I access the <page> page
    When the "username" field is empty
    And I press the "Criar" button
    Then the "O username tem que ser preenchido." error message should be shown
    Examples:
      | page                          |
      | new caregiver                 |

  Scenario Outline: Username field min length
    Given I access the <page> page
    When I fill the "username" field with "non"
    And I press the "Criar" button
    Then the "O username tem que ter pelo menos 4 letras ou dígitos." error message should be shown
    Examples:
      | page                          |
      | new caregiver                 |

  Scenario Outline: Username field already in use
    Given I access the <page> page
    When I fill the "username" field with "admin"
    And I press the "Criar" button
    Then the "Username já existente. Escolha outro." error message should be shown
    Examples:
      | page                          |
      | new caregiver                 |

  Scenario Outline: Name field empty
    Given I access the <page> page
    When the "name" field is empty
    And I press the <button> button
    Then the "O nome tem que ser preenchido." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Name field min length
    Given I access the <page> page
    When I fill the "username" field with "non"
    And I press the <button> button
    Then the "O nome tem que ter pelo menos 4 letras." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Email field already in use
    Given I access the <page> page
    When I fill the "email" field with "zecoroados@gmail.com"
    And I press the <button> button
    Then the "Email já existente. Escolha outro." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Email field empty
    Given I access the <page> page
    When the "email" field is empty
    And I press the <button> button
    Then the "O email tem que ser preenchido." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Gender field empty
    Given I access the <page> page
    When the "gender" field is empty
    And I press the <button> button
    Then the "O género tem que ser preenchido." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Birth Date field empty
    Given I access the <page> page
    When the "birthDate" field is empty
    And I press the <button> button
    Then the "A data de nascimento tem que ser preenchida." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Location field empty
    Given I access the <page> page
    When the "location" field is empty
    And I press the <button> button
    Then the "A localização tem que ser preenchida." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Location field min length
    Given I access the <page> page
    When I fill the "location" field with "non"
    And I press the <button> button
    Then the "A localização tem que ter pelo menos 4 letras." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Experience Period field empty
    Given I access the <page> page
    When the "experiencePeriod" field is empty
    And I press the <button> button
    Then the "O tempo de experiência como cuidador tem que ser preenchido." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Password field empty
    Given I access the <page> page
    When the "password" field is empty
    And I press the <button> button
    Then the "A password tem que ser preenchida." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Password field min length
    Given I access the <page> page
    When I fill the "password" field with "123"
    And I press the <button> button
    Then the "A password tem que ter pelo menos 6 letras ou digitos." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Password confirmation field does not match password field
    Given I access the <page> page
    When I fill the "password" field with "123123"
    And I fill the "password_confirmation" field with "123456"
    And I press the <button> button
    Then the "As passwords têm que ser iguais nos dois campos." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

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

