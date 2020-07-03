import React from "react";
import cx from "classnames";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={cx("menu-item", size)}>

    <div
      className="backgroundImage"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
  
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
