import userData from '../fixtures/dataUser.json'

describe('Testes de Login e Preenchimento de Campos', () => {

const selectorsList = {
    Title: 'OrangeHRM',
    loginInput: "[name='username']"
}

    beforeEach(() => {
        cy.visit('/auth/login')
    })

    it('login-bem-sucedido', () => {
        cy.get(selectorsList.loginInput).type(userData.UserValid.userName)
    })

})