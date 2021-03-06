import React from 'react';
import Logo from '../../images/boomtown-logo.svg';
import './styles.css';

import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

const Header = () => {
  return (
    <div className="headerbar">
      <div className="titlewrapper">
        <a href="">
          <img className="headerlogo" src={Logo} alt="boomtown" />
        </a>
        <SelectField floatingLabelText="">
          <MenuItem primaryText="Filter by Tags" />
          <MenuItem primaryText="Electronics" />
          <MenuItem primaryText="Electronics" />
          <MenuItem primaryText="Filter by Tags" />
        </SelectField>
      </div>
      <div className="header-btn">
        <NavLink to="/profile" exact activeClassName="selected">
          <RaisedButton
            className="profile-btn"
            label="Profile"
            primary={true}
            style={style}
          />
        </NavLink>
        <NavLink to="/items" exact activeClassName="selected">
          <RaisedButton
            className="log-btn"
            label="LOG OUT"
            primary={true}
            style={style}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
