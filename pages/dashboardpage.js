const { expect } = require("@playwright/test");

class DashboardPage 
{
    constructor(page){
        this.page = page;
        this.productname = page.locator(".card-body b");
        this.cartlink = page.locator("button[routerlink$='/dashboard/cart']");
        this.cartproducttitle = page.locator(".infoWrap h3");
        this.cartproducts = page.locator(".infoWrap");
        this.buynowbutton = page.locator('button:has-text("Buy Now")')
    }
    async getProductNames(productTitle){
    await expect(this.productname.first()).toBeVisible({ timeout: 10000 });
    const titles = await this.productname.allTextContents();
    console.log(titles);

    for(let i=0; i<titles.length; i++){
        if(titles[i] === productTitle){
           console.log("Product found: " + titles[i]);
           await this.page.locator(".card-body").nth(i).locator("text= Add To Cart").click();
           break;       
    }
  }
}
  async navigateToCart(productTitle){
    await this.cartlink.click();
    const cartTitles = await this.cartproducttitle.allTextContents();
    console.log(cartTitles);

    for(let i=0; i<cartTitles.length; i++)
    {
       if(cartTitles[i] === productTitle)
        {
            await this.cartproducts.nth(i).locator(this.buynowbutton).click();
            break;
        }    
  }
}}

module.exports = { DashboardPage };