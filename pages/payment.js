const { expect } = require("@playwright/test");

class paymentPage{
    constructor(page){
        this.page = page;
        this.dropdown = page.locator(".ta-results");
        this.placeOrderbtn = page.locator(".btnn");
    }
    async placeOrder(countryname){
        await this.page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 })
        await this.dropdown.waitFor();
        const optionsCount = await this.dropdown.locator("button").count();
        for(let i=0; i<optionsCount; ++i )
        {
            const text = await this.dropdown.locator("button").nth(i).textContent();
            if(text.trim() === countryname)
            {
            this.dropdown.locator("button").nth(i).click();
            break;
            }

        }
        await this.placeOrderbtn.click();
}
}

module.exports = { paymentPage };