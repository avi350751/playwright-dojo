const {test, expect} = require('@playwright/test');

test('test1 - validation of entered values', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username =  page.locator('#username')
    const password = page.locator('#password')

    await username.fill('rahulshettyacademy');
    await password.fill('learning');

    const filledUsername = await username.inputValue();
    console.log(`Filled Username: ${filledUsername}`);

    const filledPassword = await password.inputValue();
    console.log(`Filled Password: ${filledPassword}`);

});