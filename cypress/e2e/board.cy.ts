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
    
    cy.get('input[placeholder="Type a word"]').type('testing')
    cy.get('button[type="submit"]').click()
    cy.get('[data-test-id="sent-words"]').find('button').should('contain.text', 'testing')
  
  })

  it('displays the sent words section', () => {
    
    cy.get('main').within(() => {
      cy.get('[data-test-id="sent-words"]').should('be.visible')
    })
  })
})
