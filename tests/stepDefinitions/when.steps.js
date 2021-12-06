const {When} = require("@cucumber/cucumber");

const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();

// @androidApp
When(/^I enter celsius of (.*)$/, async (celsius) => {
    await celsiusToFahrenheitConvertorPage.enterCelsius(celsius);
});
