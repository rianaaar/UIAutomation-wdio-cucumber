const { Given, When, Then, Before, BeforeStep } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
//const DashboardPage = require('../pageobjects/dashboard.page');


Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});
When(/^I click Login button$/, async () => {
    await LoginPage.btnLogin()
});

Then(/^I should see a error msg (.*)$/, async (text) => {
    await expect(LoginPage.ErrorInvalidPass).toBeExisting();
    await expect(LoginPage.ErrorInvalidPass).toHaveTextContaining(text);
});

