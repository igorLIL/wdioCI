import Page from './page';

class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
}

export default new SecurePage();
