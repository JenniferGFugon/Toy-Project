const {Given} = require("@cucumber/cucumber");

const GooglePage = require('./../pages/google.page');

const googlePage = new GooglePage();

const LoginPage = require('./../pages/login.page');

const loginPage = new LoginPage();
const SignUpPage = require('./../pages/signup.page');

const signUpPage = new SignUpPage();
const SettingsPage = require('./../pages/settings.page');

const settingsPage = new SettingsPage();



// @androidApp
Given('the user is on login screen', async () => {
    await loginPage.waitForAppLaunch();
});
Given('the user is on the registration screen', async () => {
    await signUpPage.waitForAppLaunch();
    await signUpPage.changeToRegisterTab();

});

