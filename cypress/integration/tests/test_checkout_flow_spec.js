//Cypress proof-of-concept: E2E Checkout flow
import {fiveElementsUrl} from '../test_data'

beforeEach('5 Elements Demo', ()=>{
    cy.visit(fiveElementsUrl)
    cy.url().should('include', /demosite/)
})

describe('E-commerce Checkout', () =>{
    it('E2E Checkout flow', ()=>{
        let productName = 'Unreal Tournament'

        //Verify messaging on landing page
        cy.get('h1').should('contain', 'Welcome')
        cy.get('h2').should('contain', 'New Products For November')
        cy.log('Messaging verified!')      
        
        //Select product name from landing page
        cy.contains(productName).click()
        
        //Add item to cart
        cy.get('.ui-priority-primary').click()
        cy.wait(2000)

        //Proceed to Checkout
        cy.get('[id=tdb5]').click()
        
        //Proceed as returning customer
        cy.get('[name=email_address]').type('qaTester.cypress@mail.com')
        cy.get('[name=password]').type('Password1')
        cy.get('[id="tdb5"]').click()

        //Select Payment Method
        //cy.get('[value="cod"]').click()
        cy.get('[id="tdb6"]').click()

        //Confirm Order
        cy.get('[id="tdb5"]')

        //Navigate back home
        cy.get('[id="tdb5"]').click()

        //Logout
        cy.get('[id="tdb4"]').click()
    })
})
