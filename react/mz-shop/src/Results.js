import Product from './Product'

export default function Results({ showingProducts, products, setQuery }) {
  return (
    <div>
      {showingProducts.length !== products.length && (
        <div className="showing-products">
          <span>
            Now showing {showingProducts.length} of {products.length}
          </span>
          <button onClick={() => setQuery('')}>Show all</button>
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
