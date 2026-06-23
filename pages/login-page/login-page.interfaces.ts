import { LoginPageData } from "./login-page.data"


export interface User {
    username: string
    password: string
}
export const standardUser: User = {
    username: LoginPageData.credentials.usernames.standardUser,
    password: LoginPageData.credentials.password

}

export const performanceGlittchUser: User = {
    username: LoginPageData.credentials.usernames.performanceGlittchUser,
    password: LoginPageData.credentials.password
    
}

export const problemUser: User = {
    username: LoginPageData.credentials.usernames.problemUser,
    password: LoginPageData.credentials.password
    
}

export const lockedOutUser: User = {
    username: LoginPageData.credentials.usernames.lockedOutUser,
    password: LoginPageData.credentials.password

}

