const Product = (props) => {
  return (
    <div className="product">
      <img src={props.image} className="product-avatar" alt={`product of ${props.title}`} />
      <div className="product-details">
        <h3 className="product-title">{props.title}</h3>
        <div className="product-meta">
          <p className="product-price">{props.price}</p>
          <p className="product-category">{props.category}</p>
        </div>
        <p className="product-description">{props.description}</p>
      </div>
      <div className="product-remove">remove</div>
    </div>
  )
}

export default Product
