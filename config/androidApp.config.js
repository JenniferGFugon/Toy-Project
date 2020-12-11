
const config = require('./base.conf.js').config;
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
    app: config.paths.android,
    maxInstances: 1,
    noSign: true,
    autoGrantPermissions: true,
    noReset: false,
    //To automate webview in the app this is necessary
    //https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md
    // chromedriverExecutableDir: config.rootPath + '/chromedriver',//For Real device
    // chromedriverExecutable: '/Users/walternolasco/Documents/FreeformMobileJavascript/chromedriver/chromedriver_2.38'//For Real device
    //  chromeOptions: {androidPackage: 'com.android.chrome'}
  }
];
config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;