Feature: Feature to signup in the app 

  
  @androidApp
  Scenario: Unuccessful signup in the App
    Given the user is on the registration screen 
    When the user types an incomplete email "jennifer+1"
    Then the user should see the invalid email error message "Invalid Email Address"

  @androidApp
  Scenario: Successful signup in the App
    Given the user is on the registration screen 
    When the user types the email "jennifer.guerrero+9@helloiconic.com"
    And the user types the password to register "password"
    And the user types the firstname "Jennifer"
    And the user clicks on the signup button
    Then the user "Jennifer" is registered in the app
    And the user can see the home screen
    