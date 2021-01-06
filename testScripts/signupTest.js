import { Selector } from 'testcafe';
import signupObject from '../Base/PageObjects/signupObjects'
import signupData from '../Base/PageData/signupData'


fixture `Sign Up Flow`
    .page `https://test.brewoptix.com/session/sign-up`;

var moment = require('moment');
moment().format();

var email = "QaTesting" + (Math.floor(Math.random() * 10000) + 1) + "@mailinator.com";
var yourName = "QaTest"+ moment().format("h:mm:ss");

test('Retailer test scripts', async t => {
    await t
        .click(signupObject.retailerCheckbox)
        .typeText(signupObject.companyNameInput,signupData.retailerCompanyName)
        .pressKey('down')
        .pressKey('enter')
        .typeText(signupObject.nameInput,yourName)
        .typeText(signupObject.emailAddressInput,email)
        .typeText(signupObject.passwordInput,signupData.password)
        .click(signupObject.signUpButton)
        .wait(2000)
        .expect((signupObject.retailerName.innerText)).eql(yourName)
        .expect((signupObject.retailerEmail.innerText)).eql(email.toLocaleLowerCase());

    
});