import './Profile.css';

import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import DoneIcon from '@material-ui/icons/Done';
import { Link } from "react-router-dom";


export class Profile extends Component{
  state = {
    login: '',
  }

  clickButton = () => {
    if (this.state.login === 0){
      return
    } else {
      const { setLogin } = this.props;
      setLogin(this.state.login);
      this.setState({login: ''});
    }
  }
  handleInputChange = (event) => {
    this.setState({
      login: event.target.value,
    })
  }
  render() {
    const { login } = this.state;
    const { loginName } = this.props;
    return(
        <div className='profile'>
          <Link className='profile-link' to={'/'}>На главную</Link>
          <div className='profile-form'>
            <TextField onChange={this.handleInputChange} value={login} name="login" id="standard-basic" label="login"/>
            <Fab color="default" size={"small"} onClick={this.clickButton}>
              <DoneIcon />
            </Fab>
          </div>
          <p>Current login:  { loginName } </p>
        </div>
    )
  }
}

