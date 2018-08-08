Feature: Manage Needs
  As an admin
  I want to manage all the needs
  So that I can use them on patients

  #CREATE
  Scenario: Access New Need Page
    Given I access the "needs" dashboard
    When I press the "Nova Necessidade" button
    Then I should be redirected to the "new need" page
    And the "Nova Necessidade" text should be shown

  Scenario: Create New Need Successfully
    Given I access the "new need" page
    When I fill the "description" field with "Cucumber"
    And I press the "Criar" button
    Then I should be redirected to the "needs" page
    And the "Cucumber" need should be present in the "needs" table

  #DETAILS
  Scenario: Access Need Details
    Given I access the "needs" page
    When I press the "Detalhes" button of the "Acamado" need
    Then I should be redirected to the "details" page of "Acamado" need
    And the field "Necessidade" should show "Acamado"
    And the field "Criador" should show "jose.silva"
    And the "Editar" button should be present
    And the "Materiais" button should be present
    And the "Apagar" button should be present
    And the "Voltar Atrás" button should be present

  #EDIT
  Scenario: Access Edit Need Page
    Given I access the "details" page of the "need"
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the need
    And the field "description" should show "Alimentaion"
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Need Successfully
    Given I access the "edit need" page of the need
    When I fill the "description" field with "Alimentation"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "need"
    And the field "Necessidade" should show the new need
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  #MATERIALS
  Scenario: Access Need Materials Page
    Given I access the "details" page of the "Acamado" need
    When I press the "Materiais" button
    Then I should be redirected to the "materials" page of the "need"
    And should be present the text "Materiais de Acamado"
    And should be present the "Alimentação por sonda de gastrostomia" material

  #DELETE
  Scenario: Delete Need
    Given I access the "details" page of the "Cucumber" need
    When I press the "Apagar" button
    And I press the "Sim" button from the modal
    Then I should be redirected to the "needs" page
    And the "Cucumber" need should not be present in the "needs" table

  #ERRORS
  Scenario: Description field already exists
    Given I access the <page> page
    When I fill the "description" field with "Acamado"
    And I press the <button> button
    Then the "Já existe uma necessidade com essa descrição. Escolha outra." error message should be shown
    Examples:
      | page      | button  |
      | new need  | Criar   |
      | edit need | Guardar |

  Scenario: Description field empty
    Given I access the <page> page
    When the "description" field is empty
    And I press the <button> button
    Then the "A descrição tem que ser preenchida." error message should be shown
    Examples:
      | page      | button  |
      | new need  | Criar   |
      | edit need | Guardar |

  Scenario: Description field min length
    Given I access the <page> page
    When I fill the "description" field with "12"
    And I press the <button> button
    Then the "A descrição tem que ter pelo menos 5 letras." error message should be shown
    Examples:
      | page      | button  |
      | new need  | Criar   |
      | edit need | Guardar |