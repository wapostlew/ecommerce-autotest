class CartPage {
    get cartItems() { return $$('.cart_item'); }
    get checkoutButton() { return $('#checkout'); }

    verifyProductInCart(productName) {
        return $(`//*[text()='${productName}']`).isDisplayed();
    }

    proceedToCheckout() {
        this.checkoutButton.click();
    }
}

module.exports = new CartPage();