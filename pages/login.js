class Loginpage{
    constructor(page)
    {
       this.page=page;
       this.emailInput=page.locator("input[name='email1']");
       this.passwordInput=page.locator("input[name='password1']");
       this.submitButton=page.locator(".submit-btn");
    }
   async navigationTo()
   {
    await this.page.goto("https://freelance-learn-automation.vercel.app/login");
   }


    async login(username,password)
    {
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}

module.exports={Loginpage};
