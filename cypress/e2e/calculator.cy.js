describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display the correct result', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })
  it('should chain multiple operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9')
  })

  it('should work for very large numbers', () => {
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '196741925136')
  })

  it('should work for negative numbers', () => {
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-300')
  })

  it('should work for very small numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5.824487375792827e-29')
  }) 

  it('should work for VERY large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8.61667442837805e+47')
  })

  it('should blow up the universe', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Universe exploded')
  })
})