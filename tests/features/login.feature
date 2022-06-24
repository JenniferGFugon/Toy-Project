Feature: Feature to signin in the app 

  

  @androidApp
  Scenario: Unuccessful login in the App
    Given the user is on login screen
    When the user types an incomplete email address "jennifer+1"
    And the user types the password for login "pass"
    And the user clicks on the login button
    Then the user should see the error message "Invalid Email Address"

  @androidApp
  Scenario: Successful login in the App
    Given the user is on login screen
    When the user types the email address "jennifer.guerrero@helloiconic.com"
    And the user types the password for login "password"
    And the user clicks on the login button
    Then the user "Jennifer" is logged into the app
    And the user can see the home screen

    

 
