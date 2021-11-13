import { render } from 'react-dom'
import Product from './Product'

const App = () => {
  return (
    <div>
      <h1 id="my-brand" className="logo">
        MZ Shop!
      </h1>
      <Product title="Product 1" description="Product 1 Desc" price="10$" />
      <Product title="Product 2" description="Product 2 Desc" price="20$" />
      <Product title="Product 3" description="Product 2 Desc" price="30$" />
    </div>
  )
}

render(<App />, document.getElementById('root'))
