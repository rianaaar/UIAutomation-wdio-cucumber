Feature: Login Feature

  Scenario Outline: as user, I can login to KasirAja

    Given I am on the login page
    When I login with <email> and <password> 
    And I click Login button
    Then I should see a dashboard title <text>

    Examples:
      | email           | password    | text                              |
      | rianaar@ex.com  | 123adsfadf@ | dashboard                         |
