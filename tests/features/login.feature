Feature: Feature to signin in the app 

  

  @androidApp
  Scenario: Unuccessful login in the App
    Given I launch the app
    When the user types the email "jennifer+1"
    And the user types the incorrect password "pass"
    And the user clicks on the submit button
    Then the user should see the error message "Invalid Email Address"

  @androidApp
  Scenario: Successful login in the App
    Given I launch the app
    When the user types the email "jennifer.guerrero@helloiconic.com"
    And the user types the password "password"
    And the user clicks on the submit button
    Then the user should see the logo of the app

    

 
