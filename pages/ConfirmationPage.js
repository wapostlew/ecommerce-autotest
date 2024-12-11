class ConfirmationPage {
    get confirmationMessage() { return $('.complete-header'); }

    

    async isOrderSuccessful() {
        this.confirmationMessage.waitForDisplayed({ timout:15000 });
        const message = (await this.confirmationMessage.getText())
        
        return message === "Thank you for your order!"
    }
}

module.exports = new ConfirmationPage();