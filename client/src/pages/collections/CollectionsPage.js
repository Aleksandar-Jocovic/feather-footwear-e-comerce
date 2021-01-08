import React from 'react';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

import collections from './collections-data';
import './collections-page.styles.css';

const CollectionsPage = () => {
  return (
    <div className="collections-page">
      {
        collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))
      }
    </div>
  )
}

export default CollectionsPage;