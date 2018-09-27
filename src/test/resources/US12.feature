Feature: Behavior on conflicts
  As an admin
  I want to associate the resources available
  So that I can check the behavior on the association of this resources

  #ORDER UP/DOWN AND REMOVE ON COMPSOITE MATERIALS AND QUIZS
  Scenario: Move up the same material from the same composite material in two different sessions
    Given I access the materials association page of the "ELIMINAÇAO VESICAL" composite material in two different sessions
    When I move "up" the "ELIMINAÇAO VESICAL - 2" material in the session 1
    And I move "up" the "ELIMINAÇAO VESICAL - 2" material in the session 2
    Then the "O material ELIMINAÇAO VESICAL - 2 já não se encontra na mesma posição, quando a operação de ordenamento da lista de materiais foi solicitada." error message should be shown on session 2

  Scenario: Move down the same material from the same composite material in two different sessions
    Given I access the materials association page of the "ELIMINAÇAO VESICAL" composite material in two different sessions
    When I move "down" the "ELIMINAÇAO VESICAL - 2" material in the session 1
    And I move "down" the "ELIMINAÇAO VESICAL - 2" material in the session 2
    Then the "O material ELIMINAÇAO VESICAL - 2 já não se encontra na mesma posição, quando a operação de ordenamento da lista de materiais foi solicitada." error message should be shown on session 2

  Scenario: Add the same material to the same composite material in two different sessions
    Given I access the materials association page of the "ELIMINAÇAO VESICAL" composite material in two different sessions
    When I "add" the "Como mudar a fralda" material in the session 1
    And I "add" the "Como mudar a fralda" material in the session 2
    Then the "O material Como mudar a fralda já se encontra na lista de materiais do material composto ELIMINAÇAO VESICAL." error message should be shown on session 2

  Scenario: Remove the same material from the same composite material in two different sessions
    Given I access the materials association page of the "ELIMINAÇAO VESICAL" composite material in two different sessions
    When I "remove" the "Como mudar a fralda" material in the session 1
    And I "remove" the "Como mudar a fralda" material in the session 2
    Then the "O material Como mudar a fralda já não se encontra na lista de materiais do material composto ELIMINAÇAO VESICAL." error message should be shown on session 2

  Scenario: Move up the same question from the same quiz in two different sessions
    Given I access the questions association page of the "Avaliação das necessidades do utente dependente - Autocuidado: Intestinal" quiz in two different sessions
    When I move "up" the "Manuseia/Higieniza colostomia?" question in the session 1
    And I move "up" the "Manuseia/Higieniza colostomia?" question in the session 2
    Then the "A questão Manuseia/Higieniza colostomia? já não se encontra na mesma posição, quando a operação de ordenamento da lista de questões foi solicitada." error message should be shown on session 2

  Scenario: Move down the same question from the same quiz in two different sessions
    Given I access the questions association page of the "Avaliação das necessidades do utente dependente - Autocuidado: Intestinal" quiz in two different sessions
    When I move "down" the "Manuseia/Higieniza colostomia?" question in the session 1
    And I move "down" the "Manuseia/Higieniza colostomia?" question in the session 2
    Then the "A questão Manuseia/Higieniza colostomia? já não se encontra na mesma posição, quando a operação de ordenamento da lista de questões foi solicitada." error message should be shown on session 2

  Scenario: Add the same question to the same quiz in two different sessions
    Given I access the questions association page of the "Avaliação das necessidades do utente dependente - Autocuidado: Intestinal" quiz in two different sessions
    When I "add" the "Aplica o desodorizante?" question in the session 1
    And I "add" the "Aplica o desodorizante?" question in the session 2
    Then the "A questão Aplica o desodorizante? já se encontra na lista de questões do qquestionário Avaliação das necessidades do utente dependente - Autocuidado: Intestinal." error message should be shown on session 2

  Scenario: Remove the same question from the same quiz in two different sessions
    Given I access the questions association page of the "Avaliação das necessidades do utente dependente - Autocuidado: Intestinal" quiz in two different sessions
    When I "remove" the "Aplica o desodorizante?" question in the session 1
    And I "remove" the "Aplica o desodorizante?" question in the session 2
    Then the "A questão Aplica o desodorizante? já não se encontra na lista de questões do qquestionário Avaliação das necessidades do utente dependente - Autocuidado: Intestinal." error message should be shown on session 2

  #REMOVE NEEDS E MATERIALS
  Scenario: Delete the same material in two different sessions
    Given I access the details page of the "Posicionar a pessoa na cama" "material" in two different sessions
    When I delete the "Posicionar a pessoa na cama" material in the session 1
    And I delete the "Posicionar a pessoa na cama" material in the session 2
    Then the "O material Posicionar a pessoa na cama já se encontra apagado." error message should be shown on session 2

  Scenario: Delete the same need in two different sessions
    Given I access the details page of the "Tomar a medicação" "need" in two different sessions
    When I delete the "Tomar a medicação" need in the session 1
    And I delete the "Tomar a medicação" need in the session 2
    Then the "A necessidade Tomar a medicação já se encontra apagada." error message should be shown on session 2
