class appointmentPage {

    //Checkbox "Hospital Readmission"
    static get checkboxHospitalReadmission() {
        return cy.get('#chk_hospotal_readmission');
    }

    //Radio button "Medicaid"
    static get radiobuttonProgramMedicaid() {
        return cy.get('#radio_program_medicaid');
    }

    //Text box "Comment"
    static get textboxComment() {
        return cy.get('#txt_comment');
    }

    //Button "Book Appointment"
    static get buttonBookAppointment() {
        return cy.get('#btn-book-appointment');
    }

    //Hamburger button "Menu toggle"
    static get menuToggleButton() {
        return cy.get('#menu-toggle');
    }

    //Selector "History" in "Menu toggle"
    static get selectorHistory() {
        return cy.get('a[href="history.php#history"]');
    }

    //Sidebar
    static get sidebar() {
        return cy.get('#sidebar-wrapper');
    }

    //Method -> Facility combobox, select "selector" facility
    static comboboxFacilitySelect(selector) {
        return cy.get('#combo_facility').select(selector);
    }

    //Method -> open callendar widget, select "dateSelector" date from current month
    static widgetVisitDateSelectCurrentMonthDay(dateSelector) {
        cy.get('#txt_visit_date').click();
        return cy.get('.day:not(.old)').contains(dateSelector).click();
    }

    //Method -> Validation -> selector HAS .classs "active"
    static validateIsActive(selector) {
        return selector.should('have.class', 'active')
    }

}
export default appointmentPage;