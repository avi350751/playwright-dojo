const {test, expect} = require('@playwright/test');

test('test1 - handling child windows and new tabs', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const docLink = page.locator("[href*='documents-request']");
    await expect(docLink).toHaveAttribute('class','blinkingText');

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        docLink.click()]);
    
    const title = await newpage.locator(".red").textContent();
    const requiredArray = title.split("@")
    const requiredString =requiredArray[1].split(" ")[0];
    console.log(requiredString);
    expect(requiredString).toContain("rahulshettyacademy.com");

    await page.locator("#username").fill(requiredString);
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
    

});
