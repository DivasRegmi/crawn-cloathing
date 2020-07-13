import React, { Component } from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'

import MenuItem from "../menu-item/menu-item.component";

import {selectDirectorySections} from '../../redux/directory/directory.selectors'

import "./directory.styles.scss";

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProp }) => (
      <MenuItem key={id} {...otherSectionProp} />
    ))}
  </div>
);

const mapStateTOProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateTOProps)(Directory);
