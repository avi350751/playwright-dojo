const {test, expect} = require('@playwright/test');

test('test1 - An E2E scenario', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();

    await page.waitForLoadState('networkidle');
    // Wait for the products to load - using the correct selector
    await page.locator('.card-body h4 a').first().waitFor();

    const msg = await page.locator("//div[@class='col-lg-3']/h1").textContent();
    console.log(msg);
    expect(msg).toContain("Shop Name");

    const products = page.locator(".card-body");
    const productCount = await products.count();
    console.log("Number of products: "+ productCount);
    
    // Looking for an actual product that exists on the page
    for(let i=0; i<productCount; i++){
        const prodTitle = await products.nth(i).locator("h4 a").textContent();
        console.log("Product " + i + ": " + prodTitle);
        if (prodTitle === 'Nokia Edge'){
            // Use a more robust button selector that handles the space in the text
            await page.locator("(//div[@class='card-footer']/button)").nth(i).click();
            console.log("Successfully clicked Add button for Nokia Edge");
            break;
        }
    }

    await page.locator(".btn-primary").first().click();
    const prodName = await page.locator(".media-body a").first().textContent();
    expect(prodName).toContain("Nokia Edge");

    await page.locator(".btn-success").first().click();
    await page.locator("#country").pressSequentially("Ind",{delay:1000});
    const countries = page.locator(".suggestions");
    await countries.waitFor();
    const count = await countries.locator("a").count();
    for(let i=0; i<count; i++){
        const country = await countries.locator("a").nth(i).textContent();
        if(country === "India"){
            await countries.locator("a").nth(i).click();
            break;
        }
    }

    await page.locator(".btn-success").first().click();
    const successMsg = await page.locator(".alert-success").textContent();
    console.log(successMsg);
    expect(successMsg).toContain("Success");
    

})