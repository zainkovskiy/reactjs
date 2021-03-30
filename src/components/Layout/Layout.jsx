import './Layout.css';

import React, { Component } from 'react';
import {MessageField} from "components/MessageField";
import {Header} from "components/Header";
import {ChatList} from "components/ChatList";

export class Layout extends Component{
  render() {
    return(
        <div className="layout">
          <Header/>
          <ChatList/>
          <MessageField />
        </div>
    )
  }
};