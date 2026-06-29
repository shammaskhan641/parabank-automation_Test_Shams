import { test,expect } from '@playwright/test';
import { ParaBankPage } from '../pages/ParaBankPage';
test('Register a new user and verify account balance', async ({ page }) => {

    const paraBank = new ParaBankPage(page);

    const username = `shams${Date.now()}`;
    const password = 'qwerty';

    await test.step('Navigate to the site', async () => {
        await paraBank.navigate();
    });
        await test.step('Starting Registration', async () => {
        await paraBank.registerUser(username, password);
    });
        await test.step('Verify the Number displayed on Screen', async () => {
        await paraBank.verifyAccountBalance();
});
    
});