import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import logo from '../../images/boomtown-logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar
      showMenuIconButton={false}
      className="headerBar"
      title={
        <div className="titleWrapper">
          <Link to="/">
            <img src={logo} alt="Boomtown" className="headerLogo" />
          </Link>
        </div>
      }
    />
  );
};

export default Header;
