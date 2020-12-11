
const config = require('./wdio.conf.js').config;
const AndroidInfo = require('./android.info.js');

// ====================
// Capabilities Android
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    automationName: 'uiautomator2',
    platformName: 'Android',//Which mobile OS platform to use
    platformVersion: AndroidInfo.platFormVersion(),
    deviceName: AndroidInfo.deviceName(),
    browserName: 'chrome',
    maxInstances: 1,
    noReset: false,
    //To automate webview in the app this is necessary
    //https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md
    chromedriverExecutableDir: config.rootPath + '/chromedriver',
  }
];
config.cucumberOpts.tagExpression = '@androidBrowser'; // pass tag to run tests specific to android

exports.config = config;