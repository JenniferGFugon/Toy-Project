
const config = require('./tests.base.conf').config

// ====================
// Capabilities IOS
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    automationName: 'XCUITest',
    appiumVersion: '1.13.0', // Appium version installed on your PC
    platformName: 'IOS',
    platformVersion: '12.2',
    deviceName: 'Iphone 6',
    app: config.paths.ios,

    // app: '/Users/walternolasco/Documents/FreeformMobileJavascript/app/ABCFamily.app',
    // udid: "E3149929-57F6-43AE-81DD-CEA81FFFBE50", //Simulator
    // udid: "709866493ee11f7adfb1e08a2367bf5190a2635e", //Real device Iphone 6s plus
    // udid: "cafcc7de84cd6bb621e051ee5b2d921e8e004ef2", //Real device Iphone 6
    // udid: "298529d6e729faf56cb12bf87128b40569f46ca3", //Apple TV

    udid: 'auto',

    // The following capabilities are needed to run tests on physical devices. Request them to your Dev Team
    xcodeOrgId: 'YD5FNB475F',
    xcodeSigningId: 'iPhone Developer',
    //
    startIWDP: true, // For the ios webkit debug real devices
    noReset: false,
    wdaLaunchTimeout: 999999,
    wdaConnectionTimeout: 999999
  }
]

exports.config = config
