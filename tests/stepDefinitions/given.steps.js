const {Given} = require("@cucumber/cucumber");

const GooglePage = require('./../pages/google.page');

const googlePage = new GooglePage();

const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();

const SettingsPage = require('./../pages/settings.page');

const settingsPage = new SettingsPage();

// @androidBrowser @iosBrowser
Given(/^I launch the google$/, () => {
    googlePage.launchGoogle('https://www.google.hn/');
});

// @androidApp
Given(/^I launch the app$/, () => {
    celsiusToFahrenheitConvertorPage.launchApp();
});

// @iosApp
Given(/^I launch the settings app of iphone$/, () => {
    settingsPage.launchApp();
});
