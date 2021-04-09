import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, send, addChat, changeClass, deleteChat } from 'actions/chats';

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

export const chatsReducer = handleActions({
  [load]: (state, action) => {
    return state.set('entries', fromJS({
      '1': {id: 1, messages: [{text: 'Курс React', author: 'Bot'}], chatName: 'Курс React', chatClass: true},
      '2': {id: 2, messages: [{text: 'HP John', author: 'Bot'}], chatName: 'HP John', chatClass: true},
      '3': {id: 3, messages: [{text: 'Работа', author: 'Bot'}], chatName: 'Работа', chatClass: true},
      '4': {id: 4, messages: [{text: 'Новый год', author: 'Bot'}], chatName: 'Новый год', chatClass: true},
      })
    )
  },
  [send]: (state, action) => {
    const { chatId, ...message } = action.payload;
    return state.mergeIn(['entries', chatId, 'messages'], message)
  },
  [addChat]: (state, action) => {
    const { newChat } = action.payload;
    return state.mergeIn(['entries'], fromJS(newChat))
  },
  [deleteChat]: (state, action) => {
    const chatId = action.payload.id;
    return state.deleteIn(['entries', `${chatId}`])
  },
  [changeClass]: (state, action) => {
    const { chatId, className } = action.payload;
    return state.setIn(['entries', chatId, 'chatClass'], className);
  }

}, initialState);