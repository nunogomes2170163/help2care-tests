Feature: Behavior on conflicts
  As an healthcare professional
  I want to associate the resources available
  So that I can check the behavior on the association of this resources

  Scenario: Associating the same Caregiver with 1 healthcare professionals in two different sessions
    Given I access the healthcare profissional dashboard in two sessions
    When I "associate" the "Cidália Pereira" caregiver in the session 1
    And I "associate" the "Cidália Pereira" caregiver in the session 2
    Then the "O cuidador Cidália Pereira já se encontra a ser gerido por 2 profissionais de saúde." error message should be shown on session 2

  Scenario: Associating the same Caregiver with 0 healthcare professionals in two different sessions
    Given I access the healthcare profissional dashboard in two sessions
    When I "associate" the "Cucumber" caregiver in the session 1
    And I "associate" the "Cucumber" caregiver in the session 2
    Then the "O cuidador Cucumber já se encontra a ser gerido por si." error message should be shown on session 2

  Scenario: Disassociating the same Caregiver in two different sessions
    Given I access the healthcare profissional dashboard in two sessions
    When I "disassociate" the "Cucumber" caregiver in the session 1
    And I "disassociate" the "Cucumber" caregiver in the session 2
    Then the "O cuidador Cucumber já não se encontra a ser gerido por si." error message should be shown on session 2

  Scenario: Associating the same patient to the same caregiver in two different sessions
    Given I access the "caregiver patients association" page in two different sessions
    When I "associate" the "Manuel Maria" patient in the session 1
    And I "associate" the "Manuel Maria" patient in the session 2
    Then the "O utente Manuel Maria já se encontra associado a um cuidador." error message should be shown on session 2

  Scenario: Disassociating the same patient to the same caregiver in two different sessions
    Given I access the "caregiver patients association" page in two different sessions
    When I "disassociate" the "Manuel Maria" patient in the session 1
    And I "disassociate" the "Manuel Maria" patient in the session 2
    Then the "O utente Manuel Maria já não se encontra associado ao cuidador Caregiver." error message should be shown on session 2

  Scenario: Associating the same need to the same patient in two different sessions
    Given I access the "patient needs association" page in two different sessions
    When I "associate" the "Acamado" need in the session 1
    And I "associate" the "Acamado" need in the session 2
    Then the "A necessidade Acamado já se encontra associada ao utente Beatriz Martins." error message should be shown on session 2

  Scenario: Disassociating the same need to the same patient in two different sessions
    Given I access the "patient needs association" page in two different sessions
    When I "disassociate" the "Acamado" need in the session 1
    And I "disassociate" the "Acamado" need in the session 2
    Then the "A necessidade Acamado já não se encontra associada ao utente Beatriz Martins." error message should be shown on session 2

  #DIASSOCIATE MATERIALS FROM CAREGIVERS AND NEEDS
  Scenario: Disassociating the same material from the same caregiver in two different sessions
    Given I access the "caregiver materials association" page in two different sessions
    When I disassociate the "Como mudar a fralda" material in the session 1
    And I disassociate the "Como mudar a fralda" material in the session 2
    Then the "O material Como mudar a fralda já não se encontra associado ao cuidador Helena Carvalho." error message should be shown on session 2

  Scenario: Disassociating the same need from the same patient in two different sessions
    Given I access the "need materials association" page in two different sessions
    When I disassociate the "Engasgamento" material in the session 1
    And I disassociate the "Engasgamento" material in the session 2
    Then the "O material Engasgamento já não se encontra associado à necessidade Transferências." error message should be shown on session 2

  #PROVIDE QUIZS TO ANSWER ON MOBILE APP
  Scenario: Associating the same mobile quiz to the same caregiver in two different sessions
    Given I access the "caregiver evaluations" page in two different sessions
    When I provide the "Avaliação das necessidades do utente dependente - Autocuidado: Andar" quiz to "caregiver" in the session 1
    And I provide the "Avaliação das necessidades do utente dependente - Autocuidado: Andar" quiz to "caregiver" in the session 2
    Then the "O questionário Avaliação das necessidades do utente dependente - Autocuidado: Andar já foi disponibilizado para resposta na aplicação, mas ainda não foi respondido." error message should be shown on session 2

  Scenario: Associating the same mobile quiz to the same patient in two different sessions
    Given I access the "patient evaluations" page in two different sessions
    When I provide the "Avaliação das necessidades do utente dependente - Autocuidado: Andar" quiz to "patient" in the session 1
    And I provide the "Avaliação das necessidades do utente dependente - Autocuidado: Andar" quiz to "patient" in the session 2
    Then the "O questionário Avaliação das necessidades do utente dependente - Autocuidado: Andar já foi disponibilizado para resposta na aplicação, mas ainda não foi respondido." error message should be shown on session 2

  Scenario: Associating the same mobile quiz to the same material in two different sessions
    Given I access the "material evaluations" page in two different sessions
    When I provide the "Avaliação das necessidades do utente dependente - Autocuidado: Andar" quiz to "material" in the session 1
    And I provide the "Avaliação das necessidades do utente dependente - Autocuidado: Andar" quiz to "material" in the session 2
    Then the "O questionário Avaliação das necessidades do utente dependente - Autocuidado: Andar já foi disponibilizado para resposta na aplicação, mas ainda não foi respondido." error message should be shown on session 2