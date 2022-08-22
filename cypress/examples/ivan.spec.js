
beforeEach('Launch site', ()=>{
   cy.visit('https://www.automationtestinginsider.com/2019/08/textarea-textarea-element-defines-multi.html')
})
 
it('Interacting with text fields',()=>{
   cy.get('input[name="firstname"]')
     .type('Sachin')
.should('have.value','Sachin')
.get('input[name="lastname"]')
.type('Joshi')
.should('have.value','Joshi')
})
