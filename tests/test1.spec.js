const {test, expect} = require('@playwright/test');

test('test1 - Locators which extract multiple webelements', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
    const msg = await page.locator("//div[@class='col-lg-3']/h1").textContent();
    console.log(msg);
    expect(msg).toContain("Shop Name");

    const cardTitles = await page.locator(".card-body a");
    const txt = await cardTitles.first().textContent();
    console.log(txt);
    expect(txt).toContain("iphone X");

    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    expect(allTitles.length).toBe(4);


})

test('test2 - Locators which extract multiple webelements', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill('admin123@email.com');
    await page.locator('#userPassword').fill('Weare@Oct2025#');
    await page.locator('#login').click();
    const msg = await page.locator(".mt-1 h3").textContent();
    console.log(msg);
    expect(msg).toContain("Automation");

    //await page.waitForLoadState('networkidle'); //considered as flaky approach
    await page.locator('.card-body b').first().waitFor(); //better approach

    const cardTitles = await page.locator(".card-body b");
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    expect(allTitles.length).toBe(3);


})