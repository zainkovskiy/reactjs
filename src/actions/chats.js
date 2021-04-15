import { createAction } from 'redux-actions';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const load = createAction('[Chats] load');
export const send = createAction('[Chats] send');
export const addChat = createAction('[Chats] addChat')
export const deleteChat = createAction('[Chats] deleteChat')
export const changeClass = createAction('[Chats] change');

export function listen(){
  return function (dispatch) {
    fetch('http://localhost:3000/chats')
      .then((response) => response.json())
        .then((chats) => {
          dispatch(load(chats));
        });

    socket.on('new chat', (chat) => {
      dispatch(addChat(chat));
    });

    socket.on('chat message', (message) => {
      dispatch(send(message));
    });

  }
}

export function createChat(chat) {
  socket.emit('new chat', chat);
}

export function messageSend(message) {
  socket.emit('chat message', message);
}

export function chatRemove(id) {
  const chatId = id.id;
  return function (dispatch) {
    fetch(`http://localhost:3000/chats/${chatId}`, {
      method: "DELETE",
    }).then(() => {
        dispatch(deleteChat(chatId));
    })
  }
}