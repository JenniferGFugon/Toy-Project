Feature: Feature to signup in the app 

  
  @androidApp
  Scenario: Unuccessful signup in the App
    Given I launch NYA app 
    When the user types the email address "jennifer+1"
    Then the user should see the invalid email error message "Invalid Email Address"

  @androidApp
  Scenario: Successful signup in the App
    Given I launch NYA app
    When the user types the email address "jennifer.guerrero+4@helloiconic.com"
    And the user types the password "password"
    And the user types the firstname "jennifer"
    And the user clicks on the submit button
    Then the user should see the logo of the app

    