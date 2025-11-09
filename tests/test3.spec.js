const {test, expect} = require('@playwright/test');

test('test1 - handling radio buttons and checkboxes', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username =  page.locator('#username')
    const password = page.locator('#password')

    //radio button
    await page.locator(".checkmark").nth(1).click();
    await expect(page.locator(".checkmark").nth(1)).toBeChecked();
    await page.locator("#okayBtn").click();
    const adminOptions = page.locator("select.form-control");
    await adminOptions.selectOption('Teacher');
    await page.locator("#terms").check();
    await expect(page.locator("#terms")).toBeChecked();

    //await page.pause(2000);
    //Now uncheck and validate
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms")).toBeTruthy();

    //handling blinking text
    const docLink = page.locator("[href*='documents-request']");
    await expect(docLink).toHaveAttribute('class','blinkingText');
    await username.fill('rahulshettyacademy');
    await password.fill('learning');
    await page.locator('#signInBtn').click();
    
    // Wait for navigation after login
    //await page.waitForLoadState('networkidle');

})