import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { Header } from 'components/Header';

class HeaderContainer extends PureComponent{
  componentDidMount(){
  }
  render() {
    const { nameChat, loginName } = this.props;
    return (
          <Header nameChat={nameChat} loginName={loginName}/>
    );
  }
}

function mapStateToProps(state, ownProps){
  const chat = state.chats.get('entries').toJS();
  const numChat = ownProps;
  let nameChat = null;
  if (numChat && chat[numChat.chatId]){
    nameChat = chat[numChat.chatId].chatName;
  }

  const login = state.profile.get('entries');
  let loginName = null;
  if (login === null) {
    loginName = "unknown user";
  } else {
    loginName = login.get('login');
  }

  return{
    nameChat,
    loginName,
  }
}

function mapDispatchToProps(dispatch){
  return {
  }
}

export const HeaderdRedux = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);