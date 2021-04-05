import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, send, addChat } from 'actions/chats';

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

export const chatsReducer = handleActions({
  [load]: (state, action) => {
    return state.set('entries', fromJS({
      '1': {id: 1, messages: [{text: 'Курс React', author: 'Bot'}], chatName: 'Курс React'},
      '2': {id: 2, messages: [{text: 'HP John', author: 'Bot'}], chatName: 'HP John'},
      '3': {id: 3, messages: [{text: 'Работа', author: 'Bot'}], chatName: 'Работа'},
      '4': {id: 4, messages: [{text: 'Новый год', author: 'Bot'}], chatName: 'Новый год'},
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
  }
}, initialState);