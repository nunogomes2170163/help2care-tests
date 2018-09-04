Feature: Manage Quizs
  As an admin
  I want to manage all the quizs
  So that I can evaluate the caregivers, patients and materials

  #CREATE
  Scenario: Access New Quizs Page
    Given I access the quizs dashboard
    When I press the "new quiz" button - USseven
    Then I should be redirected to the "new quiz" page - USseven
    And the "Novo Questionário" text should be shown - USseven

  Scenario: Create New Quiz Successfully
    Given I access the "new quiz" page - USseven
    When I fill the "name" field with "Cucumber" - USseven
    And I press the "create" button - USseven
    Then I should be redirected to the "questions associate" page - USseven
    And the "other questions" table should be present
    And the "quiz questions" table should be present

  Scenario: Associating Questions to the new Quiz - part 1(add questions)
    Given I access the "questions associate" page - USseven
    And the other questions table have more than 2 entries
    When I press add button of the first row of the other questions table twice
    Then the quiz questions table should have 2 entries
    And the "first" entry of the quiz questions table should contain the text "(Apoiar no andar) - Sinto-me capaz de ensinar a utilizar os equipamentos indicados para auxiliar a marcha?"
    And the "first" entry of the quiz questions table should display "down" button
    And the "first" entry of the quiz questions table should display "remove" button
    And the "second" entry of the quiz questions table should contain the text "(Apoiar no andar) - Sinto-me capaz de identificar a integridade dos equipamentos auxiliares da marcha?"
    And the "second" entry of the quiz questions table should display "up" button
    And the "second" entry of the quiz questions table should display "remove" button

  Scenario: Associating Questions to the new Quiz - part 2(arrow down)
    Given I access the "questions associate" page - USseven
    And the quiz questions table have 2 entries
    When I press the "down" button of the first entry of the quiz questions table
    Then the new "first" entry of the quiz questions table should be the "second" entry
    And the new "second" entry of the quiz questions table should be the "first" entry

  Scenario: Associating Questions to the new Quiz - part 3(arrow up)
    Given I access the "questions associate" page - USseven
    And the quiz questions table have 2 entries
    When I press the "up" button of the second entry of the quiz questions table
    Then the new "second" entry of the quiz questions table should be the "first" entry
    And the new "first" entry of the quiz questions table should be the "second" entry

  Scenario: Associating Questions to the new Quiz - part 4(remove)
    Given I access the "questions associate" page - USseven
    And the quiz questions table have 2 entries
    When I press the "remove" button of the first entry of the quiz questions table
    Then the quiz questions table should have 1 entry
    And the new first entry of the quiz questions table should contain the text of the previous second entry

  Scenario: Associating Questions to the new Quiz - part 5(save)
    Given I access the "questions associate" page - USseven
    When I press the "conclude" button - USseven
    Then I should be redirected to the details page of the quiz
    And the field "quiz" should show "Cucumber" - USseven
    And a table with the title "Questões Associadas" should be displayed
    And the questions associated table should have at least 1 entry
    And the "edit" button should be present - USseven
    And the "block" button should be present - USseven
    And the "questions" button should be present - USseven
    And the "back" button should be present - USseven

  #DETAILS
  Scenario: Access Quiz Details Page
    Given I access the "quizs" page - USseven
    When I press the details button of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    Then I should be redirected to the "details" page of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    And the field "quiz" should show "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" - USseven
    And the "Alimenta-se?" question should be present in the questions associated table - USseven
    And the "Prepara adequadamente os alimentos para ingestão?" question should be present in the questions associated table - USseven
    And the "Abre recipientes?" question should be present in the questions associated table - USseven
    And the "Pega no copo ou chávena?" question should be present in the questions associated table - USseven
    And the "Leva os alimentos à boca com os utensílios?" question should be present in the questions associated table - USseven
    And the "Ingere os alimentos com segurança (sem tosse e/ou engasgo)?" question should be present in the questions associated table - USseven
    And the "edit" button should be present - USseven
    And the "questions" button should be present - USseven
    And the "block" button should be present - USseven
    And the "back" button should be present - USseven

  #EDIT
  Scenario: Access Edit Quiz Page
    Given I access the "details" page of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    When I press the "edit" button - USseven
    Then I should be redirected to the "edit" page of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    And the "save" button should be present - USseven
    And the "cancel" button should be present - USseven

  Scenario: Edit Quiz Successfully
    Given I access the "edit" page of the "Avaliação das necessidades do utente dependente - Autocuidado: Alternância de posição" quiz
    When I fill the "name" field with "Avaliação das necessidades do utente dependente - Autocuidado: Alternância de posição" - USseven
    And I press the "save" button - USseven
    Then I should be redirected to the "details" page of the "Avaliação das necessidades do utente dependente - Autocuidado: Alternância de posição" quiz
    And the "Move o corpo, virando-o de um lado para o outro?" question should be present in the questions associated table - USseven
    And the "Alterna a posição de deitado para sentado?" question should be present in the questions associated table - USseven
    And the field "Data da última atualização" should different from the previous - USseven
    And should be present a "Foi atualizado." log at the beggining of the logs section - USseven

  #QUESTIONS
  Scenario: Access Quiz Questions Page
    Given I access the "details" page of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    When I press the "questions" button - USseven
    Then I should be redirected to the quiz questions page of the quiz
    And the "other questions" table should be present
    And the "quiz questions filled" table should be present
    And the "save" button should be present - USseven
    And the "cancel" button should be present - USseven

  #BLOCK AND UNBLOCK
  Scenario: Block Quiz
    Given I access the "details" page of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    When I press the "block" button - USseven
    Then I should be redirected to the "details" page of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    And the "unblock" button should be present - USseven

  Scenario: Unblock Question
    Given I access the "quizs" page - USseven
    And the quiz is blocked
    When I press the "unblock" button - USseven
    Then I should be redirected to the "details" page of the "Avaliação das necessidades do utente dependente - Autocuidado: Alimentar-se" quiz
    And the "block" button should be present - USseven

  #ERRORS
  Scenario Outline: Quiz name field empty
    Given I access the "<page>" page - USseven
    When the "name" field is empty - USseven
    And I press the "<button>" button - USseven
    Then the "O nome tem que ser preenchido." error message should be shown - USseven
    Examples:
      | page      | button  |
      | new quiz  | create  |
      | edit quiz | save    |

  Scenario Outline: Quiz name field min length
    Given I access the "<page>" page - USseven
    When I fill the "name error" field with "12" - USseven
    And I press the "<button>" button - USseven
    Then the "O nome tem que ter pelo menos 4 letras." error message should be shown - USseven
    Examples:
      | page      | button  |
      | new quiz  | create  |
      | edit quiz | save    |