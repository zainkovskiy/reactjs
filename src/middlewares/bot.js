import { send, changeClass } from 'actions/chats';

export function bot(store) {
  return function (next){
    return function (action){
      if (action.type === send.toString()){
        const { chatId, author} = action.payload;
        if (author !== 'Bot'){
          setTimeout(() => {
            store.dispatch(send({chatId, author: 'Bot', text: `Hello ${author}!!!`}))
            store.dispatch(changeClass({chatId, className: false}));
          }, 1000);
        }
        setTimeout(()=> {
          store.dispatch(changeClass({chatId, className: true}));
        }, 4000);
      }

      return next(action);
    }
  }
}