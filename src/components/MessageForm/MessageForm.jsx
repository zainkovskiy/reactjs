import './MessageForm.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';

export class MessageForm extends Component{
  state = {
    author: '',
    text: '',
  };
  static propTypes = {
    onSend: PropTypes.func,
  }

  handleChange = () => {
    if (this.state.text.length === 0){
      return
    }else {
      const { onSend } = this.props;
      if (typeof onSend === 'function'){
        onSend(this.state);
        this.setState({text: ''});
      }
    }
  }
  handleInputChange = (event) =>{
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value,
    })
  }
  handelKey = (event) =>{
    if (event.ctrlKey && event.keyCode === 13){
      this.handleChange()
    }
  }
  render() {
    const { author, text } = this.state;
    return(
        <div className="message-form">
          <TextField className="form-author border" variant="outlined" label="Author" name="author" onChange={this.handleInputChange} value={author}/>
          <TextField multiline className="form-text border" variant="outlined" label="Text" onKeyDown={this.handelKey} name="text" onChange={this.handleInputChange} value={text}/>
          {text.length > 0 &&
          <Button className="send-btn" variant="contained" color="primary" onClick={this.handleChange}><Send/></Button>
          }
        </div>
    )
  }

}