import React from "react";
import { Route } from "react-router-dom";
import {connect} from 'react-redux'

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import CollectionPage from "../collection/collection.component";
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

import { updateCollection } from "../../redux/shop/shop.actions";


class ShopPage extends React.Component {
  unSuscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollection} = this.props
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot((snapShot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapShot)
      updateCollection(collectionsMap)
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToPros= dispatch =>({
  updateCollection : collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null, mapDispatchToPros)(ShopPage);