import { Page } from '@playwright/test'
import { CommonPageElements } from './common-page.elements'

export class CommonPageMethods {
    private page: Page
    private commonPageElements: CommonPageElements

    constructor(page: Page) {
        this.page = page
        this.commonPageElements = new CommonPageElements(page)
    }
    async navigateToTheAplication() {
        await this.page.goto('https://www.saucedemo.com/v1/index.html')
    }

    async openMenu() {

        await this.commonPageElements.buttons.openMenu.click()
    }
    async clickOnAllItemsOption() {
        await this.commonPageElements.letfMenu.allItems.check()
    }
    async clickOnAboutOption() {
        await this.commonPageElements.letfMenu.about.click()
    }

    async clickOnLogoutOption() {
        await this.commonPageElements.letfMenu.logout.click()
    }

    async clickOnResetAppStateOption() {
        await this.commonPageElements.letfMenu.resetAppState.click();
    }
}