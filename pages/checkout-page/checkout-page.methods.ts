import { Page } from '@playwright/test'
import { CheckoutPageElements } from './checkout-page.elements'
import { Logger } from '../../support/logger';

export class CheckoutPageMethods {
    private page: Page;
    private checkoutPageElements: CheckoutPageElements

    constructor(page: Page) {
        this.page = page;
        this.checkoutPageElements = new CheckoutPageElements(page)
    }

    async insertFirstName(firstName: string) {
        await Logger.logStep(`Insert "${firstName}" as FirstName`)
        await this.checkoutPageElements.inputs.firstName.fill(firstName)
    }
    async insertLastName(lastName: string) {
        await Logger.logStep(`Insert "${lastName}" as lastName`)
        await this.checkoutPageElements.inputs.lastName.fill(lastName)
    }

    async insertPostalCode(postalCode: string) {
        await Logger.logStep(`Insert "${postalCode}" as postalCode`)
        await this.checkoutPageElements.inputs.postalCode.fill(postalCode)
    }

    async clickOnCancelButton() {
        await Logger.logStep('Clic on Cancel button')
        await this.checkoutPageElements.buttons.cancel.click()

    }

    async clickOnContinueButton() {
        await Logger.logStep('Clic on Continue button')
        await this.checkoutPageElements.buttons.continue.click()

    }
}