import React from 'react'
import ReactDOM from 'react-dom'
import Product from './Product'

const App = () => {
  return React.createElement('div', {}, [
    React.createElement(
      'h1',
      /** the class is a reserved keyword in JavaScript and since we use JSX in React which itself is the extension of JavaScript, so we have to use className instead of class attribute. */
      { id: 'my-brand', className: 'logo' },
      'MZ Shop!'
    ),
    // Three stamp of that product component
    React.createElement(Product, {
      title: 'Product 1',
      description: 'Product 1 Desc',
      price: '10$'
    }),
    React.createElement(Product, {
      title: 'Product 2',
      description: 'Product 2 Desc',
      price: '20$'
    }),
    React.createElement(Product, {
      title: 'Product 3',
      description: 'Product 3 Desc',
      price: '30$'
    })
  ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
