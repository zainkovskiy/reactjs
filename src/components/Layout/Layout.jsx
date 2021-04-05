import './Layout.css';

import React, { Component } from 'react';
import {MessageField} from "components/MessageField";
import {Header} from "components/Header";
import {ChatList} from "components/ChatList";
import {MessageFieldRedux} from "containers/MessageFieldContainer";
import {ChatListdRedux} from "containers/ChatListContainer";
import {HeaderdRedux} from "containers/HeaderContainer"

export class Layout extends Component{

  render() {
    return(
        <div className="layout">
          <HeaderdRedux chatId={this.props.match.params.id}/>
          <ChatListdRedux/>
          <MessageFieldRedux match={this.props.match}/>
        </div>
    )
  }
}