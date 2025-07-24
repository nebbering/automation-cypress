class myInfoPage {

    selectorsList() {
        const selectors = {
            btnMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
            btnSavePersonalDetails: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button--secondary",
            msgSaveSuccess: ".oxd-toast--success",
            loginInput: "[name='username']",
            passwordInput: "[name='password']",
            firstNameInput: "[name='firstName']",
            middleNameInput: "[name='middleName']",
            lastNameInput: "[name='lastName']",
            employeeIdInput: ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
            otherIdInput: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
            driverLicenseNumberInput: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
            licenseExpiryDateInput: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",

        }
        return selectors
    }
    accessMyInfoPage() {
        cy.get(this.selectorsList().btnMyInfo).click()
        cy.url().should('include', 'viewPersonalDetails')

        cy.get(this.selectorsList().firstNameInput).clear().type('Okabe'),
        cy.get(this.selectorsList().middleNameInput).clear().type('Kyouma'),
        cy.get(this.selectorsList().lastNameInput).clear().type('Rintarou'),
        
        cy.get(this.selectorsList().employeeIdInput).clear().type('979797'),
        cy.get(this.selectorsList().otherIdInput).clear().type('979797979'),
        cy.get(this.selectorsList().driverLicenseNumberInput).clear().type('9797979797'),
        cy.get(this.selectorsList().licenseExpiryDateInput).clear().type('2025-12-31'),

        cy.get(this.selectorsList().btnSavePersonalDetails).click(),
        cy.get(this.selectorsList().msgSaveSuccess).should('be.visible').and('contain', 'Successfully Updated')

    }

    
}

export default myInfoPage