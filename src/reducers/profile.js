import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { login, setLogin } from 'actions/profile';

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

export const profileReducer = handleActions({
    [login]: (state, action) => {
      return state.set('entries', fromJS(action.payload))
    },

    [setLogin]: (state, action) => {
      return state.set('entries', fromJS(action.payload)
          )
    }
}, initialState);