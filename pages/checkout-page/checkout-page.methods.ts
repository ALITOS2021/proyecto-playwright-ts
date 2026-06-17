import { Page } from '@playwright/test'
import { CheckoutPageElements } from './checkout-page.elements'

export class CheckoutPageMethods {
    private page: Page;
    private checkoutPageElements: CheckoutPageElements

    constructor(page: Page) {
        this.page = page;
        this.checkoutPageElements = new CheckoutPageElements(page)
    }

    async insertFirstName(firstName: string){
        await this.checkoutPageElements.inputs.firstName.fill(firstName)
    }
    async insertLastName(lastName: string){
        await this.checkoutPageElements.inputs.firstName.fill(lastName)
    }

    async insertPostalCode(postalCode: string){
        await this.checkoutPageElements.inputs.postalCode.fill(postalCode)
    }

    async clickOnCancelButton(){
        await this.checkoutPageElements.buttons.cancel.click()
        
    }

    async clickOnContinueButton(){
        await this.checkoutPageElements.buttons.continue.click()

    }


 }