class LoginPage {
    get usernameField() { return $('#user-name'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    open() {
        browser.url('/');
    }

    async login(username, password) {
        await this.usernameField.setValue(username);
        browser.pause(500);
        await this.passwordField.setValue(password);
        browser.pause(500);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();