class historyPage {

    //Method -> Validation -> "No appointment" text is visible
    static validationNoAppointmentIsVisible() {
        return cy.get('#history > div > div:nth-child(1) > div > p')
            .should('be.visible')
            .should('have.text', 'No appointment.');
    }
}
export default historyPage;