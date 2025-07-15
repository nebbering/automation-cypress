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

    loginValid(username, password) {
        cy.get(this.selectorsList().loginInput).type(username),
        cy.get(this.selectorsList().passwordInput).type(password),
        cy.get(this.selectorsList().btnLogin).click()
        cy.url().should('include', 'dashboard')
    }

    loginInvalid(username, password) {
        cy.get(this.selectorsList().loginInput).type(username),
        cy.get(this.selectorsList().passwordInput).type(password),
        cy.get(this.selectorsList().btnLogin).click()
        cy.get(this.selectorsList().wrongCredentialsMessage).should('be.visible')
    }

}

export default LoginPage