import './ChatList.css';

import React, { Component } from "react";
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
            <ListItem button>
              <ListItemAvatar>
                <Avatar/>
              </ListItemAvatar>
              <ListItemText primary="Курс React"/>
            </ListItem>
            <Divider/>
            <ListItem button>
              <ListItemAvatar>
                <Avatar/>
              </ListItemAvatar>
              <ListItemText primary="HP John"/>
            </ListItem>
            <Divider/>
            <ListItem button>
              <ListItemAvatar>
                <Avatar/>
              </ListItemAvatar>
              <ListItemText primary="Работа"/>
            </ListItem>
            <Divider/>
            <ListItem button>
              <ListItemAvatar>
                <Avatar/>
              </ListItemAvatar>
              <ListItemText primary="Новый год"/>
            </ListItem>
            <Divider/>
          </List>
        </div>
    )
  }
}