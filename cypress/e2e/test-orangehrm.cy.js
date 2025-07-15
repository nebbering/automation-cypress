import userData from '../fixtures/dataUser.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Página de Login', () => {

    beforeEach(() => {
        cy.visit('/auth/login')
    })

    it('login bem-sucedido', () => {
  
        loginPage.accessLoginPage()
        loginPage.loginValid(userData.UserValid.userName, userData.UserValid.userPassword)

        cy.url().should('include', 'dashboard')
    })

    it('login mal-sucedido (senha errada)', () => {
  
        loginPage.accessLoginPage()
        loginPage.loginInvalid(userData.UserValid.userName, userData.userInvalid.userPassword)

        //cy.url().should('include', 'dashboard')
    })

})