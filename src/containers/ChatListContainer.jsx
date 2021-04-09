import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { ChatList } from 'components/ChatList';
import { load, addChat, deleteChat } from 'actions/chats';
import { push } from 'connected-react-router';


class ChatListContainer extends PureComponent {
  componentDidMount(){
    const { loadChats } = this.props;
    loadChats();
  }
  handelAddChat = (chat) => {
    const { addChats, chatList, navigate } = this.props;
    const newChatId = this.setChatId(chatList,chatList[chatList.length - 1].id + 1);
    const newChat = { [newChatId]: {id: newChatId, messages: [{text: chat, author: 'Bot'}], chatName: chat, chatClass: true} };
    const pathname = `/chats/${newChatId}`;
    addChats({
      newChat
    });
    navigate({
      pathname
    })
  };
  setChatId(chatsList, currentId){
    let id = currentId;
    const findId = chatsList.find(el => el.id === currentId)
    if (findId) {
      id++;
      this.setChatId(chatsList, id);
    }
    return id;
  }

  handelDeleteChat = (id) => {
    const { deleteChat } = this.props;
    deleteChat({
      id
    })
  }
  handleNavigate = (id) => {
    const { navigate } = this.props
    const pathname = `/chats/${id}`
    navigate({
      pathname
    })
  }


  render() {
    const { chatList } = this.props;
    return (
        <ChatList navigate={this.handleNavigate} deleteChat={this.handelDeleteChat} addChats={this.handelAddChat} chatList={chatList}/>
    );
  }
}

function mapStateToProps(state, ownProps){
  const chatList = state.chats.get('entries');

  return{
    chatList: chatList.map((entry) => ({name: entry.get('chatName'), link: `/chats/${entry.get('id')}`, chatClass: entry.get('chatClass'), id: entry.get('id')})).toList().toJS()
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadChats: () => dispatch(load()),
    addChats: (chat) => dispatch(addChat(chat)),
    deleteChat: (chat) => dispatch(deleteChat(chat)),
    navigate: (pathname) => dispatch(push(pathname))
  }
}

export const ChatListdRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);