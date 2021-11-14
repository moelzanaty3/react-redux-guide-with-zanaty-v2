import { render } from 'react-dom'
import { StrictMode } from 'react'
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

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
