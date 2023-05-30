class BasePage {

    static get url() {
        return "/";
    }

    static visit() {
        cy.visit(this.url);
    }

    //Button "Make Appointment"
    static get makeAppointment() {
        return cy.get("#btn-make-appointment");
    }

}

export default BasePage;