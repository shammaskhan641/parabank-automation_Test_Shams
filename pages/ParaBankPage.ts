import { expect, Page } from '@playwright/test';

export class ParaBankPage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto(
            'https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC'
        );
    }
    async registerUser(username: string, password: string) {
         await this.page.getByRole('link', { name: 'Register' }).click();
        await this.page.locator('[id="customer.firstName"]').fill('shammas');
        await this.page.locator('[id="customer.lastName"]').fill('khan');
        await this.page.locator('[id="customer.address.street"]').fill('Andheri East');
        await this.page.locator('[id="customer.address.city"]').fill('Mumbai');
        await this.page.locator('[id="customer.address.state"]').fill('Maharashtra');
        await this.page.locator('[id="customer.address.zipCode"]').fill('400069');
        await this.page.locator('[id="customer.phoneNumber"]').fill('9404451573');
        await this.page.locator('[id="customer.ssn"]').fill('ABC');
        await this.page.locator('[id="customer.username"]').fill(username);
        await this.page.locator('[id="customer.password"]').fill(password);
        await this.page.locator('#repeatedPassword').fill(password);
        await this.page.getByRole('button', { name: 'Register' }).click();

}
}