import {toolsQAUrl} from '../test_data'

beforeEach(() => {
    cy.visit(toolsQAUrl)
})

describe('Demo Form Submission', () => {
    it('Form submission is successful', () => {
    //verifies you've arrived at the right url
    cy.url()
      .should('include', 'automation-practice-form')
    cy.enterData()
    })

})
