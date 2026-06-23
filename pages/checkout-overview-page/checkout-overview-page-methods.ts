import { expect, Page } from '@playwright/test'
import { CheckoutOverviewPageElements } from './checkout-overview-page.elements'
import { Logger } from '../../support/logger';

export class CheckoutOverviewPageMethods {
    private page: Page
    private checkoutOverviewPageElements: CheckoutOverviewPageElements

    constructor(page: Page) {
        this.page = page;
        this.checkoutOverviewPageElements = new CheckoutOverviewPageElements(page)
        
    }
    async clickOnCancelButton() {
        //agrego los logger
        await Logger.logStep('Click on Cancel button')
        await this.checkoutOverviewPageElements.buttons.cancel.click()
    }
    async clickOnFinishButton(){
        await Logger.logStep('Click on Finish button')
        await this.checkoutOverviewPageElements.buttons.finish.click()
    }
    async verifyCheckoutOverViewPageIsDisplayed(){
        await Logger.logVerification('the Checkout overView page should be displayed')
        const elementsCount= await this.checkoutOverviewPageElements.otherElements.pageTitle.count()
        expect(elementsCount).toEqual(1)
        //FIN
    }
}