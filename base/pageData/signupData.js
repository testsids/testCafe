import { fake } from 'faker';
import { Selector } from 'testcafe';

const faker = require('faker');

class signupData {
    constructor() {
        this.staticCompanyName = "Tesla Factory";
        this.password = "Testing@123";
        this.phone = faker.phone.phoneNumber();
        this.cardNumber = "4111-1111-1111-1111";
        this.expirydate = "12/21";
        this.cvc = "123";
        this.zipCode = "12345";
    }
}
export default new signupData()