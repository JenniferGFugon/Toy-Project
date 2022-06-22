let utils = require('../utils/utils.js')
require('chai').should();



class LoginPage {

    get emailTextField  ()  {
        return  $('//android.widget.EditText[@password="false"]')
    }
    get passwordTextField() {
        return $('//android.widget.EditText[@password="true"]')
    }
    get submitButton() {
        return $('//android.widget.LinearLayout[@resource-id="com.shakey.nyarchives.qa:id/com_auth0_lock_labeled"]')
    }
    get tittleApp() {
        return $('//android.widget.ImageView[@resource-id="com.shakey.nyarchives.qa:id/logo_view"]')
    }
    get radiobuttonOpNo() {
        return $('//android.widget.RadioButton[@resource-id="com.shakey.nyarchives.qa:id/no_button"]')
    }
    get submitButtonNotifications() {
        return $('//android.widget.Button[@resource-id="com.shakey.nyarchives.qa:id/submit_button"]')
    }
    get invalidEmailErrorMessage()  {
        return  $('//android.widget.TextView[@text="Invalid Email Address"]')
    }
    async dismissAppRatingIfPresent() {
        if (await (await this.rateAppMessage).isDisplayed()) {
            await (await this.okButton).click()
        }
    }

    async launchApp() {
        await browser.pause(2000)
    }

    async enterEmail(email) {
        await (await this.emailTextField).waitForDisplayed()
        await (await this.emailTextField).clearValue()
        await (await this.emailTextField).addValue(email)
    }
    async enterPassword(password) {
        //await this.dismissAppRatingIfPresent();
        await (await this.passwordTextField).waitForDisplayed()
        await (await this.passwordTextField).clearValue()
        await (await this.passwordTextField).addValue(password)
        //await (await this.submitButton).click()
    }
    async enterApp() {
        await (await this.submitButton).waitForDisplayed()
        await (await this.submitButton.click());
        await browser.pause(2000)
    }
    async verifyAppTittle() {
        await (await this.tittleApp).waitForDisplayed()
        await (await this.tittleApp.isDisplayed()).should.equal(true);
        await browser.pause(2000)
    }
    async selectNoOption() {
        await (await this.radiobuttonOpNo).waitForDisplayed()
        await (await this.radiobuttonOpNo.click());
        await (await this.submitButtonNotifications).waitForDisplayed()
        await (await this.submitButtonNotifications.click());
        await browser.pause(2000)
    }
    async verifybutton() {
        await (await this.submitButton.isDisplayed()).should.equal(true);
        
    }
    async errorMessage(message) {
        await (await this.invalidEmailErrorMessage).waitForDisplayed()
        await (await this.invalidEmailErrorMessage.getText()).should.equal(message);
    }


    
}

module.exports = LoginPage;
