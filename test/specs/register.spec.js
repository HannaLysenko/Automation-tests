const {expect} = require('chai');

const { URL_REGISTER, user, pageRegister, pageRegisterSelectors, pageLogin, pageConfirmation } = require('./register_data');

const user = {
    firstName: "John",
    lastName: 'Smith',
    password: 'dgdfdvsdgd2597dzg',
    phone: '19165975597',
    email: Math.random() + '@gmail.com',
    about: 'good mood',
    goals: 'make life better',
    englishLevel: 'Native'
};

const page = {
    title: 'Progress Monitor',
    h1: 'User Register',
    description: 'Profiles with fictitious or dummy data will be deleted.',
    buttonText: 'Submit'

};

const pageRegisterSelectors = {
    h1: h1,
    description: 'p',
    submitButton: 'form button',
    firstNameInput: 'form input[name="firstName"]',
    lastNameInput: 'form input[name="lastName"]',
    phoneInput: 'form input[name="phone"]',
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    aboutInput: 'form textarea[name="about"]',
    goalsInput: 'form textarea[name="goals"]',
    englishLevelInput: 'form select[name="englishLevel"]'
};

const page_login = {
    h1: 'You are a new user'
};

describe('Register page', () => {
    it('should have a correct title', () => {
        browser.url(URL_REGISTER);
        const actual = browser.getTitle();
        const expected = page.title;
        expect(actual).equal(expected);
    });

    it('should have a correct title', () => {
        const actualH1text = $(pageRegisterSelectors.h1).getText();
        const expectedH1Text = page.h1;
        expect(actualH1text).equal(expectedH1Text);
    });

    it('should have a correct description', () => {
        const actual = $(pageRegisterSelectors.description).getText();
        const expected = page.description;
        expect(actual).equal(expected);
    });

    it('should have a correct submit button test', () => {
        const actual = $(pageRegisterSelectors.submitButton).getText();
        const expected = page.buttonText;
        expect(actual).equal(expected);
    });

    it('should fill up register first name field', () => {
        const element = $(pageRegisterSelectors.firstNameInput);
        element.setValue(user.firstName);
    });

    it('should fill up register last name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue(user.lastName);
    });

    it('should fill up phone number field', () => {
        const element = $('form input[name="phone"]');
        element.setValue(user.phone);
    });

    it('should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(user.email);
    });

    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(user.password);
    });

    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue(user.about);
    });

    it('should fill up goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue(user.goals);
    });

    it('should choose English level dropdown', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText(user.englishLevel);
    });

    it('should click a button Submit', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(5000);
    });
});

describe('Login Page', () =>{
    it('should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(user.email);
    });

    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(user.password);
    });

    it('should click a button Login', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(5000);
    });
});

describe('Confirmation Register Page', () => {
    it('should have the correct title', () => {
        const actual = $('h1').getText();
        const expected = page_login.h1;
        expect(actual).equal(expected);
    });
});