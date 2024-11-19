describe('Test cases for Code Coverage', () => {

    it('Register Courses', () => {
        cy.visit('http://localhost:4200/courses')

        cy.get('[name="title"]').type('Teste coverage')
        cy.get('[name="description"]').type('Teste details coverage')
        
        cy.get('app-course-details [type="submit"] span').first().should('have.text', ' Save ').click()


    });

    it.only('Login', () => {
        cy.visit('http://localhost:4200/login')

        cy.get('[name="email"]').should('be.visible').type('teste@teste.com')
        cy.get('[name="password"]').should('be.visible').type('1234')

        // cy.contains('[type="submit"] span', 'Login').should('be.visible').click()
        // cy.contains('.title', 'Angular 13 Fundamentals').should('be.visible')
    });

});