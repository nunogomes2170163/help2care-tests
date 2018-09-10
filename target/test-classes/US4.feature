Feature: Manage Needs
  As an admin
  I want to manage all the needs
  So that I can use them on patients

  #CREATE
  Scenario: Access New Need Page
    Given I access the "needs" dashboard - USfour
    When I press the "new need" button - USfour
    Then I should be redirected to the "new need" page - USfour
    And the "Nova Necessidade" text should be shown

  Scenario: Create New Need Successfully
    Given I access the "new need" page - USfour
    When I fill the "description" field with "Cucumber" - USfour
    And I press the "create" button - USfour
    Then I should be redirected to the "needs" page - USfour
    And the "Cucumber" need should be present in the "needs" table

    #DELETE
  Scenario: Delete Need
    Given I access the "details" page of the "random" need
    When I press the "delete" button - USfour
    And I press the "Sim" button from the modal
    Then I should be redirected to the "needs" page - USfour
    And the "random" need should not be present in the "needs" table

  #DETAILS
  Scenario: Access Need Details
    Given I access the "needs" page - USfour
    When I press the "details" button of the "Acamado" need
    Then I should be redirected to the "details" page of "Acamado" need
    And the field "need" should show "Acamado" - USfour
    And the field "created_by" should show "jose.silva" - USfour
    And the "edit" button should be present - USfour
    And the "delete" button should be present - USfour
    And the "back" button should be present - USfour

  #EDIT
  Scenario: Access Edit Need Page
    Given I access the "details" page of the "need"
    When I press the "edit" button - USfour
    Then I should be redirected to the "edit" page of the need
    And the editable field "description" should show "Alimentaion" - USfour
    And the "save" button should be present - USfour
    And the "cancel" button should be present - USfour

  Scenario: Edit Need Successfully
    Given I access the "edit need" page of the "need"
    When I fill the "description" field with "Alimentation" - USfour
    And I press the "save" button - USfour
    Then I should be redirected to the "details" page of the "need" - USfour
    And the field "Necessidade" should show the new need - USfour
    And should be present a log at the "Registos" section - USfour

  #ERRORS
  Scenario Outline: Description field already exists
    Given I access the "<page>" page - USfour
    When I fill the "description" field with "Acamado" - USfour
    And I press the "<button>" button - USfour
    Then the "Já existe uma necessidade com essa descrição. Escolha outra." error message should be shown - USfour
    Examples:
      | page      | button  |
      | new need  | create  |
      | edit need | save    |

  Scenario Outline: Description field empty
    Given I access the "<page>" page - USfour
    When the "description" field is empty - USfour
    And I press the "<button>" button - USfour
    Then the "A descrição tem que ser preenchida." error message should be shown - USfour
    Examples:
      | page      | button  |
      | new need  | create   |
      | edit need | save |

  Scenario Outline: Description field min length
    Given I access the "<page>" page - USfour
    When I fill the "description" field with "12" - USfour
    And I press the "<button>" button - USfour
    Then the "A descrição tem que ter pelo menos 5 letras." error message should be shown - USfour
    Examples:
      | page      | button  |
      | new need  | create   |
      | edit need | save |