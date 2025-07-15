import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BaseCard } from '../components/base-card'

describe('BaseCard', () => {
  it('renders children correctly', () => {
    render(<BaseCard>Test Content</BaseCard>)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies default classes', () => {
    render(<BaseCard data-testid="base-card">Content</BaseCard>)
    const card = screen.getByTestId('base-card')
    expect(card).toHaveClass('h-16', 'w-32', 'text-center', 'rounded-2xl', 'border-2', 'flex', 'justify-center', 'items-center')
  })

  it('applies custom className', () => {
    render(<BaseCard className="custom-class" data-testid="base-card">Content</BaseCard>)
    const card = screen.getByTestId('base-card')
    expect(card).toHaveClass('custom-class')
  })

  it('renders as div by default', () => {
    render(<BaseCard data-testid="base-card">Content</BaseCard>)
    const card = screen.getByTestId('base-card')
    expect(card.tagName).toBe('DIV')
  })

  it('renders as specified element when as prop is provided', () => {
    render(<BaseCard as="button" data-testid="base-card">Content</BaseCard>)
    const card = screen.getByTestId('base-card')
    expect(card.tagName).toBe('BUTTON')
  })

  it('passes through additional props', () => {
    render(<BaseCard data-testid="base-card" id="test-id">Content</BaseCard>)
    const card = screen.getByTestId('base-card')
    expect(card).toHaveAttribute('id', 'test-id')
  })
})
