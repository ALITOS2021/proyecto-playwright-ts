import { Page } from '@playwright/test'

export class CommomPageElements {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }
    get letMenu() {
        return {
            allItems: this.page.locator('#inventory_sidebar_link'),
            about: this.page.locator('#about_sidebar_link'),
            logout: this.page.locator('#logout_sidebar_link'),
            reset: this.page.locator('#reset_sidebar_link')

        }
    }
    get buttons() {
        return {
            openMenu: this.page.locator('.bm-burger-button button')
        }
    }
}