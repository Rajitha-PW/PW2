
class CoursesPage{
    constructor(page){
        this.page = page;
        this.coursecontent = page.locator('.container-child');
    }
    async addToCart(courseName) {

        await this.page.waitForLoadState("networkidle");
        const count = await this.coursecontent.count();
        console.log("Course content count:", count);
        // await this.coursecontent.first().waitFor({ state: "visible", timeout: 10000 });
        const coursecontent_text = await this.coursecontent.allTextContents();
        console.log(coursecontent_text); 
                        
}
}

module.exports={CoursesPage};