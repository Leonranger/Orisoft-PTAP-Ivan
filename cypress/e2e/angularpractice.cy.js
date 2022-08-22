describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
	.get('input[name=name]').should('have.attr', 'name')
	.get('input[name=email]').should('have.attr', 'name')
	.get('input[id=exampleInputPassword1]').should('have.attr', 'id', 'exampleInputPassword1').type('admin123').should('be.visible')
	.get('[type="checkbox"]').check()
	.get('select').select('Male').should('have.value', 'Male')
	.get('[type="radio"]').first().check('option1')
	.get("input[name='bday']").should('have.attr', 'name')	
  })
})



