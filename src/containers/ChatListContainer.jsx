import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { ChatList } from 'components/ChatList';
import { listen, createChat, chatRemove } from 'actions/chats';
import { push } from 'connected-react-router';


class ChatListContainer extends PureComponent {
  componentDidMount(){
    const { listen } = this.props;
    listen();
  }
  handelAddChat = (chatName) => {
    createChat({
      chatName
    });
  };

  handelDeleteChat = (id) => {
    const { chatRemove } = this.props;
    chatRemove({
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
    chatList: chatList.map((entry) => ({name: entry.get('chatName'), chatClass: entry.get('chatClass'), id: entry.get('_id')})).toList().toJS()
  }
}

function mapDispatchToProps(dispatch){
  return {
    createChat,
    listen: () => dispatch(listen()),
    navigate: (pathname) => dispatch(push(pathname)),
    chatRemove: (chatId) => dispatch(chatRemove(chatId))
  }
}

export const ChatListdRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);