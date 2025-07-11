import userData from '../fixtures/dataUser.json'

describe('Testes de Login e Preenchimento de Campos', () => {

const selectorsList = {
    
    Title: 'OrangeHRM',
    elementLogin: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    loginInput: "[name='username']",
    passwordInput: "[name='password']",
    firstNameInput: "[name='firstName']",
    middleNameInput: "[name='middleName']",
    lastNameInput: "[name='lastName']",
    employeeIdInput: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    otherIdInput: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    driverLicenseInput: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    licenseExpiryInput: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    nationalityInput: '',
    maritionalStatusButton: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
    maritialStatusInput: '',



    //Buttons
    btnLogin: ".oxd-button",
    btnMyInfo: ':nth-child(6) > .oxd-main-menu-item'
}

    beforeEach(() => {
        cy.visit('/auth/login')
    })

    it.skip('login-bem-sucedido', () => {
        //Verificações
        cy.title(selectorsList.Title).should('include', 'OrangeHRM'),
        cy.get(selectorsList.elementLogin).should('be.visible'),

        //Entradas
        cy.get(selectorsList.loginInput).type(userData.UserValid.userName),
        cy.get(selectorsList.passwordInput).type(userData.UserValid.userPassword),
        cy.get(selectorsList.btnLogin).click(),
        cy.url().should('include', 'dashboard')
    })

    it('Preenchimento das Informações Pessoais', () => {
        
        //Verificações
        cy.title(selectorsList.Title).should('include', 'OrangeHRM'),
        cy.get(selectorsList.elementLogin).should('be.visible'),

        //Entradas
        cy.get(selectorsList.loginInput).type(userData.UserValid.userName),
        cy.get(selectorsList.passwordInput).type(userData.UserValid.userPassword),
        cy.get(selectorsList.btnLogin).click(),
        cy.url().should('include', 'dashboard')

        cy.get(selectorsList.btnMyInfo).click(),
        cy.url().should('include', 'viewPersonalDetails')

        cy.get(selectorsList.firstNameInput).clear().type(userData.myInfo.firstName),
        cy.get(selectorsList.middleNameInput).clear().type(userData.myInfo.middleName),
        cy.get(selectorsList.lastNameInput).clear().type(userData.myInfo.lastName),
        cy.get(selectorsList.employeeIdInput).clear().type(userData.myInfo.employeeId),
        cy.get(selectorsList.otherIdInput).clear().type(userData.myInfo.otherId),
        cy.get(selectorsList.driverLicenseInput).clear().type(userData.myInfo.driverLicense),
        cy.get(selectorsList.licenseExpiryInput).clear().type(userData.myInfo.liceseExpiry),
        cy.get('.dropdown-menu').click()
    })

})