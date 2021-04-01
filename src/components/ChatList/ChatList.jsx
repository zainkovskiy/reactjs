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

export class ChatList extends Component{
  render() {
    return(
        <div className="chatlist">
          <List component="nav" aria-label="secondary mailbox folders">
            <ListSubheader>{'Чаты'}</ListSubheader>
              <Link to="/chats/1" className="chatlist-link">
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar/>
                  </ListItemAvatar>
                  <ListItemText primary="Курс React"/>
                </ListItem>
              </Link>
              <Divider/>
              <Link to="/chats/2" className="chatlist-link">
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar/>
                  </ListItemAvatar>
                  <ListItemText primary="HP John"/>
                </ListItem>
              </Link>
              <Divider/>
              <Link to="/chats/3" className="chatlist-link">
              <ListItem button>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary="Работа"/>
              </ListItem>
              </Link>
            <Divider/>
              <Link to="/chats/4" className="chatlist-link">
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar/>
                  </ListItemAvatar>
                  <ListItemText primary="Новый год"/>
                </ListItem>
              </Link>
            <Divider/>
          </List>
        </div>
    )
  }
}