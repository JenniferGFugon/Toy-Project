let utils = require('../utils/utils.js')
require('chai').should();


class SignOutPage {

    get signUpTab()  {
        return  $('//androidx.appcompat.app.ActionBar.Tab[@content-desc="Sign Up"]/android.widget.RelativeLayout')
    }
    get emailTextField()  {
        return  $('//android.widget.EditText[@password="false"]')
    }
    get passwordTextField()  {
        return  $('//android.widget.EditText[@password="true"]')
    }
    get firstNameTextField()  {
        return  $('//android.widget.EditText[@text="First name"]')
    }
    get signUpButton()  {
        return  $('//android.widget.LinearLayout[@resource-id="com.shakey.nyarchives.qa:id/com_auth0_lock_labeled"]')
    }
    get invalidEmailErrorMessage()  {
        return  $('//android.widget.TextView[@text="Invalid Email Address"]')
    }
    
    get submitButton() {
        return $('//android.widget.LinearLayout[@resource-id="com.shakey.nyarchives.qa:id/com_auth0_lock_labeled"]')
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
        await (await this.passwordTextField).waitForDisplayed()
        await (await this.passwordTextField).clearValue()
        await (await this.passwordTextField).addValue(password)
    }
    async enterFirstName(firstName) {
        await (await this.firstNameTextField).waitForDisplayed()
        await (await this.firstNameTextField).clearValue()
        await (await this.firstNameTextField).addValue(firstName)
    }
    async signup() {
        await (await this.submitButton).waitForDisplayed()
        await (await this.submitButton.click());
        await browser.pause(2000)
    }
    async verifyAppTittle() {
        await (await this.tittleApp).waitForDisplayed()
        await (await this.tittleApp.isDisplayed()).should.equal(true);
        await browser.pause(2000)
    }
    async errorMessage(message) {
        await (await this.invalidEmailErrorMessage).waitForDisplayed()
        await (await this.invalidEmailErrorMessage.getText()).should.equal(message);
    }
    async changeTab() {
        await (await this.signUpTab).waitForDisplayed()
        await (await this.signUpTab).click();
    }
    

}

module.exports = SignOutPage;
