import {siteUrl} from '../test_data'

beforeEach(() => {
    cy.visit(siteUrl)
    cy.login()
})

describe('Demo Login', () => {
    it('Verify login is successful', () => {    
        cy.url()
          .should('include', '/secure')
    })
    
afterEach(() => {
     cy.logout()
   })
})