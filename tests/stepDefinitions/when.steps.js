const {When} = require("@cucumber/cucumber");

const LoginPage = require('./../pages/login.page');

const loginPage = new LoginPage();
const SignUpPage = require('./../pages/signup.page');

const signUpPage = new SignUpPage();
// @androidApp  "<email>"


When('the user types the email {string}', async (email) => {
    await loginPage.enterEmail(email);
});

When('the user types the email address {string}', async (email) => {
    await signUpPage.enterEmail(email);
});

When('the user types the password {string}', async (password) => {
    await loginPage.enterPassword(password);
});
When('the user clicks on the submit button', async () => {
    await loginPage.enterApp();
});


When('the user types the incorrect password {string}', async (password) => {
    await loginPage.enterPassword(password);
});

When('the user types the firstname {string}', async (firstname) => {
    await signUpPage.enterFirstName(firstname);
});
