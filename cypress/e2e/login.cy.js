describe('Login 1', () => {

    it('Login 1', () => {
        cy.visit('http://localhost:4200/courses')

        cy.get('[name="title"]').type('Teste coverage')
        cy.get('[name="description"]').type('Teste details coverage')
        
        cy.get('app-course-details [type="submit"] span').first().should('have.text', ' Save ').click()



    });

});