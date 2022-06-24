const {When} = require("@cucumber/cucumber");

const LoginPage = require('./../pages/login.page');

const loginPage = new LoginPage();
const SignUpPage = require('./../pages/signup.page');

const signUpPage = new SignUpPage();
// @androidApp  "<email>"

//Sign in 
When('the user types an incomplete email address {string}', async (email) => {
    await loginPage.enterEmail(email);
});

When('the user types the email address {string}', async (email) => {
    await loginPage.enterEmail(email);
});

When('the user types the password for login {string}', async (password) => {
    await loginPage.enterPassword(password);
});


When('the user clicks on the login button', async () => {
    await loginPage.loginIntoApp();
});

//Sign up
When('the user types an incomplete email {string}', async (email) => {
    await signUpPage.enterEmail(email);
});
When('the user types the email {string}', async (email) => {
    await signUpPage.enterEmail(email);
});
When('the user types the password to register {string}', async (password) => {
    await signUpPage.enterPassword(password);
});

When('the user types the firstname {string}', async (firstname) => {
    await signUpPage.enterFirstName(firstname);
});

When('the user clicks on the signup button', async () => {
    await signUpPage.signupIntoApp();
});








