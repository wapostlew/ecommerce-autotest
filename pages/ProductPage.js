class ProductPage {
    get productTitle() { return $('.inventory_item_name'); }
    get addToCartButton() { return $('.btn_inventory'); }
    get cartButton() { return $('.shopping_cart_link'); }

    addToCart(productName) {
        const product = $(`//*[text()='${productName}']/ancestor::div[@class='inventory_item']`);
        product.$('.btn_inventory').click();
    }

    goToCart() {
        this.cartButton.click();
    }
}

module.exports = new ProductPage();