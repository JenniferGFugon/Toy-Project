
const SELECTORS = {
    ANDROID: {
      // Login screen
      SKIP_FOR_NOW_BUTTON: 'android=new UiSelector().resourceId("com.disney.datg.videoplatforms.android.abcf:id/button_skip")'
    },
    IOS: {
      // Login screen
      SKIP_FOR_NOW_BUTTON: 'android=new UiSelector().resourceId("com.disney.datg.videoplatforms.android.abcf:id/button_skip")'
    },
    WEB: {
        // Login screen
        SKIP_FOR_NOW_BUTTON: 'android=new UiSelector().resourceId("com.disney.datg.videoplatforms.android.abcf:id/button_skip")'
      }
  }

class GooglePage {

    launchGoogle(url) {
        browser.url(url)
        browser.pause(2000)
    }

    verifyTitle(expectedTitle) {
        expect(browser.getTitle()).to.equal('Google');
    }
}

module.exports = GooglePage;
