import { Page } from '@playwright/test'

export class CommomPageMethods {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }
    async navigateToTheAplication() {
        await this.page.goto('https://www.saucedemo.com/v1/index.html')
    }
}