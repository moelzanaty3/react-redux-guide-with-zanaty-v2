const Product = () => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, 'Product 1'),
    React.createElement('h3', {}, 'Product 1 Description'),
    React.createElement('h3', {}, '10$'),
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement(
      'h1',
      /** the class is a reserved keyword in JavaScript and since we use JSX in React which itself is the extension of JavaScript, so we have to use className instead of class attribute. */
      { id: 'my-brand', className: 'logo' },
      'MZ Shop!',
    ),
    // Three stamp of that product component
    React.createElement(Product),
    React.createElement(Product),
    React.createElement(Product),
  ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
