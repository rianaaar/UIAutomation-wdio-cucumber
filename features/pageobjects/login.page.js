

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('.chakra-button');
    }
    get ErrorInvalidPass (){
        return $("//*[contains(text(),'Kredensial yang Anda berikan salah')]");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        //await this.btnSubmit.click();
    }
    async btnLogin(){
        await this.btnSubmit.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
