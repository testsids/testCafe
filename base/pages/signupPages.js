import { t } from 'testcafe';

class signupPage {
    constructor() {
    }

    async verifyElementPresence(element) {
        await t.expect(element.exists).ok('', { timeout: 30000 })
    }

    async verifyElementText(element, data) {
        await t.expect((element.innerText)).contains(data)
    }

    async clickOnElement(element) {
        await t.click(element)
    }

    async signup(signupObject, signupData, name, email, company) {
        await t
            .typeText(signupObject.companyNameInput, company)
            .wait(2000)
            .pressKey('down')
            .pressKey('enter')
            .typeText(signupObject.nameInput, name)
            .typeText(signupObject.emailAddressInput, email)
            .typeText(signupObject.passwordInput, signupData.password)
    }

    async paymentDetails(signupObject, signupData) {
        await t
            .typeText(signupObject.phoneInput, signupData.phone)
            .switchToIframe(signupObject.switchToIframe)
            .typeText(signupObject.cardNumber, signupData.cardNumber)
            .typeText(signupObject.expiryDateField, signupData.expirydate)
            .typeText(signupObject.cvv, signupData.cvc)
            .typeText(signupObject.zip, signupData.zipCode)
            .switchToMainWindow()
    }


}
export default new signupPage()