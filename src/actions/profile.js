import { createAction } from 'redux-actions';

export const login = createAction('[Login] login');
export const setLogin = createAction('[Login] setLogin');

export function loginSet(login) {
  return function (dispatch) {
    fetch(`http://localhost:3000/profile`, {
      method: "POST",
      body: JSON.stringify(login),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      dispatch(setLogin(login));
    })
  }
}

export function listenProfile(){
  return function (dispatch) {
    fetch('http://localhost:3000/profile')
        .then((response) => response.json())
        .then((profile) => {
          dispatch(login(profile));
        });
      }
}
