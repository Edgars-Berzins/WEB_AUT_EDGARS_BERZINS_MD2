import BasePage from "../pageObjects/base.page";
import loginPage from "../pageObjects/loginPage.page";
import appointmentPage from "../pageObjects/appointmentPage.page";
import summaryPage from "../pageObjects/summaryPage.page";
import historyPage from "../pageObjects/historyPage";

//Variables
var facilitySeoul = 'Seoul CURA Healthcare Center';
var comment = 'CURA Healthcare Service';
var visitDateDay = 30;
var healthcareProgramMedicaid = 'Medicaid';
var HospitalReadmisionYes = 'Yes';

//Test
describe('Appointments', () => {
  context("Appointment scenarios", () => {
    beforeEach(() => {
      BasePage.visit();//Go to page
      BasePage.makeAppointment.click();//Click "Make appointment" button
      loginPage.setUsernameToDemoUsername();//Get Demo Username, set it as login Username
      loginPage.setPasswordToDemoPassword();//Get Demo Password, set it as login Password
      loginPage.loginButton.click();//Click "Login" button
    });

    it("Scenario 1 - Make an Appointment", () => {
      appointmentPage.comboboxFacilitySelect(facilitySeoul);//Select facility "Seoul CURA Healthcare Center"
      appointmentPage.checkboxHospitalReadmission.click();//Set checkbox "Hospital Readmission" to "Selected"
      appointmentPage.radiobuttonProgramMedicaid.click();//Set radiobutton "Healthcare Program" to "Selected"
      appointmentPage.widgetVisitDateSelectCurrentMonthDay(visitDateDay);//Open widget "Visit Date (Required)", set visit date to "visitDateDay" from the current moth
      appointmentPage.textboxComment.type(comment);//Select text box "Comment", type in the "comment" variable
      appointmentPage.buttonBookAppointment.click();//Click button "Book Appointment"

      //Validation
      summaryPage.validationFacilityFieldHasText(facilitySeoul);//Validate if the "Facility" field has text "Seoul CURA Healthcare Center"
      summaryPage.validationHospitalReadmisionFieldHasText(HospitalReadmisionYes);//Validate if the "Apply for hospital readmission" field HAS text "Yes"
      summaryPage.validationHealthcareProgramFieldHasText(healthcareProgramMedicaid);//Validate if the "Healthcahre Program" field HAS text "Medicaid"
      summaryPage.validationVisitDateFieldHasText(visitDateDay);//Validate if the "Visit Date" field STARTS with 30
      summaryPage.validationCommentFieldHasText(comment);//Validate if the "Comment" field HAS text "CURA Healthcare Service"
    });

    it("Scenario 2 - Appointment history empty", () => {
      appointmentPage.menuToggleButton.click();//Open sidebar
      appointmentPage.validateIsActive(appointmentPage.sidebar);//Validate if the sidebar is active
      appointmentPage.selectorHistory.click();//Open "History" page by clicking on the "History" selector in the sidebar
      historyPage.validationNoAppointmentIsVisible();//Validate if the "No Appointmen" text is visible
    });
  });
});