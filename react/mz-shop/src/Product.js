import React from 'react'

const Product = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.title),
    React.createElement('h3', {}, props.description),
    React.createElement('h3', {}, props.price)
  ])
}

export default Product
