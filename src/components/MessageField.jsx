import React, { Component } from 'react';
import {Message} from "components/Message";
import {MessageForm} from "components/MessageForm";

export class MessageField extends Component{
  state = {
    messages:[],
  }
  addMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, message],
    })
  }

  componentDidUpdate() {
    const previewAuthor = this.state.messages[this.state.messages.length -1].author;
    if (previewAuthor !== 'Bot'){
      setTimeout(() => this.setState({
        messages: [...this.state.messages, {author: 'Bot', text: `Hello ${previewAuthor}!!!`}]
      }),1000);
    }
  }

  render() {
    const MessageElem = this.state.messages.map ((message, index) =>
          <Message key={index} author={message.author} text={message.text}/>);
    return(
        <div>
          { MessageElem }
          <MessageForm onSend={this.addMessage} />
        </div>
    )
  }
}