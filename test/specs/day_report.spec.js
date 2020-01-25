const { expect } = require('chai');
const { URL_LOGIN } = require('./register_data');

describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageRegisterSelectors.emailInput).setValue('olya6avg@gmail.com');
        $(pageRegisterSelectors.passwordInput).setValue('11111');
        $(pageRegisterSelectors.submitButton).click();
        browser.pause(1000);
    });

    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/diary/create');
        browser.pause(5000);
    });
});


