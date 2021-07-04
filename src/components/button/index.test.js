import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import AddButton from '../button'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('can render the add to cart button and update the shopping cart items amount', () => {
  let cartCount = 0
  let setCartCount = (count) => cartCount = count

  act(() => {
    ReactDOM.render(<AddButton cartCount={cartCount} setCartCount={setCartCount} />, container)
  })

  const button = container.querySelector('button')

  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  expect(cartCount).toBe(1)
});