import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Message extends Component{
  static propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  render() {
    return(
        <div>
          { this.props.author }: { this.props.text }
        </div>
    )
  }

}