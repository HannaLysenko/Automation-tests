import {URL_LOGIN, loginUser} from './login_data';
import {pageRegisterSelectors} from './register_data';

function loginAsAdmin(){
    browser.url(URL_LOGIN);
    $(pageRegisterSelectors.emailInput).setValue(loginUser.email);
    $(pageRegisterSelectors.passwordInput).setValue(loginUser.password);
    $(pageRegisterSelectors.submitButton).click();
    browser.pause(1000);
}

module.exports = {loginAsAdmin};