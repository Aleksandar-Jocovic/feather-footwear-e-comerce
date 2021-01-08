import React from 'react'

import './collection-item.styles.css';

const CollectionItem = ({ item }) => {
  const { name, price, img } = item;
  console.log(img)
  return (
    <div className="collection-item">
      <div className="image" style={{
        backgroundImage: `url(${img})`
      }} />
      <div className="name">{name}</div>
      <div className="price-and-shop-button">
        <button>shop now</button>
        <span className="price">${price},00</span>
      </div>
    </div>
  )
}

export default CollectionItem
