import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component{
  state = {
    author: '',
    text: '',
  };
  static propTypes = {
    onSend: PropTypes.func,
  }

  handleChange = () => {
    const { onSend } = this.props;

    if (typeof onSend === 'function'){
      onSend(this.state);
      this.setState({text: ''});
    }
  }
  handleInputChange = (event) =>{
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value,
    })
  }
  render() {
    const { author, text } = this.state;
    return(
        <div>
          <input name="author" onChange={this.handleInputChange} value={author} placeholder={"author"} type="text"/> <br/>
          <textarea name="text" onChange={this.handleInputChange} value={text} cols="30" rows="10"></textarea> <br/>
          <button onClick={this.handleChange}>send</button>
        </div>
    )
  }

}