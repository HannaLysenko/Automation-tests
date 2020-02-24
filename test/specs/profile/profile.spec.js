import {expect} from 'chai';
import LoginPage from '../login/LoginPage';
import ProfilePage from '../profile/ProfilePage';

describe('PROFILE', () => {
    before(() => {
        LoginPage.login();
    });

    it('should go to profile Page ', () => {
        browser.pause(5000);
        expect(ProfilePage.h1.getText()).eq('Hanna Lysenko');
    });
});