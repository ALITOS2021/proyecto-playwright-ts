import {test} from '@playwright/test'
import { CommomPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { LoginPageData } from '../pages/login-page/login-page.data'

const userCredentials = LoginPageData.credentials;
test('login', async({page})=>{
 const commonPageMethods = new CommomPageMethods(page)
 const loginPageMethods = new LoginPageMethods(page)
 await commonPageMethods.navigateToTheAplication()
 await loginPageMethods.insertUsername(userCredentials.usernames.standardUser)
 await loginPageMethods.insertPassword(userCredentials.password)
 await loginPageMethods.clickOnLoginButton()
 await page.waitForTimeout(4000)
})