import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { WordSender } from '../components/word-sender'

// Mock react-router's useFetcher
const mockSubmit = vi.fn()
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router')
  return {
    ...actual,
    useFetcher: () => ({
      Form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
      submit: mockSubmit,
    }),
  }
})

describe('WordSender', () => {
  it('renders word input and submit button', () => {
    render(
      <BrowserRouter>
        <WordSender />
      </BrowserRouter>
    )

    expect(screen.getByPlaceholderText('Type a word')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument()
  })

  it('has correct form attributes', () => {
    render(
      <BrowserRouter>
        <WordSender />
      </BrowserRouter>
    )

    const form = screen.getByRole('form')
    expect(form).toHaveAttribute('method', 'post')
    expect(form).toHaveAttribute('action', '/board-update')
  })
})
