import {expect} from 'chai';

import {user, registerPage, pageRegisterSelectors, pageLogin } from './register_data';
import { URL_REGISTER } from './login_data';

describe('REGISTER PAGE', () => {
    it('should have a correct title', () => {
        browser.url(URL_REGISTER);
        const actual = browser.getTitle();
        const expected = registerPage.title;
        expect(actual).equal(expected);
    });

    it('should have a correct title', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = registerPage.h1;
        expect(actual).equal(expected);
    });

    it('should have a correct description', () => {
        const actual = $(pageRegisterSelectors.description).getText();
        const expected = registerPage.description;
        expect(actual).equal(expected);
    });

    it('should have a correct submit button test', () => {
        const actual = $(pageRegisterSelectors.submitButton).getText();
        const expected = registerPage.buttonText;
        expect(actual).equal(expected);
    });

    it('should fill up register first name field', () => {
        const element = $(pageRegisterSelectors.firstNameInput);
        element.setValue(user.firstName);
    });

    it('should fill up register last name field', () => {
        const element = $(pageRegisterSelectors.lastNameInput);
        element.setValue(user.lastName);
    });

    it('should fill up phone number field', () => {
        const element = $(pageRegisterSelectors.phoneInput);
        element.setValue(user.phone);
    });

    it('should fill up email field', () => {
        const element = $(pageRegisterSelectors.emailInput);
        element.setValue(user.email);
    });

    it('should fill up password field', () => {
        const element = $(pageRegisterSelectors.passwordInput);
        element.setValue(user.password);
    });

    it('should fill up about field', () => {
        const element = $(pageRegisterSelectors.aboutInput);
        element.setValue(user.about);
    });

    it('should fill up goals field', () => {
        const element = $(pageRegisterSelectors.goalsInput);
        element.setValue(user.goals);
    });

    it('should choose English level dropdown', () => {
        const element = $(pageRegisterSelectors.englishLevelInput);
        element.selectByVisibleText(user.englishLevel);
    });

    it('should click a button Submit', () => {
        const element = $(pageRegisterSelectors.submitButton);
        element.click();
        browser.pause(5000);
    });
});

describe('LOGIN PAGE', () =>{
    it('should fill up email field', () => {
        const element = $(pageRegisterSelectors.emailInput);
        element.setValue(user.email);
    });

    it('should fill up password field', () => {
        const element = $(pageRegisterSelectors.passwordInput);
        element.setValue(user.password);
    });

    it('should click a button Login', () => {
        const element = $(pageRegisterSelectors.submitButton);
        element.click();
        browser.pause(5000);
    });
});

describe('Confirmation Register Page', () => {
    it('should have the correct title', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = pageLogin.h1;
        expect(actual).equal(expected);
    });
});