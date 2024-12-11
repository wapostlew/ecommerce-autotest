const {Given, When, Then} = require('@wdio/cucumber-framework');

const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const ConfirmationPage = require('../pages/ConfirmationPage');
const LoginPage = require('../pages/LoginPage');

Given('I am logged in', async () => {
    LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
});

When('I add {string} to the cart', (productName) => {
    ProductPage.addToCart(productName);
    ProductPage.goToCart();
});

When('I proceed to checkout', () => {
    CartPage.proceedToCheckout();
});

When('I complete the purchase with valid details', async () => {
    CheckoutPage.fillDetails('John', 'Doe', '12345');
    CheckoutPage.finishCheckout();
});

Then('I should see the order confirmation message', async () => {
    const result = await ConfirmationPage.isOrderSuccessful()
    console.log('Order confirmation result:', result);
    expect(result).toBe(true);
});