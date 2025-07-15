class LoginPage {

    selectorsList() {
        const selectors = {
            loginInput: "[name='username']",
            passwordInput: "[name='password']",
            btnLogin: ".oxd-button",
            wrongCredentialsMessage: ".oxd-alert",
            
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUsers(username, password) {
        cy.get(this.selectorsList().loginInput).type(username),
        cy.get(this.selectorsList().passwordInput).type(password),
        cy.get(this.selectorsList().btnLogin).click()
    }

}

export default LoginPage