Feature: Web Server Forgot Password
  As a user
  I want to reset my password
  So that I can login if I forgot my password


  Scenario: Forgot Password Button on the Login Page
    Given I access the login page of the Help2care website - UStwo
    When I press the "Esqueceu-se da sua password?" button - UStwo
    Then I should be redirected to the "reset password" page - UStwo
    And should be present the field to fill with an email
    And should be present the button "Enviar o link de reset password"

  Scenario: Send Password Reset Email Successfully
    Given I access the reset password page
    When I fill the "email" field with "zecoroados@gmail.com" - UStwo
    And I press the "Enviar o link de reset password" button - UStwo
    Then the "O email com o link para efetuar o reset da password foi enviado!" message should be shown - UStwo

  Scenario: Send Password Reset Email Unsuccessfully
    Given I access the reset password page
    When I fill the "email" field with "ze@mail.com" - UStwo
    And I press the "Enviar o link de reset password" button - UStwo
    Then the "Não encontramos um utilizador associado ao email fornecido." error message should be shown - UStwo



