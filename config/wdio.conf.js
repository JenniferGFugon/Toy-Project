// let appiumController = require('appium-controller')
const defaultTimeoutInterval = process.env.DEBUG ? (24 * 60 * 60 * 1000) : 60000

const apps = {
  android: 'app.apk',
  ios: 'PROD6.8.2.ipa'
}

let _path = __dirname.split('/')
_path.pop()

const _rootPath = _path.join('/')

exports.config = {

  runner: 'local',

  rootPath: _rootPath,
  paths: {
    android: _rootPath + '/app/' + apps.android,
    ios: _rootPath + '/app/ ' + apps.ios
  },
  apps: apps,

  // Runner and framework Configuration

  specs: [
    './tests/features/sampleTest.feature'
  ],

  logLevel: 'error',
  maxInstances: 5,
  maxInstancesPerCapability: 1,
  reporters: ['spec'],
  waitforTimeout: defaultTimeoutInterval,
  // services: ['appium'],
  // appium: {
  //   command: 'appium',
  //   args: {},
  // },
  host: '127.0.0.1',
  port: 4723,
  path: '/wd/hub',

  framework: 'cucumber',
  cucumberOpts: {
    require: ['./tests/stepDefinitions/*.js'], // <string[]> (file/dir) require files before executing features
    backtrace: false, // <boolean> show full backtrace for errors
    requireModule: ['@babel/register'], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: true, // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: true, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    tagExpression: 'not @Pending', // <string> (expression) only execute the features or scenarios with tags matching the expression
    timeout: defaultTimeoutInterval, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    scenarioLevelReporter: false // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.
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