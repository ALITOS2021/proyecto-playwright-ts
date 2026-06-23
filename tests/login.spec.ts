import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { LoginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods'
import * as interfaces from '../pages/login-page/login-page.interfaces'

const credentials = LoginPageData.credentials

test.describe('Login', () => {
    test('Login with valid credentials', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        await commonPageMethods.navigateToTheAplication()
        await loginPageMethods.insertUsername(credentials.usernames.standardUser)
        await loginPageMethods.insertPassword(credentials.password)
        await loginPageMethods.clickOnLoginButton()
        await productsPageMethods.verifyProductsPageIsDisplayed()
    })
    //Username and password do not match any user in this service
    test('Login with invalid username', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)


        await commonPageMethods.navigateToTheAplication()
        await loginPageMethods.insertUsername('dsfsfs')
        await loginPageMethods.insertPassword('gdgdg')
        await loginPageMethods.clickOnLoginButton()
        await loginPageMethods.verifyMessage('Username and password do not match any user in this service')

    })
    //login con cualquier usuario(standardUser, performanceGlittchUser, problemUser, lockedOutUser)
    /*   test.only('Login', async ({page})=>{
          const commonPageMethods =new CommonPageMethods(page)
          const loginPageMethods = new LoginPageMethods(page)
  
          await commonPageMethods.navigateToTheAplication()
          await loginPageMethods.login(interfaces.performanceGlittchUser)
  
      }) */
    // Login with blank username
    test('Login with blank username', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)

        await commonPageMethods.navigateToTheAplication()
        await loginPageMethods.clickOnLoginButton()
        await loginPageMethods.verifyMessage('Username is required')

    })
})
