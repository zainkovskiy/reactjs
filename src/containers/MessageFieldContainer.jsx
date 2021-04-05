import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { MessageField } from 'components/MessageField';
import { load, send } from 'actions/chats'

class MessageFieldContainer extends PureComponent {
  componentDidMount() {
    const { loadChats } = this.props;
    loadChats();
  }
  handleMessageSend = (message) =>{
    const { sendMessage, chatId } = this.props;
    sendMessage({
      ...message,
      chatId
    });
  }

  render() {
    const { messages } = this.props;

    return (
        <MessageField sendMessage={this.handleMessageSend} messages={messages} />
        )
  }
}

function mapStateToProps(state, ownProps){
  const chats = state.chats.get('entries').toJS();
  const { match } = ownProps;

  let messages = null;

  if (match && chats[match.params.id]){
    messages = chats[match.params.id].messages;
  }

  return {
    messages,
    chatId: match ? match.params.id : null,
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message))
  }
}

export const MessageFieldRedux = connect(mapStateToProps, mapDispatchToProps)(MessageFieldContainer);