
import {test, expect} from '@playwright/test';
test('Register a new user and verify account balance', async ({ page }) => {
    await test.step('Navigate to the site', async () => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
    });
    const username = `shams${Date.now()}`;
    const password = 'qwerty';
    await test.step('Starting Registration ', async () => {
        const username = `shams${Date.now()}`;
        const password = 'qwerty';
        await page.getByRole('link', { name: 'Register' }).click();
        await page.locator('[id="customer.firstName"]').fill('shammas');
        await page.locator('[id="customer.lastName"]').fill('khan');
        await page.locator('[id="customer.address.street"]').fill('Andheri East');
        await page.locator('[id="customer.address.city"]').fill('Mumbai');
        await page.locator('[id="customer.address.state"]').fill('Maharashtra');
        await page.locator('[id="customer.address.zipCode"]').fill('400069');
        await page.locator('[id="customer.phoneNumber"]').fill('9404451573');
        await page.locator('[id="customer.ssn"]').fill('ABC');
        await page.locator('[id="customer.username"]').fill(username);
        await page.locator('[id="customer.password"]').fill(password);
        await page.locator('#repeatedPassword').fill(password);
        await page.getByRole('button', { name: 'Register' }).click();
        });
        await test.step('Verify the Number displayed on Screen', async () => {
        await page.getByRole('link', { name: 'Accounts Overview' }).click();
        await page.locator('b').filter({ hasText: '$' }).click();
        await expect(page.locator('tbody')).toContainText('515.50');
        console.log('Total Balance is displayed on the screen = ' + await page.locator('tbody b').nth(1).textContent());
        });
    
});