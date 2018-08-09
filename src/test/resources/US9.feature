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

