const {Given, Then} = require('cucumber');

const GooglePage = require('./../pages/google.page');

const googlePage = new GooglePage();

Given(/^I launch the google$/, () => {
    googlePage.launchGoogle('https://www.google.hn/');
});

Then(/^I verify the title to be (.*)$/, (title) => {
    googlePage.verifyTitle(title);
});
