const {test, expect} = require('@playwright/test');

test('uibasics example test', async ({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://eaapp.somee.com/");
    console.log(await page.title());
    await page.getByText('Login').click();
    await page.locator('#UserName').fill('admin');
    await page.locator('#Password').fill('123');
    await page.locator('#loginIn').click();
    const msg = await page.locator("//form[contains(@action,'Login')]//li").textContent();
    console.log(msg);
    expect(msg).toContain('Invalid login attempt.');

    await page.locator("#Password").fill("");
    await page.locator("#Password").fill("password");
    await page.locator("#loginIn").click();

});

test('uibasics example second test', async ({page}) =>{

    await page.goto("http://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});
