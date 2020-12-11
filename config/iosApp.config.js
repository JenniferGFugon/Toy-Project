const config = require('./base.conf').config
const IosInfo = require('./ios.info.js');

// ====================
// Capabilities IOS
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
  automationName: 'XCUITest',
  platformName: 'iOS',
  platformVersion: IosInfo.platFormVersion(),
  deviceName: IosInfo.deviceName(),
  app: config.paths.ios,
  maxInstances: 1,
  udid: 'auto',

  // The following capabilities are needed to run tests on physical devices. Request them to your Dev Team
  xcodeOrgId: 'YD5FNB475F',
  xcodeSigningId: 'iPhone Developer',
  //
  startIWDP: true, // For the ios webkit debug real devices
  noReset: false,
  wdaLaunchTimeout: 999999,
  wdaConnectionTimeout: 999999
}];
config.cucumberOpts.tagExpression = '@iosApp';// pass tag to run tests specific to ios

exports.config = config