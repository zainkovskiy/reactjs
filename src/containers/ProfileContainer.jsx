import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { Profile } from 'components/Profile';
import { setLogin } from 'actions/profile';

class ProfileContainer extends PureComponent{
  handelSetLogin = (login) => {
    const { addLogin } = this.props;
    const newLogin = login;
    addLogin({
      newLogin
    })
  }

  render() {
    return (
        <Profile setLogin={this.handelSetLogin}/>
    );
  }
}
function mapStateToProps(state, ownProps){
  return{
  }
}

function mapDispatchToProps(dispatch){
  return {
    addLogin: (login) => dispatch(setLogin(login)),
  }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);