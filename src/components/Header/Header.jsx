import './Header.css';

import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Header extends Component{
  render() {
    const { nameChat, loginName } = this.props;
    return(
        <div className="header">
          <span className="header-text">Messanger</span>
          <div className="header-nav">
            <span>Чат: { nameChat }</span>
            <div className="header-nav-wrap">
              <Link to="/profile" className="header-nav-link">
                Profile
              </Link>
              <span>login: { loginName } </span>
              </div>
          </div>
        </div>
    )
  }
}