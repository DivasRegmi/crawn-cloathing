import React, { useState } from "react";

import SHOP_DATA from "./2.2 shop.data.js";
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = () => {
  const [Collections, setCollections] = useState(SHOP_DATA);


  return (
    <div className='shop-page'>
      {
          Collections.map(({id , ...otherCollectionsProps})=>(
              <CollectionPreview key={id} {...otherCollectionsProps}></CollectionPreview>
          ))
      }
    </div>
  );
};

export default ShopPage;
