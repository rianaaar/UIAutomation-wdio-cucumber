Feature: Login Feature

  Scenario Outline: as user, I can't login to KasirAja

    Given I am on the login page
    When I login with <email> and invalid <password> 
    And I click Login button
    Then I should see a error msg <text>

    Examples:
      | email           | password    | text                                |
      | rianaar@ex.com  | xx          | Kredensial yang Anda berikan salah  |