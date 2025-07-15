describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads successfully', () => {
    cy.get('body').should('be.visible')
  })

  it('renders create board button', () => {
    cy.get('body').get('a[href^="/board/"]').should('be.visible')
    cy.get('body').get('a[href^="/board/"]').should('contain.text', 'Create Board')
  })

  it("should go to the board page when create board button is clicked", () => {
    
    cy.get('a[href^="/board/"]', { timeout: 10000 }).should('be.visible').first().click()

  })
})
