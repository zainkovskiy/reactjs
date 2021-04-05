import './MessageField.css';

import React, { Component } from 'react';

import {Message} from "components/Message";
import {MessageForm} from "components/MessageForm";

export class MessageField extends Component{

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  // componentDidUpdate() {
  //   if(this.messages.length){
  //     const previewAuthor = this.messages[this.messages.length -1].author;
  //     if (previewAuthor !== 'Bot'){
  //       setTimeout(() => {
  //         this.addMessage ({author: 'Bot', text: `Hello ${previewAuthor}!!!`});
  //       },500);
  //     }
  //     this.scrollToBottom();
  //   }
  // }

    render() {
    const { messages, sendMessage } = this.props;
    const MessageElem = messages ? messages.map ((message, index) =>
          <Message key={index} author={message.author} text={message.text}/>) : 'Выберете чат';
    return(
        <div className="messanger">
          <div className="field">
            { MessageElem }
            <div style={{ float:"left", clear: "both" }}
                 ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
          {messages && <MessageForm onSend={sendMessage} />}
        </div>
    )
  }
}