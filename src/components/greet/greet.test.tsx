import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

// test('Greet render correctly', () => {
//     render(<Greet />);
//     const textElement = screen.getByText(/hello/i)
//     expect(textElement).toBeInTheDocument()
// })

test('Greet renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()

})

test('Greet render with name', () => {
    render(<Greet name='Ezekiel' />);
    const textElement = screen.getByText('Hello Ezekiel')
    expect(textElement).toBeInTheDocument()
})