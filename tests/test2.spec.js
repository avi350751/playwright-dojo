const {test, expect} = require('@playwright/test');

test('test1 - handling dropdowns', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username =  page.locator('#username')
    const password = page.locator('#password')
    const adminOptions = page.locator("select.form-control");
    await adminOptions.selectOption('Teacher');

    await username.fill('rahulshettyacademy');
    await password.fill('learning');
    await page.locator('#signInBtn').click();
    
    // Wait for navigation after login
    await page.waitForLoadState('networkidle');

})

test('test2 - handling dropdowns', async({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator("#btn-make-appointment").click();
    const username =  page.locator('#txt-username')
    const password = page.locator('#txt-password')
    await username.fill('John Doe');
    await password.fill('ThisIsNotAPassword');
    await page.locator("#btn-login").click();

    // Wait for navigation and page to load after login
    await page.waitForLoadState('networkidle');
    
    const facility = page.locator("#combo_facility");
    await facility.selectOption('Hongkong CURA Healthcare Center');


})