describe('Appointments', () => {
  context("Scenario 1 - Make an Appointment", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#btn-make-appointment").click();
      cy.get('.form-control[placeholder="Username"]').invoke('val').then((value) => {
        cy.get("#txt-username").type(value);
      });
      cy.get('.form-control[placeholder="Password"]').invoke('val').then((value) => {
        cy.get("#txt-password").type(value);
      });
      cy.get('#btn-login').click();
    });

    it("Scenario 1 - Make an Appointment", () => {
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
      cy.get('#chk_hospotal_readmission').click();
      cy.get('#radio_program_medicaid').click();
      cy.get('#txt_visit_date').click();
      cy.get('.day:not(.old)').contains('30').click();
      cy.get('#txt_comment').type('CURA Healthcare Service');
      cy.get('#btn-book-appointment').click();

      //Validate
      cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
      cy.get('#hospital_readmission').should('have.text', 'Yes');
      cy.get('#program').should('have.text', 'Medicaid');
      cy.get('#visit_date').invoke('text').then((text) => {
        expect(text.startsWith('30')).to.be.true;
      });
      cy.get('#comment').should('have.text', 'CURA Healthcare Service');
    });

    it("Scenario 2 - Appointment history empty", () => {
      cy.get('#menu-toggle').click();
      cy.get('#sidebar-wrapper').should('have.class', 'active');
      cy.get('a[href="history.php#history"]').click();
      cy.get('#history > div > div:nth-child(1) > div > p').should('have.text', 'No appointment.');
    });
  });
});