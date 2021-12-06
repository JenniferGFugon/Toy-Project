const {Then} = require("@cucumber/cucumber");

const GooglePage = require('./../pages/google.page');

const googlePage = new GooglePage();

const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();

const SettingsPage = require('./../pages/settings.page');

const settingsPage = new SettingsPage();

// @androidApp
Then(/^I should see fahrenheit of (.*)$/, async (fahrenheit) => {
    await celsiusToFahrenheitConvertorPage.verifyFahrenheitValue(fahrenheit);
});

// @androidBrowser @iosBrowser
Then(/^I verify the title to be (.*)$/, async (title) => {
    await googlePage.verifyTitle(title);
});

// @iosApp
Then(/^I should see the general label$/, async () => {
    await settingsPage.verifyGeneralLabel();
});
