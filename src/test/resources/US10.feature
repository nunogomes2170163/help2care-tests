Feature: Observe Needs
  As an healthcare professional
  I want to see which materials belongs to which needs
  So that I associate the right needs and materials to the patient

  #DETAILS
  Scenario: Access Need Details
    Given I access the "needs" page - USten
    When I press the "details" button of the "Acamado" need - USten
    Then I should be redirected to the "details" page of "Acamado" need - USten
    And the field "need" should show "Acamado" - USten
    And the field "creator" should show "jose.silva" - USten
    And the "materials" button should be present - USten
    And the "back" button should be present - USten

  #MATERIALS
  Scenario: Access Need Materials Page
  Given I access the "details" page of the "Acamado" need - USten
  When I press the "materials" button - USten
  Then I should be redirected to the "materials" page of the "Acamado" need
  And a table with the title "Materiais de Acamado" should be displayed - USten
  And the "ELIMINAÇAO VESICAL - 2" material should be present on the table