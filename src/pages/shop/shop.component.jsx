import React, { useState } from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = () => {
  const [Collections] = useState(SHOP_DATA);


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
