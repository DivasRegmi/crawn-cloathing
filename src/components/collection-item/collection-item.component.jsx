import React from "react";
import {connect} from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import {addItem} from '../../redux/cart/cart.actions'

import "./collection-item.styles.scss";


const CollectionItem = ({ item , addItems}) => {
   const { name, imageUrl, price} = item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className="custom-button">
        <CustomButton onClick={() => addItems(item)}>ADD TO CART</CustomButton>
      </div>
    </div>
  );};


const mapDispatchToProps = dispatch => ({
      addItems : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
