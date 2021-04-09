import { createAction } from 'redux-actions';

export const load = createAction('[Chats] load');
export const send = createAction('[Chats] send');
export const addChat = createAction('[Chats] addChat')
export const deleteChat = createAction('[Chats] deleteChat')
export const changeClass = createAction('[Chats] change');