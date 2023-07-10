

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dashboard () {
        return $('//*[contains(text(),"dashboard")]');
    }
}

module.exports = new DashboardPage();
