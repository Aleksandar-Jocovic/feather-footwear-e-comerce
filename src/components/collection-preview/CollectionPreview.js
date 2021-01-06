import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';

import './collection-preview.styles.css';

const CollectionPreveiw = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreveiw
