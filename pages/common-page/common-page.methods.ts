import { Page } from '@playwright/test'
import { CommonPageElements } from './common-page.elements'
import { Logger } from '../../support/logger'

export class CommonPageMethods {
    private page: Page
    private commonPageElements: CommonPageElements

    constructor(page: Page) {
        this.page = page
        this.commonPageElements = new CommonPageElements(page)
    }
    async navigateToTheAplication() {
        await Logger.logStep('Navigate to the Application ')
        await this.page.goto('https://www.saucedemo.com/v1/index.html')
    }

    async openMenu() {
        await Logger.logStep('Click on open Menu icon')
        await this.commonPageElements.buttons.openMenu.click()
    }
    async clickOnAllItemsOption() {
        await Logger.logStep('Click on All Items options')
        await this.commonPageElements.letfMenu.allItems.check()
    }
    async clickOnAboutOption() {
        await Logger.logStep('Click on About option')
        await this.commonPageElements.letfMenu.about.click()
    }

    async clickOnLogoutOption() {
        await Logger.logStep('Click on Logout option')
        await this.commonPageElements.letfMenu.logout.click()
    }

    async clickOnResetAppStateOption() {
        await Logger.logStep('Click on Reset Apps state')
        await this.commonPageElements.letfMenu.resetAppState.click();
    }
}