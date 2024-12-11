class CheckoutPage {
    get firstNameField() { return $('#first-name'); }
    get lastNameField() { return $('#last-name'); }
    get postalCodeField() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishButton() { return $('#finish'); }

    async fillDetails(firstName, lastName, postalCode) {
        await this.firstNameField.setValue(firstName);
        browser.pause(500);
        await this.lastNameField.setValue(lastName);
        browser.pause(500);
        await this.postalCodeField.setValue(postalCode);
        browser.pause(500);
        await this.continueButton.click();
    }

    finishCheckout() {
        this.finishButton.click();
    }
}

module.exports = new CheckoutPage();