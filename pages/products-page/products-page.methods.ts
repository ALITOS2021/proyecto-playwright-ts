import { Page } from '@playwright/test'
import { ProductsPageElements } from './products-page.elements'
export class ProductsPageMethods{
    private page: Page
    private productsPageElements: ProductsPageElements
    constructor(page: Page){
        this.page = page
        this.productsPageElements = new ProductsPageElements(page)
    }

    async clickOnAddToCart(productName: string){
        await this.productsPageElements.addCartButton(productName).click()
    }
    async clickOnCartIcon(){
      await this.productsPageElements.icons.cart.click();
      //await this.page.locator('#shopping_cart_container').click();
    }
}