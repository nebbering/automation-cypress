import userData from '../fixtures/dataUser.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Login', () => {

const selectorsList = {
    
    Title: 'OrangeHRM',    //btnMyInfo: ':nth-child(6) > .oxd-main-menu-item'
}

    beforeEach(() => {
        cy.visit('/auth/login')
    })

    it('login-bem-sucedido', () => {
        //Verificações  
        loginPage.accessLoginPage()
        loginPage.loginWithUsers(userData.UserValid.userName, userData.UserValid.userPassword)

        //Entradas
        // cy.get(selectorsList.loginInput).type(userData.UserValid.userName),
        // cy.get(selectorsList.passwordInput).type(userData.UserValid.userPassword),
        cy.url().should('include', 'dashboard')
    })

    // it.skip('Preenchimento das Informações Pessoais', () => {
        
    //     //Verificações
    //     cy.title(selectorsList.Title).should('include', 'OrangeHRM'),
    //     cy.get(selectorsList.elementLogin).should('be.visible'),

    //     //Entradas
    //     cy.get(selectorsList.loginInput).type(userData.UserValid.userName),
    //     cy.get(selectorsList.passwordInput).type(userData.UserValid.userPassword),
    //     cy.get(selectorsList.btnLogin).click(),
    //     cy.url().should('include', 'dashboard')

    //     cy.get(selectorsList.btnMyInfo).click(),
    //     cy.url().should('include', 'viewPersonalDetails')

    //     cy.get(selectorsList.firstNameInput).clear().type(userData.myInfo.firstName),
    //     cy.get(selectorsList.middleNameInput).clear().type(userData.myInfo.middleName),
    //     cy.get(selectorsList.lastNameInput).clear().type(userData.myInfo.lastName),
    //     cy.get(selectorsList.employeeIdInput).clear().type(userData.myInfo.employeeId),
    //     cy.get(selectorsList.otherIdInput).clear().type(userData.myInfo.otherId),
    //     cy.get(selectorsList.driverLicenseInput).clear().type(userData.myInfo.driverLicense),
    //     cy.get(selectorsList.licenseExpiryInput).clear().type(userData.myInfo.liceseExpiry),
    //     cy.get('.dropdown-menu').click()
    // })

})