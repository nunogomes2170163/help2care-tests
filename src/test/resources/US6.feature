Feature: Manage Questions
  As an admin
  I want to manage all the questions
  So that I can evaluate the caregivers, patients and materials

  #CREATE
  Scenario: Access New Question Page
    Given I access the "questions" dashboard
    When I press the "Nova Questão" button
    Then I should be redirected to the "new question" page
    And the "Nova Questão" text should be shown

  Scenario: Create New Question Successfully with Text Answer
    Given I access the "new question" page
    When I fill the "question" field with "Cucumber"
    And I fill the "selectType" field with "Text"
    And I press the "Criar" button
    Then I should be redirected to the "questions" page
    And the "Cucumber" question should be present in the "questions" table

  Scenario: Create New Question Successfully with Multiple Answers
    Given I access the "new question" page
    When I fill the "question" field with "Cucumber"
    And I fill the "selectType" field with "Opções"
    And I fill the "values" field with "Gosto muito;Não gosto;Sim;Não;"
    And I press the "Criar" button
    Then I should be redirected to the "questions " page
    And the "Cucumber" question should be present in the "questions" table

  #DETAILS
  Scenario: Access Question Details
    Given I access the "questions" page
    When I press the "Detalhes" button of the "Abre a torneira?" question
    Then I should be redirected to the "details" page of "Abre a torneira?" question
    And the field "Questão" should show "Abre a torneira?"
    And the field "Tipo de Resposta" should show "Opções"
    And the "Dependente (não participa);" answer should be in the answer options section
    And the "Necessita de ajuda de uma pessoa;" answer should be in the answer options section
    And the "Necessita de ajuda de uma pessoa e de equipamento;" answer should be in the answer options section
    And the "Necessita de equipamento;" answer should be in the answer options section
    And the "Completamente independente;" answer should be in the answer options section
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Voltar Atrás" button should be present

  #BLOCK AND UNBLOCK
  Scenario: Block Question
    Given I access the "questions" page
    When I press the "Bloquear" button of the "Alimenta-se?" question
    Then I should be redirected to the "questions" page
    And the "Desbloquear" button should be present in the "Alimenta-se?" question options

  Scenario: Unblock Question
    Given I access the "questions" page
    And the "Alimenta-se?" user is blocked
    When I press the "Desbloquear" button of the "Alimenta-se?" question
    Then I should be redirected to the "questions" page
    And the "Bloquear" button should be present in the "Alimenta-se?" question options

  #EDIT
  Scenario: Access Edit Question Page
    Given I access the "details" page of the "question"
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the question
    And the field "question" should show "Alimenta-se?"
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Question Successfully With Text Answer
    Given I access the "edit question" page of the question
    When I fill the "question" field with "Ajusta as roupas?"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "question"
    And the field "Questão" should show the new need
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  Scenario: Edit Question Successfully With Multiple Answers
    Given I access the "edit" page of the "question"
    When I fill the "question" field with "Ajusta as roupas?"
    And I fill the "values" field with "Sim;Sim;Sim;"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "question"
    And the field "Questão" should show the new need
    And the field "Data da última atualização" should different from the previous
    And the "Sim;" answer should be in the answer options section
    And the "Sim;" answer should be in the answer options section
    And the "Sim e de equipamento;" answer should be in the answer options section
    And should be present a log at the "Registos" section

  #ERRORS
  Scenario Outline: Question with Text Answer with empty question
    Given I access the <page> page
    When the "question" field is empty
    And I press the <button> button
    Then the "A questão tem que ser preenchida." error message should be shown
    Examples:
      | page          | button  |
      | new question  | Criar   |
      | edit question | Guardar |

  Scenario Outline: Create with Text Answer with question less then min legth
    Given I access the <page> page
    When I fill the "question" field with "12"
    And I press the <button> button
    Then the "A questão tem que ter um tamanho de pelo menos 8 letras." error message should be shown
    Examples:
      | page          | button  |
      | new question  | Criar   |
      | edit question | Guardar |

  Scenario Outline: Question with Multiple Answers with no options
    Given I access the <page> page
    When I fill the "question" field with "Cucumber"
    And the "values" field is empty
    And I press the <button> button
    Then the "O campo "Opções" tem que terminar com ";"." error message should be shown
    And the "O campo "Opções" tem que ter pelo menos duas respostas." error message should be shown
    Examples:
      | page          | button  |
      | new question  | Criar   |
      | edit question | Guardar |

  Scenario Outline: Question of Multiple Answers with options less then min length
    Given I access the <page> page
    When I fill the "question" field with "Cucumber"
    And I fill the "values" field with ";sim;sim;sim"
    And I press the <button> button
    Then the "O campo "Opções" não pode começar com ";"." error message should be shown
    And the "O campo "Opções" tem que terminar com ";"." error message should be shown
    And the "O campo "Opções" tem não pode ter opções entre ";" vazias." error message should be shown
    Examples:
      | page          | button  |
      | new question  | Criar   |
      | edit question | Guardar |