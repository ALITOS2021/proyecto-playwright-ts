import {test} from '@playwright/test'
import { CommomPageMethods } from '../pages/common-page/common-page.methods'
test('login', async({page})=>{
 const commonPageMethods = new CommomPageMethods(page)
 await commonPageMethods.navigateToTheAplication()
})