const { expect } = require('chai');
const { pageRegisterSelectors } = require('./register_data');
const { URL_LOGIN, loginUser, loginPage, URL_DIARY } = require('./login_data');
const {diaryPage, pageDiarySelectors} = require('./day_report_data');
import {loginAsAdmin} from './action';

describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        loginAsAdmin();
    });

     it('should have a correct title', () => {
         const actual = $(pageRegisterSelectors.h1).getText();
         const expected = "Hanna Lysenko";
         expect(actual).equal(expected);
         browser.pause(1000);
     });

    it('should click "Diary" button', () =>{
        const element = $(pageDiarySelectors.diaryButton);
        element.click();
        browser.pause(3000);
    });

    it('should have a correct title ', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = "Daily reports";
        expect(actual).equals(expected);
        browser.pause(3000);
    });

    it('should click "Create day report" button', () =>{
        const element = $(pageDiarySelectors.createDayReport);
        element.click();
        browser.pause(3000);
    });

    it('should have a correct title  ', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = "Create day report";
        expect(actual).equals(expected);
        browser.pause(3000);
    });
});


