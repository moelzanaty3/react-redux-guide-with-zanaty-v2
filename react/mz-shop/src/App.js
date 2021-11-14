import { render } from 'react-dom'
import ProductsList from './ProductsList'

const App = () => {
  return (
    <div>
      <h1 id="my-brand" className="logo">
        MZ Shop!
      </h1>
      <ProductsList />
    </div>
  )
}

render(<App />, document.getElementById('root'))
