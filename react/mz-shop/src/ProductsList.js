import { useState, useEffect } from 'react'
import axios from 'axios'

import Results from './Results'

export default function ProductsList() {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchMyProducts() {
      const response = await axios.get(`${process.env.BASE_API_URL}/products`)
      setProducts(response.data)
    }
    fetchMyProducts()

    return () => {
      console.info('Bye!')
    }
  }, [])

  const showingProducts =
    query === ''
      ? products
      : products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="list-products">
      <div className="list-products-top">
        <input
          className="search-products"
          type="text"
          placeholder="Search Products"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <Results products={products} showingProducts={showingProducts} setQuery={setQuery} />
    </div>
  )
}
