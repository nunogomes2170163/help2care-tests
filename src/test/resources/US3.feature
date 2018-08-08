Feature: Manage Users
  As an admin
  I want to manage all the users
  So that she/he can use the Web or Mobile App

  #CREATES
  Scenario: Access User Create Page
    Given I access the "admin" dashboard
    When I press the <text> button
    Then I should be redirected to the <page> page
    And the <text> text should be shown
    Examples:
    | text                      | page                        |
    | Novo Administrador        | new admin                   |
    | Novo Profissional de Saude| new healthcare professional |
    | Novo Cuidador             | new caregiver               |

  Scenario: Create New Admin Successfully
    Given I access the "new admin" page
    When I fill the "username" field with "cucumber"
    And I fill the "name" field with "Cucumber"
    And I fill the "email" field with "cucumber@gmail.com"
    And I fill the "password" field with "cucumber"
    And I fill the "password_confirmation" field with "cucumber"
    And I press the "Criar" button
    Then I should be redirected to the "admin" dashboard
    And the "Cucumber" user should be present in the "users" table

  Scenario: Create New Healthcare Professional Successfully
    Given I access the "new healthcare professional" page
    When I fill the "username" field with "cucumber"
    And I fill the "name" field with "Cucumber"
    And I fill the "email" field with "cucumber@gmail.com"
    And I fill the "job" field with "Medic"
    And I fill the "facility" field with "Leiria"
    And I fill the "password" field with "cucumber"
    And I fill the "password_confirmation" field with "cucumber"
    And I press the "Criar" button
    Then I should be redirected to the "admin" dashboard
    And the "Cucumber" user should be present in the "users" table

  Scenario: Create New Caregiver Successfully
    Given I access the "new caregiver" page
    When I fill the "username" field with "cucumber"
    And I fill the "name" field with "Cucumber"
    And I fill the "email" field with "cucumber@gmail.com"
    And I fill the "gender" field with "male"
    And I fill the "birthDate" field with "12-12-1994"
    And I fill the "experienceNumber" field with "7"
    And I fill the "experiencePeriod" field with "years"
    And I fill the "password" field with "cucumber"
    And I fill the "password_confirmation" field with "cucumber"
    And I press the "Criar" button
    Then I should be redirected to the "admin" dashboard
    And the "Cucumber" user should be present in the "users" table


  #DETAILS
  Scenario: Access Admin User Details
    Given I access the "admin" dashboard
    When I press the "Detalhes" button of the "Admin" user
    Then I should be redirected to the "details" page of "Admin" user
    And the field "Utilizador" should show "admin"
    And the field "Nome" should show "Admin"
    And the field "Email" should show "admin@mail.com"
    And the field "Função" should show "Administador"
    And the field "Data da criação" should show "2018-01-26 19:36:10"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Healthcare Professional User Details
    Given I access the "admin" dashboard
    When I press the "Detalhes" button of the "Alexandra Teixeira" user
    Then I should be redirected to the "details" page of "Alexandra Teixeira" user
    And the field "Utilizador" should show "alexandra.teixeira"
    And the field "Nome" should show "Alexandra Teixeira"
    And the field "Email" should show "maxxabersi@gmail.com"
    And the field "Função" should show "Profissional de Saúde"
    And the field "Trabalho/Estatuto" should show "Enfermeira"
    And the field "Local de Trabalho" should show "Leiria"
    And the field "Data da criação" should show "2018-06-13 14:34:58"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Voltar Atrás" button should be present

  Scenario: Access Caregiver User Details
    Given I access the "admin" dashboard
    When I press the "Detalhes" button of the "Ana Luisa Roque" user
    Then I should be redirected to the "details" page of "Ana Luisa Roque" user
    And the field "Utilizador" should show "ana.roque.cuidador"
    And the field "Nome" should show "Ana Luisa Roque"
    And the field "Função" should show "Cuidador"
    And the field "Email" should show "roque.ana2@gmail.com"
    And the field "Data de Nascimento" should show "26-07-1992"
    And the field "Localização" should show "Leiria"
    And the field "Género" should show "Feminino"
    And the field "Tempo de experiência como cuidador" should show "0 Ano/s"
    And the field "Nº Profissionais de Saúde" should show "1/2"
    And the field "Criador" should show "admin"
    And the field "Data da criação" should show "2018-04-14 10:46:17"
    And the "Editar" button should be present
    And the "Bloquear" button should be present
    And the "Voltar Atrás" button should be present


  #DASHBOARD USER BLOCK & UNBLOCK
  Scenario: Block User on the Admin Dashboard
    Given I access the "admin" dashboard
    When I press the "Bloquear" button of the "Alexandra Teixeira" user
    Then I should be redirected to the "admin" dashboard
    And the "Desbloquear" button should be present in the "Alexandra Teixeira" user options

  Scenario: Unblock User on the Admin Dashboard
    Given I access the "admin" dashboard
    And the "Alexandra Teixeira" user is blocked
    When I press the "Desbloquear" button of the "Alexandra Teixeira" user
    Then I should be redirected to the "admin" dashboard
    And the "Bloquear" button should be present in the "Alexandra Teixeira" user options

  #EDIT
  Scenario: Access Admin Edit Page
    Given I access the "details" page of the "admin" user
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the user
    And the field "name" should show "Admin"
    And the field "email" should show "admin@mail.com"
    And the field "password" should be empty
    And the field "password_confirmation" should be empty
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Admin User Successfully Without Password
    Given I access the "edit" page of the "admin"
    When I fill the "name" field with "Clemens Mann"
    And I fill the "email" field with "nella.kunze@example.org"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "admin"
    And the field "Utilizador" should show "teresa.olson"
    And the field "Nome" should show the new name
    And the field "Email" should show the new email
    And the field "Função" should show "Administador"
    And the field "Data da criação" should show "2018-01-26 19:36:10"
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  Scenario: Edit Admin User Successfully With Password
    Given I access the "edit" page of the "admin"
    When I fill the "name" field with "Clemens Mann"
    And I fill the "email" field with "nella.kunze@example.org"
    And I fill the "password" field with "123123"
    And I fill the "password_confirmation" field with "123123"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "admin"
    And the field "Utilizador" should show "teresa.olson"
    And the field "Nome" should show the new name
    And the field "Email" should show the new email
    And the field "Função" should show "Administador"
    And the field "Data da criação" should show "2018-01-26 19:36:10"
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  Scenario: Access Healthcare Professional Edit Page
    Given I access the "details" page of the "healthcare professional" user
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the user
    And the field "name" should show "Alexandra Teixeira"
    And the field "email" should show "maxxabersi@gmail.com"
    And the field "job" should show "Enfermeira"
    And the field "facility" should show "Leiria"
    And the field "password" should be empty
    And the field "password_confirmation" should be empty
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Healthcare Professional User Successfully Without Password
    Given I access the "edit" page of the "healthcare professional"
    When I fill the "name" field with "Ana Margarida Carvalho"
    And I fill the "email" field with "amargarida.carvalho@live.com.pt"
    And I fill the "job" field with "Enfermeira"
    And I fill the "facility" field with "Leiria"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "healthcare professional"
    And the field "Utilizador" should show "ana.margarida.carvalho"
    And the field "Nome" should show the new name
    And the field "Email" should show the new email
    And the field "Função" should show "Profissional de Saúde"
    And the field "Trabalho/Estatuto" should show the new job
    And the field "Local de Trabalho" should show the new facility
    And the field "Data da criação" should show "2018-04-14 10:01:42"
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  Scenario: Edit Healthcare Professional User Successfully With Password
    Given I access the "edit" page of the "healthcare professional"
    When I fill the "name" field with "Ana Margarida Carvalho"
    And I fill the "email" field with "amargarida.carvalho@live.com.pt"
    And I fill the "job" field with "Enfermeira"
    And I fill the "facility" field with "Leiria"
    And I fill the "password_confirmation" field with "123123"
    And I press the "Guardar" button
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "healthcare professional"
    And the field "Utilizador" should show "ana.margarida.carvalho"
    And the field "Nome" should show the new name
    And the field "Email" should show the new email
    And the field "Função" should show "Profissional de Saúde"
    And the field "Trabalho/Estatuto" should show the new job
    And the field "Local de Trabalho" should show the new facility
    And the field "Data da criação" should show "2018-04-14 10:01:42"
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  Scenario: Access Caregiver Edit Page
    Given I access the "details" page of the "caregiver" user
    When I press the "Editar" button
    Then I should be redirected to the "edit" page of the user
    And the field "name" should show "Ana Luisa Roque"
    And the field "email" should show "roque.ana2@gmail.com"
    And the field "gender" should show "Feminino"
    And the field "birthDate" should show "26-07-1992"
    And the field "location" should show "Leiria"
    And the field "experienceNumber" should show "0"
    And the field "experiencePeriod" should show "Ano/s"
    And the field "password" should be empty
    And the field "password_confirmation" should be empty
    And the "Guardar" button should be present
    And the "Cancelar" button should be present

  Scenario: Edit Caregiver User Successfully Without Password
    Given I access the "edit" page of the "caregiver"
    When I fill the "name" field with "Ana Margarida Carvalho"
    And I fill the "email" field with "amargarida.carvalho@live.com.pt"
    And I fill the "gender" field with "Feminino"
    And I fill the "birthDate" field with "26-07-1992"
    And I fill the "location" field with "Leiria"
    And I fill the "experienceNumber" field with "0"
    And I fill the "experiencePeriod" field with "Ano/s"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "healthcare professional"
    And the field "Utilizador" should show "ana.margarida.carvalho.cuidador"
    And the field "Nome" should show the new name
    And the field "Email" should show the new email
    And the field "Função" should show "Cuidador"
    And the field "Data de Nascimento" should show the new birthDate
    And the field "Localização" should show the new location
    And the field "Género" should show the new gender
    And the field "Tempo de experiência como cuidador" should show the new experienceNumber and experiencePeriod
    And the field "Nº Profissionais de Saúde" should show "1/2"
    And the field "Criador" should show "admin"
    And the field "Data da criação" should show "2018-04-14 10:41:04"
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  Scenario: Edit Caregiver User Successfully With Password
    Given I access the "edit" page of the "caregiver"
    When I fill the "name" field with "Ana Margarida Carvalho"
    And I fill the "email" field with "amargarida.carvalho@live.com.pt"
    And I fill the "gender" field with "Feminino"
    And I fill the "birthDate" field with "26-07-1992"
    And I fill the "location" field with "Leiria"
    And I fill the "experienceNumber" field with "0"
    And I fill the "experiencePeriod" field with "Ano/s"
    And I fill the "facility" field with "Leiria"
    And I fill the "password_confirmation" field with "123123"
    And I press the "Guardar" button
    Then I should be redirected to the "details" page of the "healthcare professional"
    And the field "Utilizador" should show "ana.margarida.carvalho.cuidador"
    And the field "Nome" should show the new name
    And the field "Email" should show the new email
    And the field "Função" should show "Cuidador"
    And the field "Data de Nascimento" should show the new birthDate
    And the field "Localização" should show the new location
    And the field "Género" should show the new gender
    And the field "Tempo de experiência como cuidador" should show the new experienceNumber and experiencePeriod
    And the field "Nº Profissionais de Saúde" should show "1/2"
    And the field "Criador" should show "admin"
    And the field "Data da criação" should show "2018-04-14 10:41:04"
    And the field "Data da última atualização" should different from the previous
    And should be present a log at the "Registos" section

  #ERRORS
  Scenario Outline: Username field empty
    Given I access the <page> page
    When the "username" field is empty
    And I press the "Criar" button
    Then the "O username tem que ser preenchido." error message should be shown
    Examples:
      | page                          |
      | new admin                     |
      | new healthcare professional   |
      | new caregiver                 |

  Scenario Outline: Username field min length
    Given I access the <page> page
    When I fill the "username" field with "non"
    And I press the "Criar" button
    Then the "O username tem que ter pelo menos 4 letras ou dígitos." error message should be shown
    Examples:
      | page                          |
      | new admin                     |
      | new healthcare professional   |
      | new caregiver                 |

  Scenario Outline: Username field already in use
    Given I access the <page> page
    When I fill the "username" field with "admin"
    And I press the "Criar" button
    Then the "Username já existente. Escolha outro." error message should be shown
    Examples:
      | page                          |
      | new admin                     |
      | new healthcare professional   |
      | new caregiver                 |

  Scenario Outline: Name field empty
    Given I access the <page> page
    When the "name" field is empty
    And I press the <button> button
    Then the "O nome tem que ser preenchido." error message should be shown
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |

  Scenario Outline: Name field min length
    Given I access the <page> page
    When I fill the "username" field with "non"
    And I press the <button> button
    Then the "O nome tem que ter pelo menos 4 letras." error message should be shown
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |

  Scenario Outline: Email field already in use
    Given I access the <page> page
    When I fill the "email" field with "zecoroados@gmail.com"
    And I press the <button> button
    Then the "Email já existente. Escolha outro." error message should be shown
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |

  Scenario Outline: Email field empty
    Given I access the <page> page
    When the "email" field is empty
    And I press the <button> button
    Then the "O email tem que ser preenchido." error message should be shown
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |

  Scenario Outline: Gender field empty
    Given I access the <page> page
    When the "gender" field is empty
    And I press the <button> button
    Then the "O género tem que ser preenchido." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Birth Date field empty
    Given I access the <page> page
    When the "birthDate" field is empty
    And I press the <button> button
    Then the "A data de nascimento tem que ser preenchida." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Job field empty
    Given I access the <page> page
    When the "job" field is empty
    And I press the <button> button
    Then the "A profissão tem que ser preenchida." error message should be shown
    Examples:
      | page                          | button  |
      | new healthcare professional   | Criar   |
      | edit healthcare professional  | Guardar |

  Scenario Outline: Job field min length
    Given I access the <page> page
    When I fill the "job" field with "non"
    And I press the <button> button
    Then the "A profissão tem que ter pelo menos 4 letras." error message should be shown
    Examples:
      | page                          | button  |
      | new healthcare professional   | Criar   |
      | edit healthcare professional  | Guardar |

  Scenario Outline: Facility field empty
    Given I access the <page> page
    When the "facility" field is empty
    And I press the <button> button
    Then the "O local de trabalho tem que ser preenchido." error message should be shown
    Examples:
      | page                          | button  |
      | new healthcare professional   | Criar   |
      | edit healthcare professional  | Guardar |

  Scenario Outline: Facility field min length
    Given I access the <page> page
    When I fill the "facility" field with "non"
    And I press the <button> button
    Then the "O local de trabalho tem que ter pelo menos 4 letras." error message should be shown
    Examples:
      | page                          | button  |
      | new healthcare professional   | Criar   |
      | edit healthcare professional  | Guardar |

  Scenario Outline: Location field empty
    Given I access the <page> page
    When the "location" field is empty
    And I press the <button> button
    Then the "A localização tem que ser preenchida." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Location field min length
    Given I access the <page> page
    When I fill the "location" field with "non"
    And I press the <button> button
    Then the "A localização tem que ter pelo menos 4 letras." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Experience Period field empty
    Given I access the <page> page
    When the "experiencePeriod" field is empty
    And I press the <button> button
    Then the "O tempo de experiência como cuidador tem que ser preenchido." error message should be shown
    Examples:
      | page                          | button  |
      | new caregiver                 | Criar   |
      | edit caregiver                | Guardar |

  Scenario Outline: Password field empty
    Given I access the <page> page
    When the "password" field is empty
    And I press the <button> button
    Then the "A password tem que ser preenchida." error message should be shown
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |

  Scenario Outline: Password field min length
    Given I access the <page> page
    When I fill the "password" field with "123"
    And I press the <button> button
    Then the "A password tem que ter pelo menos 6 letras ou digitos." error message should be shown
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |

  Scenario Outline: Password confirmation field does not match password field
    Given I access the <page> page
    When I fill the "password" field with "123123"
    And I fill the "password_confirmation" field with "123456"
    And I press the <button> button
    Then the "As passwords têm que ser iguais nos dois campos." error message should be shown
    Examples:
      | page                          | button  |
      | new admin                     | Criar   |
      | new healthcare professional   | Criar   |
      | new caregiver                 | Criar   |
      | edit admin                    | Guardar |
      | edit healthcare professional  | Guardar |
      | edit caregiver                | Guardar |
