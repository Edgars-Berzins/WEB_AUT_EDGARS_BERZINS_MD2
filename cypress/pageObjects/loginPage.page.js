class loginPage {

    //fill in "Username" field with the demo account credentials
    static setUsernameToDemoUsername() {
        return cy.get('.form-control[placeholder="Username"]').invoke('val').then((value) => {
            cy.get("#txt-username").type(value);
        });
    }

    //fill in "Password" field with the demo account credentials
    static setPasswordToDemoPassword() {
        return cy.get('.form-control[placeholder="Password"]').invoke('val').then((value) => {
            cy.get("#txt-password").type(value);
        });
    }

    //login button
    static get loginButton() {
        return cy.get('#btn-login');
    }





}
export default loginPage;