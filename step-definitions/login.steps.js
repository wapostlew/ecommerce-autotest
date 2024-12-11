const {Given, When, Then} = require('@wdio/cucumber-framework');


const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');

Given('I am on the login page', () => {
    LoginPage.open();
});

When('I login with {string} and {string}', (username, password) => {
    LoginPage.login(username, password);
});

Then('I should see the product page', () => {
    expect(ProductPage.productTitle).toBeDisplayed();
});