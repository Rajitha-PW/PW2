const { expect } = require("@playwright/test");

class SLogin {
    constructor(page){
        this.page = page;
        this.email = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.loginButton = page.locator("#login");

    }
    async navigateToapp(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");  
    }
    async loginToApp(username, password)
    {
        await this.email.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async verifyDashboardpage(){
        await expect(this.page).toHaveTitle("Let's Shop");     
    }
}

module.exports = {SLogin};