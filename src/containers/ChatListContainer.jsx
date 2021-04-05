import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { ChatList } from 'components/ChatList';
import { load, addChat } from 'actions/chats';

class ChatListContainer extends PureComponent {
  componentDidMount(){
    const { loadChats } = this.props;
    loadChats();
  }
  handelAddChat = (chat) => {
    const { addChats, chatList } = this.props;
    const chatsLenght = chatList.length + 1;
    const newChat = { [chatsLenght]: {id: chatsLenght, messages: [{text: chat, author: 'Bot'}], chatName: chat,} }
    addChats({
      newChat
    })
  }


  render() {
    const { chatList } = this.props;
    return (
        <ChatList addChats={this.handelAddChat} chatList={chatList}/>
    );
  }
}

function mapStateToProps(state, ownProps){
  const chatList = state.chats.get('entries');

  return{
    chatList: chatList.map((entry) => ({name: entry.get('chatName'), link: `/chats/${entry.get('id')}`})).toList().toJS()
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadChats: () => dispatch(load()),
    addChats: (chat) => dispatch(addChat(chat))
  }
}

export const ChatListdRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);