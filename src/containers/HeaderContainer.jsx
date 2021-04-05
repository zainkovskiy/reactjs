import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { Header } from 'components/Header';
import { load } from 'actions/chats';
import { login } from 'actions/profile';

class HeaderContainer extends PureComponent{
  componentDidMount(){
    const { loadChats, loadLogin } = this.props;
    loadChats();
    loadLogin();
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

  const login = state.profile.get('entries').toList().toJS();
  let loginName = null;
  if (login[0]){
    loginName = login[0].login;
  }

  return{
    nameChat,
    loginName,
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadChats: () => dispatch(load()),
    loadLogin: () => dispatch(login()),
  }
}

export const HeaderdRedux = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);