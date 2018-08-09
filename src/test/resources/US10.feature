Feature: Observe Needs
  As an healthcare professional
  I want to see which materials belongs to which needs
  So that I associate the right needs and materials to the patient

  #DETAILS
  Scenario: Access Need Details
    Given I access the "needs" page
    When I press the "Detalhes" button of the "Acamado" need
    Then I should be redirected to the "details" page of "Acamado" need
    And the field "Necessidade" should show "Acamado"
    And the field "Criador" should show "jose.silva"
    And the "Materiais" button should be present
    And the "Voltar Atrás" button should be present

  #MATERIALS
  Scenario: Access Need Materials Page
  Given I access the "details" page of the "Acamado" need
  When I press the "Materiais" button
  Then I should be redirected to the "materials" page of the "need"
  And should be present the text "Materiais de Acamado"
  And should be present the "Alimentação por sonda de gastrostomia" material