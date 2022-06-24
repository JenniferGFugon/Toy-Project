let utils = require('../utils/utils.js')
require('chai').should();



class LoginPage {

    get emailTextField  ()  {
        return  $('//android.widget.EditText[@password="false"]')
    }
    get passwordTextField() {
        return $('//android.widget.EditText[@password="true"]')
    }
    get loginButton() {
        return $('//android.widget.LinearLayout[@resource-id="com.shakey.nyarchives.qa:id/com_auth0_lock_labeled"]')
    }
    get logoApp() {
        return $('//android.widget.ImageView[@resource-id="com.shakey.nyarchives.qa:id/logo_view"]')
    }
    get radiobuttonOptionNo() {
        return $('//android.widget.RadioButton[@resource-id="com.shakey.nyarchives.qa:id/no_button"]')
    }
    get submitNotificationsButton() {
        return $('//android.widget.Button[@resource-id="com.shakey.nyarchives.qa:id/submit_button"]')
    }
    get invalidEmailErrorMessage()  {
        return  $('//android.widget.TextView[@text="Invalid Email Address"]')
    }

    get sideMenu()  {
        return  $('//android.widget.ImageButton[@index="0"]')
    }
    get configOption()  {
        return  $('//androidx.appcompat.widget.LinearLayoutCompat[@index="12"]')
    }
    get accountOption()  {
        return  $('//android.widget.RelativeLayout[@index="1"]')
    }
    get accountUsername()  {
        return  $('//android.widget.TextView[@resource-id="com.shakey.nyarchives.qa:id/username_label"]')
    }
    get accountReturnbutton()  {
        return  $('//android.widget.ImageButton[@index="0"]')
    }
    get accountMenubutton()  {
        return  $('//android.widget.ImageButton[@index="0"]')
    }
    get HomeOption()  {
        return  $('//androidx.appcompat.widget.LinearLayoutCompat[@index="1"]')
    }
    get facebookLogo()  {
        return  $('//android.widget.RelativeLayout[@index="0"]')
    }
    get googleLogo()  {
        return  $('//android.widget.RelativeLayout[@index="1"]')
    }

    async waitForAppLaunch() {
        await browser.pause(2000)
        await this.verifyAppIsOpen();
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
    async loginIntoApp() {
        await (await this.loginButton).waitForDisplayed()
        await (await this.loginButton.click());
        await browser.pause(2000)
    }
    async verifyAppLogo() {
        await (await this.logoApp).waitForDisplayed()
        await (await this.logoApp.isDisplayed()).should.equal(true);
        await browser.pause(2000)
    }
    async selectNoOption() {
        await (await this.radiobuttonOptionNo).waitForDisplayed()
        await (await this.radiobuttonOptionNo.click());
        await (await this.submitNotificationsButton).waitForDisplayed()
        await (await this.submitNotificationsButton.click());
        await browser.pause(2000)
    }
    
    async emailErrorMessage(message) {
        await (await this.invalidEmailErrorMessage).waitForDisplayed()
        await (await this.invalidEmailErrorMessage.getText()).should.equal(message);
    }
    async openMenu() {
        await (await this.sideMenu).waitForDisplayed()
        await this.sideMenu.click();
    }
    async selectConfigOption() {
        await (await this.configOption).waitForDisplayed()
        await this.configOption.click();
    }
    async selectAccountOption() {
        await (await this.accountOption).waitForDisplayed()
        await this.accountOption.click();
    }
    async compareUsername(username) {
        await this.openMenu()
        await this.selectConfigOption()
        await this.selectAccountOption()
        await (await this.accountUsername).waitForDisplayed()
        await (await this.accountUsername.getText()).should.equal(username);
    }
    async returnToMenu() {
        await this.accountReturnbutton.waitForDisplayed()
        await this.accountReturnbutton.click()
        await this.accountMenubutton.waitForDisplayed()
        await this.accountMenubutton.click()
        await this.HomeOption.waitForDisplayed()
        await this.HomeOption.click()
        
    }
    async verifyAppIsOpen() {
        await this.facebookLogo.waitForDisplayed()
        await (await this.facebookLogo.isDisplayed()).should.equal(true);
        await this.googleLogo.waitForDisplayed()
        await (await this.googleLogo.isDisplayed()).should.equal(true);
    }


    
}

module.exports = LoginPage;
