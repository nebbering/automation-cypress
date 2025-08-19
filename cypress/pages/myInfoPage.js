class myInfoPage {

    selectorsList() {
        const selectors = {
            btnMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
            btnSavePersonalDetails: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button--secondary",
            msgSaveSuccess: ".oxd-toast--success",

            //loginInput: "[name='username']",
            //passwordInput: "[name='password']",
            firstNameInput: "[name='firstName']",
            middleNameInput: "[name='middleName']",
            lastNameInput: "[name='lastName']",

            employeeIdInput: ":nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
            otherIdInput: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
            driverLicenseNumberInput: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
            licenseExpiryDateInput: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
            ssnNumberInput: "",
            sinNumberInput: "",

            
            nationalityBox: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
            nationalityInput: ".oxd-select-dropdown > :nth-child(27)", //Brasil
            
            maritalStatusInput: ":nth-child(4) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-text-input",
            dateOfBirthBox: ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon",
            dateOfBirthInput: ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
            genderInput: ":nth-child(5) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-text-input",

        }
        return selectors
    }

    //Funções

    accessMyInfoPage() {

        // Acessa a página MyInfo e verifica se a URL está correta
        cy.get(this.selectorsList().btnMyInfo).click()
        cy.url().should('include', 'viewPersonalDetails')
        
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameInput).clear().type(firstName)
        cy.get(this.selectorsList().middleNameInput).clear().type(middleName)
        cy.get(this.selectorsList().lastNameInput).clear().type(lastName)
    }

    fillStatusDetails(employeeId, otherId, driverLicense, licenseExpiry, ssnNumber, sinNumber) {
        cy.get(this.selectorsList().employeeIdInput).clear().type(firstName)

    }

    savePageMyInfo() {
        // Clica no botão de salvar e verifica se a mensagem de sucesso é exibida
        cy.get(this.selectorsList().btnSavePersonalDetails).click(),
        cy.get(this.selectorsList().msgSaveSuccess).should('be.visible').and('contain', 'Successfully Updated')
    }
    

    
}

export default myInfoPage