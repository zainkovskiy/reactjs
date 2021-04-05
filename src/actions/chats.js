import { createAction } from 'redux-actions';

export const load = createAction('[Chats] load');
export const send = createAction('[Chats] send');
export const addChat = createAction('[Chats] addChat')