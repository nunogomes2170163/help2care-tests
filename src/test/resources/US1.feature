Feature: Web Server Authentication
  As a user
  I want to login on the website
  So that I can manage all the resources applied to my role

  Scenario: Username empty
    Given I access the login page of the Help2care website
    When the "username" field is empty
    And I press the "Login" button
    Then the "O nome de utilizador tem que ser preenchido." error message should be shown

  Scenario: Password empty
    Given I access the login page of the Help2care website
    When the "password" field is empty
    And I press the "Login" button
    Then the "A password tem que ser preenchida." error message should be shown

  Scenario: Unsuccessful Authentication
    Given I access the login page of the Help2care website
    When I fill the "username" field with "admin"
    And I fill the "password" field with "adminpw123"
    And I press the "Login" button
    Then the "Estas credênciais não existem nos nossos registos" error message should be shown

  #ADMIN
  Scenario: Successful Authentication as an admin
    Given I access the login page of the Help2care website
    When I fill the "username" field with "admin"
    And I fill the "password" field with "adminpw"
    And I press the "Login" button
    Then I should be redirect to the "admin" dashboard
    And the "users" table should be displayed

  #HEALTHCAREPRO
  Scenario: Successful Authentication as a healthcarepro
    Given I access the login page of the Help2care website
    When I fill the "username" field with "healthcarePro"
    And I fill the "password" field with "propw"
    And I press the "Login" button
    Then I should be redirect to the "healthcare professional" dashboard
    And the "my caregivers" table should be displayed
    And the "other caregivers" table should be displayed
    And the "help requests" table should be displayed
    And the "retention and churn rate" graph should be displayed
    And the "dau" graph should be displayed
    And the "sessions per dau" graph should be displayed
    And the "stickiness" graph should be displayed
