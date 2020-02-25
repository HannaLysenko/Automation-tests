import { expect } from 'chai';
import { pageRegisterSelectors } from './register_data';
import {pageDiarySelectors} from './day_report_data';
import {loginAsAdmin, filloutReport} from './action';

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
        browser.pause(1000);
    });

    it('should have a correct title ', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = "Daily reports";
        expect(actual).equals(expected);
        browser.pause(1000);
    });

    it('should click "Create day report" button', () =>{
        const element = $(pageDiarySelectors.createDayReport);
        element.click();
        browser.pause(1000);
    });

    it('should have a correct title  ', () => {
        const actual = $(pageRegisterSelectors.h1).getText();
        const expected = "Create day report";
        expect(actual).equals(expected);
        browser.pause(1000);
    });

    it ('should fillout day report', () => {
        filloutReport();
    });

    it ('should check if save button is enabled', () => {
        $('//button[contains(text(), "Save")]').isEnabled();
    });

    it ('should click save button', () => {
        $('//button[@type="submit"]').click();
    })

    // it('should check created day report', () =>{
    //
    // })
});


