const { test,expect } = require('@playwright/test');
const { SLogin } = require('../../pages/s_login'); 
const TestData = require('../../TestData.json');
const { DashboardPage } = require('../../pages/dashboardpage');
const { paymentPage } = require ('../../pages/payment');


test.describe("Boking E2E flow", ()=>{
    test.beforeEach("Login to application", async({page})=>{
        const slogin = new SLogin(page);
        
        await slogin.navigateToapp();
        await slogin.loginToApp(TestData.validUser.email, TestData.validUser.password);
        await slogin.verifyDashboardpage();
    });
    test("booking validation", async ({page})=>{
        const dashboardpage = new DashboardPage(page);
        const productTitle = "ZARA COAT 3";
        await dashboardpage.getProductNames(productTitle);
        await dashboardpage.navigateToCart(productTitle);

        const paymentpage = new paymentPage(page);
        const countryname = "India";
        await paymentpage.placeOrder(countryname);
        await page.pause();
            
    });
});