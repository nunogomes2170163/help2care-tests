Feature: Manage Users
  As an admin
  I want to manage all the users
  So that she/he can use the Web or Mobile App

  #CREATES
  Scenario Outline: Access User Create Page
    Given I access the "admin" dashboard - USthree
    When I press the "<text>" button -UStrhee
    Then I should be redirected to the "<page>" page
    And the "<user>" form should be shown
    Examples:
    | text                       | page                        | user                    |
    | new admin                  | new admin                   | admin                   |
    | new healthcare professional| new healthcare professional | healthcare professional |
    | new caregiver              | new caregiver               | caregiver               |

  Scenario: Create New Admin Successfully
    Given I access the "new admin" page
    When I fill the "username" field with "cucumber" - USthree
    And I fill the "name" field with "Cucumber" - USthree
    And I fill the "email" field with "cucumber@gmail.com" - USthree
    And I fill the "password" field with "cucumber" - USthree
    And I fill the "password_confirmation" field with "cucumber" - USthree
    And I press the "Criar" button - USthree
    Then I should be redirected to the "admin" dashboard - USthree
    And the "Cucumber" user should be present in the "users" table

  Scenario: Create New Healthcare Professional Successfully
    Given I access the "new healthcare professional" page
    When I fill the "username" field with "cucumber" - USthree
    And I fill the "name" field with "Cucumber" - USthree
    And I fill the "email" field with "cucumber@gmail.com" - USthree
    And I fill the "job" field with "Medic" - USthree
    And I fill the "facility" field with "Leiria" - USthree
    And I fill the "password" field with "cucumber" - USthree
    And I fill the "password_confirmation" field with "cucumber" - USthree
    And I press the "Criar" button - USthree
    Then I should be redirected to the "admin" dashboard - USthree
    And the "Cucumber" user should be present in the "users" table

  Scenario: Create New Caregiver Successfully
    Given I access the "new caregiver" page
    When I fill the "username" field with "cucumber" - USthree
    And I fill the "name" field with "Cucumber" - USthree
    And I fill the "email" field with "cucumber@gmail.com" - USthree
    And I fill the "gender" field with "Masculino" - USthree
    And I fill the "birthDate" field with "12-12-1994" - USthree
    And I fill the "location" field with "Leiria" - USthree
    And I fill the "experienceNumber" field with "7" - USthree
    And I fill the "experiencePeriod" field with "Ano/s" - USthree
    And I fill the "password" field with "cucumber" - USthree
    And I fill the "password_confirmation" field with "cucumber" - USthree
    And I press the "Criar" button - USthree
    Then I should be redirected to the "admin" dashboard - USthree
    And the "Cucumber" user should be present in the "users" table


  #DETAILS
  Scenario: Access Admin User Details
    Given I access the "admin" dashboard - USthree
    When I press the "Detalhes" button of the "Admin" user
    Then I should be redirected to the "details" page of "Admin" user
    And the field "utilizador" should show "admin"
    And the field "nome" should show "Admin"
    And the field "email" should show "admin@mail.com"
    And the field "função" should show "Administador"
    And the field "created_at" should show "2018-01-26 19:36:10"
    And the "edit" button should be present
    And the "block" button should be present
    And the "back" button should be present

  Scenario: Access Healthcare Professional User Details
    Given I access the "admin" dashboard - USthree
    When I press the "Detalhes" button of the "Alexandra Teixeira" user
    Then I should be redirected to the "details" page of "Alexandra Teixeira" user
    And the field "utilizador" should show "alexandra.teixeira"
    And the field "nome" should show "Alexandra Teixeira"
    And the field "email" should show "maxxabersi@gmail.com"
    And the field "função" should show "Profissional de Saúde"
    And the field "job" should show "Enfermeira"
    And the field "facility" should show "Leiria"
    And the field "created_at" should show "2018-06-13 14:34:58"
    And the "edit" button should be present
    And the "block" button should be present
    And the "back" button should be present

  Scenario: Access Caregiver User Details
    Given I access the "admin" dashboard - USthree
    When I press the "Detalhes" button of the "Ana Luisa Roque" user
    Then I should be redirected to the "details" page of "Ana Luisa Roque" user
    And the field "utilizador" should show "ana.roque.cuidador"
    And the field "nome" should show "Ana Luisa Roque"
    And the field "função" should show "Cuidador"
    And the field "email" should show "roque.ana2@gmail.com"
    And the field "birthDate" should show "26-07-1992"
    And the field "location" should show "Leiria"
    And the field "gender" should show "Feminino"
    And the field "experienceTime" should show "0 Ano/s"
    And the field "healthcareProsCount" should show "1/2"
    And the field "created_by" should show "admin"
    And the field "created_at" should show "2018-04-14 10:46:17"
    And the "edit" button should be present
    And the "block" button should be present
    And the "back" button should be present


  #DASHBOARD USER BLOCK & UNBLOCK
  Scenario: Block User on the Admin Dashboard
    Given I access the "admin" dashboard - USthree
    When I press the "Bloquear" button of the "Alexandra Teixeira" user
    Then I should be redirected to the "admin" dashboard - USthree
    And the "Desbloquear" button should be present in the "Alexandra Teixeira" user options

  Scenario: Unblock User on the Admin Dashboard
    Given I access the "admin" dashboard - USthree
    And the "Alexandra Teixeira" user is blocked
    When I press the "Desbloquear" button of the "Alexandra Teixeira" user
    Then I should be redirected to the "admin" dashboard - USthree
    And the "Bloquear" button should be present in the "Alexandra Teixeira" user options

  #EDIT
  Scenario: Access Admin Edit Page
    Given I access the "details" page of the Cucumber "admin"
    When I press the "Editar" button - USthree
    Then I should be redirected to the "edit" page of the "amdin"
    And the editable field "name" should show "Admin"
    And the editable field "email" should show "admin@mail.com"
    And the field "password" should be empty
    And the field "password_confirmation" should be empty
    And the "save" button should be present
    And the "cancel" button should be present

  Scenario: Edit Admin User Successfully Without Password
    Given I access the "edit" page of the Cucumber "admin"
    When I edit the "name" field with "Cucumber" - USthree
    And I edit the "email" field with "cucumber@gmail.com" - USthree
    And I press the "Guardar" button - USthree
    Then I should be redirected to the "details" page of the "cucumber"
    And the field "utilizador" should show "cucumber"
    And the field "name" should show the new "name"
    And the field "email" should show the new "email"
    And the field "função" should show "Administador"
    And should be present a log at the "Registos" section

  Scenario: Edit Admin User Successfully With Password
    Given I access the "edit" page of the Cucumber "admin"
    When I edit the "name" field with "Clemens Mann" - USthree
    And I edit the "email" field with "nella.kunze@example.org" - USthree
    And I fill the "password" field with "123123" - USthree
    And I fill the "password_confirmation" field with "123123" - USthree
    And I press the "Guardar" button - USthree
    Then I should be redirected to the "details" page of the "cucumber"
    And the field "Utilizador" should show "teresa.olson"
    And the field "name" should show the new "name"
    And the field "email" should show the new "email"
    And the field "função" should show "Administador"
    And should be present a log at the "Registos" section

  Scenario: Access Healthcare Professional Edit Page
    Given I access the "details" page of the Cucumber "healthcare professional"
    When I press the "Editar" button - USthree
    Then I should be redirected to the "edit" page of the "alexandra.teixeira"
    And the editable field "name" should show "Alexandra Teixeira"
    And the editable field "email" should show "maxxabersi@gmail.com"
    And the editable field "job" should show "Enfermeira"
    And the editable field "facility" should show "Leiria"
    And the field "password" should be empty
    And the field "password_confirmation" should be empty
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Healthcare Professional User Successfully Without Password
    Given I access the "edit" page of the Cucumber "healthcare professional"
    When I edit the "name" field with "Ana Margarida Carvalho" - USthree
    And I edit the "email" field with "amargarida.carvalho@live.com.pt" - USthree
    And I edit the "job" field with "Enfermeira" - USthree
    And I edit the "facility" field with "Leiria" - USthree
    And I press the "Guardar" button - USthree
    Then I should be redirected to the "details" page of the "ana.margarida.carvalho"
    And the field "utilizador" should show "ana.margarida.carvalho"
    And the field "name" should show the new "name"
    And the field "email" should show the new "email"
    And the field "função" should show "Profissional de Saúde"
    And the field "job" should show the new "job"
    And the field "facility" should show the new "facility"
    And should be present a log at the "Registos" section

  Scenario: Edit Healthcare Professional User Successfully With Password
    Given I access the "edit" page of the Cucumber "healthcare professional"
    When I edit the "name" field with "Ana Margarida Carvalho" - USthree
    And I edit the "email" field with "amargarida.carvalho@live.com.pt" - USthree
    And I edit the "job" field with "Enfermeira" - USthree
    And I edit the "facility" field with "Leiria" - USthree
    And I fill the "password" field with "123123" - USthree
    And I fill the "password_confirmation" field with "123123" - USthree
    And I press the "Guardar" button - USthree
    Then I should be redirected to the "details" page of the "ana.margarida.carvalho"
    And the field "utilizador" should show "ana.margarida.carvalho"
    And the field "name" should show the new "name"
    And the field "email" should show the new "email"
    And the field "função" should show "Profissional de Saúde"
    And the field "job" should show the new "job"
    And the field "facility" should show the new "facility"
    And should be present a log at the "Registos" section

  Scenario: Access Caregiver Edit Page
    Given I access the "details" page of the Cucumber "caregiver"
    When I press the "Editar" button - USthree
    Then I should be redirected to the "edit" page of the "ana.roque.cuidador"
    And the editable field "name" should show "Ana Luisa Roque"
    And the editable field "email" should show "roque.ana2@gmail.com"
    And the editable field "gender" should show "Feminino"
    And the editable field "birthDate" should show "26-07-1992"
    And the editable field "location" should show "Leiria"
    And the editable field "experienceNumber" should show "0"
    And the editable field "experiencePeriod" should show "Ano/s"
    And the field "password" should be empty
    And the field "password_confirmation" should be empty
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Caregiver User Successfully Without Password
    Given I access the "edit" page of the Cucumber "caregiver"
    When I edit the "name" field with "Ana Margarida Carvalho" - USthree
    And I edit the "email" field with "amargarida.carvalho@live.com.pt" - USthree
    And I fill the "gender" field with "Masculino" - USthree
    And I fill the "birthDate" field with "26-07-1991" - USthree
    And I edit the "location" field with "Leiria" - USthree
    And I fill the "experienceNumber" field with "2" - USthree
    And I fill the "experiencePeriod" field with "Mês/Meses" - USthree
    And I press the "Guardar" button - USthree
    Then I should be redirected to the "details" page of the "ana.margarida.carvalho.cuidador"
    And the field "utilizador" should show "ana.margarida.carvalho.cuidador"
    And the field "name" should show the new "name"
    And the field "email" should show the new "email"
    And the field "função" should show "Cuidador"
    And the field "birthDate" should show the new "birthDate"
    And the field "location" should show the new "location"
    And the field "gender" should show the new "gender"
    And the field "experienceTime" should show the new "experienceTime"
    And the field "Nº Profissionais de Saúde" should show "1/2"
    And the field "Criador" should show "admin"
    And should be present a log at the "Registos" section

  Scenario: Edit Caregiver User Successfully With Password
    Given I access the "edit" page of the Cucumber "caregiver"
    When I edit the "name" field with "Ana Margarida Carvalho" - USthree
    And I edit the "email" field with "amargarida.carvalho@live.com.pt" - USthree
    And I fill the "gender" field with "Masculino" - USthree
    And I fill the "birthDate" field with "26-07-1991" - USthree
    And I edit the "location" field with "Leiria" - USthree
    And I fill the "experienceNumber" field with "2" - USthree
    And I fill the "experiencePeriod" field with "Mês/Meses" - USthree
    And I fill the "password" field with "123123" - USthree
    And I fill the "password_confirmation" field with "123123" - USthree
    And I press the "Guardar" button - USthree
    Then I should be redirected to the "details" page of the "ana.margarida.carvalho.cuidador"
    And the field "utilizador" should show "ana.margarida.carvalho.cuidador"
    And the field "name" should show the new "name"
    And the field "email" should show the new "email"
    And the field "função" should show "Cuidador"
    And the field "birthDate" should show the new "birthDate"
    And the field "location" should show the new "location"
    And the field "gender" should show the new "gender"
    And the field "experienceTime" should show the new "experienceTime"
    And the field "Nº Profissionais de Saúde" should show "1/2"
    And the field "Criador" should show "admin"
    And should be present a log at the "Registos" section

  #ERRORS
  Scenario Outline: Username field empty
    Given I access the "<page>" page
    When the "username" field is empty - USthree
    And I press the "Criar" button - USthree
    Then the "O username tem que ser preenchido." error message should be shown - USthree
    Examples:
      | page                          |
      | new admin                     |
      | new healthcare professional   |
      | new caregiver                 |

  Scenario Outline: Username field min length
    Given I access the "<page>" page
    When I fill the "username" field with "non" - USthree
    And I press the "Criar" button - USthree
    Then the "O username tem que ter pelo menos 4 letras ou dígitos." error message should be shown - USthree
    Examples:
      | page                          |
      | new admin                     |
      | new healthcare professional   |
      | new caregiver                 |

  Scenario Outline: Username field already in use
    Given I access the "<page>" page
    When I fill the "username" field with "admin" - USthree
    And I press the "Criar" button - USthree
    Then the "Username já existente. Escolha outro." error message should be shown - USthree
    Examples:
      | page                          |
      | new admin                     |
      | new healthcare professional   |
      | new caregiver                 |

  Scenario Outline: Name field empty
    Given I access the "<page>" page
    When the "name" field is empty - USthree
    And I press the "<button>" button
    Then the "O nome tem que ser preenchido." error message should be shown - USthree
    Examples:
      | page                          | button                           |
      | new admin                     | new admin                        |
      | new healthcare professional   | new healthcare professional      |
      | new caregiver                 | new caregiver                    |
      | edit admin                    | edit admin                       |
      | edit healthcare professional  | edit healthcare professional     |
      | edit caregiver                | edit caregiver                   |

  Scenario Outline: Name field min length
    Given I access the "<page>" page
    When I fill the "name" field with "non" - USthree
    And I press the "<button>" button
    Then the "O nome tem que ter pelo menos 4 letras." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |

  Scenario Outline: Email field already in use
    Given I access the "<page>" page
    When I fill the "email" field with "zecoroados@gmail.com" - USthree
    And I press the "<button>" button
    Then the "Email já existente. Escolha outro." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |

  Scenario Outline: Email field empty
    Given I access the "<page>" page
    When the "email" field is empty - USthree
    And I press the "<button>" button
    Then the "O email tem que ser preenchido." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |

  Scenario Outline: Gender field empty
    Given I access the "<page>" page
    When the "gender" field is empty - USthree
    And I press the "<button>" button
    Then the "O género tem que ser preenchido." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Birth Date field empty
    Given I access the "<page>" page
    When the "birthDate" field is empty - USthree
    And I press the "<button>" button
    Then the "A data de nascimento tem que ser preenchida." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Job field empty
    Given I access the "<page>" page
    When the "job" field is empty - USthree
    And I press the "<button>" button
    Then the "A profissão tem que ser preenchida." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new healthcare professional   | Criar   |
      | edit healthcare professional  | Guardar |

  Scenario Outline: Job field min length
    Given I access the "<page>" page
    When I fill the "job" field with "non" - USthree
    And I press the "<button>" button
    Then the "A profissão tem que ter pelo menos 4 letras." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new healthcare professional   | Criar   |
      | edit healthcare professional  | Guardar |

  Scenario Outline: Facility field empty
    Given I access the "<page>" page
    When the "facility" field is empty - USthree
    And I press the "<button>" button
    Then the "O local de trabalho tem que ser preenchido." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new healthcare professional   | Criar   |
      | edit healthcare professional  | Guardar |

  Scenario Outline: Facility field min length
    Given I access the "<page>" page
    When I fill the "facility" field with "non" - USthree
    And I press the "<button>" button
    Then the "O local de trabalho tem que ter pelo menos 4 letras." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new healthcare professional   | Criar   |
      | edit healthcare professional  | Guardar |

  Scenario Outline: Location field empty
    Given I access the "<page>" page
    When the "location" field is empty - USthree
    And I press the "<button>" button
    Then the "A localização tem que ser preenchida." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Location field min length
    Given I access the "<page>" page
    When I fill the "location" field with "non" - USthree
    And I press the "<button>" button
    Then the "A localização tem que ter pelo menos 4 letras." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Experience Period field empty
    Given I access the "<page>" page
    When the "experiencePeriod" field is empty - USthree
    And I press the "<button>" button
    Then the "O tempo de experiência como cuidador tem que ser preenchido." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |

  Scenario Outline: Password field empty
    Given I access the "<page>" page
    When the "password" field is empty - USthree
    And I press the "<button>" button
    Then the "A password tem que ser preenchida." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |

  Scenario Outline: Password field min length
    Given I access the "<page>" page
    When I fill the "password" field with "123" - USthree
    And I press the "<button>" button
    Then the "A password tem que ter pelo menos 6 letras ou digitos." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |

  Scenario Outline: Password confirmation field does not match password field
    Given I access the "<page>" page
    When I fill the "password" field with "123123" - USthree
    And I fill the "password_confirmation" field with "123456" - USthree
    And I press the "<button>" button
    Then the "As passwords têm que ser iguais nos dois campos." error message should be shown - USthree
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |
