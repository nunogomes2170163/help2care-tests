Feature: Behavior on conflicts
  As an admin
  I want to associate the resources available
  So that I can check the behavior on the association of this resources

  Scenario: Delete the same need in two different sessions
    Given I access the details page of the "Tomar a medicação" "need" in two different sessions
    When I delete the "Tomar a medicação" need in the session 1
    And I delete the "Tomar a medicação" need in the session 2
    Then the "A necessidade Tomar a medicação já se encontra apagada." error message should be shown on session 2
