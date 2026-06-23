import { expect, Page } from "@playwright/test";
import { CartPageElements } from "./cart-page.elements";
import { Logger } from "../../support/logger";

export class CartPageMethods {
    private page: Page
    private cartPageElements: CartPageElements
    constructor(page: Page) {
        this.page = page
        this.cartPageElements = new CartPageElements(page)
    }

    async clickOnContinueShoppingButton() {
        await Logger.logStep('Click on continuo Shopping button')
        await this.cartPageElements.buttons.continueShopping.click()
    }
    async clicOnCheckoutButton() {
        await Logger.logStep('Click on Checkout button')
        await this.cartPageElements.buttons.checkout.click();
    }
    async clickOnRemoveButton(productName: string) {
        await Logger.logStep(`Click on Remove button for ${productName}`)
        await this.cartPageElements.removeButton(productName).click()
    }

    async verifyPoductIsDisplayed(productName: string) {
        await Logger.logVerification(`The product "${productName}" should be shown`)
        const productsCount = await this.cartPageElements.removeButton(productName).count()
        expect(productsCount).toEqual(1)
    }

        async verifyPoductIsNotDisplayed(productName: string) {
        await Logger.logVerification(`The product "${productName}" should not be shown`)
        const productsCount = await this.cartPageElements.removeButton(productName).count()
        expect(productsCount).toEqual(0)
    }
}