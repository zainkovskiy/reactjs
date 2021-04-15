import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, send, addChat, changeClass, deleteChat } from 'actions/chats';

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

export const chatsReducer = handleActions({
  [load]: (state, action) => {
    const entries = action.payload.reduce((acc, item) => {
      acc[item._id] = item;
      return acc;
    }, {});
    return state.set('entries', fromJS(entries))
  },

  [send]: (state, action) => {
    const { chatId, ...message } = action.payload;
    return state.mergeIn(['entries', chatId, 'messages'], message)
  },
  [addChat]: (state, action) => {
    const id = action.payload._id
    return state.setIn(['entries', id], fromJS(action.payload))
  },
  [deleteChat]: (state, action) => {
    return state.deleteIn(['entries', `${action.payload}`])
  },
  [changeClass]: (state, action) => {
    const { chatId, className } = action.payload;
    return state.setIn(['entries', chatId, 'chatClass'], className);
  }

}, initialState);