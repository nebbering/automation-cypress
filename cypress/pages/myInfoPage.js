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
        }
        return selectors
    }
    accessMyInfoPage() {
        cy.get(this.selectorsList().btnMyInfo).click()
        cy.url().should('include', 'viewPersonalDetails')

        cy.get(this.selectorsList().firstNameInput).clear().type('Okabe'),
        cy.get(this.selectorsList().middleNameInput).clear().type('Kyouma'),
        cy.get(this.selectorsList().lastNameInput).clear().type('Rintarou'),
        
        cy.get(this.selectorsList().btnSavePersonalDetails).click(),
        cy.get(this.selectorsList().msgSaveSuccess).should('be.visible').and('contain', 'Successfully Updated')

    }

    
}

export default myInfoPage