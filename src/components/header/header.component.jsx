import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector} from 'reselect'

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import {selectCartHiden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'

import "./header.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>

      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateTOProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHiden,
});

export default connect(mapStateTOProps)(Header);
