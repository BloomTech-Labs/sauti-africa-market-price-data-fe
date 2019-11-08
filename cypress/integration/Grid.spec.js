describe('<Grid />', () => {
    it('grid page renders', () => {
      cy.visit('/grid')
      cy.get('Grid').within(() => {
          cy.get('input:first').should('have.attr','placeholder', 'Countries')
      })
    })
  })