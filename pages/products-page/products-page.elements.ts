import { Page } from '@playwright/test'
export class ProductsPageElements {
    private page: Page
    constructor(page: Page) {
        this.page = page
    }

    get icons() {
        return {
            cart: this.page.locator('#shopping_cart_container')
        }
    }

    addCartButton(productName: string) { return this.page.locator(`//div[.="${productName}"]//ancestor::div[@class="inventory_item"]//button`) }

}
