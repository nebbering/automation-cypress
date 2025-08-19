import userData from '../fixtures/dataUser.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Página de Login', () => {

    beforeEach(() => {
        loginPage.accessLoginPage()
    })

    it('login bem-sucedido', () => {
  
        loginPage.loginValid(userData.UserValid.userName, userData.UserValid.userPassword)

        cy.url().should('include', 'dashboard')
    })

    it('login mal-sucedido (senha errada)', () => {
  
        loginPage.accessLoginPage()
        loginPage.loginInvalid(userData.UserValid.userName, userData.userInvalid.userPassword)

    })

    it('login mal-sucedido (usuário errado)', () => {
  
        loginPage.accessLoginPage()
        loginPage.loginInvalid(userData.userInvalid.userName, userData.UserValid.userPassword)

    })

    it('login mal-sucedido (usuário e senha errados)', () => {
  
        loginPage.accessLoginPage()
        loginPage.loginInvalid(userData.userInvalid.userName, userData.userInvalid.userPassword)

    })

    it('login mal-sucedido (Credenciais Vazias)', () => {
  
        loginPage.accessLoginPage()
        loginPage.loginInvalidEmpty(userData.emptyCredentials.userName, userData.emptyCredentials.userPassword)

    })

})