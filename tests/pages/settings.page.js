let utils = require('../utils/utils.js')
require('chai').should();

const SELECTORS = {
    IOS: {
        general: '//XCUIElementTypeCell[@label="General"]',
    },
}

class SettingsPage {

    get General() {
        return $(SELECTORS[utils.platformName].general)
    }

    async launchApp() {
        await browser.pause(2000)
    }

    async verifyGeneralLabel() {
        await (await this.General).getText().should.equal('General');
    }
}

module.exports = SettingsPage;