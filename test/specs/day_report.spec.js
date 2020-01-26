const { expect } = require('chai');
const { pageRegisterSelectors } = require('./register_data');
const { URL_LOGIN, loginUser, loginPage, URL_DIARY } = require('./login_data');
const {diaryPage, pageDiarySelectors} = require('./day_report_data');
describe('CREATE DAY REPORT', () => {
    it('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageRegisterSelectors.emailInput).setValue(loginUser.email);
        $(pageRegisterSelectors.passwordInput).setValue(loginUser.password);
        $(pageRegisterSelectors.submitButton).click();
        browser.pause(1000);
    });

     it('should have a correct title', () => {
         const actual = $(pageRegisterSelectors.h1).getText();
         const expected = loginPage.h1;
         expect(actual).equal(expected);
         browser.pause(1000);
     });

    it('should click "Diary" button', () =>{
        const element = $(pageDiarySelectors.diaryButton);
        element.click();
        browser.pause(3000);
    })

    it('should have a correct title ', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = $(diaryPage.h1);
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
        const expected = $(diaryPage.h2);
        expect(actual).equals(expected);
        browser.pause(3000);
    });
})


