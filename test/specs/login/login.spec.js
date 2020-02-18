import {expect} from 'chai';
import LoginPage from './LoginPage';
import ProfilePage from '../profile/ProfilePage';

describe('LOGIN (positive)', () => {
    it ('should open login page', () => {
        LoginPage.open();
    });

    it ('should have a correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
    });

    it ('should fill out email field', () => {
        LoginPage.email.setValue('hannatkach92@gmail.com');
    });

    it ('should fill out password field', () => {
        LoginPage.password.setValue("11111");
    });

    it ('should click submit button', () => {
        LoginPage.submitBtn.click();
        browser.pause(5000)
    });

    it('should check h1', () => {
        expect(ProfilePage.h1.getText()).eq('Hanna Lysenko');
    })
});