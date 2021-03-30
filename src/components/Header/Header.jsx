import './Header.css';

import React, { Component } from "react";

export class Header extends Component{
  render() {
    return(
        <div className="header">
          <span className="header-text">Messanger</span>
        </div>
    )
  }
}