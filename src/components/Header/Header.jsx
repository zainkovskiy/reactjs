import './Header.css';

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Header extends Component{
  static propTypes = {
    chatId: PropTypes.string,
  };
  render() {
    const chatId = this.props.chatId;
    return(
        <div className="header">
          <span className="header-text">Messanger</span>
          <div className="header-nav">
            {chatId && <span> Chat № { chatId }</span>}
            <Link to="/profile" className="header-nav-link">
              Profile
            </Link>
          </div>
        </div>
    )
  }
}