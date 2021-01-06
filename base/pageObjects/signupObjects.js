import { Selector } from 'testcafe';

class signupObject {
    constructor() {
        this.supplierCheckbox = Selector('input[aria-label="Supplier"]');
        this.distributorCheckbox = Selector('input[aria-label="Distributor"]');
        this.retailerCheckbox = Selector('input[aria-label="Retailer"]');
        this.companyNameInput = Selector('input#companySearch');
        this.nameInput = Selector('input[aria-label="Your Name"]');
        this.emailAddressInput = Selector('input[aria-label="Email Address"]');
        this.passwordInput = Selector('input[aria-label="Password"]');
        this.address1Input = Selector('input[aria-label="Address Line 1"]');
        this.address2Input = Selector('input[aria-label="Address Line 2"]');
        this.cityInput = Selector('input[aria-label="City"]');
        this.stateInput = Selector('input[aria-label="State"]');
        this.postalCodeInput = Selector('input[aria-label="Postal Code"]');
        this.phoneInput = Selector('input[aria-label="Phone"]');
        this.retailerName = Selector('div.text-center div:nth-child(1)');
        this.retailerEmail = Selector('div.text-center div:nth-child(2)');
        this.signUpButton = Selector('div.d-flex.justify-center > button > div');
    }
}
export default new signupObject()