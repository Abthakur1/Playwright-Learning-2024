import { expect, test } from '@playwright/test';

test('Validate error message on wrong username and password', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill("rahulshettyacademy");
    await page.locator('#password').fill("wrong");
    await page.locator('#signInBtn').click();

    // getting the text msg
    const errorMsg = await page.locator('div[class^=alert][style="display: block;"]').textContent();
    console.log(errorMsg);
    await expect(page.locator('div[class^=alert][style="display: block;"]')).toContainText("Incorrect username/password.");

})