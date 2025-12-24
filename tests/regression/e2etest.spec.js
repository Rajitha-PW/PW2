import { test, expect } from '@playwright/test';
import { Loginpage } from '../../pages/login';
import TestData from '../../TestData.json';
import { CoursesPage } from '../../pages/courses';        

test.describe('Regression test', () => {
test('Login feature', async ({page})=>
{
    const loginPage = new Loginpage(page);
    
    await loginPage.navigationTo();
    await loginPage.login(TestData.validUser.email,TestData.validUser.password);
})
test.skip('Login with invalid credentials', async ({page})=>{
    const loginPage = new Loginpage(page);
    
    await loginPage.navigationTo();
    await loginPage.login(TestData.invalidUser.email,TestData.invalidUser.password);
    
})
test('Add to cart test', async ({page}) => {

    const coursesPage = new CoursesPage(page);
    await coursesPage.addToCart("Playwright");
    await page.pause();

})

});