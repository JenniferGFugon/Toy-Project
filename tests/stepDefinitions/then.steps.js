const {Then} = require("@cucumber/cucumber");

const GooglePage = require('./../pages/google.page');

const googlePage = new GooglePage();

const LoginPage = require('./../pages/login.page');

const loginPage = new LoginPage();
const SignoutPage = require('./../pages/signup.page');
const signoutPage = new SignoutPage();

const SettingsPage = require('./../pages/settings.page');

const settingsPage = new SettingsPage();

// @androidApp
Then('the user should see the logo of the app', async () => {
    await loginPage.selectNoOption();
    await loginPage.verifyAppTittle();
});

Then('the user should see the error message {string}', async (message) => {
    await loginPage.errorMessage(message);
});

Then('the user should see the invalid email error message {string}', async (errorMessage) => {
    await signoutPage.errorMessage(errorMessage);
});


