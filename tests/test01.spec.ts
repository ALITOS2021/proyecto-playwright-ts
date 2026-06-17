import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { LoginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods';
import { CartPageMethods } from '../pages/cart-page/cart-page.methods';

const userCredentials = LoginPageData.credentials;
test('login', async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    const productsPageMethods = new ProductsPageMethods(page)
    const cartPageMethods = new CartPageMethods(page)
    await commonPageMethods.navigateToTheAplication()
    await loginPageMethods.insertUsername(userCredentials.usernames.standardUser)
    await loginPageMethods.insertPassword(userCredentials.password)
    await loginPageMethods.clickOnLoginButton()
    await productsPageMethods.clickOnAddToCart('Sauce Labs Backpack')
    await productsPageMethods.clickOnCartIcon()
    await cartPageMethods.clicOnCheckoutButton()
    // await cartPageMethods.clickOnContinueShoppingButton()
    //await cartPageMethods.clickOnRemoveButton('Sauce Labs Backpack')
    //await commonPageMethods.openMenu()
    await page.waitForTimeout(4000)
})