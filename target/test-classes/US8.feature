Feature: Manage Caregivers
  As an healthcare professional
  I want to manage my caregivers
  So that I prepare them for the mobile app

  Scenario Outline: Evaluation model min length
    Given I access the "<page>" page - USeight
    When I fill the "model" field with "12" - USeight
    And I press the "<button>" button - USeight
    Then the "O modelo tem que ter pelo menos 3 letras" error message should be shown - USeight
    Examples:
      | page                        | button |
      | new evaluation              | save   |
      | edit answer quiz            | save   |
      | edit evaluation             | save   |
      | edit provide quiz           | save   |
      | edit provide quiz material  | save   |

  Scenario Outline: Evaluation file empty
    Given I access the "<page>" page - USeight
    When the "path" field is empty - USeight
    And I press the "<button>" button - USeight
    Then the "Introduza um ficheiro de avaliação." error message should be shown - USeight
    Examples:
      | page               | button |
      | new evaluation     | save   |