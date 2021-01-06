import signupObject from '../base/pageObjects/signupObjects'
import signupData from '../base/pageData/signupData'
import signupPage from '../base/pages/signupPages'
const moment = require('moment');
const faker = require('faker');

fixture`Sign Up Flow`
    .page`https://test.brewoptix.com/session/sign-up`;

test('Retailer test scripts', async t => {
    const email = "QaTesting" + (Math.floor(Math.random() * 10000) + 1) + "@mailinator.com";
    const name = "QaTest" + moment().format("h_mm_ss");
    const companyName = faker.company.companyName();
    await signupPage.verifyElementPresence(signupObject.retailerCheckbox);
    await signupPage.clickOnElement(signupObject.retailerCheckbox);
    await signupPage.signup(signupObject, signupData,name,email,companyName);
    await signupPage.clickOnElement(signupObject.signUpButton);
    await signupPage.verifyElementPresence(signupObject.yourName);
    await signupPage.verifyElementText(signupObject.yourName, name);
    await signupPage.verifyElementText(signupObject.emailAddress, email.toLocaleLowerCase());
});

test('Distributor test scripts', async t => {
    const email = "QaTesting" + (Math.floor(Math.random() * 10000) + 1) + "@mailinator.com";
    const name = "QaTest" + moment().format("h_mm_ss");
    const companyName = faker.company.companyName();
    await signupPage.verifyElementPresence(signupObject.distributorCheckbox);
    await signupPage.clickOnElement(signupObject.distributorCheckbox);
    await signupPage.signup(signupObject, signupData,name,email,companyName);
    await signupPage.clickOnElement(signupObject.signUpButton);
    await signupPage.verifyElementPresence(signupObject.yourName);
    await signupPage.verifyElementText(signupObject.yourName, name);
    await signupPage.verifyElementText(signupObject.emailAddress, email.toLocaleLowerCase());
});

test('Supplier test scripts', async t => {
    const email = "QaTesting" + (Math.floor(Math.random() * 10000) + 1) + "@mailinator.com";
    const name = "QaTest" + moment().format("h_mm_ss");
    await signupPage.verifyElementPresence(signupObject.supplierCheckbox);
    await signupPage.clickOnElement(signupObject.supplierCheckbox);
    await signupPage.signup(signupObject, signupData,name,email,signupData.staticCompanyName);
    await signupPage.paymentDetails(signupObject, signupData);
    await signupPage.clickOnElement(signupObject.signUpButton);
    await signupPage.verifyElementPresence(signupObject.yourName);
    await signupPage.verifyElementText(signupObject.yourName, name);
    await signupPage.verifyElementText(signupObject.emailAddress, email.toLocaleLowerCase());
});
