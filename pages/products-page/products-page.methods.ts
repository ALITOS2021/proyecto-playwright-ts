import { Page } from '@playwright/test'
import { ProductsPageElements } from './products-page.elements'
import { Logger } from '../../support/logger'
export class ProductsPageMethods {
    private page: Page
    private productsPageElements: ProductsPageElements
    constructor(page: Page) {
        this.page = page
        this.productsPageElements = new ProductsPageElements(page)
    }

    async clickOnAddToCart(productName: string) {
        await Logger.logStep(`Click on Add TO cart button corresponding to "${productName}"`)
        await this.productsPageElements.addCartButton(productName).click()
    }
    async clickOnCartIcon() {
        await Logger.logStep('Click on Cart icon')
        await this.productsPageElements.icons.cart.click();
        //await this.page.locator('#shopping_cart_container').click();
    }
}