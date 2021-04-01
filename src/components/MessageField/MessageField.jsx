import './MessageField.css';

import React, { Component } from 'react';

import {Message} from "components/Message";
import {MessageForm} from "components/MessageForm";
import PropTypes from "prop-types";

export class MessageField extends Component{
  state = {
    chats:{
      '1': {id: 1, messages: [{text: 'chat1', author: 'Bot'}], chatName: ''},
      '2': {id: 2, messages: [{text: 'chat2', author: 'Bot'}], chatName: ''},
      '3': {id: 3, messages: [{text: 'chat3', author: 'Bot'}], chatName: ''},
      '4': {id: 4, messages: [{text: 'chat4', author: 'Bot'}], chatName: ''},
    },
  }

  static propTypes = {
    chat: PropTypes.object,
  };
  addMessage = (message) => {
    const { chats } = this.state;
    const { match } = this.props.chat;
    const chat = chats[match.params.id];
    const messages = this.messages.concat([message]);
    chat.messages = messages;

    this.setState({
      chats: {
        ...this.state.chats,
        [match.params.id]: chat,
      }
    })
  }
  get messages(){
    const { chats } = this.state;
    const { match } = this.props.chat;

    let messages = null;

    if (match && chats[match.params.id]){
      messages = chats[match.params.id].messages;
      return messages;
    }
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    if(this.messages.length){
      const previewAuthor = this.messages[this.messages.length -1].author;
      if (previewAuthor !== 'Bot'){
        setTimeout(() => {
          this.addMessage ({author: 'Bot', text: `Hello ${previewAuthor}!!!`});
        },500);
      }
      this.scrollToBottom();
    }
  }

    render() {

    const MessageElem = this.messages ? this.messages.map ((message, index) =>
          <Message key={index} author={message.author} text={message.text}/>) : 'Выберете чат';
    return(
        <div className="messanger">
          <div className="field">
            { MessageElem }
            <div style={{ float:"left", clear: "both" }}
                 ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
          {this.messages && <MessageForm onSend={this.addMessage} />}
        </div>
    )
  }
}