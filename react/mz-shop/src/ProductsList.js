import { useState, useEffect } from 'react'
import axios from 'axios'

import Product from './Product'

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
      {showingProducts.length !== products.length && (
        <div className="showing-products">
          <span>
            Now showing {showingProducts.length} of {products.length}
          </span>
          <button onClick={this.clearQuery}>Show all</button>
        </div>
      )}
      <ol className="product-list">
        {showingProducts &&
          showingProducts.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
            />
          ))}
      </ol>
    </div>
  )
}
