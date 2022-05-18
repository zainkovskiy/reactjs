import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { Profile } from 'components/Profile';
import { loginSet, listenProfile } from 'actions/profile';

class ProfileContainer extends PureComponent{
  componentDidMount(){
    const { listenProfile } = this.props;
    listenProfile();
  }

  handelSetLogin = (login) => {
    const { loginSet } = this.props;
    loginSet({
      login
    })
  }

  render() {
    const { loginName } = this.props;
    return (
        <Profile loginName={loginName} setLogin={this.handelSetLogin}/>
    );
  }
}
function mapStateToProps(state, ownProps){
  const login = state.profile.get('entries');
  let loginName = null;
  if (login === null) {
    loginName = "unknown user";
  } else {
    loginName = login.get('login');
  }
  return{
    loginName
  }
}

function mapDispatchToProps(dispatch){
  return {
    loginSet: (login) => dispatch(loginSet(login)),
    listenProfile: () => dispatch(listenProfile())
  }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);