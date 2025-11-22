import {test, expect} from "@playwright/test";

test('test9 - handling get by operations', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice");
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel("Employed").click();
    await page.getByLabel("Gender").selectOption("Female");


    //input operations
    // await page.getByN("Name").fill("Avishek");
    // await page.getByPlaceholder("Email").fill("admin@email.com");
    await page.getByPlaceholder("Password").fill("12345");
    await page.getByRole('button', {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole('link', {name:"Shop"}).click();

    //chaining methods
    await page.locator("app-card").filter({hasText: 'Blackberry'}).getByRole('button',{name:'Add'}).click();
})