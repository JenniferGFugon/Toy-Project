const {Then} = require("@cucumber/cucumber");

const LoginPage = require('./../pages/login.page');
const loginPage = new LoginPage();
const SignupPage = require('./../pages/signup.page');
const signupPage = new SignupPage();



// @androidApp
//Sign in
Then('the user {string} is logged into the app', async (username) => {
    await loginPage.selectNoOption();
    await loginPage.compareUsername(username);
    await loginPage.returnToMenu();

});

Then('the user should see the error message {string}', async (message) => {
    await loginPage.emailErrorMessage(message);
});

Then('the user can see the home screen', async () => {
    await loginPage.verifyAppLogo();
});



//signup
Then('the user should see the invalid email error message {string}', async (errorMessage) => {
    await signupPage.emailErrorMessage(errorMessage);
});

Then('the user {string} is registered in the app', async (username) => {
    await signupPage.selectNoOption();
    await signupPage.compareUsername(username);
    await signupPage.returnToMenu();
});



