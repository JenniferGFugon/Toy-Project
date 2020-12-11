let utils = require('../utils/utils.js')

const SELECTORS = {
  ANDROID: {
    // Login screen
    SKIP_FOR_NOW_BUTTON: 'android=new UiSelector().resourceId("com.disney.datg.videoplatforms.android.abcf:id/button_skip")'
  },
  IOS: {
    // Login screen
    SKIP_FOR_NOW_BUTTON: 'android=new UiSelector().resourceId("com.disney.datg.videoplatforms.android.abcf:id/button_skip")'
  }
}

class LoginPage {
  // Sign in main screen
  get skip() {
    return $(SELECTORS[utils.platformName].SKIP_FOR_NOW_BUTTON)
  }

  LoginScreenAssertions() {
    this.skip.waitForVisible()
    expect(this.signInCodeContainer.isExisting()).to.be.true
    if (browser.isAndroid) {

    } else {

    }
  }
}

module.exports = new LoginPage()
