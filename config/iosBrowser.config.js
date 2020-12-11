const config = require('./wdio.conf.js').config
const IosInfo = require('./ios.info.js');

// ====================
// Capabilities IOS
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
  platformName: 'iOS',
  browserName: 'safari',
  maxInstances: 1,
  automationName: 'XCUITest',
  deviceName: IosInfo.deviceName(),
  platformVersion: IosInfo.platFormVersion(),
  udid: '00008020-000605E62612002E',

  // The following capabilities are needed to run tests on physical devices. Request them to your Dev Team
  xcodeOrgId: 'YD5FNB475F',
  xcodeSigningId: 'iPhone Developer',
  //
  startIWDP: true, // For the ios webkit debug real devices
  noReset: false,
  wdaLaunchTimeout: 999999,
  wdaConnectionTimeout: 999999
}];
config.cucumberOpts.tagExpression = '@iosBrowser';// pass tag to run tests specific to ios

exports.config = config