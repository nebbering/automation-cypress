import userData from '../fixtures/dataUser.json'

describe('Testes de Login e Preenchimento de Campos', () => {

const selectorsList = {
    
    Title: 'OrangeHRM',
    elementLogin: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    loginInput: "[name='username']",
    PasswordInput: "[name='password']",

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
        cy.get(selectorsList.PasswordInput).type(userData.UserValid.userPassword),
        cy.get(selectorsList.btnLogin).click(),
        cy.url().should('include', 'dashboard')
    })

    it('Preenchimento das Informações Pessoais', () => {
        
        //Verificações
        cy.title(selectorsList.Title).should('include', 'OrangeHRM'),
        cy.get(selectorsList.elementLogin).should('be.visible'),

        //Entradas
        cy.get(selectorsList.loginInput).type(userData.UserValid.userName),
        cy.get(selectorsList.PasswordInput).type(userData.UserValid.userPassword),
        cy.get(selectorsList.btnLogin).click(),
        cy.url().should('include', 'dashboard')

        cy.get(selectorsList.btnMyInfo).click(),
        cy.url().should('include', 'viewPersonalDetails')
    })

})