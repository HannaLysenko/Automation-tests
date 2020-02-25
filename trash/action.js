import {URL_LOGIN, loginUser} from './login_data';
import {pageRegisterSelectors} from './register_data';

function loginAsAdmin(){
    browser.url(URL_LOGIN);
    $(pageRegisterSelectors.emailInput).setValue(loginUser.email);
    $(pageRegisterSelectors.passwordInput).setValue(loginUser.password);
    $(pageRegisterSelectors.submitButton).click();
    browser.pause(1000);
}

function filloutReport (){
    $('//input[@id="input-0"]').click();
    $('//input[@id="input-1"]').click();
    $('//input[@id="input-2"]').click();
    $('//input[@id="input-3"]').click();
    $('//input[@id="input-4"]').click();
    $('//input[@id="input-5"]').click();
    $('//input[@id="input-6"]').click();
    $('//input[@id="input-7"]').click();
    $('//input[@id="input-8"]').click();
    $('//input[@id="input-9"]').click();
    $('//input[@id="input-10"]').click();
    $('//input[@id="input-11"]').click();
    $('//select[@name="morale"]').selectByVisibleText('8');
    $('//input[@name="hours"]').setValue('5');
    $('//textarea[@name="description"]').setValue('Worked with my project. Attended lecture. Fixed homework');
}

module.exports = {loginAsAdmin, filloutReport}