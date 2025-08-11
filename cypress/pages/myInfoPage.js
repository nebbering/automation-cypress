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
            employeeIdInput: ":nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
            otherIdInput: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
            driverLicenseNumberInput: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
            licenseExpiryDateInput: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",

            nationalityBox: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
            nationalityInput: ".oxd-select-dropdown > :nth-child(26)", //Brasil
            maritalStatusInput: ":nth-child(4) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-text-input",
            dateOfBirthInput: ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
            genderInput: ":nth-child(5) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-text-input",

        }
        return selectors
    }
    accessMyInfoPage() {

        // Acessa a página MyInfo e verifica se a URL está correta
        cy.get(this.selectorsList().btnMyInfo).click()
        cy.url().should('include', 'viewPersonalDetails')

        //Dados Pessoais
        cy.get(this.selectorsList().firstNameInput).clear().type('Okabe'),
        cy.get(this.selectorsList().middleNameInput).clear().type('Kyouma'),
        cy.get(this.selectorsList().lastNameInput).clear().type('Rintarou'),
         
        cy.get(this.selectorsList().employeeIdInput).clear().type('111111'),
        cy.get(this.selectorsList().otherIdInput).clear().type('222222222'),
        cy.get(this.selectorsList().driverLicenseNumberInput).clear().type('3333333333'),
        cy.get(this.selectorsList().licenseExpiryDateInput).clear().type('2025-12-31'),

        cy.get(this.selectorsList().nationalityBox).click({force: true}),
        cy.get(this.selectorsList().nationalityInput).click({force: true})
        //cy.get(this.selectorsList().dateOfBirthInput).clear().type('20212-04-07'),


        // Clica no botão de salvar e verifica se a mensagem de sucesso é exibida
        cy.get(this.selectorsList().btnSavePersonalDetails).click(),
        cy.get(this.selectorsList().msgSaveSuccess).should('be.visible').and('contain', 'Successfully Updated')

    }

    
}

export default myInfoPage