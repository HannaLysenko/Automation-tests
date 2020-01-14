const assert = require('assert')

describe('PASV app front page', () => {
    it('should have the right title', () => {
        browser.url('https://app.pasv.us')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Progress Monitor')
    })
})