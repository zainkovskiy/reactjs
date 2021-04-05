import './ChatList.css';

import React, { Component } from "react";
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export class ChatList extends Component{
  state = {
    newChat: '',
  }

  clickButton = () => {
    if (this.state.newChat === 0){
      return
    } else {
      const { addChats } = this.props;
      addChats(this.state.newChat);
      this.setState({newChat: ''});
    }
  }
  handleInputChange = (event) => {
    this.setState({
      newChat: event.target.value,
    })
  }

  render() {
    const { chatList } = this.props;
    const { newChat } = this.state;
    return(
        <div className="chatlist">
          <List component="nav" aria-label="secondary mailbox folders">
            <ListSubheader>{'Чаты'}</ListSubheader>
            { chatList.map((chat, idx) =>
                <Link to={chat.link} className="chatlist-link" key={idx}>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar/>
                    </ListItemAvatar>
                    <ListItemText primary={chat.name}/>
                  </ListItem>
                </Link>
            )}
            <div className="chatlist-add">
              <TextField className="chatlist-add-field" value={newChat} id="standard-basic" label="Создать чат" name="newChat" onChange={this.handleInputChange}/>
              <Fab color="default" size={"small"} aria-label="add" onClick={this.clickButton}>
                <AddIcon />
              </Fab>
            </div>
          </List>
        </div>
    )
  }
}