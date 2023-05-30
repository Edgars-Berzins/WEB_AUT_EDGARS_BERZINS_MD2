class summaryPage {

    //Method -> Validation -> "Facility" field HAS text
    static validationFacilityFieldHasText(facilitySelector) {
        return cy.get('#facility').should('have.text', facilitySelector)
    }

    //Method -> Validation -> "Apply for hospital readmission" field HAS text
    static validationHospitalReadmisionFieldHasText(readmissionSelector) {
        return cy.get('#hospital_readmission').should('have.text', readmissionSelector);
    }

    //Method -> Validation -> "Healthcahre Program" field HAS text
    static validationHealthcareProgramFieldHasText(programSelector) {
        return cy.get('#program').should('have.text', programSelector);
    }

    //Method -> Validation -> "Visit Date" field STARTS with text
    static validationVisitDateFieldHasText(dateSelector) {
        return cy.get('#visit_date').invoke('text').then((text) => {
            expect(text.startsWith(dateSelector)).to.be.true;
        });
    }

    //Method -> Validation -> "Comment" field HAS text
    static validationCommentFieldHasText(commentSelector) {
        return cy.get('#comment').should('have.text', commentSelector);
    }



}
export default summaryPage;