Feature: Manage Questions
  As an admin
  I want to manage all the questions
  So that I can evaluate the caregivers, patients and materials

  #CREATE
  Scenario: Access New Question Page
    Given I access the questions dashboard
    When I press the "new question" button - USsix
    Then I should be redirected to the "new question" page - USsix
    And the "Nova Questão" text should be shown - USsix

  Scenario: Create New Question Successfully with Text Answer
    Given I access the "new question" page - USsix
    When I fill the "question" field with "Cucumber" - USsix
    And I fill the "selectType" field with "text" - USsix
    And I press the "create" button - USsix
    Then I should be redirected to the "questions" page - USsix
    And the "Cucumber" question should be present in the "questions" table

  Scenario: Create New Question Successfully with Multiple Answers
    Given I access the "new question" page - USsix
    When I fill the "question" field with "Cucumber" - USsix
    And I fill the "selectType" field with "radio" - USsix
    And I fill the "values" field with "Gosto muito;Não gosto;Sim;Não;" - USsix
    And I press the "create" button - USsix
    Then I should be redirected to the "questions" page - USsix
    And the "Cucumber" question should be present in the "questions" table

  #DETAILS
  Scenario: Access Question Details
    Given I access the "questions" page - USsix
    When I press the details button of the "Abre a torneira?" question
    Then I should be redirected to the "details" page of the "Abre a torneira?" question
    And the field "question" should show "Abre a torneira?" - USsix
    And the field "answerType" should show "Opções" - USsix
    And the "Dependente (não participa);" answer should be in the answer options section as option 1
    And the "Necessita de ajuda de uma pessoa;" answer should be in the answer options section as option 2
    And the "Necessita de ajuda de uma pessoa e de equipamento;" answer should be in the answer options section as option 3
    And the "Necessita de equipamento;" answer should be in the answer options section as option 4
    And the "Completamente independente;" answer should be in the answer options section as option 5
    And the "edit" button should be present - USsix
    And the "block" button should be present - USsix
    And the "back" button should be present - USsix

  #BLOCK AND UNBLOCK
  Scenario: Block Question
    Given I access the details page of the "Abre a torneira?" question
    When I press the "block" button - USsix
    Then I should be redirected to the "details" page of the "Abre a torneira?" question
    And the "unblock" button should be present - USsix

  Scenario: Unblock Question
    Given I access the details page of the "Abre a torneira?" question
    And the question is blocked
    When I press the "unblock" button - USsix
    Then I should be redirected to the "details" page of the "Abre a torneira?" question
    And the "block" button should be present - USsix

  #EDIT
  Scenario: Access Edit Question Page
    Given I access the details page of the "Abre a torneira?" question
    When I press the "edit" button - USsix
    Then I should be redirected to the "edit" page of the "Abre a torneira?" question
    And the "save" button should be present - USsix
    And the "cancel" button should be present - USsix

  Scenario: Edit Question Successfully With Text Answer
    Given I access the edit page of a "text" question
    When I fill the "question" field with "Gosta de comer?" - USsix
    And I press the "save" button - USsix
    Then I should be redirected to the "details" page of the "Gosta de comer?" question
    And the field "Data da última atualização" should different from the previous
    And should be present a "Foi atualizada." log at the beggining of the logs section - USsix

  Scenario: Edit Question Successfully With Multiple Answers
    Given I access the edit page of a "options" question
    When I fill the "question" field with "Ajusta as roupas?" - USsix
    And I fill the "values" field with "Sim;Não;Talvez;" - USsix
    And I press the "save" button - USsix
    Then I should be redirected to the "details" page of the "Ajusta as roupas?" question
    And the field "Data da última atualização" should different from the previous
    And the "Sim;" answer should be in the answer options section as option 1
    And the "Não;" answer should be in the answer options section as option 2
    And the "Talvez;" answer should be in the answer options section as option 3
    And should be present a "Foi atualizada." log at the beggining of the logs section - USsix

  #ERRORS
  Scenario Outline: Question with Text Answer with empty question
    Given I access the "<page>" page - USsix
    When the "question" field is empty - USsix
    And I press the "<button>" button - USsix
    Then the "A questão tem que ser preenchida." error message should be shown - USsix
    Examples:
      | page          | button  |
      | new question  | create  |
      | edit question | save    |

  Scenario Outline: Create with Text Answer with question less then min legth
    Given I access the "<page>" page - USsix
    When I fill the "question error" field with "12" - USsix
    And I press the "<button>" button - USsix
    Then the "A questão tem que ter um tamanho de pelo menos 8 letras." error message should be shown - USsix
    Examples:
      | page          | button  |
      | new question  | create  |
      | edit question | save    |

  Scenario Outline: Question with Multiple Answers with no options
    Given I access the "<page>" page - USsix
    When I fill the "question" field with "Cucumber" - USsix
    And I fill the "selectType" field with "radio" "<page>" - USsix
    And the "values" field is empty - USsix
    And I press the "<button>" button - USsix
    Then the "O campo "Opções" tem que terminar com ";"." error message should be shown - USsix
    And the "O campo "Opções" tem que ter pelo menos duas respostas." error message should be shown - USsix
    Examples:
      | page          | button  |
      | new question  | create  |
      | edit question | save    |

  Scenario Outline: Question of Multiple Answers with options less then min length
    Given I access the "<page>" page - USsix
    When I fill the "question" field with "Cucumber" - USsix
    And I fill the "selectType" field with "radio" "<page>" - USsix
    And I fill the "values" field with ";sim;;sim ;sim" - USsix
    And I press the "<button>" button - USsix
    Then the "O campo "Opções" não pode começar com ";"." error message should be shown - USsix
    And the "O campo "Opções" tem que terminar com ";"." error message should be shown - USsix
    And the "O campo "Opções" não deve conter espaços em branco antes de ";"." error message should be shown - USsix
    And the "O campo "Opções" não pode conter opções entre ";" vazias." error message should be shown - USsix
    Examples:
      | page          | button  |
      | new question  | create  |
      | edit question | save    |