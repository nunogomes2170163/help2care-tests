Feature: Observe Needs
  As an healthcare professional
  I want to see which materials belongs to which needs
  So that I associate the right needs and materials to the patient

  #DETAILS
  Scenario: Access Need Details
    Given I access the "needs" page - USten
    When I press the "Detalhes" button of the "Acamado" need - USten
    Then I should be redirected to the "details" page of "Acamado" need - USten
    And the field "Necessidade" should show "Acamado" - USten
    And the field "Criador" should show "jose.silva" - USten
    And the "Materiais" button should be present - USten
    And the "Voltar Atrás" button should be present - USten

  #MATERIALS
  Scenario: Access Need Materials Page
  Given I access the "details" page of the "Acamado" need - USten
  When I press the "Materiais" button - USten
  Then I should be redirected to the "materials" page of the "need" - USten
  And should be present the text "Materiais de Acamado"
  And should be present the "Alimentação por sonda de gastrostomia" material