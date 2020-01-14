const {expect} = require('chai');
const email = Math.random()+'@gmail.com';
const firstName = "John";
const password = 'dgdfdvsdgdrhrdzg';

describe('Register page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/user/register')
    });
    it('should have the right title', () => {
        //browser.url('https://stage.pasv.us/user/register')
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title', () => {
        const actualH1text = $('h1').getText();
        const expectedH1Text = 'User Register';
        expect(actualH1text).equal(expectedH1Text);
    });

    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
    });

    it('should have a correct submit button test', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
    });

    it('should fill up register first name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName);
        browser.pause(2000);
    });

    it('should fill up register last name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue('Smith');
        browser.pause(2000);
    });

    it('should fill up phone number field', () => {
        const element = $('form input[name="phone"]');
        element.setValue('19165975597');
        browser.pause(2000);
    });

    it('should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(2000);
    });

    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
        browser.pause(2000);
    });

    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('good mood');
        browser.pause(2000);
    });

    it('should fill up goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('eat sleep');
        browser.pause(2000);
    });

    it('should choose English level dropdown', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Native');
        browser.pause(2000);
    });

    it('should click a button Submit', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });
})