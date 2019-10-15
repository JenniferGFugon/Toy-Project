
const config = require('./tests.base.conf.js').config;

// ====================
// Capabilities Android
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    automationName: 'uiautomator2',
    appiumVersion: '1.13.0',//Appium version installed on your PC
    platformName: 'Android',//Which mobile OS platform to use

    //For Real devices 

    // Android TV
    // platformVersion: '8.0.0',//Mobile OS version
    // deviceName: 'Android TV',//Device name identifier 192.168.56.101:5555
    // app: '/Users/walternolasco/Documents/OTTAutomation/app/freeform-androidtv-6.4.0(2144356).apk',

    // Fire TV
    platformVersion: '9',//Mobile OS version - Appium suggest 7.1.2
    deviceName: 'Samsung galaxy S9',//Device name identifier 192.168.56.101:5555
    app: config.paths.android,

    browserName: '',//Name of mobile web browser to automate. Should be an empty string if automating an app instead. 
    // app: '/Users/walternolasco/Documents/OTTAutomation/app/freeform-androidtv-6.4.0(2144356).apk',
    
    noSign: true,
    autoGrantPermissions: true,
    noReset: false,
    //To automate webview in the app this is necessary
    //https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md
    chromedriverExecutableDir: config.rootPath + '/chromedriver',//For Real device
    // chromedriverExecutable: '/Users/walternolasco/Documents/FreeformMobileJavascript/chromedriver/chromedriver_2.38'//For Real device
    //  chromeOptions: {androidPackage: 'com.android.chrome'}
  }
];

exports.config = config;