import { useState } from 'react'

export default function ProductsList() {
  const [query, setQuery] = useState('')

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
    </div>
  )
}
