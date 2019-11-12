import {usn, pwd} from '../integration/test_data'
require('cypress-xpath')

Cypress.Commands.add('login', () =>{
    //submit login credentials
    cy.get('[id=username]').type(usn)
    cy.get('[id=password]').type(pwd)
    cy.get('[type=submit]').click()
})

Cypress.Commands.add('logout', () =>{
    cy.contains('a','Logout').click()
})

Cypress.Commands.add('enterData', () =>{
    // cy.xpath('//a[@title="Automation Practice Table"]').click()
    // cy.url()
    // .should('include', '/automation-practice-table')
    // cy.go('back')

    cy.get('[name=firstname]').type('Amethyst')
    cy.get('[id=lastname]').type('Cobalt')
    cy.get('[id=sex-0]').click()
    cy.get('[id=exp-6]').click()
    cy.get('[id=datepicker]').type('11/12/2019')
    cy.get('[id=profession-1]').click()
    cy.get('[id=tool-2]').click()

    //Single Selection
    cy.get('[id=continents]')
      .select(['South America']).invoke('val')
      .should('eq', 'SA')

    //Multiple Selections
    cy.get('[id=continentsmultiple]')
      .select(['Europe', 'South America']).invoke('val')
      .should('deep.equal', ['EU', 'SA'])

    //Menu Selection
    cy.get('[id=selenium_commands]')
      .select(['Switch Commands'])
      
    //Verify text on bulleted list
    cy.get('ul#beverages').children().should('have.length', 4)
})