import { expect, Page } from '@playwright/test';

export class ParaBankPage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto(
            'https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC'
        );
    }
}