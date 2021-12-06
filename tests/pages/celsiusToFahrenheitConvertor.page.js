let utils = require('../utils/utils.js')
require('chai').should();

const SELECTORS = {
    ANDROID: {
        celsiusTextField: '//android.widget.EditText[@resource-id="com.androiddev2015.cfconverter:id/editTextC"]',
        fahrenheitTextField: '//android.widget.EditText[@resource-id="com.androiddev2015.cfconverter:id/editTextF"]',
        submitButton: '//android.widget.Button[@resource-id="com.androiddev2015.cfconverter:id/btncnvCF"]',
        rateAppMessage: '//android.widget.TextView[@resource-id="android:id/message"]',
        laterButton: '//android.widget.Button[@resource-id="android:id/button3"]',
        okButton: '//android.widget.Button[@resource-id="android:id/button1"]',
    },
}

class CelsiusToFahrenhietConvertorPage {

    get celsiusTextField() {
        return $(SELECTORS[utils.platformName].celsiusTextField)
    }
    get fahrenheitTextField() {
        return $(SELECTORS[utils.platformName].fahrenheitTextField)
    }
    get submitButton() {
        return $(SELECTORS[utils.platformName].submitButton)
    }
    get rateAppMessage() {
        return $(SELECTORS[utils.platformName].rateAppMessage)
    }
    get laterButton() {
        return $(SELECTORS[utils.platformName].laterButton)
    }
    get okButton() {
        return $(SELECTORS[utils.platformName].okButton)
    }

    async dismissAppRatingIfPresent() {
        if (await (await this.rateAppMessage).isDisplayed()) {
            await (await this.okButton).click()
        }
    }

    async launchApp() {
        await browser.pause(2000)
    }

    async enterCelsius(celsiusValue) {
        await this.dismissAppRatingIfPresent();
        await (await this.celsiusTextField).waitForDisplayed()
        await (await this.celsiusTextField).clearValue()
        await (await this.celsiusTextField).addValue(celsiusValue)
        await (await this.submitButton).click()
    }

    async verifyFahrenheitValue(fahrenheitValue) {
        await (await this.fahrenheitTextField).waitForDisplayed()
        await (await this.fahrenheitTextField).getText().should.equal(fahrenheitValue);
        await browser.pause(2000)
    }
}

module.exports = CelsiusToFahrenhietConvertorPage;