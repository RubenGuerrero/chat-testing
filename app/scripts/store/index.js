import { EventEmitter } from 'events';
import { Promise } from 'es6-promise'

const store = new EventEmitter();

let conversations = [
  {
    id: 1,
    name: 'Conversacion 1'
  },
  {
    id: 2,
    name: 'Conversacion 2'
  }
];

store.getConversations = () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(conversations);
    }, 500);
  });

};

export default store;
