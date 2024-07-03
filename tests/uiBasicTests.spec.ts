import { expect, test } from '@playwright/test';

test('First Playwright Test with Browser Context', async ({browser}) => {
   const context =  await browser.newContext(); // browser instance
   const page = await context.newPage(); // actual page to hit url and start automation
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   const pageTitle = await page.title();
   console.log(pageTitle);
   expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
   //css selector by default

   // depricated type method to enter value
   await page.locator('#username').fill("rahulshettyacademy");
   await page.locator('#password').fill("learning");
   await page.locator('#terms').click();
   await page.locator('#signInBtn').click();


   // first element:

   const iPhoneFirst = await page.locator('.card-body').nth(0).textContent()
   console.log(iPhoneFirst);
   expect(iPhoneFirst).toContain('iphone X');

});

// without browser fixture
test('Second Playwright Test with Page fixture ', async ({page}) => {
    await page.goto('https://google.com');

    // get the title

    const titleOfPage = await page.title();
    console.log(titleOfPage);
    expect(titleOfPage).toBe('Google')
 
 });