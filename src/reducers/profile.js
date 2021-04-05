import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { login, setLogin } from 'actions/profile';

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

export const profileReducer = handleActions({
    [login]: (state, action) => {
      return state.set('entries', fromJS({
            '1': {login: "John"},
          })
      )
    },
    [setLogin]: (state, action) => {
      const login = action.payload.newLogin;
      return state.set('entries', fromJS({
                '1': {login: login},
              })
          )
    }
}, initialState);