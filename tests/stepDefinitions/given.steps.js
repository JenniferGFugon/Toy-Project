const {Given} = require("@cucumber/cucumber");

const GooglePage = require('./../pages/google.page');

const googlePage = new GooglePage();

const LoginPage = require('./../pages/login.page');

const loginPage = new LoginPage();
const SignUpPage = require('./../pages/signup.page');

const signUpPage = new SignUpPage();
const SettingsPage = require('./../pages/settings.page');

const settingsPage = new SettingsPage();

Given(/^I launch the google$/, () => {
    googlePage.launchGoogle('https://www.google.hn/');
});

// @androidApp
Given(/^I launch the app$/, async () => {
    await loginPage.launchApp();
});
Given(/^I launch NYA app$/, async () => {
    await loginPage.launchApp();
    await signUpPage.changeTab();

});

