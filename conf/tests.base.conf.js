
// let appiumController = require('appium-controller')
const defaultTimeoutInterval = process.env.debug === true ? 99999999 : 80000

const apps = {
  android: 'app.apk',
  ios: 'PROD6.8.2.ipa'
}

let _path = __dirname.split('/')
_path.pop()

const _rootPath = _path.join('/')

exports.config = {

  rootPath: _rootPath,
  paths: {
    android: _rootPath + '/app/' + apps.android,
    ios: _rootPath + '/app/ ' + apps.ios
  },
  apps: apps,

  // Runner and framework Configuration

  specs: [
    './tests/features/login.feature'
  ],

  logLevel: 'silent',
  maxInstances: 1,
  sync: true,
  coloredLogs: true,
  reporters: ['spec'],
  screenshotPath: './errorShots/',
  waitforTimeout: 60000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['appium'], // For Mobile local tests
  host: '127.0.0.1',
  port: '4444',

  // This appium fix is only for windows.
  // appium: {
  //       waitStartTime: 3000,
  //       command: 'appium',
  //       logFileName: 'appium110.log',
  //       args: {
  //           address: '127.0.0.1',
  //           port: 4444,
  //           newCommandTimeout: '7200',
  //           sessionOverride: true,
  //           debugLogSpacing: true
  //         }
  //       },

  framework: 'cucumber',
  cucumberOpts: {
    require: [
      './tests/stepDefinitions/login.js'
    ],
    backtrace: true,
    compiler: ['js:babel-register'],
    failAmbiguousDefinitions: true,
    failFast: true,
    ignoreUndefinedDefinitions: false,
    snippets: true,
    source: true,
    snippetSyntax: undefined,
    strict: true,
    tagExpression: 'not @Pending',
    tagsInTitle: false,
    timeout: defaultTimeoutInterval // timeout for step definitions
  },

  // =====
  // Hooks
  // =====
  // WedriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  onPrepare: function () {
    // Start the appium server with default host:localhost, port:4723
    // appiumController.startAppium();
    // appiumController.startAppium({
    //   host: '127.0.0.1',
    //   port: '4444'
    // });
  },
  before: function () {
    // Setup the Chai assertion framework globally
    const chai = require('chai')
    global.expect = chai.expect
    // require('js:babel-register');
  },
  //
  onComplete: function () {
    // Stop the appium server with default host:localhost, port:4723
    // appiumController.stopAppium();
    // appiumController.stopAppium({
    //   host: '127.0.0.1',
    //   port: '4444'
    // });
  }
}
