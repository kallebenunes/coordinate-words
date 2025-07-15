import { BaseCard } from '../components/base-card'

describe('BaseCard Component', () => {
  it('renders and displays content', () => {
    cy.mount(<BaseCard>Hello World</BaseCard>)
    cy.contains('Hello World').should('be.visible')
  })

  it('renders as button when as prop is provided', () => {
    cy.mount(<BaseCard as="button">Click me</BaseCard>)
    cy.get('button').should('contain.text', 'Click me')
  })

  it('applies custom classes', () => {
    cy.mount(<BaseCard className="bg-red-500">Styled Card</BaseCard>)
    cy.get('div').should('have.class', 'bg-red-500')
  })
})
