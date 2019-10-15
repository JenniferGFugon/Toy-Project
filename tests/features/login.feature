
Feature: NYA login

    As a user with the nya app installed for the first time
    I want to login
    So that I can use the app

    @LoginAutomation @Login.SuccessfulLogin.Email.HP @Start
    Scenario Outline: NYA login
        Given a user in the login screen
        When user enters username "<email>" and password "<password>"
        And user taps on the login button
        Then user is successfully signed in
        And a splash screen is displayed
        And user is redirected to the Homepage

         Examples:
            | email                 |  | password     |
            | walter5@escolarea.com |  | password1234 |