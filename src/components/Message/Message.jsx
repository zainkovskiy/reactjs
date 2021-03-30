import './Message.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

export class Message extends Component{
  static propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  render() {
    const classes = classNames('message', {
      'message-user': this.props.author !== 'Bot',
      'message-bot': this.props.author === 'Bot',
    });
    return(
        <div className={classes}>
          <div className='message-author'>{ this.props.author }</div>
          <div className='message-text'>{ this.props.text }</div>
        </div>
    )
  }

}