import userData from '../fixtures/dataUser.json'
import LoginPage from '../pages/loginPage.js'
import myInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const myInfo = new myInfoPage()

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

})

describe('MyInfo Page', () => {

    beforeEach(() => {
        cy.visit('/auth/login')
    })

    it.only('Login/Dashboard/MyInfo', () => {
  
        loginPage.accessLoginPage()
        loginPage.loginValid(userData.UserValid.userName, userData.UserValid.userPassword)

        cy.url().should('include', 'dashboard')

        myInfo.accessMyInfoPage()
        myInfo.fillPersonalDetails(userData.myInfo.firstName, userData.myInfo.middleName, userData.myInfo.lastName)
        myInfo.fillStatusDetails(userData.myInfo.employeeId, userData.myInfo.otherId, userData.myInfo.driverLicense, userData.myInfo.licenseExpiry)
       
        myInfo.savePageMyInfo()

    })

})