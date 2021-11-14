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
      <ol className="product-list">
        {/* 1. showing it to validate */}
        {/* <code>
          <pre>{JSON.stringify(products, null, 2)}</pre>
        </code> */}

        {/* 2. it will work but it's not readable code as after a while you will have no idea what's in product */}
        {/* {products && products.map((product) => <Product key={product.id} {...product} />)} */}

        {/* 3. it's a little bit verbose but it's readable */}
        {products &&
          products.map((product) => (
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
