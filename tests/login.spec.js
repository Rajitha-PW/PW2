import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login';
import TestData from '../TestData.json';    

test.describe('Login test', () => {
test('Login feature', async ({page})=>
{

    const loginPage = new Loginpage(page);
    
    await loginPage.navigationTo();
    await loginPage.login(TestData.validUser.email,TestData.validUser.password);
    await page.pause();

})
test('Login with invalid credentials', async ({page})=>{
    const loginPage = new Loginpage(page);
    
    await loginPage.navigationTo();
    await loginPage.login(TestData.invalidUser.email,TestData.invalidUser.password);
    await page.pause();

})
});