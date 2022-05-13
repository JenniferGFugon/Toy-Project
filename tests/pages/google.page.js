let utils = require('../utils/utils.js')
const SELECTORS = {
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

    async verifyTitle(expectedTitle) {
        await expect(await browser.getTitle()).to.equal(expectedTitle);
    }
}

module.exports = GooglePage;
