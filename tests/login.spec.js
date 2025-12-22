import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login';

test('Login feature', async ({page})=>
{

    const loginPage = new Loginpage(page);
    
    await loginPage.navigationTo();
    await loginPage.login("rajitha007@mailinator.com", "Test@123");

})