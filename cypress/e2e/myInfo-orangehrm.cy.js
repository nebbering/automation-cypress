import userData from '../fixtures/dataUser.json'
import LoginPage from '../pages/loginPage.js'
import myInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const myInfo = new myInfoPage()


describe('MyInfo Page', () => {

    beforeEach(() => {
        loginPage.accessLoginPage()
    })

    it('Login/Dashboard/MyInfo', () => {
  
        loginPage.loginValid(userData.UserValid.userName, userData.UserValid.userPassword)

        cy.url().should('include', 'dashboard')

        // Acessa a página MyInfo
        myInfo.accessMyInfoPage()

        // Preenche os detalhes pessoais e de status
        myInfo.fillPersonalDetails(userData.myInfo.firstName, userData.myInfo.middleName, userData.myInfo.lastName)
        myInfo.fillStatusDetails(userData.myInfo.employeeId, userData.myInfo.otherId, userData.myInfo.driverLicense, userData.myInfo.licenseExpiry)
       
        // Salva as informações e verifica a mensagem de sucesso
        myInfo.savePageMyInfo()

    })

})