import {createSelector} from 'reselect'
import CollectionPage from '../../pages/collection/collection.component';



const selectShop = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  (collections) => Object.keys(collections).map(key=> collections[key])
);

export const selectCollection = (collectionUrlParm) =>
         createSelector(
           [selectShopItems],
           (collections) => collections[collectionUrlParm]
         );


