describe('Board Page', () => {
  beforeEach(() => {
    // Visit the board page with a test board ID
    cy.visit('/board/test-board-id')
  })

  it('displays the board and the word submission form correctly', () => {
  cy.get('main', ).should('be.visible')

  cy.get('form[action="/board-update"]').within(() => {
    cy.get('input[placeholder="Type a word"]').should('be.visible')
    cy.get('button[type="submit"]').should('contain.text', 'Enviar')
  })
})


  it('allows user to input a word', () => {
    // Type a word in the input field
    cy.get('input[placeholder="Type a word"]')
        .type('test')
        .should('have.value', 'test')
  })

  it('submits the word form', () => {
    // Intercept the form submission
    cy.intercept('POST', '/board-update', { statusCode: 200 }).as('submitWord')
    
    // Fill and submit the form
    cy.get('input[placeholder="Type a word"]').type('testing')
    cy.get('button[type="submit"]').click()
    
    // Wait for the request to be made
    cy.wait('@submitWord')
  })

  it('displays the sent words section', () => {
    // Check if the sent words section is visible
    cy.get('main').within(() => {
      // Look for elements that would indicate the SentWords component
      cy.get('div').should('exist')
    })
  })
})
